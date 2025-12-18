import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/", // 👈 MUST be "/" for teachwithoussama.github.io
});
