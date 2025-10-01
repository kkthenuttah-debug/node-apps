import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/node-apps-oac4ognr6-simple-todo-app99/',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
})