import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Disable hashing only for images in a specific folder
          const projectsPath = "src/assets/images/projects/";
          const projectsNewBase = "assets/images/projects/";
          const projectsSliderPath = "src/assets/images/projects-slider/";
          const projectsSliderNewBase = "assets/images/projects-slider/";

          if (assetInfo.originalFileName?.includes(projectsPath)) {
            const fileName = assetInfo.originalFileName.split(projectsPath)[1];
            return `${projectsNewBase}${fileName}`;
          } else if (assetInfo.originalFileName?.includes(projectsSliderPath)) {
            const fileName =
              assetInfo.originalFileName.split(projectsSliderPath)[1];
            return `${projectsSliderNewBase}${fileName}`;
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
