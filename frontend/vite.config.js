import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: [
      'localhost',
      '.preview.emergentagent.com',
      '4ee69003-48df-4cb0-805c-b5ee9ada3881.preview.emergentagent.com'
    ],
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    }
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  }
}) 