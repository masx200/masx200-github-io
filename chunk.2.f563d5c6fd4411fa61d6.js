(("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[2],{12:function(t,e,r){"use strict";function n(t,e){return!(null==e.exec(t))}e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e){if(e)for(var r=Object.keys(e),n=r.length,i=0;i<n;i++)t[r[i]]=e[r[i]]},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,r){var n={};if(!t)return e;for(var i=0;i<r.length;i++)void 0!==t[r[i]]?n[r[i]]=t[r[i]]:n[r[i]]=e[r[i]];return n},e.doesMatch=n,e.doesNotMatch=function(t,e){return!n(t,e)},e.getAllMatches=function(t,e){for(var r=[],n=e.exec(t);n;){for(var i=[],a=n.length,o=0;o<a;o++)i.push(n[o]);r.push(i),n=e.exec(t)}return r}},13:function(t,e,r){t.exports=r(17)},14:function(t,e,r){"use strict";function n(t,e,r,n,i,a,o){try{var s=t[a](o),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(i,a){var o=t.apply(e,r);function s(t){n(o,i,a,s,u,"next",t)}function u(t){n(o,i,a,s,u,"throw",t)}s(void 0)})}}r.d(e,"a",function(){return i})},17:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(t,e,r){var n=c;return function(i,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return j()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=C(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===c)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var c="suspendedStart",h="suspendedYield",f="executing",d="completed",p={};function g(){}function v(){}function m(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,N=b&&b(b(P([])));N&&N!==r&&n.call(N,a)&&(y=N);var w=m.prototype=g.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){var e;this._invoke=function(r,i){function a(){return new Promise(function(e,a){!function e(r,i,a,o){var s=l(t[r],t,i);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(c).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,o)})}o(s.arg)}(r,i,e,a)})}return e=e?e.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=w.constructor=m,m.constructor=v,m[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(A.prototype),A.prototype[o]=function(){return this},t.AsyncIterator=A,t.async=function(e,r,n,i){var a=new A(u(e,r,n,i));return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;0<=a;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},20:function(t,e,r){"use strict";var n=r(12),i=r(12).buildOptions,a=r(68),o={OPENING:1,CLOSING:2,SELF:3,CDATA:4},s="<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var u={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",localeRange:"",tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t},stopNodes:[]};e.defaultOptions=u;var l=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","localeRange","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","stopNodes"];function c(t,e){return t&&(e.trimValues&&(t=t.trim()),t=d(t=e.tagValueProcessor(t),e.parseNodeValue,e.parseTrueNumberOnly)),t}function h(t){return"]]>"===t[4]?o.CDATA:"/"===t[10]?o.CLOSING:void 0!==t[8]&&"/"===t[8].substr(t[8].length-1)?o.SELF:o.OPENING}function f(t,e){if(e.ignoreNameSpace){var r=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===r[0])return"";2===r.length&&(t=n+r[1])}return t}function d(t,e,r){var i;return e&&"string"==typeof t?(""===t.trim()||isNaN(t)?i="true"===t||"false"!==t&&t:(i=-1!==t.indexOf("0x")?Number.parseInt(t,16):-1!==t.indexOf(".")?Number.parseFloat(t):Number.parseInt(t,10),r&&(i=String(i)===t?i:t)),i):n.isExist(t)?t:""}e.props=l;var p=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function g(t,e){if(!e.ignoreAttributes&&"string"==typeof t){t=t.replace(/\r?\n/g," ");for(var r=n.getAllMatches(t,p),i=r.length,a={},o=0;o<i;o++){var s=f(r[o][1],e);s.length&&(void 0!==r[o][4]?(e.trimValues&&(r[o][4]=r[o][4].trim()),r[o][4]=e.attrValueProcessor(r[o][4]),a[e.attributeNamePrefix+s]=d(r[o][4],e.parseAttributeValue,e.parseTrueNumberOnly)):e.allowBooleanAttributes&&(a[e.attributeNamePrefix+s]=!0))}if(!Object.keys(a).length)return;if(e.attrNodeName){var u={};return u[e.attrNodeName]=a,u}return a}}e.getTraversalObj=function(t,e){e=i(e,u,l),t=t.replace(/<!--[\s\S]*?-->/g,"");var r=new a("!xml"),f=r;s=s.replace(/\[\\w/g,"["+e.localeRange+"\\w");for(var d=new RegExp(s,"g"),p=d.exec(t),v=d.exec(t);p;){var m=h(p);if(m===o.CLOSING)f.parent&&p[14]&&(f.parent.val=n.getValue(f.parent.val)+""+c(p[14],e)),e.stopNodes.length&&e.stopNodes.includes(f.tagname)&&(f.child=[],null==f.attrsMap&&(f.attrsMap={}),f.val=t.substr(f.startIndex+1,p.index-f.startIndex-1)),f=f.parent;else if(m===o.CDATA)if(e.cdataTagName){var y=new a(e.cdataTagName,f,p[3]);y.attrsMap=g(p[8],e),f.addChild(y),f.val=n.getValue(f.val)+e.cdataPositionChar,p[14]&&(f.val+=c(p[14],e))}else f.val=(f.val||"")+(p[3]||"")+c(p[14],e);else if(m===o.SELF){f&&p[14]&&(f.val=n.getValue(f.val)+""+c(p[14],e));var b=new a(e.ignoreNameSpace?p[7]:p[5],f,"");p[8]&&0<p[8].length&&(p[8]=p[8].substr(0,p[8].length-1)),b.attrsMap=g(p[8],e),f.addChild(b)}else{var N=new a(e.ignoreNameSpace?p[7]:p[5],f,c(p[14],e));e.stopNodes.length&&e.stopNodes.includes(N.tagname)&&(N.startIndex=p.index+p[1].length),N.attrsMap=g(p[8],e),f.addChild(N),f=N}p=v,v=d.exec(t)}return r}},66:function(t,e,r){"use strict";var n=r(67),i=r(20),a=r(20),o=r(12).buildOptions;e.parse=function(t,e){return e=o(e,a.defaultOptions,a.props),n.convertToJson(i.getTraversalObj(t,e),e)},e.convertTonimn=r(69).convert2nimn,e.getTraversalObj=i.getTraversalObj,e.convertToJson=n.convertToJson,e.convertToJsonString=r(70).convertToJsonString,e.validate=r(71).validate,e.j2xParser=r(72),e.parseToNimn=function(t,r,n){return e.convertTonimn(e.getTraversalObj(t,n),r,n)}},67:function(t,e,r){"use strict";var n=r(12);e.convertToJson=function t(e,r){var i={};if(!(e.child&&!n.isEmptyObject(e.child)||e.attrsMap&&!n.isEmptyObject(e.attrsMap)))return n.isExist(e.val)?e.val:"";n.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==r.cdataPositionChar)&&(i[r.textNodeName]=e.val),n.merge(i,e.attrsMap);for(var a=Object.keys(e.child),o=0;o<a.length;o++){var s=a[o];if(e.child[s]&&1<e.child[s].length)for(var u in i[s]=[],e.child[s])i[s].push(t(e.child[s][u],r));else i[s]=t(e.child[s][0],r)}return i}},68:function(t,e,r){"use strict";t.exports=function(t,e,r){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=r,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}}},69:function(t,e,r){"use strict";function n(t){return String.fromCharCode(t)}var i={nilChar:n(176),missingChar:n(201),nilPremitive:n(175),missingPremitive:n(200),emptyChar:n(178),emptyValue:n(177),boundryChar:n(179),objStart:n(198),arrStart:n(204),arrayEnd:n(185)},a=[i.nilChar,i.nilPremitive,i.missingChar,i.missingPremitive,i.boundryChar,i.emptyChar,i.emptyValue,i.arrayEnd,i.objStart,i.arrStart],o=function(t){switch(t){case void 0:return i.missingPremitive;case null:return i.nilPremitive;case"":return i.emptyValue;default:return t}},s=function(t,e){return u(e[0])||u(t[t.length-1])||(t+=i.boundryChar),t+e},u=function(t){return-1!==a.indexOf(t)},l=r(20),c=r(12).buildOptions;e.convert2nimn=function(t,e,r){return function t(e,r,n){if("string"==typeof r)return e&&e[0]&&void 0!==e[0].val?o(e[0].val,r):o(e,r);var a=function(t){return void 0===t?i.missingChar:null===t?i.nilChar:!(t.child&&0===Object.keys(t.child).length&&(!t.attrsMap||0===Object.keys(t.attrsMap).length))||i.emptyChar}(e);if(!0!==a)return a;var u="";if(Array.isArray(r)){u+=i.arrStart;var l=r[0],c=e.length;if("string"==typeof l)for(var h=0;h<c;h++){var f=o(e[h].val,l);u=s(u,f)}else for(var d=0;d<c;d++){var p=t(e[d],l,n);u=s(u,p)}u+=i.arrayEnd}else{u+=i.objStart;var g=Object.keys(r);for(var v in Array.isArray(e)&&(e=e[0]),g){var m,y=g[v];m=!n.ignoreAttributes&&e.attrsMap&&e.attrsMap[y]?t(e.attrsMap[y],r[y],n):y===n.textNodeName?t(e.val,r[y],n):t(e.child[y],r[y],n),u=s(u,m)}}return u}(t,e,r=c(r,l.defaultOptions,l.props))}},70:function(t,e,r){"use strict";var n=r(12),i=r(12).buildOptions,a=r(20);e.convertToJsonString=function(t,e){return(e=i(e,a.defaultOptions,a.props)).indentBy=e.indentBy||"",function t(e,r){for(var i="{",a=Object.keys(e.child),o=0;o<a.length;o++){var s=a[o];if(e.child[s]&&1<e.child[s].length){for(var u in i+='"'+s+'" : [ ',e.child[s])i+=t(e.child[s][u],r)+" , ";i=i.substr(0,i.length-1)+" ] "}else i+='"'+s+'" : '+t(e.child[s][0],r)+" ,"}return n.merge(i,e.attrsMap),n.isEmptyObject(i)?n.isExist(e.val)?e.val:"":(n.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==r.cdataPositionChar)&&(i+='"'+r.textNodeName+'" : '+function(t){return!0!==t&&!1!==t&&isNaN(t)?'"'+t+'"':t}(e.val)),","===i[i.length-1]&&(i=i.substr(0,i.length-2)),i+"}")}(t,e)}},71:function(t,e,r){"use strict";var n=r(12),i={allowBooleanAttributes:!1,localeRange:"a-zA-Z"},a=["allowBooleanAttributes","localeRange"];function o(t,e){for(var r=e;e<t.length;e++)if("?"==t[e]||" "==t[e]){var n=t.substr(r,e-r);if(5<e&&"xml"===n)return{err:{code:"InvalidXml",msg:"XML declaration allowed only at the start of the document."}};if("?"!=t[e]||">"!=t[e+1])continue;e++;break}return e}function s(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){var r=1;for(e+=8;e<t.length;e++)if("<"===t[e])r++;else if(">"===t[e]&&0===--r)break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=n.buildOptions(e,i,a);var r=[],u=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(var l,h,d=new RegExp("^[_w][\\w\\-.:]*$".replace("_w","_"+e.localeRange)),p=new RegExp("^([w]|_)[\\w.\\-_:]*".replace("([w","(["+e.localeRange)),g=0;g<t.length;g++){if("<"!==t[g]){if(" "===t[g]||"\t"===t[g]||"\n"===t[g]||"\r"===t[g])continue;return{err:{code:"InvalidChar",msg:"char "+t[g]+" is not expected ."}}}if("?"===t[++g]){if((g=o(t,++g)).err)return g}else{if("!"===t[g]){g=s(t,g);continue}var v=!1;"/"===t[g]&&(v=!0,g++);for(var m="";g<t.length&&">"!==t[g]&&" "!==t[g]&&"\t"!==t[g];g++)m+=t[g];if("/"===(m=m.trim())[m.length-1]){m=m.substring(0,m.length-1);continue}if(l=m,h=p,n.doesNotMatch(l,h))return{err:{code:"InvalidTag",msg:"Tag "+m+" is an invalid name."}};var y=c(t,g);if(!1===y)return{err:{code:"InvalidAttr",msg:"Attributes for "+m+" have open quote"}};var b=y.value;if(g=y.index,"/"===b[b.length-1]){var N=f(b=b.substring(0,b.length-1),e,d);if(!0!==N)return N;u=!0}else if(v){if(0<b.trim().length)return{err:{code:"InvalidTag",msg:"closing tag "+m+" can't have attributes or invalid starting."}};var w=r.pop();if(m!==w)return{err:{code:"InvalidTag",msg:"closing tag "+w+" is expected inplace of "+m+"."}}}else{var x=f(b,e,d);if(!0!==x)return x;r.push(m),u=!0}for(g++;g<t.length;g++)if("<"!==t[g]);else{if("!"!==t[g+1])break;g=s(t,++g)}"<"===t[g]&&g--}}return u?!(0<r.length)||{err:{code:"InvalidXml",msg:"Invalid "+JSON.stringify(r,null,4).replace(/\r?\n/g,"")+" found."}}:{err:{code:"InvalidXml",msg:"Start tag expected."}}};var u='"',l="'";function c(t,e){for(var r="",n="";e<t.length;e++){if(t[e]===u||t[e]===l)if(""===n)n=t[e];else{if(n!==t[e])continue;n=""}else if(">"===t[e]&&""===n)break;r+=t[e]}return""===n&&{value:r,index:e}}var h=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function f(t,e,r){for(var i,a,o=n.getAllMatches(t,h),s={},u=0;u<o.length;u++){if(0===o[u][1].length)return{err:{code:"InvalidAttr",msg:"attribute "+o[u][2]+" has no space in starting."}};if(void 0===o[u][3]&&!e.allowBooleanAttributes)return{err:{code:"InvalidAttr",msg:"boolean attribute "+o[u][2]+" is not allowed."}};var l=o[u][2];if(i=l,a=r,!n.doesMatch(i,a))return{err:{code:"InvalidAttr",msg:"attribute "+l+" is an invalid name."}};if(s.hasOwnProperty(l))return{err:{code:"InvalidAttr",msg:"attribute "+l+" is repeated."}};s[l]=1}return!0}},72:function(t,e,r){"use strict";var n=r(12).buildOptions,i={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},a=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor"];function o(t){this.options=n(t,i,a),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=p),this.options.cdataTagName?this.isCDATA=g:this.isCDATA=function(){return!1},this.replaceCDATAstr=s,this.replaceCDATAarr=u,this.options.format?(this.indentate=d,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=f,this.buildObjNode=c):(this.buildTextNode=h,this.buildObjNode=l),this.buildTextValNode=h,this.buildObjectNode=l}function s(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function u(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(var r in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[r]+"]]>");return t+this.newLine}function l(t,e,r,n){return r&&!t.includes("<")?this.indentate(n)+"<"+e+r+">"+t+"</"+e+this.tagEndChar:this.indentate(n)+"<"+e+r+this.tagEndChar+t+this.indentate(n)+"</"+e+this.tagEndChar}function c(t,e,r,n){return""!==t?this.buildObjectNode(t,e,r,n):this.indentate(n)+"<"+e+r+"/"+this.tagEndChar}function h(t,e,r,n){return this.indentate(n)+"<"+e+r+">"+this.options.tagValueProcessor(""+t)+"</"+e+this.tagEndChar}function f(t,e,r,n){return""!==t?this.buildTextValNode(t,e,r,n):this.indentate(n)+"<"+e+r+"/"+this.tagEndChar}function d(t){return this.options.indentBy.repeat(t)}function p(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function g(t){return t===this.options.cdataTagName}o.prototype.parse=function(t){return this.j2x(t,0).val},o.prototype.j2x=function(t,e){for(var r="",n="",i=Object.keys(t),a=i.length,o=0;o<a;o++){var s=i[o];if(void 0===t[s]);else if(null===t[s])n+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if("object"!=typeof t[s]){var u=this.isAttribute(s);u?r+=" "+u+'="'+this.options.attrValueProcessor(""+t[s])+'"':this.isCDATA(s)?t[this.options.textNodeName]?n+=this.replaceCDATAstr(t[this.options.textNodeName],t[s]):n+=this.replaceCDATAstr("",t[s]):s===this.options.textNodeName?t[this.options.cdataTagName]||(n+=this.options.tagValueProcessor(""+t[s])):n+=this.buildTextNode(t[s],s,"",e)}else if(Array.isArray(t[s]))if(this.isCDATA(s))n+=this.indentate(e),t[this.options.textNodeName]?n+=this.replaceCDATAarr(t[this.options.textNodeName],t[s]):n+=this.replaceCDATAarr("",t[s]);else for(var l=t[s].length,c=0;c<l;c++){var h=t[s][c];if(void 0===h);else if(null===h)n+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if("object"==typeof h){var f=this.j2x(h,e+1);n+=this.buildObjNode(f.val,s,f.attrStr,e)}else n+=this.buildTextNode(h,s,"",e)}else if(this.options.attrNodeName&&s===this.options.attrNodeName)for(var d=Object.keys(t[s]),p=d.length,g=0;g<p;g++)r+=" "+d[g]+'="'+this.options.attrValueProcessor(""+t[s][d[g]])+'"';else{var v=this.j2x(t[s],e+1);n+=this.buildObjNode(v.val,s,v.attrStr,e)}}return{attrStr:r,val:n}},t.exports=o},89:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",function(){return n})}}]);