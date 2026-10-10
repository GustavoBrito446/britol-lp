// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serve o site em /britol-lp/, por isso o "base".
// React só para as "ilhas" interativas (botões e carrossel do React Bits).
// Tailwind só para o hero (sem o reset global, para não mexer no CSS das outras seções).
export default defineConfig({
  site: 'https://gustavobrito446.github.io',
  base: '/britol-lp',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
