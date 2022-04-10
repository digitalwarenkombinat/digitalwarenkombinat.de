import preact from '@astrojs/preact';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	integrations: [
    preact(),
  ],
  site: 'https://digitalwarenkombinat.github.io/digitalwarenkombinat.de/',
  base: '/digitalwarenkombinat.de'
});
