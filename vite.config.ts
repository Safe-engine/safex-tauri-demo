import { defineConfig } from "vite";
import { safexTransform } from "vite-plugin-safex-transform";

export default defineConfig({
  publicDir: 'res',
  plugins: [safexTransform()],
});
