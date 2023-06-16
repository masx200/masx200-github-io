import { babel } from "@rollup/plugin-babel";
import { createHtmlPlugin } from "vite-plugin-html";
import { defineConfig } from "vite";
import path from "path";
//@ts-ignore
export default defineConfig((/* { mode } */) => {
    // 加载环境变量，因为 vite 中不会加载以 VUE 开头的，我们得自己指定下
    // const envPrefix = ["VUE"];
    // const env = loadEnv(mode, process.cwd(), envPrefix);

    return {
        worker: { format: "es" },
        esbuild: {
            jsx: "automatic",
            jsxImportSource: "preact",
            jsxFactory: "React.createElement",
            jsxFragment: "React.Fragment",
            //  jsxInject: `import React from 'react'`,
        },
        resolve: {
            alias: {
                "@": path.join(__dirname, "src/"),
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat", // 必须放在 test-utils 下面
                "react/jsx-runtime": "preact/jsx-runtime",
            },
        },
        plugins: [
            Object.assign(
                babel({
                    presets: ["@babel/preset-typescript"],
                    babelHelpers: "bundled",
                    extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".tsx"],
                    plugins: [
                        [
                            "@babel/plugin-syntax-typescript",
                            { options: { isTSX: true } },
                        ],
                        [
                            "styled-jsx/babel",
                            {
                                sourceMaps: true,
                                plugins: ["styled-jsx-plugin-postcss"],
                            },
                        ],
                        "@babel/plugin-transform-react-constant-elements",
                    ],
                }),
                { enforce: "pre" }
            ),
            createHtmlPlugin({
                minify: true,
                template: "./public/index.html",
                entry: "./src/index.tsx", // 这个会帮我们注入入口 js 文件
                inject: {
                    // data: {
                    //     // 这是我们 index.html 用到的环境变量
                    //     ...env,
                    // },
                },
            }),
        ],
    };
});
