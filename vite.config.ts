import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '#': '/types'
    }
  },
  server: {
    open: true
  },
  // 去除console和debugger
  esbuild: {
    pure: ["console.log", "debugger"]
  },
})
