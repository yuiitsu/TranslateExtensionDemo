"use strict";var Model={default:{},data:{},set:function(t,a){switch(Object.prototype.toString.call(a)){case"[object Object]":this.default[t]=Object.assign({},a),this.data[t]=Object.assign({},a);break;case"[object Array]":this.default[t]=Object.assign([],a),this.data[t]=Object.assign([],a);break;default:this.default[t]=a,this.data[t]=a}return this},get:function(t){return this.data[t]},watch:function(a,e){var s=this;Object.defineProperty(this.default,a,{set:function(t){s.data[a]=t,e(t)}})},object_length:function(t){var a=0;for(var e in t)a++;return a}};