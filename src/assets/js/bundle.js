(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHelloWorld() {
    return "Hello World!";
}
exports.sayHelloWorld = sayHelloWorld;
function fillParagraph() {
    return "Lorem ipsum blablabla";
}
exports.fp = fillParagraph;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helloModule_1 = require("./helloModule");
/* Document ready */
$(function () {
    $('#helloWorld h1').html(helloModule_1.sayHelloWorld());
    $('#paragraph').html(helloModule_1.fp);
});
},{"./helloModule":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL3RzL2hlbGxvTW9kdWxlLnRzIiwic3JjL2Fzc2V0cy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFnQixhQUFhO0lBQ3pCLE9BQU8sY0FBYyxDQUFDO0FBQzFCLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQVMsYUFBYTtJQUNsQixPQUFPLHVCQUF1QixDQUFDO0FBQ25DLENBQUM7QUFFd0IsMkJBQUU7Ozs7QUNSM0IsNkNBQWtEO0FBRWxELG9CQUFvQjtBQUNwQixDQUFDLENBQUM7SUFDRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQWEsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG9Xb3JsZCgpIHtcclxuICAgIHJldHVybiBcIkhlbGxvIFdvcmxkIVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsUGFyYWdyYXBoKCkge1xyXG4gICAgcmV0dXJuIFwiTG9yZW0gaXBzdW0gYmxhYmxhYmxhXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZmlsbFBhcmFncmFwaCBhcyBmcH0iLCJpbXBvcnQgeyBzYXlIZWxsb1dvcmxkLCBmcCB9IGZyb20gJy4vaGVsbG9Nb2R1bGUnO1xyXG5cclxuLyogRG9jdW1lbnQgcmVhZHkgKi9cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJyNoZWxsb1dvcmxkIGgxJykuaHRtbChzYXlIZWxsb1dvcmxkKCkpO1xyXG4gICAgJCgnI3BhcmFncmFwaCcpLmh0bWwoZnApO1xyXG59KSJdfQ==
