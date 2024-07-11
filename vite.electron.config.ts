import { defineConfig } from 'vite'
import * as path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'
import Linker from 'vite-plugin-linker'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'electron'],
      input: path.join(__dirname, 'src/electron/*.ts'),
      output: {
        entryFileNames: '[name].js',
        format: 'commonjs'
      }
    },
    outDir: 'out/electron',
    emptyOutDir: true
  },
  plugins: [
    commonjs(),
    multiInput({ transformOutputPath: (output) => path.basename(output) }),
    Linker({ exec: 'echo "hello"' })
  ]
})
