// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import react from '@astrojs/react'
import clerk from '@clerk/astro'
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), clerk(), tailwind({
    applyBaseStyles: false,
  })],
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
});