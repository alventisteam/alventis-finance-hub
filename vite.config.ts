import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from 'vite-plugin-compression';

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
    mode === 'production' && compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    mode === 'production' && compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Performance optimizations for faster LCP
  build: {
    cssCodeSplit: false, // Inline CSS to reduce render blocking
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching and smaller initial bundles
        manualChunks: (id) => {
          // Vendor chunk for all node_modules except React ecosystem
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
          // Separate chunk for non-critical components
          if (id.includes('/components/') && 
              (id.includes('Testimonials') || id.includes('About') || id.includes('FAQ'))) {
            return 'non-critical';
          }
        },
        // Optimize asset names for better caching
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'unknown';
          const info = name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize build for production
    minify: mode === 'production' ? 'esbuild' : false,
    target: 'es2020',
    // Drop console/debugger statements in production and remove unused code
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
      treeShaking: true,
      // Optimize JSX for smaller bundles
      jsxDev: false,
    },
    // Optimize CSS extraction and minification
    cssMinify: mode === 'production',
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.avif'],
  // Optimize dependencies - ensure React/ReactDOM are properly bundled
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
    force: true, // Force re-optimization to fix bundling issues
  },
}));
