import { defineConfig } from 'vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [
        presetUno(), 
        presetAttributify(), 
        presetIcons()
      ]
    })
  ],
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
