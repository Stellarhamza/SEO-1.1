#!/usr/bin/env node
/**
 * Syncs locale 301s for cannibal pageIds → pillar pageIds into public/_redirects
 * and functions/cannibal-redirects.json (used by Workers middleware).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/cannibal-redirects.json');

const TARGETS = {
	'best-cheats': 'hacks',
	'aimbot-hack': 'tarkov-aimbot',
	'esp-hack': 'tarkov-esp',
};

function extractSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) throw new Error(`Missing localizedSlugs block for ${pageId}`);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']+)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

const routing = readFileSync(ROUTING, 'utf8');
const map = {};
const lines = [
	'',
	'# Auto-generated cannibal locale redirects (scripts/sync-cannibal-redirects.mjs)',
	'# Do not edit by hand — regenerated on sync:brand / prebuild',
];

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromSlugs = extractSlugBlock(routing, fromId);
	const toSlugs = extractSlugBlock(routing, toId);
	for (const [locale, fromSlug] of Object.entries(fromSlugs)) {
		if (locale === 'en') continue;
		const toSlug = toSlugs[locale];
		if (!toSlug) continue;
		const fromPath = `/${locale}/${fromSlug}/`;
		const toPath = `/${locale}/${toSlug}/`;
		map[fromPath] = toPath;
		map[`/${locale}/${fromSlug}`] = toPath;
		lines.push(`${fromPath.slice(0, -1)} ${toPath} 301`);
		lines.push(`${fromPath} ${toPath} 301`);
	}
}

const markerStart = '# Auto-generated cannibal locale redirects';
let redirects = readFileSync(REDIRECTS, 'utf8');
const start = redirects.indexOf(markerStart);
if (start >= 0) {
	const lineStart = redirects.lastIndexOf('\n', start);
	redirects = redirects.slice(0, lineStart >= 0 ? lineStart : start).trimEnd() + '\n';
}

redirects = `${redirects.trimEnd()}\n${lines.join('\n')}\n`;
writeFileSync(REDIRECTS, redirects);
writeFileSync(JSON_OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Synced ${Object.keys(map).length / 2} cannibal locale redirect pairs`);
