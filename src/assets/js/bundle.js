!function l(u,i,f){function a(r,e){if(!i[r]){if(!u[r]){var o="function"==typeof require&&require;if(!e&&o)return o(r,!0);if(c)return c(r,!0);var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}var n=i[r]={exports:{}};u[r][0].call(n.exports,function(e){return a(u[r][1][e]||e)},n,n.exports,l,u,i,f)}return i[r].exports}for(var c="function"==typeof require&&require,e=0;e<f.length;e++)a(f[e]);return a}({1:[function(e,r,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.sayHelloWorld=function(){return"Hello World!"},o.fp=function(){return"Lorem ipsum blablabla"}},{}],2:[function(e,r,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=e("./helloModule");$(function(){$("#helloWorld h1").html(t.sayHelloWorld()),$("#paragraph").html(t.fp)})},{"./helloModule":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
