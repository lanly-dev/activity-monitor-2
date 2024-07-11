import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const bPath = `/${path.join(__dirname, 'out', 'vite')}/`
  const base = mode === 'production' ? bPath : undefined
  return {
    root: path.join(__dirname, 'src/vite'),
    base,
    build: {
      outDir: '../../out/vite',
      emptyOutDir: true
    },
    plugins: [
      vue(),
      vuetify({
        autoImport: true,
        styles: true
      })
    ]
  }
})
