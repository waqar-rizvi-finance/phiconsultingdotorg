import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/phi-react-website/',
  build: {
    assetsDir: 'assets',
  },
  define: {
    global: 'window', // Shim 'global' to 'window'
  },
});