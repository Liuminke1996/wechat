(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)r=c[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-37dfa048":"fdd1c32a","chunk-49405873":"3918d810","chunk-49a3892c":"fc10d4f9","chunk-592a6ad1":"8e0b7199","chunk-5c601d80":"a2dd14db","chunk-79d64146":"9763b422","chunk-e3ffad12":"66d7bd39"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-37dfa048":1,"chunk-49405873":1,"chunk-49a3892c":1,"chunk-592a6ad1":1,"chunk-5c601d80":1,"chunk-79d64146":1,"chunk-e3ffad12":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-37dfa048":"c0b81587","chunk-49405873":"57931cde","chunk-49a3892c":"4a11fb7c","chunk-592a6ad1":"5174737e","chunk-5c601d80":"71978c5d","chunk-79d64146":"7ca95b5f","chunk-e3ffad12":"c2269412"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1543:function(e,t,n){},"1cc0":function(e,t,n){},"1fb3":function(e,t,n){"use strict";var a=n("1cc0"),r=n.n(a);r.a},"343e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"App"},c=i,s=n("2877"),u=Object(s["a"])(c,r,o,!1,null,null,null),l=u.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-container"},[n("tabbar"),n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view",{staticClass:"router-view"})],1),n("footbar")],1)},p=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-pc hidden-wap"},[a("logo"),a("navbar",{staticClass:"header-navbar"}),a("div",{directives:[{name:"show",rawName:"v-show",value:"/software"!=e.$route.path,expression:"$route.path!='/software'"}],staticClass:"header-right"},[a("img",{staticClass:"phone",attrs:{src:n("9347"),alt:""}}),a("span",[e._v("400-050-6900")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/software"==e.$route.path,expression:"$route.path=='/software'"}],staticClass:"header-right"},[a("router-link",{staticClass:"software-login",attrs:{to:"/login"}},[e._v("登录")])],1)],1),a("div",{staticClass:"header-wap hidden-pc"},[a("logo",{staticClass:"flex-1"}),a("div",{staticClass:"menu",class:{"menu-open":e.isActive},on:{click:e.toggleMenu}},[a("span"),a("span"),a("span")]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("navbar",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"nav",nativeOn:{click:function(t){return e.toggleMenu(t)}}})],1)],1)])},v=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-container"},e._l(e.nav,function(t,a){return n("router-link",{key:a,attrs:{to:t.url},domProps:{innerHTML:e._s(t.name)}})}),1)},g=[],b={data:function(){return{nav:[{name:"首页",url:"/home"},{name:"软件",url:"/software"},{name:"行业洞察",url:"/watch"},{name:"渠道合作",url:"/cooperation"},{name:"关于我们",url:"/about"}]}},components:{}},k=b,A=Object(s["a"])(k,m,g,!1,null,"63b6f4d7",null),y=A.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-logo"},[n("img",{attrs:{src:"img/logo.png",alt:""}}),n("span",[e._v("智能财税托管服务")])])}],_={},x=_,E=(n("c4f0"),Object(s["a"])(x,C,w,!1,null,"8c95a6a8",null)),M=E.exports,L={data:function(){return{isActive:!1}},components:{navbar:y,logo:M},methods:{toggleMenu:function(){this.isActive=!this.isActive}}},O=L,P=(n("8212"),Object(s["a"])(O,h,v,!1,null,"8cd00c3c",null)),B=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"hidden-pc"},[e._l(e.footerList.slice(0,2),function(t,a){return n("div",{key:a,staticClass:"foot-list"},[n("p",{staticClass:"key",domProps:{innerHTML:e._s(t.key)}}),n("p",{staticClass:"value",domProps:{innerHTML:e._s(t.value)}})])}),n("div",{staticClass:"foot-list footer-img-item"},[n("span",{staticClass:"footer-img-key",domProps:{innerHTML:e._s(e.footerList[2].value+":")}}),n("img",{staticClass:"footer-img",attrs:{src:e.footerList[2].key,alt:""}})])],2),n("div",{staticClass:"hidden-wap"},e._l(e.footerList,function(t,a){return n("div",{key:a,staticClass:"foot-list"},["img"==t.type?n("img",{staticClass:"footer-img",attrs:{src:t.key,alt:""}}):n("p",{staticClass:"key",domProps:{innerHTML:e._s(t.key)}}),n("p",{staticClass:"value",class:{"img-value":"img"==t.type},domProps:{innerHTML:e._s(t.value)}})])}),0),e._m(0)])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-copyright"},[n("p",{staticClass:"hidden-wap"},[e._v("友情链接：财咖网络")]),n("p",[e._v("版权所有 北京财咖咨询有限公司 京ICP备17036817号-2")])])}],j={data:function(){return{footerList:[{key:"联系方式",value:"caika@caikazx.com 400-050-6900"},{key:"公司地址",value:"北京市朝阳区八里庄街道住邦2000 4号楼7层"},{key:"img/footer-logo.png",type:"img",value:"友情链接"}]}},components:{}},N=j,Y=(n("1fb3"),Object(s["a"])(N,T,I,!1,null,"18b96abf",null)),q=Y.exports,J={name:"Layout",components:{tabbar:B,footbar:q}},R=J,U=(n("79dd"),Object(s["a"])(R,d,p,!1,null,"0645413b",null)),S=U.exports;a["a"].use(f["a"]);var V=new f["a"]({routes:[{path:"/",name:"layout",component:S,redirect:"/home",children:[{path:"home",component:function(){return n.e("chunk-79d64146").then(n.bind(null,"16c0"))}},{path:"software",component:function(){return n.e("chunk-e3ffad12").then(n.bind(null,"9a06"))}},{path:"watch",component:function(){return n.e("chunk-49a3892c").then(n.bind(null,"8fcc"))}},{path:"watchDetail",component:function(){return n.e("chunk-37dfa048").then(n.bind(null,"ebd3"))}},{path:"cooperation",component:function(){return n.e("chunk-592a6ad1").then(n.bind(null,"d9ac"))}},{path:"about",component:function(){return n.e("chunk-49405873").then(n.bind(null,"0737"))}}]},{name:"login",path:"/login",component:function(){return n.e("chunk-5c601d80").then(n.bind(null,"d9c9"))}}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),W=(n("1543"),n("f5df"),n("7212")),D=n.n(W);n("77ed"),n("dfa4");a["a"].use(D.a),a["a"].config.productionTip=!1,new a["a"]({router:V,render:function(e){return e(l)}}).$mount("#app")},"79dd":function(e,t,n){"use strict";var a=n("f757"),r=n.n(a);r.a},8212:function(e,t,n){"use strict";var a=n("e979"),r=n.n(a);r.a},9347:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAArlJREFUOBGVVU1IVFEUvuc+Bx1T2rTIImpmUKn2gdCiglRGEAuEIqQifM+C2iVhi2ZV1KofCFQCQXFhi1a+qVAMrDSIdq2KEXRRLdqMoU3j3NN3rr7Hk5zRzuad+33fOZx7z7n3KRW1E5mZmmBN4iR7J/NM9FMdvTZTJ4BeKa4si2Mt0TvJoikkXX8xAMMv2LVEr/9LgOb+t/VQ+tMhu+FoJm6xeaLMP0BABgTq2SuYrVIcIYiowMzVlHAnH5Cic1gcqI3V1n9+etJWIcKoacWqSUTIs1owq41RMurrheGOLiL1HgFxY9RclIz6YT0CBsWKr7X2jDEDcA86NbR7k1AEYinPv24MPxbfbkbxhD26hOu/ErCS6WI+36mYW9GM2YpCLvEYCurBzo9DfL+cuMoSxowqHevJDbaOlRNqnN93IYmLZ8qJBNcX96X3i8Oszqb6/FPib2U6kyFDWncIaUo8nfSy6UCYcv3+wA/PUUDDbDeDTk0pphFW2Kii+YXhdEsolEiIuyB+EWTRpC8ZNiMQv9kkFEH3BDsfp7JLKLpB1trRl3fV6edWiM5MgOgWAsBsPFabLjduoqlkJNcINe9RpF1ivmtHExGY5XfxWLz9fxNrJIvJyCo00SZGIzFYS7h0R4qlQqpSNVtxVcR0G4meWVISc3EU/gDux72tArbD7Bmm3OwNnP6jqBgtvJAb6hiPYjvxw+4lvdeNitc+4QztyyXBIJcdqjr9Zajtw06SbcRslqa8rIubPBhFcaZrWN/MDaUfCn7YfdnwW5kZTEYzbvKcU63avz5J54ULK5RF1BJe9goaJYmdKC6+vAaYAs8oziDpoXWe5p0a1VY24bpIqaarU8li6c8YAlsCLPjaxJr68OzckcRYZ7dNGATLV/4Zi99WzuO+deJWHyM7v/QDYzeeG07fEs1fCPIW/G2+fGkAAAAASUVORK5CYII="},c4f0:function(e,t,n){"use strict";var a=n("343e"),r=n.n(a);r.a},e979:function(e,t,n){},f757:function(e,t,n){}});