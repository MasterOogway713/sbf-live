import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: The sitemap needs to know your website's base URL
  site: 'https://www.sbfloristry.co.uk', 
  integrations: [
    tailwind(),
    sitemap()
  ]
});
