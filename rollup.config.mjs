import commonjs from "@rollup/plugin-commonjs";

import alias from "@rollup/plugin-alias";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { fileCache } from "@masx200/rollup-plugin-http-resolve";
import fs from "fs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { httpResolve } from "@masx200/rollup-plugin-http-resolve";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
const plugins = [
    commonjs(),
    json(),
    nodeResolve(),
    alias({
        entries: JSON.parse(
            (await fs.promises.readFile("./import_map.json")).toString(),
        ).imports,
    }),
    httpResolve({ cache: new fileCache() }),
    getBabelOutputPlugin({
        plugins: ["@babel/plugin-proposal-logical-assignment-operators"],
    }),
    esbuild({
        // All options are optional
        include: [/\.[jt]sx?$/, /^https?:\/\//], // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        sourceMap: true, // default
        minify: true,
        target: "esnext", // default, or 'es20XX', 'esnext'
        jsx: "preserve", // default, or 'preserve'
        jsxFactory: "React.createElement",
        jsxFragment: "React.Fragment",
        // Like @rollup/plugin-replace
        define: {},
        tsconfig: "tsconfig.json", // default
        // Add extra loaders
        loaders: {},
    }),
];
export default defineConfig([
    {
        input: "./netlify/src/getmarkdown[name].ts",
        output: {
            file: "./netlify/edge-functions/getmarkdown[name].js",
            format: "esm",
            sourcemap: true,
        },
        plugins,
    },
    {
        input: "./netlify/src/getrss[name].ts",
        output: {
            file: "./netlify/edge-functions/getrss[name].js",
            format: "esm",
            sourcemap: true,
        },
        plugins,
    },
]);
