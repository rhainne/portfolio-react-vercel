import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",    // simulates browser DOM
    globals: true,           // no need to import describe/it/expect
    setupFiles: "./src/test/setup.js",
  },
});