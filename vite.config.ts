import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'https://quantillium.softigital.com',
        changeOrigin: true,
      },
    }
  },
  plugins: [react(), tailwindcss(), Checker({ typescript: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
