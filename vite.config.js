import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  loader: { ".js": "jsx" },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/remote/entry.jsx"),
      // the proper extensions will be added
      fileName: "wrapper",
      formats: ["cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [
        "react",
        "react-dom",
        "@paciolan/remote-component",
        "bootstrap",
      ],
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
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: ["styled-jsx/babel"],
      },
    }),
  ],
  server: { open: true },
}));
