// @ts-nocheck
const path = require("path");
const { version } = require("../package.json");
const webpackconfig = require("@masx200/webpack-react-vue-spa-awesome-config");
if ("production" === process.env.NODE_ENV) {
    webpackconfig.output.publicPath = `https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@${version}/`;
}
/*const { module: webpackmodule } = webpackconfig;
const randomstring = Math.floor(Math.random() * 10000000);
const bannercontentloader = {
  exclude: [/node_modules/, /\.worker\./],
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  use: [
    {
      loader: require.resolve("banner-content-loader"),
      options: {
        prefix: ` var {createElement:ReactcreateElement${randomstring}}=require('react');`,
        delimiter: "\n"
      }
    }
  ]
};
const webpackreplaceloader = {
  exclude: [/node_modules/],
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  use: [
    {
      loader: require.resolve("webpack-replace-loader"),
      options: {
        sourceMap: true,
        search: "React.createElement",
        replace: ` ReactcreateElement${randomstring} `,
        attr: "g"
      }
    }
  ]
};
const { rules: rules } = webpackmodule;
webpackconfig.module.rules = [
  webpackreplaceloader,
  ...rules,
  bannercontentloader
];
*/ const {
    module: webpackmodule,
} = webpackconfig;
const { rules: rules } = webpackmodule;
const babelloaderrule = rules.find((loader) => {
    return loader.loader === require.resolve("babel-loader");
});
if (babelloaderrule) {
    babelloaderrule.include = [path.resolve("./")];
    babelloaderrule.exclude = [];
}
module.exports = webpackconfig;
