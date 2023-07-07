import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
//  base: '/',
export default defineConfig({
  base: '/maof-front/',
  plugins: [vue()]
})
