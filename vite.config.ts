import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// هذا الملف يضبط Vite بحيث يكون root = client ويخرج build في dist في جذر المشروع
export default defineConfig({
  plugins: [
    react(),
    // لو كنت تحتاج بلجنات Replit فقط للتطوير هناك، يمكنك إضافتها هنا بشرط ألا تسبب مشاكل:
    // runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    // Vercel يتوقع مجلد dist في جذر المشروع
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
