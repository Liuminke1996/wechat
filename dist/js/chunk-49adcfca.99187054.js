(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49adcfca"],{"6a36":function(t,e,n){},"7f4a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bindPhone"},[n("van-nav-bar",{attrs:{title:"绑定手机号码","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[t._v("手机号")]),n("div",{staticClass:"input"},[n("van-field",{attrs:{placeholder:"输入手机号码"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t.isSendSms?n("div",{staticClass:"send time"},[n("span",[t._v(t._s(t.count)+"s")])]):n("div",{staticClass:"send",on:{click:t.sendSms}},[n("span",[t._v("发送验证码")])])],1),n("div",{staticClass:"title"},[t._v("验证码")]),n("div",{staticClass:"input"},[n("van-field",{attrs:{placeholder:"输入短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),n("div",{staticClass:"text-center"},[n("van-button",{attrs:{round:"",type:"danger"}},[t._v("确认绑定")])],1)])],1)},i=[],a={name:"bindPhone",components:{},data:function(){return{mobile:"",code:"",sendType:253237,count:120,isSendSms:!1}},computed:{},mounted:function(){},created:function(){},watch:{},methods:{settime:function(){var t=this;0==t.count?(t.isSendSms=!1,t.count=120):(t.isSendSms=!0,t.count=t.count-1,setTimeout(function(){t.settime()},1e3))},onClickLeft:function(){this.$util.goBack(this)}}},c=a,o=(n("e87d"),n("2877")),l=Object(o["a"])(c,s,i,!1,null,null,null);l.options.__file="index.vue";e["default"]=l.exports},e87d:function(t,e,n){"use strict";var s=n("6a36"),i=n.n(s);i.a}}]);