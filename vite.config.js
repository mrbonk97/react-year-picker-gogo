import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        //Specifies that the output of the build will be a library.
        lib: {
            //Defines the entry point for the library build. It resolves
            //to src/index.ts,indicating that the library starts from this file.
            entry: resolve(__dirname, "src/index.ts"),
            name: "react-year-picker-gogo",
            //A function that generates the output file
            //name for different formats during the build
            fileName: function (format) { return "index.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        //Generates sourcemaps for the built files,
        //aiding in debugging.
        sourcemap: true,
        //Clears the output directory before building.
        emptyOutDir: true,
    },
    //react() enables React support.
    //dts() generates TypeScript declaration files (*.d.ts)
    //during the build.
    plugins: [react(), dts()],
});