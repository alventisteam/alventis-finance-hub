import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@radix-ui")) return "ui-vendor";
            return "vendor";
          }
        },
      },
    },
    // Use esbuild minifier (default, faster and no additional dependencies)
    minify: mode === 'production' ? 'esbuild' : false,
    // Drop console/debugger statements in production
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.avif'],
}));
