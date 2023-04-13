import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/components/entry.jsx"),
      // the proper extensions will be added
      fileName: "main",
      formats: ["cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["react", "react-dom"],
      output: {
        exports: "named",
      },
    },
  },
  define:
    mode === "production" ? { "process.env.NODE_ENV": '"production"' } : {},
  plugins: [
    react(),
    eslint({ lintOnStart: true, emitError: true, emitWarning: true }),
  ],
  server: { open: true },
}));
