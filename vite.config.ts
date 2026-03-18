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
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React runtime (react + react-dom + scheduler) - always needed, keep together
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }
          // React Router - needed by app shell
          if (id.includes("node_modules/react-router")) {
            return "vendor-router";
          }
          // Swiper is heavy and only used on Index page (TestimonialsSection)
          if (id.includes("node_modules/swiper")) {
            return "vendor-swiper";
          }
          // Radix UI primitives - used across pages in components
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
          // Sonner/next-themes - lazy loaded toasters
          if (id.includes("node_modules/sonner") || id.includes("node_modules/next-themes")) {
            return "vendor-sonner";
          }
          // react-query - currently unused but kept as dependency
          if (id.includes("node_modules/@tanstack")) {
            return "vendor-tanstack";
          }
        },
      },
    },
  },
}));
