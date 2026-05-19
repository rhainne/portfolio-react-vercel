import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = loadEnv(process.env.NODE_ENV, process.cwd());

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",    // simulates browser DOM
    globals: true,           // no need to import describe/it/expect
    setupFiles: "./src/test-config/setup.js",
    exclude: ["**/node_modules/**", "**/tests/**"],
  },
  server: {
    // allowedHosts: process.env.VITE_ALLOWED_HOSTS,
    allowedHosts: env.VITE_ALLOWED_HOSTS ? [env.VITE_ALLOWED_HOSTS] : [],
  }
});