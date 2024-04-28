import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/VizeProEvropu/',
  build: {
    outDir: 'build',
    target: 'esnext',
  },
  resolve: {
    alias: {
      app: '/src/app',
    },
  },
});
