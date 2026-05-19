import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sbfloristry.co.uk', 
  
  // Hybrid rendering compiles the site statically, but lets our GoCardless routes run SSR
  output: 'hybrid',
  adapter: cloudflare(),

  integrations: [
    tailwind(),
    sitemap()
  ],
  image: {
    domains: ['cdn.shopify.com'],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
