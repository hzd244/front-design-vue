import { defineConfig } from "vite";
import createVuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { join } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": join(process.cwd(), "./src"),
      "@front-design/ui": join(process.cwd(), "../packages/front-design-ui"),
    },
  },
  plugins: [
    createVuePlugin({
      include: [/\.(vue|md)$/],
      script: {
        defineModel: true,
      },
    }),
    vueJsx(),
    Components({
      dirs: [
        "./src/components",
        "./src/views",
        "@front-design/ui/src/components",
      ],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData:
          '@import (reference) "@front-design/ui/src/components/styles/index.less";',
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["env.d.ts"],
    },
  },
  base: "./",
});
