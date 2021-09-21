const path = require("path");

const {
    createconfig,
} = require("@masx200/webpack-react-vue-spa-awesome-config");

module.exports = (env, argv) => {
    const webpackconfig = createconfig(env, argv);
    const config = webpackconfig;
    if ("production" === process.env.NODE_ENV) {
        webpackconfig.entry = [
            path.join(__dirname, "./src", "polyfill.js"),
            require.resolve("@masx200/ie11-usual-polyfills"),

            ...webpackconfig.entry,
        ];
        // config.devtool = "source-map";
    }

    // console.log(config);
    if (
        process.env.NODE_ENV == "development" &&
        process.env.WEBPACK_SERVE === "true"
    ) {
        config.experiments = {
            ...config.experiments,
            lazyCompilation: { entries: false, imports: true },
        };
    }
    // config.optimization.splitChunks.cacheGroups = {
    //     ...config.optimization.splitChunks.cacheGroups,

    //     commons: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: "vendors",
    //         chunks: "initial",
    //     },
    // };
    return webpackconfig;
};
