import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      config: `${path.resolve(__dirname, "./src/config/")}`,
      features: `${path.resolve(__dirname, "./src/features/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      lib: `${path.resolve(__dirname, "./src/lib/")}`,
      providers: `${path.resolve(__dirname, "./src/providers/")}`,
      routes: `${path.resolve(__dirname, "./src/routes/")}`,
      stores: `${path.resolve(__dirname, "./src/stores/")}`,
      test: `${path.resolve(__dirname, "./src/test/")}`,
      types: `${path.resolve(__dirname, "./src/types/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
});
