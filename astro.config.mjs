import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://picoscience.github.io',
  integrations: [tailwind()],
})