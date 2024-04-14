import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
// @ts-ignore
// import routeTreeFormatPlugin from './vitePlugin/routeTreeFormatPlugin';
// @ts-ignore
import timestampPlugin from './vitePlugin/timestampPlugin';

export default defineConfig(() => ({
  build: { outDir: './dist' },
  server: {
    strictPort: true,
    port: 3000,
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  plugins: [
    react(),
    TanStackRouterVite(),
    // routeTreeFormatPlugin('./src/routeTree.gen.ts'),
    timestampPlugin(),
  ],
  define: {
    global: 'window',
  },
}));
