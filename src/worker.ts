/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://besttarkovcheats.com (matches brand.url)
 */
export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'besttarkovcheats.com';

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		let redirect = false;

		if (url.protocol === 'http:') {
			url.protocol = 'https:';
			redirect = true;
		}

		if (url.hostname === `www.${CANONICAL_HOST}`) {
			url.hostname = CANONICAL_HOST;
			redirect = true;
		}

		if (redirect) {
			return Response.redirect(url.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
