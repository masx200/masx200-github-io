(("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp=("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this).webpackJsonp||[]).push([[8],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return j});var a=t(87),i=t(8),c=t(7),r=t.n(c),l=t(64),o=t.n(l),s=t(71),u=t.n(s),m=t(72),d=t.n(m),p=t(73),b=t.n(p),f=t(74),x=t.n(f),g=t(75),h=t.n(g),w=t(76),E=t.n(w),v=t(9),y=t.n(v),k=t(12),S=t.n(k),C=y.a,G=[],J=[],N=r.a.useState,O=r.a.useEffect,W=r.a.useRef;function j(){var e=N(J),n=Object(i.a)(e,2),t=n[0],c=n[1],l=W(),s=W(),m=W(),p=W(),f=W(),g=W();function w(e,n){S()(n).button("loading");var t=[];void 0===e||fetch(e).then(function(e){return e.text()}).then(function(e){var i=e;G.push(i);var r=o.a.parse(i);t.title=r.rss.channel.title,t.description=r.rss.channel.description,t.push.apply(t,Object(a.a)(JSON.parse(JSON.stringify(r.rss.channel.item)).map(function(e){try{e.description=y()("<div/>").append(e.description).text()||e.description}catch(e){}return e}))),S()(n).button("reset"),function(e){var n;n="\u6210\u529f";var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)});C("#my\u5bfc\u822a\u680f").append(C('<div id="'.concat(t,'" class="alert alert-').concat(e,' alert-dismissible fade show">\n  <button type="button" class="close" data-dismiss="alert">&times;</button>\n  <strong>').concat(n,"!</strong> \u64cd\u4f5c").concat(n,"\u63d0\u793a\u4fe1\u606f\u3002\n  </div>")).fadeTo(5e3,.5,function(){C("#"+t).remove()}))}("success"),c(t)})}return O(function(){return document.title="React router App-rssreader",function(){J=t}}),r.a.createElement("div",{className:""},r.a.createElement("h2",null,"\u5f02\u6b65fetch\u52a0\u8f7drss\u9605\u8bfb\u5668\u6f14\u793a"),r.a.createElement("p",null,"\u4f7f\u7528fast-xml-parser\u628axml\u8f6c\u6362\u6210json"),r.a.createElement("nav",{class:"navbar navbar-expand-sm bg-light navbar-light "},r.a.createElement("ul",{class:"demo"},r.a.createElement("button",{ref:l,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-royal mui-btn-outlined btn-lg",onClick:function(){w(u.a,l.current)}},"\u52a0\u8f7dtmtpost"),r.a.createElement("button",{ref:s,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary mui-btn-outlined btn-lg",onClick:function(){w(d.a,s.current)}},"\u52a0\u8f7diplaysoft"),r.a.createElement("button",{ref:m,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-warning mui-btn-outlined btn-lg",onClick:function(){w(b.a,m.current)}},"\u52a0\u8f7dlandiannews"),r.a.createElement("button",{ref:p,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-danger mui-btn-outlined btn-lg",onClick:function(){w(x.a,p.current)}},"\u52a0\u8f7dithome"),r.a.createElement("button",{ref:f,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-success mui-btn-outlined btn-lg",onClick:function(){w(h.a,f.current)}},"\u52a0\u8f7difanr"),r.a.createElement("button",{ref:g,"data-loading-icon":"mui-spinner mui-spinner-custom",class:"mui-btn mui-btn-primary mui-btn-outlined btn-lg",onClick:function(){w(E.a,g.current)}},"\u52a0\u8f7dpingwest"))),r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("b",null,t.title)),r.a.createElement("p",null,t.description),r.a.createElement("ul",{class:"mui-table-view"},t.map(function(e,n){return r.a.createElement("li",{class:"mui-table-view-cell mui-media",key:n,style:{width:" 100%"}},r.a.createElement("div",{class:"mui-media-body"},r.a.createElement("b",null," ",e.title),r.a.createElement("a",{href:e.link,target:"_blank"},r.a.createElement("p",{class:"mui-ellipsis"},e.link)),r.a.createElement("p",{class:"mui-ellipsis"},e.description)))})))))}},71:function(e,n,t){e.exports=t.p+"www.tmtpost.com.rss.e9640596922db9c9657396d4eec012c1.xml"},72:function(e,n,t){e.exports=t.p+"feed.iplaysoft.com.790f8a4184aae5f189d9f1fbb1f4a5ec.xml"},73:function(e,n,t){e.exports=t.p+"landiannews.com.feed.f91b36986dcd849ed8da9fd8cb586c8b.xml"},74:function(e,n,t){e.exports=t.p+"www.ithome.com.rss.6962638eebbbb0e36f73af9b3c4e53b9.xml"},75:function(e,n,t){e.exports=t.p+"ifanr.com.feed.c91c5aed5721ee9eaa3580f47e9f32ab.xml"},76:function(e,n,t){e.exports=t.p+"pingwest.com.feed.23f41b7fa2bb97b5c1a985547736c4eb.xml"}}]);