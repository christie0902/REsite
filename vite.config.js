import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
    const { APP_URL } = loadEnv(mode, process.cwd(), "");

    return defineConfig({
        base: mode === 'production' ? '/build/' : '/',
        plugins: [
            laravel({
                input: [
                    "resources/css/index.css",
                    "resources/js/RE-app/main.jsx",
                ],
                refresh: true,
            }),
            {
                // fixes URLs that start with / in CSS files
                name: "css-static-url-fixer",
                enforce: "post",
                apply: "serve",
                transform: (code, file) => {
                    if (mode === "development" && file.match(/\.s?css($|\?)/)) {
                        return {
                            code: code.replaceAll(
                                /url\(([\'\"]?)(\/[^\)\'\"]+)\1\)/g,
                                `url($1${APP_URL}$2$1)`,
                            ),
                        };
                    }
                },
            },
            react(),
        ],
        build: {
            outDir: "public/build",
        },
        //optimizeDeps: {
        //    include: [], // Ensure to include any dependencies your app needs
        //    exclude: ['@vite/client'], // Exclude @vite/client from being optimized
        //},
        //exclude: ['public/**/*'], // Exclude public directory from Vite processing
        //server: {
        //    host:'0.0.0.0',
        //    port:5173
        //},
    });
};