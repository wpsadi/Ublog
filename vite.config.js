import react from "@vitejs/plugin-react";
import path from "path";
import process from "process";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables from .env files
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    define: {
      // Make sure to stringify the values
      'process.env': {
        ...Object.keys(env).reduce((prev, next) => {
          prev[next] = JSON.stringify(env[next]);
          return prev;
        }, {})
      }
    }
  };
});
