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
            // Split React and React DOM into separate chunk
            if (id.includes("react") || id.includes("react-dom")) return "react-vendor";
            if (id.includes("@radix-ui")) return "ui-vendor";
            if (id.includes("lucide-react")) return "icons-vendor";
            if (id.includes("@tanstack/react-query")) return "query-vendor";
            return "vendor";
          }
          // Split translation files
          if (id.includes("translations/")) {
            return "translations";
          }
          // Split lazy components
          if (id.includes("Services") || id.includes("About") || id.includes("Testimonials") || id.includes("FAQ") || id.includes("Contact")) {
            return "lazy-components";
          }
        },
        // Optimize chunk names for caching
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === "react-vendor") return "assets/react-[hash].js";
          if (chunkInfo.name === "ui-vendor") return "assets/ui-[hash].js";
          if (chunkInfo.name === "icons-vendor") return "assets/icons-[hash].js";
          if (chunkInfo.name === "query-vendor") return "assets/query-[hash].js";
          if (chunkInfo.name === "translations") return "assets/translations-[hash].js";
          if (chunkInfo.name === "lazy-components") return "assets/components-[hash].js";
          return "assets/[name]-[hash].js";
        },
      },
    },
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
    include: ['react', 'react-dom'],
    exclude: ['@radix-ui/react-*'], // Bundle separately for better caching
  },
}));
