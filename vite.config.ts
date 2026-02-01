import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Conditionally import Manus plugins for dev environment
let manusPlugins: any[] = [];
if (process.env.NODE_ENV !== 'production') {
  try {
    const { default: jsxLoc } = await import('@builder.io/vite-plugin-jsx-loc');
    const { default: manusRuntime } = await import('vite-plugin-manus-runtime');
    manusPlugins = [jsxLoc(), manusRuntime()];
  } catch (e) {
    // Plugins not available, skip
  }
}

export default defineConfig({
  base: '/henrys-fine-jewelry',
  plugins: [react(), tailwindcss(), ...manusPlugins],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
  },
});
