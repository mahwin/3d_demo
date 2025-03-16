import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/3d_demo/", // 기본 경로 유지
  build: {
    outDir: "dist", // 빌드 출력 폴더 유지
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "/index.html"), // 메인 페이지
        page2: path.resolve(__dirname, "/index2.html"), // 추가 페이지
      },
    },
  },
});
