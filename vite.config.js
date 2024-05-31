import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import fs from 'fs';
import path from 'path';

export default ({ mode }) => {
    const { MIX_APP_URL } = loadEnv(mode, process.cwd(), "");

    return defineConfig({
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
                // make sure to have vite.loadEnv imported and APP_URL defined
                name: "css-static-url-fixer",
                enforce: "post",
                apply: "serve",
                transform: (code, file) => {
                    if (mode === "development" && file.match(/\.s?css($|\?)/)) {
                        return {
                            code: code.replaceAll(
                                /url\(([\'\"]?)(\/[^\)\'\"]+)\1\)/g,
                                `url($1${MIX_APP_URL}$2$1)`,
                            ),
                        };
                    }
                },
            },
            react(),
        ],
        server: {
            https:true,
            host: MIX_APP_URL,
          },
        build: {
            outDir: 'dist',
          },
    });
};
/* server: {
            https: {
                key: fs.readFileSync(path.resolve(__dirname, "./ServerKey/pham_works.key")),
                cert: fs.readFileSync(path.resolve(__dirname, "./ServerKey/pham_works.pem")),
            },
            host: '0.0.0.0', // Ensure the server is accessible externally
            port: 5173, // Vite's dev server port
            hmr: {
                host: 'localhost',
            },
            proxy: {
                '/api': {
                    target: 'http://localhost:6969', // Proxying requests to your Laravel app
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        build: {
            outDir: 'public/build', // Ensure the build output is in the Laravel public directory
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: path.resolve(__dirname, 'resources/js/RE-app/main.jsx'),
                },
            },
        }, */