(("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[2],{16:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(17),i=n(18),r=n(21),s=n(14),c=n(13),o=n(19),l=n(20);function u(e){return new(function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this))).button.loading=function(){return n.button("loading")},n.button.reset=function(){return n.button("reset")},Object.defineProperty(Object(c.a)(n),Symbol.toStringTag,{value:"ArrayLike"}),function(e){if(n.length=0,e instanceof HTMLElement)n.push(e);else if("string"==typeof e)try{for(var t=document.querySelectorAll(e),a=0;a<t.length;a++)n.push(t[a])}catch(e){n.length=0}else if("object"==typeof e&&e&&"length"in e&&e.length)try{for(var i=e,r=i.length,s=0;s<r;s++){var c=i[s];c instanceof HTMLElement&&n.push(c)}}catch(e){n.length=0}else n.length=0}(e),n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"button",value:function(e){var t="mui-disabled",n="Loading...",a="mui-spinner mui-spinner-white",i="left",r="reset",s="loading";function c(e,t){t.innerHTML=e}return(e===s||e===r)&&(this.forEach(function(o){if(o instanceof HTMLElement){var l=o.getAttribute("data-loading-text"),u=o.getAttribute("data-loading-icon"),m=o.getAttribute("data-loading-icon-position");!function(e,o,l){if(o.State||(o.ResetHTML=o.innerHTML,o.State="reset"),o.State!==e)if(o.State=e,l.loadingText||(l.loadingText=n),l.loadingIcon||(l.loadingIcon=a),l.loadingIconPosition||(l.loadingIconPosition=i),e===r)o.disabled=!1,o.classList.remove(t),c(o.ResetHTML,o);else if(e===s){o.disabled=!0,o.classList.add(t);var u="<span>"+l.loadingText+"</span>";"right"===l.loadingIconPosition?u+='&nbsp;<span class="'+l.loadingIcon+'"></span>':u='<span class="'+l.loadingIcon+'"></span>&nbsp;'+u,c(u,o)}}(e,o,{loadingText:l,loadingIcon:u,loadingIconPosition:m})}}),this)}}]),t}(Object(l.a)(Array)))(e)}},71:function(e,t,n){e.exports=n.p+"www.tmtpost.com.rss.e9640596922db9c9657396d4eec012c1.xml"},72:function(e,t,n){e.exports=n.p+"feed.iplaysoft.com.790f8a4184aae5f189d9f1fbb1f4a5ec.xml"},73:function(e,t,n){e.exports=n.p+"landiannews.com.feed.f91b36986dcd849ed8da9fd8cb586c8b.xml"},74:function(e,t,n){e.exports=n.p+"www.ithome.com.rss.6962638eebbbb0e36f73af9b3c4e53b9.xml"},75:function(e,t,n){e.exports=n.p+"ifanr.com.feed.c91c5aed5721ee9eaa3580f47e9f32ab.xml"},76:function(e,t,n){e.exports=n.p+"pingwest.com.feed.23f41b7fa2bb97b5c1a985547736c4eb.xml"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return I});var a=n(23),i=n.n(a),r=n(81),s=n(24),c=n(11),o=n(16),l=n(9),u=n.n(l),m=n(64),d=n.n(m),p=n(71),f=n.n(p),b=n(72),h=n.n(b),g=n(73),x=n.n(g),w=n(74),y=n.n(w),v=n(75),k=n.n(v),E=n(76),N=n.n(E),j=n(12),O=n.n(j),S=O.a,T=u.a.useState,L=u.a.useEffect,A=u.a.useRef;function I(e){var t=T(""),n=Object(c.a)(t,2),a=n[0],l=n[1],m=[],p=T([]),b=Object(c.a)(p,2),g=b[0],w=b[1],v=A(),E=A(),j=A(),S=A(),I=A(),H=A();function C(e,t){return function(){return Object(s.a)(i.a.mark(function e(t,n){var a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.a)(n).button("loading"),a=[],void 0!==t){e.next=6;break}e.next=10;break;case 6:return e.next=8,fetch(t).then(function(e){if(e.ok)return e.text();throw new Error("fetch failed")});case 8:s=e.sent,function(){var e=s;m.push(e);var t=d.a.parse(e);a.title=t.rss.channel.title,a.description=t.rss.channel.description,a.push.apply(a,Object(r.a)(JSON.parse(JSON.stringify(t.rss.channel.item)).map(function(e){try{e.description=O()("<div/>").append(e.description).text()||e.description}catch(e){}return e}))),Object(o.a)(n).button("reset"),M("success"),w(a)}();case 10:case"end":return e.stop()}},e)})).apply(this,arguments)}.apply(this,arguments)}return L(function(){try{if(void 0!==e.match.params.sitename&&a!==e.match.params.sitename)switch(document.title="React router App-rssreader-"+e.match.params.sitename,e.match.params.sitename){case"tmtpost":l(e.match.params.sitename),C(f.a,v.current);break;case"iplaysoft":l(e.match.params.sitename),C(h.a,E.current);break;case"landiannews":l(e.match.params.sitename),C(x.a,j.current);break;case"ithome":l(e.match.params.sitename),C(y.a,S.current);break;case"ifanr":l(e.match.params.sitename),C(k.a,I.current);break;case"pingwest":l(e.match.params.sitename),C(N.a,H.current)}}catch(e){}},[e]),L(function(){void 0!==e.match.params.sitename?document.title="React router App-rssreader-"+e.match.params.sitename:document.title="React router App-rssreader-"},[]),u.a.createElement("div",{className:""},u.a.createElement("h2",null,"\u5f02\u6b65fetch\u52a0\u8f7drss\u9605\u8bfb\u5668\u6f14\u793a"),u.a.createElement("p",null,"\u4f7f\u7528fast-xml-parser\u628axml\u8f6c\u6362\u6210json"),u.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light "},u.a.createElement("ul",{className:"demo"},u.a.createElement("button",{ref:v,"data-loading-icon":"mui-spinner mui-spinner-custom",className:"mui-btn mui-btn-royal mui-btn-outlined btn-lg",onClick:function(){location.hash="#/react-rssreader/tmtpost"}},"\u52a0\u8f7dtmtpost"),u.a.createElement("button",{ref:E,"data-loading-icon":"mui-spinner mui-spinner-custom",className:"mui-btn mui-btn-primary mui-btn-outlined btn-lg",onClick:function(){location.hash="#/react-rssreader/iplaysoft"}},"\u52a0\u8f7diplaysoft"),u.a.createElement("button",{ref:j,"data-loading-icon":"mui-spinner mui-spinner-custom",className:"mui-btn mui-btn-warning mui-btn-outlined btn-lg",onClick:function(){location.hash="#/react-rssreader/landiannews"}},"\u52a0\u8f7dlandiannews"),u.a.createElement("button",{ref:S,"data-loading-icon":"mui-spinner mui-spinner-custom",className:"mui-btn mui-btn-danger mui-btn-outlined btn-lg",onClick:function(){location.hash="#/react-rssreader/ithome"}},"\u52a0\u8f7dithome"),u.a.createElement("button",{ref:I,"data-loading-icon":"mui-spinner mui-spinner-custom",className:"mui-btn mui-btn-success mui-btn-outlined btn-lg",onClick:function(){location.hash="#/react-rssreader/ifanr"}},"\u52a0\u8f7difanr"),u.a.createElement("button",{ref:H,"data-loading-icon":"mui-spinner mui-spinner-custom",className:"mui-btn mui-btn-primary mui-btn-outlined btn-lg",onClick:function(){location.hash="#/react-rssreader/pingwest"}},"\u52a0\u8f7dpingwest"))),u.a.createElement("header",{className:"App-header"},u.a.createElement("div",null,u.a.createElement("h3",null,u.a.createElement("b",null,g.title)),u.a.createElement("p",null,g.description),u.a.createElement("ul",{className:"mui-table-view"},g.map(function(e,t){return u.a.createElement("li",{className:"mui-table-view-cell mui-media",key:t,style:{width:" 100%"}},u.a.createElement("div",{className:"mui-media-body"},u.a.createElement("b",null," ",e.title),u.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("p",{className:"mui-ellipsis"},e.link)),u.a.createElement("p",{className:"mui-ellipsis"},e.description)))})))))}function M(e){var t;switch(e){case"success":t="\u6210\u529f";break;case"primary":t="\u9996\u9009";break;case"danger":t="\u5931\u8d25";break;case"warning":t="\u8b66\u544a";break;default:return}var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)});S("#my\u5bfc\u822a\u680f").append(S('<div id="'.concat(n,'" class="alert alert-').concat(e,' alert-dismissible fade show">\n  <button type="button" class="close" data-dismiss="alert">&times;</button>\n  <strong>').concat(t,"!</strong> \u64cd\u4f5c").concat(t,"\u63d0\u793a\u4fe1\u606f\u3002\n  </div>")).fadeTo(5e3,.5,function(){S("#"+n).remove(),O()("#my\u4e3b\u4f53").css("padding-top",O()("#my\u5bfc\u822a\u680f").height())}))}}}]);