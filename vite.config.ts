import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { fileURLToPath } from 'url'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})