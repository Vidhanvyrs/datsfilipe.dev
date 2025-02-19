import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://datsfilipe.dev',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [mdx({
    extendMarkdownConfig: true
  }), sitemap(), react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'min-dark',
      wrap: true
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor']
      }
    }]],
    gfm: true
  },
});