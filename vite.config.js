import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Maintain existing SCSS configuration
      }
    }
  }
})
