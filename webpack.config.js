const path = require("path");

const webpackconfig = Object.assign(
    {},
    require("@masx200/webpack-react-vue-spa-awesome-config")
);

if ("production" === process.env.NODE_ENV) {
    webpackconfig.entry = [
        path.join(__dirname, "./src", "polyfill.js"),
        require.resolve("@masx200/ie11-usual-polyfills"),

        ...webpackconfig.entry,
    ];
    // webpackconfig.devtool = "source-map";
    // webpackconfig.optimization = {
    //     ...webpackconfig.optimization,
    //     chunkIds: "named",
    //     moduleIds: "named",
    // };
}
const config = webpackconfig;
const srcfoldepath = path.join(__dirname, "src");
config.module.rules = [
    ...config.module.rules,
    {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        type: "javascript/auto",
        loader: require.resolve("babel-loader"),
        options: getbabelconfig(),
        include: [srcfoldepath],
        exclude: [/node_modules/],
    },
];
console.log(webpackconfig);
module.exports = webpackconfig;
function getbabelconfig() {}
