import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host :"localhost"
  },
  define:{
    'process.env': process.env
  }
})
