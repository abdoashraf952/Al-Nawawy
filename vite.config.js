import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://<user>.github.io/Al-Nawawy/
// Change to '/' for a custom domain, a user site, or Vercel/Netlify.
export default defineConfig({
  base: '/Al-Nawawy/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['motion'],
        },
      },
    },
  },
});
