// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: 'static',
  site: 'https://JotasBedoya.github.io',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});