(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f5f8202"],{b2a2:function(t,n,s){},eaea:function(t,n,s){"use strict";var e=s("b2a2"),a=s.n(e);a.a},fdc8:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"password"},[s("van-nav-bar",{attrs:{title:"支付密码","left-arrow":""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"btns"},[s("van-button",{attrs:{round:""},on:{click:function(n){t.toSetPassword(1)}}},[t._v("忘了")]),s("van-button",{attrs:{round:"",type:"danger"},on:{click:function(n){t.toSetPassword(2)}}},[t._v("记得")])],1)])],1)},a=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"text"},[t._v("您还记得"),s("span",{staticClass:"bold"},[t._v("当前账号的支付密码？")])])}],o={name:"password",components:{},data:function(){return{value:"",showKeyboard:!0,showPassword:!1}},computed:{},mounted:function(){},created:function(){},watch:{$route:""},methods:{onInput:function(t){this.value=(this.value+t).slice(0,6)},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},onClickLeft:function(){this.$util.goBack(this)},toSetPassword:function(t){1==t||this.$router.push("setPassword")}}},i=o,c=(s("eaea"),s("2877")),u=Object(c["a"])(i,e,a,!1,null,null,null);u.options.__file="index.vue";n["default"]=u.exports}}]);