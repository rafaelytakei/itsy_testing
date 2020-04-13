(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function sayHelloWorld() {
  return "Hello World!";
}

exports.sayHelloWorld = sayHelloWorld;

function fillParagraph() {
  return "Lorem ipsum blablabla test";
}

exports.fp = fillParagraph;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var helloModule_1 = require("./helloModule");
/* Document ready */


$(function () {
  $('#helloWorld h1').html(helloModule_1.sayHelloWorld());
  $('#paragraph').html('wololo');
});

},{"./helloModule":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL3RzL2hlbGxvTW9kdWxlLnRzIiwic3JjL2Fzc2V0cy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsU0FBZ0IsYUFBaEIsR0FBNkI7QUFDekIsU0FBTyxjQUFQO0FBQ0g7O0FBRkQsT0FBQSxDQUFBLGFBQUEsR0FBQSxhQUFBOztBQUlBLFNBQVMsYUFBVCxHQUFzQjtBQUNsQixTQUFPLDRCQUFQO0FBQ0g7O0FBRXdCLE9BQUEsQ0FBQSxFQUFBLEdBQUEsYUFBQTs7Ozs7Ozs7O0FDUnpCLElBQUEsYUFBQSxHQUFBLE9BQUEsQ0FBQSxlQUFBLENBQUE7QUFFQTs7O0FBQ0EsQ0FBQyxDQUFDLFlBQUE7QUFDRSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLElBQXBCLENBQXlCLGFBQUEsQ0FBQSxhQUFBLEVBQXpCO0FBQ0EsRUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCLENBQXFCLFFBQXJCO0FBQ0gsQ0FIQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvV29ybGQoKSB7XHJcbiAgICByZXR1cm4gXCJIZWxsbyBXb3JsZCFcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFBhcmFncmFwaCgpIHtcclxuICAgIHJldHVybiBcIkxvcmVtIGlwc3VtIGJsYWJsYWJsYSB0ZXN0XCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZmlsbFBhcmFncmFwaCBhcyBmcH0iLCJpbXBvcnQgeyBzYXlIZWxsb1dvcmxkLCBmcCB9IGZyb20gJy4vaGVsbG9Nb2R1bGUnO1xyXG5cclxuLyogRG9jdW1lbnQgcmVhZHkgKi9cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJyNoZWxsb1dvcmxkIGgxJykuaHRtbChzYXlIZWxsb1dvcmxkKCkpO1xyXG4gICAgJCgnI3BhcmFncmFwaCcpLmh0bWwoJ3dvbG9sbycpO1xyXG59KSJdfQ==
