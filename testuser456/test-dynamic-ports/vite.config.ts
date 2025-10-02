import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/node-apps-testuser456-test-dynamic-ports/',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
})