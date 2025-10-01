import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/node-apps-6yxhfjtg1-simple-todo-app09/',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
})