import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // make sure this is correct
    },
  }
})
