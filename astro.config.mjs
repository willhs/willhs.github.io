import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://willhs.me',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
