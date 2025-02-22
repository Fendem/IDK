// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import clerk from '@clerk/astro'
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { dark, neobrutalism } from '@clerk/themes'

export default defineConfig({
  integrations: [react(), clerk({
    appearance: {
      signIn: { },
    },
  }), tailwind()],
  output: "server",
  adapter: vercel(),
});