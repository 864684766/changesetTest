import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { fileURLToPath } from 'url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import myPlugin from './src/plugins/visualModule'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(),vueJsx(),myPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server:{
    port:8074
  }
})