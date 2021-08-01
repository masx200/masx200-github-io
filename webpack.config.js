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
    const config = webpackconfig;

    console.log(config);

    return webpackconfig;
};
