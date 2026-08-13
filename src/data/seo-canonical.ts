import type { PageId } from './i18n/routing';

/**
 * EN URLs that 301 to a stronger pillar.
 * Locale URLs for these pageIds must also redirect to the matching pillar
 * so hreflang never points at a 301.
 */
export const cannibalRedirectTargets = {
	'best-cheats': 'hacks',
	'aimbot-hack': 'tarkov-aimbot',
	'esp-hack': 'tarkov-esp',
} as const satisfies Partial<Record<PageId, PageId>>;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export const sitemapExcludedPageIds = new Set<PageId>(cannibalPageIds);

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTarget(pageId: PageId): PageId {
	return (cannibalRedirectTargets as Partial<Record<PageId, PageId>>)[pageId] ?? pageId;
}
