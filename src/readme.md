

# 动态加载javascript,使用fetch加载xml转换成json.js

```javascript
function loadscript(fileurl,callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = fileurl;
    script.onload=callback
    document.firstElementChild.firstElementChild.appendChild(script);
    
    console.log({script})
}
loadscript("https://cdn.staticfile.org/fast-xml-parser/3.12.16/parser.min.js");

fetch("https://www.pingwest.com/feed")
  .then(r => (console.log(r.statusText, r), r.text()))
  .then(str => new DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data));

fetch("https://www.pingwest.com/feed")
  .then(r => (console.log(r.statusText, r), r.text()))
  .then(str => parser.parse(str))
  .then(data => console.log(data));

```
# 另一种加载外部JavaScript的方法

```javascript
if (!importScripts) {
            var importScripts = (function(globalEval) {
                var xhr = new XMLHttpRequest();
                return function importScripts() {
                    var args = Array.prototype.slice.call(arguments),
                        len = args.length,
                        i = 0,
                        meta,
                        data,
                        content;
                    for (; i < len; i++) {
                        if (args[i].substr(0, 5).toLowerCase() === "data:") {
                            data = args[i];
                            content = data.indexOf(",");
                            meta = data.substr(5, content).toLowerCase();
                            data = decodeURIComponent(data.substr(content + 1));
                            if (/;\s*base64\s*[;,]/.test(meta)) {
                                data = atob(data);
                            }
                            if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
                                data = decodeURIComponent(escape(data));
                            }
                        } else {
                            xhr.open("GET", args[i], false);
                            xhr.send(null);
                            data = xhr.responseText;
                        }
                        globalEval(data);
                    }
                };
            })(eval);
        }

        importScripts("https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js")

```



# 在vscode中安装npm-scripts插件即可轻松调试

npm start

npm run build

# 推荐的vscode插件

名称: Beautify
id: hookyqr.beautify
说明: Beautify code in place for VS Code
版本: 1.5.0
发布者: HookyQR
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

名称: Bracket Pair Colorizer 2
id: coenraads.bracket-pair-colorizer-2
说明: A customizable extension for colorizing matching brackets
版本: 0.0.28
发布者: CoenraadS
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2

名称: Chinese (Simplified) Language Pack for Visual Studio Code
id: ms-ceintl.vscode-language-pack-zh-hans
说明: Language pack extension for Chinese (Simplified)
版本: 1.33.2
发布者: Microsoft
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans

名称: ES7 React/Redux/GraphQL/React-Native snippets
id: dsznajder.es7-react-js-snippets
说明: Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax
版本: 2.2.2
发布者: dsznajder
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

名称: Minify
id: hookyqr.minify
说明: Minify for VS Code.
Minify with command, and (optionally) re-minify on save.
版本: 0.4.3
发布者: HookyQR
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=HookyQR.minify

名称: NPM-Scripts
id: trabpukcip.vscode-npm-scripts
说明: View and run NPM scripts in the sidebar.
版本: 0.2.1
发布者: traBpUkciP
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts

名称: PowerShell
id: ms-vscode.powershell
说明: Develop PowerShell scripts in Visual Studio Code!
版本: 1.12.1
发布者: Microsoft
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell

名称: Prettier - Code formatter
id: esbenp.prettier-vscode
说明: VS Code plugin for prettier/prettier
版本: 1.9.0
发布者: Esben Petersen
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

名称: Vetur
id: octref.vetur
说明: Vue tooling for VS Code
版本: 0.20.0
发布者: Pine Wu
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=octref.vetur

名称: vscode-icons
id: vscode-icons-team.vscode-icons
说明: Icons for Visual Studio Code
版本: 8.6.0
发布者: VSCode Icons Team
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons

名称: XML Tools
id: dotjoshjohnson.xml
说明: XML Formatting, XQuery, and XPath Tools for Visual Studio Code
版本: 2.4.0
发布者: Josh Johnson
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml

名称: Vue VSCode Snippets
id: sdras.vue-vscode-snippets
说明: Snippets that will supercharge your Vue workflow
版本: 1.6.0
发布者: sarah.drasner
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
