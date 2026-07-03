import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/stitch-demo/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3010,
    allowedHosts: ["nafis-server.tail634f34.ts.net"],
    hmr: {
      path: "/stitch-demo/",
    }
  },
})
