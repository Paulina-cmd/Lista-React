import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Lista-React/",   // 👈 nombre EXACTO de tu repositorio
  plugins: [react()],
})
