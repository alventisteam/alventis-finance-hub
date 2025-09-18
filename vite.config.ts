import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Performance optimizations for faster LCP
  build: {
    cssCodeSplit: true,
    // Optimize build for production
    minify: mode === 'production' ? 'esbuild' : false,
    target: 'es2020',
    // Drop console/debugger statements in production and remove unused code
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
      treeShaking: true,
    },
    // Optimize CSS extraction
    cssMinify: mode === 'production',
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.avif'],
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
    exclude: ['@radix-ui/react-*'], // Bundle separately for better caching
  },
  // SSR configuration
  ssr: {
    noExternal: ['react', 'react-dom', '@radix-ui/react-*'], // Ensure React and Radix UI components are available during SSR
    external: ['fs', 'path', 'url'],
  },
}));
