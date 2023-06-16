const path = require("path");

const {
    createconfig,
} = require("@masx200/webpack-react-vue-spa-awesome-config");

module.exports = (env, argv) => {
    const webpackconfig = createconfig(env, argv);

    if ("production" === process.env.NODE_ENV) {
        webpackconfig.entry = [
            path.join(__dirname, "./src", "polyfill.js"),
            require.resolve("@masx200/ie11-usual-polyfills"),

            ...webpackconfig.entry,
        ];
    }

    if (
        process.env.NODE_ENV == "development" &&
        process.env.WEBPACK_SERVE === "true"
    ) {
        webpackconfig.experiments = {
            ...webpackconfig.experiments,
            lazyCompilation: { entries: false, imports: true },
        };
    }
    Object.assign(webpackconfig.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat", // 必须放在 test-utils 下面
        "react/jsx-runtime": "preact/jsx-runtime",
    });
    return webpackconfig;
};
