parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zhaD":[function(require,module,exports) {
function n(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}!function(){var r;self="undefined"==typeof exports?window:exports,self.JSFuck={encode:l},window.JSFuck={encode:l};var e="USE_CHAR_CODE",t=32,i=126,o={false:"![]",true:"!![]",undefined:"[][[]]",NaN:"+[![]]",Infinity:"+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])"},f={Array:"[]",Number:"(+[])",String:"([]+[])",Boolean:"(![])",Function:'[]["filter"]',RegExp:'Function("return/0/")()'},u=(n(r={a:'(false+"")[1]',b:'(+(11))["toString"](20)',c:'([]["filter"]+"")[3]',d:'(undefined+"")[2]',e:'(true+"")[3]',f:'(false+"")[0]',g:"(+false+[false]+String)[20]",h:'(+(101))["toString"](21)[1]',i:"([false]+undefined)[10]",j:'(+(40))["toString"](21)[1]',k:'(+(20))["toString"](21)',l:'(false+"")[2]',m:'(Number+"")[11]',n:'(undefined+"")[1]',o:'(true+[]["filter"])[10]',p:'(+(211))["toString"](31)[1]',q:'(+(212))["toString"](31)[1]',r:'(true+"")[1]',s:'(false+"")[3]',t:'(true+"")[0]',u:'(undefined+"")[0]',v:'(+(31))["toString"](32)',w:'(+(32))["toString"](33)',x:'(+(101))["toString"](34)[1]',y:"(NaN+[Infinity])[10]",z:'(+(35))["toString"](36)',A:"(+false+Array)[10]",B:"(+false+Boolean)[10]",C:'Function("return escape")()("<")[2]',D:'Function("return escape")()("=")[2]',E:'(RegExp+"")[12]',F:"(+false+Function)[10]",G:'(false+Function("return Date")()())[30]',H:e,I:'(Infinity+"")[0]',J:e,K:e,L:e,M:'(true+Function("return Date")()())[30]',N:'(NaN+"")[0]',O:e,P:e,Q:e,R:"(+false+RegExp)[10]",S:"(+false+String)[10]",T:'(NaN+Function("return Date")()())[30]',U:e,V:e,W:e,X:e,Y:e,Z:e," ":'(NaN+[]["filter"])[11]',"!":e,'"':'("")["fontcolor"]()[12]',"#":e,$:e,"%":'Function("return escape")()("<")[0]',"&":e,"'":e,"(":'(false+[]["filter"])[20]',")":'(true+[]["filter"])[20]',"*":e,"+":"(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",",":'[[]]["concat"]([[]])+""',"-":'(+(.+[0000000001])+"")[2]',".":"(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]","/":'(false+[+false])["italics"]()[10]',":":'(RegExp()+"")[3]',";":e,"<":'("")["italics"]()[0]',"=":'("")["fontcolor"]()[11]',">":'("")["italics"]()[2]',"?":'(RegExp()+"")[2]',"@":e,"[":'(GLOBAL+"")[0]',"\\":e,"]":e,"^":e,_:e,"`":e,"{":'(NaN+[]["filter"])[21]',"|":e,"}":e},"}",'(NaN+[]["filter"])[37]'),n(r,"~",e),r),a='Function("return this")()';var c=0;function l(n,r){0===c&&(!function(){var n,r,e;for(r=0;r<10;r++){for(n="+[]",r>0&&(n="+!"+n),e=1;e<r;e++)n="+!+[]"+n;r>1&&(n=n.substr(1)),u[r]="["+n+"]"}}(),function(){for(var n in u)u[n]===e&&(u[n]='Function("return unescape")()("%"'+n.charCodeAt(0).toString(16).replace(/(\d+)/g,'+($1)+"')+'")')}(),function(){var n,r,e,c="";function l(r,e){n=n.replace(new RegExp(r,"gi"),e)}function s(n,r){return u[r]}function g(n,e){var t=e.split(""),i=+t.shift(),o="+[]";for(i>0&&(o="+!"+o),r=1;r<i;r++)o="+!+[]"+o;return i>1&&(o=o.substr(1)),[o].concat(t).join("+").replace(/(\d)/g,s)}for(r=t;r<=i;r++)if(c=String.fromCharCode(r),n=u[c]){for(e in f)l("\\b"+e,f[e]+'["constructor"]');for(e in o)l(e,o[e]);l("(\\d\\d+)",g),l("\\((\\d)\\)",s),l("\\[(\\d)\\]",s),l("GLOBAL",a),l('\\+""',"+[]"),l('""',"[]+[]"),u[c]=n}}(),function(){var n,r,e,o=/[^\[\]\(\)\!\+]{1}/g,f=i-t;function a(){var n,r,t=!1;for(n in e={},u)(r=u[n]).match(o)&&(e[n]=r,t=!0);return t}function c(n,r){return r.split("").join("+")}function l(n){return e[n]?n:u[n]}for(n in u)u[n]=u[n].replace(/\"([^\"]+)\"/gi,c);for(;a();){for(n in e)r=(r=u[n]).replace(o,l),u[n]=r,e[n]=r;if(0==f--)throw console.error("Could not compile the following chars:",e),"Could not compile the following chars:"}}(),c=1);var s=[];if(!n)return"";var g="";for(var d in o)g+=d+"|";return g+=".",n.replace(new RegExp(g,"g"),function(n){var r=o[n];r?s.push("["+r+"]+[]"):(r=u[n])?s.push(r):(r=n.charCodeAt(0)<128?"("+l("\\u00"+n.charCodeAt(0).toString(16))+")":"("+l("\\u"+n.charCodeAt(0).toString(16))+")",s.push(r),u[n]=r)}),s=s.join("+"),/^\d$/.test(n)&&(s+="+[]"),r?s="[]["+l("filter")+"]["+l("constructor")+"]("+s+")()":"("+s+")"}}();
},{}]},{},["zhaD"], null)
//# sourceMappingURL=/jsfuck.3245e5ff.js.map