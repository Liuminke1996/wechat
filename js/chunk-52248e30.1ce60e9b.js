(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52248e30"],{"0304":function(t,e,n){},"08ad":function(t,e,n){t.exports=n.p+"img/banner.af8c0306.png"},"16a3":function(t,e,n){t.exports=n.p+"img/line-wap.278b4e11.png"},"1de5":function(t,e,n){"use strict";var i=n("a47e"),s=n.n(i);s.a},"25ba":function(t,e,n){var i={"./about/banner-wap.png":"f27f","./cooperation/banner-wap.png":"d893","./home/banner-wap.png":"d428","./sw/banner-wap.png":"3a93","./watch/banner-wap.png":"fd7a"};function s(t){var e=a(t);return n(e)}function a(t){var e=i[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="25ba"},"3a93":function(t,e,n){t.exports=n.p+"img/banner-wap.a0e6a681.png"},"424d":function(t,e,n){"use strict";var i=n("7fca"),s=n.n(i);s.a},"442e":function(t,e,n){t.exports=n.p+"img/banner.19f87b7e.png"},"52f9":function(t,e,n){t.exports=n.p+"img/banner.73b91238.png"},"66ff":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner-box"},[i("div",{staticClass:"hidden-pc"},[i("img",{staticClass:"banner",attrs:{src:n("25ba")("./"+t.module+"/banner-wap.png"),alt:""}}),t._t("default")],2),i("div",{staticClass:"hidden-wap"},[i("img",{staticClass:"banner",attrs:{src:n("fcbe")("./"+t.module+"/banner.png"),alt:""}}),"/home"==t.$route.path?i("a",{staticClass:"home-page",attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=276631564&site=qq&menu=yes",target:"_blank"}}):t._e()])])},s=[],a={props:["module"]},o=a,r=(n("edf3"),n("2877")),l=Object(r["a"])(o,i,s,!1,null,"49a00cdf",null);e["a"]=l.exports},6968:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title  wow fadeInUp"},[n("span",{domProps:{innerHTML:t._s(t.name)}}),t._t("default")],2)},s=[],a=(n("cadf"),n("551c"),n("f751"),n("097d"),{props:["name"]}),o=a,r=(n("424d"),n("2877")),l=Object(r["a"])(o,i,s,!1,null,"f5e425e4",null);e["a"]=l.exports},6983:function(t,e,n){"use strict";var i=n("bc1b");e["a"]={mounted:function(){new i["WOW"]({live:!1}).init()}}},"7fca":function(t,e,n){},"8dbc":function(t,e,n){t.exports=n.p+"img/line.55aaa4be.png"},"93d0":function(t,e,n){t.exports=n.p+"img/banner.acf653cd.png"},a13e:function(t,e,n){t.exports=n.p+"img/banner.af731429.png"},a47e:function(t,e,n){},bc1b:function(t,e){(function(){var t,e,n,i,s,a=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var s;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(s=document.createEvent("CustomEvent"),s.initCustomEvent(t,e,n,i)):null!=document.createEventObject?(s=document.createEventObject(),s.eventType=t):s.eventName=t,s},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,s,a;for(a=this.keys,e=i=0,s=a.length;i<s;e=++i)if(n=a[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,s,a,o;for(o=this.keys,n=s=0,a=o.length;s<a;n=++s)if(i=o[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!==typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!==typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),s.test(e)&&e.replace(s,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},s=/(\-([a-z]){1})/g,this.WOW=function(){function s(t){null==t&&(t={}),this.scrollCallback=a(this.scrollCallback,this),this.scrollHandler=a(this.scrollHandler,this),this.resetAnimation=a(this.resetAnimation,this),this.start=a(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return s.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},s.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},s.prototype.start=function(){var e,n,i,s;if(this.stopped=!1,this.boxes=function(){var t,n,i,s;for(i=this.element.querySelectorAll("."+this.config.boxClass),s=[],t=0,n=i.length;t<n;t++)e=i[t],s.push(e);return s}.call(this),this.all=function(){var t,n,i,s;for(i=this.boxes,s=[],t=0,n=i.length;t<n;t++)e=i[t],s.push(e);return s}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(s=this.boxes,n=0,i=s.length;n<i;n++)e=s[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t(function(t){return function(e){var n,i,s,a,o;for(o=[],n=0,i=e.length;n<i;n++)a=e[n],o.push(function(){var t,e,n,i;for(n=a.addedNodes||[],i=[],t=0,e=n.length;t<e;t++)s=n[t],i.push(this.doSync(s));return i}.call(t));return o}}(this)).observe(document.body,{childList:!0,subtree:!0})},s.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},s.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},s.prototype.doSync=function(t){var e,n,i,s,a;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,s=t.querySelectorAll("."+this.config.boxClass),a=[],n=0,i=s.length;n<i;n++)e=s[n],o.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),a.push(this.scrolled=!0)):a.push(void 0);return a}},s.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},s.prototype.applyStyle=function(t,e){var n,i,s;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),s=t.getAttribute("data-wow-iteration"),this.animate(function(a){return function(){return a.customStyle(t,e,i,n,s)}}(this))},s.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),s.prototype.resetStyle=function(){var t,e,n,i,s;for(i=this.boxes,s=[],e=0,n=i.length;e<n;e++)t=i[e],s.push(t.style.visibility="visible");return s},s.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()},s.prototype.customStyle=function(t,e,n,i,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},s.prototype.vendors=["moz","webkit"],s.prototype.vendorSet=function(t,e){var n,i,s,a;for(n in i=[],e)s=e[n],t[""+n]=s,i.push(function(){var e,i,o,r;for(o=this.vendors,r=[],e=0,i=o.length;e<i;e++)a=o[e],r.push(t[""+a+n.charAt(0).toUpperCase()+n.substr(1)]=s);return r}.call(this));return i},s.prototype.vendorCSS=function(t,e){var n,s,a,o,r,l;for(r=i(t),o=r.getPropertyCSSValue(e),a=this.vendors,n=0,s=a.length;n<s;n++)l=a[n],o=o||r.getPropertyCSSValue("-"+l+"-"+e);return o},s.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},s.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},s.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},s.prototype.scrollHandler=function(){return this.scrolled=!0},s.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,s;for(i=this.boxes,s=[],e=0,n=i.length;e<n;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):s.push(t));return s}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},s.prototype.offsetTop=function(t){var e;while(void 0===t.offsetTop)t=t.parentNode;e=t.offsetTop;while(t=t.offsetParent)e+=t.offsetTop;return e},s.prototype.isVisible=function(t){var e,n,i,s,a;return n=t.getAttribute("data-wow-offset")||this.config.offset,a=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,s=a+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,i<=s&&e>=a},s.prototype.util=function(){return null!=this._util?this._util:this._util=new e},s.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},s}()}).call(this)},d410:function(t,e,n){},d428:function(t,e,n){t.exports=n.p+"img/banner-wap.40379dee.png"},d893:function(t,e,n){t.exports=n.p+"img/banner-wap.19cbcd33.png"},d9ac:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cooperation"},[i("banner",{attrs:{module:"cooperation"}}),i("vtitle",{staticClass:"title",attrs:{name:"为什么选择和财咖合作？"}}),i("div",{staticClass:"home-content flex flex-wrap flex-space center cooperation-list"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"box wow fadeInUp",attrs:{"data-wow-delay":n/4+"s"}},[i("span",{staticClass:"list-icon"}),i("p",{staticClass:"item-content-title",domProps:{innerHTML:t._s(e.contentTitle)}}),t._l(e.text.split("|"),function(e,n){return i("p",{key:n,staticClass:"item-text",domProps:{innerHTML:t._s(e)}})})],2)}),0),i("div",{staticClass:"step-two"},[i("vtitle",{staticClass:"title",attrs:{name:"合作流程"}}),i("div",{staticClass:"hidden-wap setp-box"},[i("img",{staticClass:"wow fadeIn",staticStyle:{width:"100%"},attrs:{src:n("8dbc"),alt:""}}),i("div",{staticClass:"full-box"},[i("div",{staticClass:"flex flex-space"},t._l(4,function(t,e){return i("div",{key:e,staticClass:"box wow fadeInUp",attrs:{"data-wow-delay":e/4+"s"}},[i("span",{staticClass:"icon"})])}),0)])]),i("div",{staticClass:"hidden-pc step-box"},[i("img",{staticClass:"wow fadeIn",staticStyle:{width:"100%"},attrs:{src:n("16a3"),alt:""}}),i("div",{staticClass:"full-box"},[i("div",{staticClass:"flex flex-space"},t._l(4,function(t,e){return i("div",{key:e,staticClass:"box wow fadeInUp",attrs:{"data-wow-delay":e/4+"s"}},[i("span",{staticClass:"icon"})])}),0)])])],1),i("div",{staticClass:"step-three"},[i("vtitle",{staticClass:"title",attrs:{name:"合作支持"}}),i("div",{staticClass:"flex-three-box flex flex-space center"},t._l(t.list1,function(e,n){return i("div",{key:n,staticClass:"box wow fadeInUp",attrs:{"data-wow-delay":n/4+"s"}},[i("p",{staticClass:"item-content-title",domProps:{innerHTML:t._s(e.contentTitle)}}),i("div",{staticClass:"flex flex-wrap flex-center"},[i("div",t._l(e.text.split("|"),function(e,n){return i("p",{key:n,staticClass:"item-text",domProps:{innerHTML:t._s(e)}})}),0)])])}),0)],1),i("div",{staticClass:"step-four"},[i("vtitle",{staticClass:"need-title",attrs:{name:"我要合作"}}),i("div",{staticClass:"step-content"},[i("input",{staticClass:"wow fadeInUp",attrs:{type:"text",placeholder:"姓名","data-wow-delay":"0s"}}),i("input",{staticClass:"wow fadeInUp",attrs:{type:"text",placeholder:"地址","data-wow-delay":"0.5s"}}),i("input",{staticClass:"wow fadeInUp",attrs:{type:"text",placeholder:"公司名字","data-wow-delay":"1s"}}),i("input",{staticClass:"wow fadeInUp",attrs:{type:"text",placeholder:"电话号","data-wow-delay":"1.5s"}}),i("div",{staticClass:"wow fadeInUp center center-btn",attrs:{"data-wow-delay":"2s"}},[i("span",{staticStyle:{cursor:"pointer"},on:{click:t.submit}},[t._v("提交")])])])],1),i("transition-group",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDialog,expression:"showDialog"}],key:"dialog",staticClass:"dialog flex flex-center flex-wrap "},[i("img",{attrs:{src:n("f083"),alt:""}}),i("div",[i("p",[t._v("您的信息已提交，我们的商务经理会")]),i("p",[t._v("在24小时之内联系您，非常感谢！")])]),i("img",{staticClass:"right-close",attrs:{src:n("eccb"),alt:""},on:{click:t.submit}})])])],1)},s=[],a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("66ff")),o=n("6968"),r=n("6983"),l={data:function(){return{showDialog:!1,canvasLoad:!1,list:[{contentTitle:"极强吸引力",text:"50%的成本|给客户带来200%的效果"},{contentTitle:"省心＋省力",text:"后续技术与服务支持|均由财咖提供"},{contentTitle:"专业的团队",text:"服务质量极高|多行业标杆企业的共同选择"},{contentTitle:"持续的收益",text:"续约率高达99%|每年可持续获益"},{contentTitle:"有效的支撑",text:"全方位培训＋技术服务支持|＋宣传支持"}],list1:[{contentTitle:"培训支持",text:"服务、产品和|销售专业知识培训"},{contentTitle:"技术与服务支持",text:"智能托管服务和|智能财税软件问题实时解答"},{contentTitle:"宣传支持",text:"品牌宣传与推广|线上线下宣传支持"}],activeIndex:0}},mixins:[r["a"]],components:{vtitle:o["a"],banner:a["a"]},methods:{submit:function(){this.showDialog=!this.showDialog}}},c=l,u=(n("e047"),n("1de5"),n("2877")),p=Object(u["a"])(c,i,s,!1,null,"7af2268c",null);e["default"]=p.exports},e047:function(t,e,n){"use strict";var i=n("d410"),s=n.n(i);s.a},eccb:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAAEV95QVAAAABGdBTUEAALGPC/xhBQAAAM1JREFUGBldjiEOwkAQRbsrMbVwAAIGjaMCi4JkTwBdheUWeFrTEyA5AGdAIhGYShJExfL/tLMpnWQzf2bezN+kKIp5olGWZaa6y7GlIBpnmUG8VDwpIkqhBbIMjaAtxcaedZ7nd65dWGig3oiGY02BfMKbKMCNjzasEiGEKfRDqOEK6lp+gNUM5NUYsxP3eLT1Qf+A+Sp+l/P+EoZLhbz3b87/YDZoD+gIOcLb9p0i3EFip5f6TlwygBbW2lmapjfn3JfXh1FV1bhpmvUPHSF2r1Oc/PAAAAAASUVORK5CYII="},edf3:function(t,e,n){"use strict";var i=n("0304"),s=n.n(i);s.a},f083:function(t,e,n){t.exports=n.p+"img/success.7da6fdf6.png"},f27f:function(t,e,n){t.exports=n.p+"img/banner-wap.a78e5b1a.png"},fcbe:function(t,e,n){var i={"./about/banner.png":"52f9","./cooperation/banner.png":"08ad","./home/banner.png":"93d0","./sw/banner.png":"442e","./watch/banner.png":"a13e"};function s(t){var e=a(t);return n(e)}function a(t){var e=i[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="fcbe"},fd7a:function(t,e,n){t.exports=n.p+"img/banner-wap.e3f5ed0c.png"}}]);