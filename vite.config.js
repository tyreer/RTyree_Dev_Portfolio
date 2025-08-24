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
        // Suppress @import deprecation warnings - legacy SCSS syntax still works
        // TODO: Migrate to @use syntax - see https://sass-lang.com/documentation/at-rules/use/
        quietDeps: true,
        silenceDeprecations: ['import']
      }
    }
  }
})
