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
  return "Lorem ipsum blablabla";
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
  $('#paragraph').html(helloModule_1.fp);
});

},{"./helloModule":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL3RzL2hlbGxvTW9kdWxlLnRzIiwic3JjL2Fzc2V0cy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsU0FBZ0IsYUFBaEIsR0FBNkI7QUFDekIsU0FBTyxjQUFQO0FBQ0g7O0FBRkQsT0FBQSxDQUFBLGFBQUEsR0FBQSxhQUFBOztBQUlBLFNBQVMsYUFBVCxHQUFzQjtBQUNsQixTQUFPLHVCQUFQO0FBQ0g7O0FBRXdCLE9BQUEsQ0FBQSxFQUFBLEdBQUEsYUFBQTs7Ozs7Ozs7O0FDUnpCLElBQUEsYUFBQSxHQUFBLE9BQUEsQ0FBQSxlQUFBLENBQUE7QUFFQTs7O0FBQ0EsQ0FBQyxDQUFDLFlBQUE7QUFDRSxFQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLElBQXBCLENBQXlCLGFBQUEsQ0FBQSxhQUFBLEVBQXpCO0FBQ0EsRUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCLENBQXFCLGFBQUEsQ0FBQSxFQUFyQjtBQUNILENBSEEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsb1dvcmxkKCkge1xyXG4gICAgcmV0dXJuIFwiSGVsbG8gV29ybGQhXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxQYXJhZ3JhcGgoKSB7XHJcbiAgICByZXR1cm4gXCJMb3JlbSBpcHN1bSBibGFibGFibGFcIjtcclxufVxyXG5cclxuZXhwb3J0IHtmaWxsUGFyYWdyYXBoIGFzIGZwfSIsImltcG9ydCB7IHNheUhlbGxvV29ybGQsIGZwIH0gZnJvbSAnLi9oZWxsb01vZHVsZSc7XHJcblxyXG4vKiBEb2N1bWVudCByZWFkeSAqL1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI2hlbGxvV29ybGQgaDEnKS5odG1sKHNheUhlbGxvV29ybGQoKSk7XHJcbiAgICAkKCcjcGFyYWdyYXBoJykuaHRtbChmcCk7XHJcbn0pIl19
