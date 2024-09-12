import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'doc'
  },
  server: {
    host: '0.0.0.0',
    port: 8081
  },
  define: {
  	'process.env': {
      BASE_URL: '/'
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
