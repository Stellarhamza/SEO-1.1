/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Tarkov Cheats',
	/** Short product label if needed */
	shortName: 'Tarkov',
	/** Canonical origin — no trailing slash */
	url: 'https://besttarkovcheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@besttarkovcheats.com',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov',

	/** Game this template instance targets */
	game: 'Escape from Tarkov',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'tarkov cheats logo',
	defaultOgImage: '/images/tarkov-cheats-hero-full.png',
	heroImage: '/images/tarkov-cheats-hero-full.png',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'tarkov cheats',
		list: [
			'tarkov cheats',
			'escape from tarkov cheats',
			'tarkov esp',
			'tarkov aimbot',
			'tarkov wallhack',
			'tarkov hacks',
			'undetected tarkov cheats',
			'best tarkov cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Tarkov Cheats | Undetected EFT ESP & Aimbot',
		homeDescription:
			'Buy undetected Escape from Tarkov cheats for Windows PC. ESP, soft aim, and BattlEye updates in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, aimbot, Cheats, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live status for {brand} after {game} or {antiCheat} patches. Check before you raid.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription: 'Quick preview of {brand} — ESP, aimbot, extraction tracking, and updates after {game} patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Real buyer reviews for {brand} — ESP, soft aim, extraction tracking, and patch updates on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — raid tips, ESP, aimbot, and {antiCheat} updates.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and Hacks or PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and extraction tracking, with {antiCheat} maintenance after patches.',
		heroLede: 'Cheats available — ESP, Aimbot & ESP for Escape from Tarkov.',
		blogLabel: 'Tarkov Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you raid.',
		previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aimbot',
		chipRadar: '2D ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-11',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'tarkov cheats esp',
				caption: 'tarkov cheats esp',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'tarkov cheats wallhack',
				caption: 'tarkov cheats wallhack',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'tarkov cheats aimbot',
				caption: 'tarkov cheats aimbot',
			},
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'tarkov cheats',
				caption: 'tarkov cheats esp',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'tarkov cheats',
				caption: 'tarkov cheats wallhack',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'tarkov cheats',
				caption: 'tarkov cheats aimbot',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
