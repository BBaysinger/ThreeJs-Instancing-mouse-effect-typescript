import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [glslify(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": "/src", // Set up an alias
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  build: {
    outDir: "./dist", // The output directory
    emptyOutDir: true, // Clears the output directory before each build
    rollupOptions: {
      input: {
        main: "/index.html",
      },
    },
    target: "es2020",
  },
  publicDir: "/public", // Keep `public/` as the static folder
  server: {
    host: true, // Ensures it binds to all network interfaces
    port: 5173, // Specify the port explicitly
  },
});
