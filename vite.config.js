import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://<user>.github.io/<repo>/
// In CI, BASE_PATH comes from actions/configure-pages, so it always matches the real repo
// name (or is empty for a custom domain). Locally it falls back to '/Al-Nawawy/'.
const basePath = process.env.BASE_PATH ?? '/Al-Nawawy';

export default defineConfig({
  base: `${basePath.replace(/\/$/, '')}/`,
  plugins: [react(), tailwindcss()],
  // Lets the dev server answer through an ngrok tunnel (Vite rejects unknown Host headers).
  server: {
    allowedHosts: ['.ngrok-free.dev'],
  },
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
