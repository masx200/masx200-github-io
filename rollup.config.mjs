import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import alias from "@rollup/plugin-alias";
import { httpResolve } from "rollup-plugin-http-resolve";
import fs from "fs";
import json from "@rollup/plugin-json";
const plugins = [
    json(),
    {
        async resolveId(id, importer) {
            if (/^https?:\/\//.test(id))return id;
        },
    },
    alias({
        entries: JSON.parse(
            (await fs.promises.readFile("./import_map.json")).toString()
        ).imports,
    }),
    httpResolve(),
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
        loaders: {
            // Add .json files support
            // require @rollup/plugin-commonjs
            // ".json": "json",
            // Enable JSX in .js files too
            // ".js": "jsx",
        },
    }),
];
export default defineConfig([
    {
        input: "./netlify/edge-functions/getmarkdown[name].ts",
        output: {
            file: "./netlify/edge-functions/getmarkdown[name].js",
            format: "esm",
        },
        plugins,
    },
    {
        input: "./netlify/edge-functions/getrss[name].ts",
        output: {
            file: "./netlify/edge-functions/getrss[name].js",
            format: "esm",
        },
        plugins,
    },
]);
