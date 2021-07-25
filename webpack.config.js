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
    webpackconfig.devtool = "source-map";
    webpackconfig.optimization = {
        ...webpackconfig.optimization,
        chunkIds: "named",
        moduleIds: "named",
    };
}

console.log(webpackconfig);
module.exports = webpackconfig;
