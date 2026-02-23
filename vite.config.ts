import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        strictPort: false,
        origin: 'https://3000-i9779zy4crbk9vr49n0ci-a402f90a.sandbox.novita.ai',
        hmr: {
          clientPort: 3000,
          protocol: 'wss',
          host: '3000-i9779zy4crbk9vr49n0ci-a402f90a.sandbox.novita.ai'
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
