// @ts-check
import { fileURLToPath, URL } from "node:url"

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    }
  },

  prefetch: {
    prefetchAll: true,
  },

  adapter: netlify(),
  integrations: [preact({ devtools: true })]
});
