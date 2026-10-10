// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// GitHub Pages serve o site em /britol-lp/, por isso o "base".
// React só para as "ilhas" interativas (botões e carrossel do React Bits).
export default defineConfig({
  site: 'https://gustavobrito446.github.io',
  base: '/britol-lp',
  integrations: [react()],
});
