// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
  },

  adapter: netlify(),
  integrations: [preact({ devtools: true })]
});
