import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  // app.js uses global functions called from onclick attributes,
  // so we keep it as a plain script (not module)
  publicDir: false,
});
