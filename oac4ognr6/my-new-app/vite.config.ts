import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/node-apps-oac4ognr6-my-new-app/',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
})