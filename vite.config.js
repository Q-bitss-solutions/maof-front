import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
  ? process.env.VITE_PREFIX_URL || '/'
  : '/',
  plugins: [vue()]
})
