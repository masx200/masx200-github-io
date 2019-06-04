parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XjX7":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){var r={};function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=r,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"===t(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="./src/parser.js")}({"./src/json2xml.js":function(e,r,a){var n=a("./src/util.js").buildOptions,i={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},s=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor"];function o(t){this.options=n(t,i,s),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=g),this.options.cdataTagName?this.isCDATA=v:this.isCDATA=function(){return!1},this.replaceCDATAstr=l,this.replaceCDATAarr=u,this.options.format?(this.indentate=p,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=f,this.buildObjNode=d):(this.buildTextNode=h,this.buildObjNode=c),this.buildTextValNode=h,this.buildObjectNode=c}function l(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function u(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(var r in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[r]+"]]>");return t+this.newLine}function c(t,e,r,a){return r&&!t.includes("<")?this.indentate(a)+"<"+e+r+">"+t+"</"+e+this.tagEndChar:this.indentate(a)+"<"+e+r+this.tagEndChar+t+this.indentate(a)+"</"+e+this.tagEndChar}function d(t,e,r,a){return""!==t?this.buildObjectNode(t,e,r,a):this.indentate(a)+"<"+e+r+"/"+this.tagEndChar}function h(t,e,r,a){return this.indentate(a)+"<"+e+r+">"+this.options.tagValueProcessor(""+t)+"</"+e+this.tagEndChar}function f(t,e,r,a){return""!==t?this.buildTextValNode(t,e,r,a):this.indentate(a)+"<"+e+r+"/"+this.tagEndChar}function p(t){return this.options.indentBy.repeat(t)}function g(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function v(t){return t===this.options.cdataTagName}o.prototype.parse=function(t){return this.j2x(t,0).val},o.prototype.j2x=function(e,r){for(var a="",n="",i=Object.keys(e),s=i.length,o=0;o<s;o++){var l=i[o];if(void 0===e[l]);else if(null===e[l])n+=this.indentate(r)+"<"+l+"/"+this.tagEndChar;else if("object"!==t(e[l])){var u=this.isAttribute(l);u?a+=" "+u+'="'+this.options.attrValueProcessor(""+e[l])+'"':this.isCDATA(l)?e[this.options.textNodeName]?n+=this.replaceCDATAstr(e[this.options.textNodeName],e[l]):n+=this.replaceCDATAstr("",e[l]):l===this.options.textNodeName?e[this.options.cdataTagName]||(n+=this.options.tagValueProcessor(""+e[l])):n+=this.buildTextNode(e[l],l,"",r)}else if(Array.isArray(e[l]))if(this.isCDATA(l))n+=this.indentate(r),e[this.options.textNodeName]?n+=this.replaceCDATAarr(e[this.options.textNodeName],e[l]):n+=this.replaceCDATAarr("",e[l]);else for(var c=e[l].length,d=0;d<c;d++){var h=e[l][d];if(void 0===h);else if(null===h)n+=this.indentate(r)+"<"+l+"/"+this.tagEndChar;else if("object"===t(h)){var f=this.j2x(h,r+1);n+=this.buildObjNode(f.val,l,f.attrStr,r)}else n+=this.buildTextNode(h,l,"",r)}else if(this.options.attrNodeName&&l===this.options.attrNodeName)for(var p=Object.keys(e[l]),g=p.length,v=0;v<g;v++)a+=" "+p[v]+'="'+this.options.attrValueProcessor(""+e[l][p[v]])+'"';else{var m=this.j2x(e[l],r+1);n+=this.buildObjNode(m.val,l,m.attrStr,r)}}return{attrStr:a,val:n}},e.exports=o},"./src/nimndata.js":function(t,e,r){var a=function(t){return String.fromCharCode(t)},n={nilChar:a(176),missingChar:a(201),nilPremitive:a(175),missingPremitive:a(200),emptyChar:a(178),emptyValue:a(177),boundryChar:a(179),objStart:a(198),arrStart:a(204),arrayEnd:a(185)},i=[n.nilChar,n.nilPremitive,n.missingChar,n.missingPremitive,n.boundryChar,n.emptyChar,n.emptyValue,n.arrayEnd,n.objStart,n.arrStart],s=function t(e,r,a){if("string"==typeof r)return e&&e[0]&&void 0!==e[0].val?o(e[0].val,r):o(e,r);var i,s=void 0===(i=e)?n.missingChar:null===i?n.nilChar:!(i.child&&0===Object.keys(i.child).length&&(!i.attrsMap||0===Object.keys(i.attrsMap).length))||n.emptyChar;if(!0===s){var u="";if(Array.isArray(r)){u+=n.arrStart;var c=r[0],d=e.length;if("string"==typeof c)for(var h=0;h<d;h++){var f=o(e[h].val,c);u=l(u,f)}else for(var p=0;p<d;p++){var g=t(e[p],c,a);u=l(u,g)}u+=n.arrayEnd}else{u+=n.objStart;var v=Object.keys(r);for(var m in Array.isArray(e)&&(e=e[0]),v){var b=v[m],N=void 0;N=!a.ignoreAttributes&&e.attrsMap&&e.attrsMap[b]?t(e.attrsMap[b],r[b],a):b===a.textNodeName?t(e.val,r[b],a):t(e.child[b],r[b],a),u=l(u,N)}}return u}return s},o=function(t){switch(t){case void 0:return n.missingPremitive;case null:return n.nilPremitive;case"":return n.emptyValue;default:return t}},l=function(t,e){return u(e[0])||u(t[t.length-1])||(t+=n.boundryChar),t+e},u=function(t){return-1!==i.indexOf(t)};var c=r("./src/xmlstr2xmlnode.js"),d=r("./src/util.js").buildOptions;e.convert2nimn=function(t,e,r){return r=d(r,c.defaultOptions,c.props),s(t,e,r)}},"./src/node2json.js":function(t,e,r){var a=r("./src/util.js");e.convertToJson=function t(e,r){var n={};if(!(e.child&&!a.isEmptyObject(e.child)||e.attrsMap&&!a.isEmptyObject(e.attrsMap)))return a.isExist(e.val)?e.val:"";a.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==r.cdataPositionChar)&&(n[r.textNodeName]=e.val),a.merge(n,e.attrsMap);for(var i=Object.keys(e.child),s=0;s<i.length;s++){var o=i[s];if(e.child[o]&&e.child[o].length>1)for(var l in n[o]=[],e.child[o])n[o].push(t(e.child[o][l],r));else n[o]=t(e.child[o][0],r)}return n}},"./src/node2json_str.js":function(t,e,r){var a=r("./src/util.js"),n=r("./src/util.js").buildOptions,i=r("./src/xmlstr2xmlnode.js"),s=function t(e,r,n){for(var i,s="{",o=Object.keys(e.child),l=0;l<o.length;l++){var u=o[l];if(e.child[u]&&e.child[u].length>1){for(var c in s+='"'+u+'" : [ ',e.child[u])s+=t(e.child[u][c],r)+" , ";s=s.substr(0,s.length-1)+" ] "}else s+='"'+u+'" : '+t(e.child[u][0],r)+" ,"}return a.merge(s,e.attrsMap),a.isEmptyObject(s)?a.isExist(e.val)?e.val:"":(a.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==r.cdataPositionChar)&&(s+='"'+r.textNodeName+'" : '+(!0!==(i=e.val)&&!1!==i&&isNaN(i)?'"'+i+'"':i)),","===s[s.length-1]&&(s=s.substr(0,s.length-2)),s+"}")};e.convertToJsonString=function(t,e){return(e=n(e,i.defaultOptions,i.props)).indentBy=e.indentBy||"",s(t,e,0)}},"./src/parser.js":function(t,e,r){var a=r("./src/node2json.js"),n=r("./src/xmlstr2xmlnode.js"),i=r("./src/xmlstr2xmlnode.js"),s=r("./src/util.js").buildOptions;e.parse=function(t,e){return e=s(e,i.defaultOptions,i.props),a.convertToJson(n.getTraversalObj(t,e),e)},e.convertTonimn=r("./src/nimndata.js").convert2nimn,e.getTraversalObj=n.getTraversalObj,e.convertToJson=a.convertToJson,e.convertToJsonString=r("./src/node2json_str.js").convertToJsonString,e.validate=r("./src/validator.js").validate,e.j2xParser=r("./src/json2xml.js"),e.parseToNimn=function(t,r,a){return e.convertTonimn(e.getTraversalObj(t,a),r,a)}},"./src/util.js":function(t,e,r){var a=function(t,e){var r=e.exec(t);return!(null==r)};e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e){if(e)for(var r=Object.keys(e),a=r.length,n=0;n<a;n++)t[r[n]]=e[r[n]]},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,r){var a={};if(!t)return e;for(var n=0;n<r.length;n++)void 0!==t[r[n]]?a[r[n]]=t[r[n]]:a[r[n]]=e[r[n]];return a},e.doesMatch=a,e.doesNotMatch=function(t,e){return!a(t,e)},e.getAllMatches=function(t,e){for(var r=[],a=e.exec(t);a;){for(var n=[],i=a.length,s=0;s<i;s++)n.push(a[s]);r.push(n),a=e.exec(t)}return r}},"./src/validator.js":function(t,e,r){var a=r("./src/util.js"),n={allowBooleanAttributes:!1,localeRange:"a-zA-Z"},i=["allowBooleanAttributes","localeRange"];function s(t,e){for(var r=e;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{var a=t.substr(r,e-r);if(e>5&&"xml"===a)return{err:{code:"InvalidXml",msg:"XML declaration allowed only at the start of the document."}};if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function o(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){var r=1;for(e+=8;e<t.length;e++)if("<"===t[e])r++;else if(">"===t[e]&&0===--r)break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=a.buildOptions(e,n,i);var r=[],l=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(var u=new RegExp("^[_w][\\w\\-.:]*$".replace("_w","_"+e.localeRange)),d=new RegExp("^([w]|_)[\\w.\\-_:]*".replace("([w","(["+e.localeRange)),f=0;f<t.length;f++){if("<"!==t[f]){if(" "===t[f]||"\t"===t[f]||"\n"===t[f]||"\r"===t[f])continue;return{err:{code:"InvalidChar",msg:"char "+t[f]+" is not expected ."}}}if("?"===t[++f]){if((f=s(t,++f)).err)return f}else{if("!"===t[f]){f=o(t,f);continue}var g=!1;"/"===t[f]&&(g=!0,f++);for(var v="";f<t.length&&">"!==t[f]&&" "!==t[f]&&"\t"!==t[f];f++)v+=t[f];if("/"===(v=v.trim())[v.length-1]){v=v.substring(0,v.length-1);continue}if(!p(v,d))return{err:{code:"InvalidTag",msg:"Tag "+v+" is an invalid name."}};var m=c(t,f);if(!1===m)return{err:{code:"InvalidAttr",msg:"Attributes for "+v+" have open quote"}};var b=m.value;if(f=m.index,"/"===b[b.length-1]){var N=h(b=b.substring(0,b.length-1),e,u);if(!0!==N)return N;l=!0}else if(g){if(b.trim().length>0)return{err:{code:"InvalidTag",msg:"closing tag "+v+" can't have attributes or invalid starting."}};var x=r.pop();if(v!==x)return{err:{code:"InvalidTag",msg:"closing tag "+x+" is expected inplace of "+v+"."}}}else{var y=h(b,e,u);if(!0!==y)return y;r.push(v),l=!0}for(f++;f<t.length;f++)if("<"===t[f]){if("!"===t[f+1]){f=o(t,++f);continue}break}"<"===t[f]&&f--}}return l?!(r.length>0)||{err:{code:"InvalidXml",msg:"Invalid "+JSON.stringify(r,null,4).replace(/\r?\n/g,"")+" found."}}:{err:{code:"InvalidXml",msg:"Start tag expected."}}};var l='"',u="'";function c(t,e){for(var r="",a="";e<t.length;e++){if(t[e]===l||t[e]===u)if(""===a)a=t[e];else{if(a!==t[e])continue;a=""}else if(">"===t[e]&&""===a)break;r+=t[e]}return""===a&&{value:r,index:e}}var d=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function h(t,e,r){for(var n=a.getAllMatches(t,d),i={},s=0;s<n.length;s++){if(0===n[s][1].length)return{err:{code:"InvalidAttr",msg:"attribute "+n[s][2]+" has no space in starting."}};if(void 0===n[s][3]&&!e.allowBooleanAttributes)return{err:{code:"InvalidAttr",msg:"boolean attribute "+n[s][2]+" is not allowed."}};var o=n[s][2];if(!f(o,r))return{err:{code:"InvalidAttr",msg:"attribute "+o+" is an invalid name."}};if(i.hasOwnProperty(o))return{err:{code:"InvalidAttr",msg:"attribute "+o+" is repeated."}};i[o]=1}return!0}function f(t,e){return a.doesMatch(t,e)}function p(t,e){return!a.doesNotMatch(t,e)}},"./src/xmlNode.js":function(t,e,r){t.exports=function(t,e,r){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=r,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}}},"./src/xmlstr2xmlnode.js":function(t,e,r){var a=r("./src/util.js"),n=r("./src/util.js").buildOptions,i=r("./src/xmlNode.js"),s={OPENING:1,CLOSING:2,SELF:3,CDATA:4},o="<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var l={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",localeRange:"",tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t},stopNodes:[]};e.defaultOptions=l;var u=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","localeRange","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","stopNodes"];e.props=u;function c(t,e){return t&&(e.trimValues&&(t=t.trim()),t=h(t=e.tagValueProcessor(t),e.parseNodeValue,e.parseTrueNumberOnly)),t}function d(t,e){if(e.ignoreNameSpace){var r=t.split(":"),a="/"===t.charAt(0)?"/":"";if("xmlns"===r[0])return"";2===r.length&&(t=a+r[1])}return t}function h(t,e,r){var n;return e&&"string"==typeof t?(""===t.trim()||isNaN(t)?n="true"===t||"false"!==t&&t:(n=-1!==t.indexOf("0x")?Number.parseInt(t,16):-1!==t.indexOf(".")?Number.parseFloat(t):Number.parseInt(t,10),r&&(n=String(n)===t?n:t)),n):a.isExist(t)?t:""}var f=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function p(t,e){if(!e.ignoreAttributes&&"string"==typeof t){t=t.replace(/\r?\n/g," ");for(var r=a.getAllMatches(t,f),n=r.length,i={},s=0;s<n;s++){var o=d(r[s][1],e);o.length&&(void 0!==r[s][4]?(e.trimValues&&(r[s][4]=r[s][4].trim()),r[s][4]=e.attrValueProcessor(r[s][4]),i[e.attributeNamePrefix+o]=h(r[s][4],e.parseAttributeValue,e.parseTrueNumberOnly)):e.allowBooleanAttributes&&(i[e.attributeNamePrefix+o]=!0))}if(!Object.keys(i).length)return;if(e.attrNodeName){var l={};return l[e.attrNodeName]=i,l}return i}}e.getTraversalObj=function(t,e){e=n(e,l,u),t=t.replace(/<!--[\s\S]*?-->/g,"");var r=new i("!xml"),d=r;o=o.replace(/\[\\w/g,"["+e.localeRange+"\\w");for(var h=new RegExp(o,"g"),f=h.exec(t),g=h.exec(t);f;){var v="]]>"===(x=f)[4]?s.CDATA:"/"===x[10]?s.CLOSING:void 0!==x[8]&&"/"===x[8].substr(x[8].length-1)?s.SELF:s.OPENING;if(v===s.CLOSING)d.parent&&f[14]&&(d.parent.val=a.getValue(d.parent.val)+""+c(f[14],e)),e.stopNodes.length&&e.stopNodes.includes(d.tagname)&&(d.child=[],null==d.attrsMap&&(d.attrsMap={}),d.val=t.substr(d.startIndex+1,f.index-d.startIndex-1)),d=d.parent;else if(v===s.CDATA)if(e.cdataTagName){var m=new i(e.cdataTagName,d,f[3]);m.attrsMap=p(f[8],e),d.addChild(m),d.val=a.getValue(d.val)+e.cdataPositionChar,f[14]&&(d.val+=c(f[14],e))}else d.val=(d.val||"")+(f[3]||"")+c(f[14],e);else if(v===s.SELF){d&&f[14]&&(d.val=a.getValue(d.val)+""+c(f[14],e));var b=new i(e.ignoreNameSpace?f[7]:f[5],d,"");f[8]&&f[8].length>0&&(f[8]=f[8].substr(0,f[8].length-1)),b.attrsMap=p(f[8],e),d.addChild(b)}else{var N=new i(e.ignoreNameSpace?f[7]:f[5],d,c(f[14],e));e.stopNodes.length&&e.stopNodes.includes(N.tagname)&&(N.startIndex=f.index+f[1].length),N.attrsMap=p(f[8],e),d.addChild(N),d=N}f=g,g=h.exec(t)}var x;return r}}}),r=e;exports.default=r;
},{}],"5k2K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./fast-xml-parser"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){return p(t)||b(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var f=window.IMPORTCJSAMDUMD.REQUIREPACKAGE("react");function y(t){var e;switch(t){case"success":e="成功";break;case"primary":e="首选";break;case"danger":e="失败";break;case"warning":e="警告";break;default:return}var n=h();jQuery("#my导航栏").append(jQuery('<div id="'.concat(n,'" class="alert alert-').concat(t,' alert-dismissible fade show">\n  <button type="button" class="close" data-dismiss="alert">&times;</button>\n  <strong>').concat(e,"!</strong> 操作").concat(e,"提示信息。\n  </div>")).fadeTo(5e3,.5,function(){console.log(jQuery("#"+n)),jQuery("#"+n).remove(),j()}))}var v=[],g=[];function x(e,n){var i=e;if(g=[],console.log("开始加载外部内容",$(i).attr("src")),void 0===$(i).attr("src"))console.log("加载失败");else{var o=$(i).attr("src");fetch(o).then(function(t){return console.log(t.statusText,t),t.text()}).then(function(e){var i,o=e;v.push(o),console.log("xml",v);var r=t.default.parse(o);console.log("json",r),g.title=r.rss.channel.title,g.description=r.rss.channel.description,(i=g).push.apply(i,m(r.rss.channel.item)),console.log("rsscontent",g),mui(document.getElementById(n)).button("reset"),y("success"),j()})}}function h(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}var E={},k=function(t){function e(){return i(this,e),u(this,l(e).apply(this,arguments))}return c(e,f.Component),r(e,[{key:"componentWillMount",value:function(){E.buttonid1=h(),E.buttonid2=h(),E.buttonid3=h(),E.buttonid4=h(),E.buttonid5=h(),E.buttonid6=h()}},{key:"jiazairss1",value:function(){mui(document.getElementById(E.buttonid1)).button("loading");x("#xml1",E.buttonid1)}},{key:"jiazairss2",value:function(){mui(document.getElementById(E.buttonid2)).button("loading");x("#xml2",E.buttonid2)}},{key:"jiazairss3",value:function(){mui(document.getElementById(E.buttonid3)).button("loading");x("#xml3",E.buttonid3)}},{key:"jiazairss4",value:function(){mui(document.getElementById(E.buttonid4)).button("loading");x("#xml4",E.buttonid4)}},{key:"jiazairss5",value:function(){mui(document.getElementById(E.buttonid5)).button("loading");x("#xml5",E.buttonid5)}},{key:"jiazairss6",value:function(){mui(document.getElementById(E.buttonid6)).button("loading");x("#xml6",E.buttonid6)}},{key:"componentDidMount",value:function(){document.title="React router App-rssreader",j()}},{key:"componentWillReceiveProps",value:function(t){}},{key:"shouldComponentUpdate",value:function(t,e){return!0}},{key:"componentWillUpdate",value:function(t,e){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return f.createElement("div",{className:"App"},f.createElement("h1",null,"异步fetch加载rss阅读器演示"),f.createElement("nav",{class:"navbar navbar-expand-sm bg-light navbar-light "},f.createElement("ul",{class:"demo"},f.createElement("button",{id:E.buttonid1,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-royal mui-btn-outlined",onClick:this.jiazairss1},"加载tmtpost"),f.createElement("button",{id:E.buttonid2,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary mui-btn-outlined",onClick:this.jiazairss2},"加载iplaysoft"),f.createElement("button",{id:E.buttonid3,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-warning mui-btn-outlined",onClick:this.jiazairss3},"加载landiannews"),f.createElement("button",{id:E.buttonid4,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-danger mui-btn-outlined",onClick:this.jiazairss4},"加载ithome"),f.createElement("button",{id:E.buttonid5,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-success mui-btn-outlined",onClick:this.jiazairss5},"加载ifanr"),f.createElement("button",{id:E.buttonid6,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary mui-btn-outlined",onClick:this.jiazairss6},"加载pingwest"))),f.createElement("header",{className:"App-header"},f.createElement("div",null,f.createElement("h3",null,f.createElement("b",null,g.title)),f.createElement("p",null,g.description),f.createElement("ul",{class:"mui-table-view"},g.map(function(t){return f.createElement("li",{class:"mui-table-view-cell mui-media"},f.createElement("div",{class:"mui-media-body"},f.createElement("b",null," ",t.title),f.createElement("a",{href:t.link,target:"_blank"},f.createElement("p",{class:"mui-ellipsis"},t.link)),f.createElement("p",{class:"mui-ellipsis"},t.description)))})))))}}]),e}();function j(){$("#allnavbar").click()}exports.default=k;
},{"./fast-xml-parser":"XjX7"}]},{},["5k2K"], null)