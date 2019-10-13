/* --output-public-path=https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.3.6/  */
const { version } = require("../package.json");
// console.log(version);
const webpackconfig = require("@masx200/webpack-react-vue-spa-awesome-config");
if ("production" === process.env.NODE_ENV) {
  webpackconfig.output.publicPath = `https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@${version}/`;
}

// const alias = webpackconfig.resolve.alias;

/* webpackconfig.resolve.alias = {
  ...alias,
  ...{
    react: "anujs",
    "react-dom": "anujs"
  }
}; */

module.exports = webpackconfig;
