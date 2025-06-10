import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDevelopment = command === 'serve';
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: isDevelopment ? {
      proxy: {
        '/api': {
          target: 'https://gatistwam-backend.onrender.com',
          changeOrigin: true,
          secure: false,
        }
      }
    } : undefined,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    base: '/',
    define: {
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
      'process.env.VITE_API_BASE_URL': JSON.stringify(
        isDevelopment ? 'http://localhost:3000' : 'https://gatistwam-backend.onrender.com'
      ),
      'process.env.VITE_SITE_URL': JSON.stringify(
        isDevelopment ? 'http://localhost:5173' : 'https://gatistwamgroup.com'
      ),
    },
  };
});
