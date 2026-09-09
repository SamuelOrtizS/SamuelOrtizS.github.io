import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pages from 'astro-pages';

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    pages()
  ],
  // GitHub Pages deploy configuration
  site: 'https://samuelortiz.github.io',
  build: {
    prerender: {
      enable: true,
      crawlFramework: true
    }
  }
});