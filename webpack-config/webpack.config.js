// const { default: InjectPlugin } = require("webpack-inject-plugin");
/* --output-public-path=https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.3.6/  */
// @ts-ignore
const { version } = require("../package.json");
// console.log(version);
const webpackconfig = require("@masx200/webpack-react-vue-spa-awesome-config");
if ("production" === process.env.NODE_ENV) {
  webpackconfig.output.publicPath = `https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@${version}/`;
}
const { /* plugins, */ module: webpackmodule } = webpackconfig;
// const alias = webpackconfig.resolve.alias;

/* webpackconfig.resolve.alias = {
  ...alias,
  ...{
    react: "anujs",
    "react-dom": "anujs"
  }
}; */

const randomstring = Math.floor(Math.random() * 10000000);
const webpackreplaceloaderandbannercontentloader = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  use: [
    {
      loader: require.resolve("banner-content-loader"),
      options: {
        prefix: ` var {createElement:ReactcreateElement${randomstring}}=require('react');`,
        delimiter: "\n"
      }
    },
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

/* const myinjectplugin = new InjectPlugin(
  function() {
    return ` var ReactcreateElement=require('react').createElement;
    console.log(ReactcreateElement);
    `;
  },
  { entryName: () => true }
); */
const { rules: rules } = webpackmodule;
/* webpack的loader是从后往前执行 */
// @ts-ignore
webpackconfig.module.rules = [
  webpackreplaceloaderandbannercontentloader,
  ...rules,
  webpackreplaceloaderandbannercontentloader
];
// webpackconfig.plugins = [...plugins /* myinjectplugin */];
module.exports = webpackconfig;
