!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="./",n(n.s=22)}({0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o={install:function(e,n){e.directive("chat-scroll",r.a)}};n.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},1:function(e,n,t){"use strict";var r=function(e){e.scrollTop=e.scrollHeight},o={bind:function(e,n){new MutationObserver(function(n){1==n[n.length-1].addedNodes.length&&r(e)}).observe(e,{childList:!0})},inserted:r};n.a=o},22:function(e,n,t){e.exports=t(0)}});