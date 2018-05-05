/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

;(function($, window, document,undefined) {
    'use strict'
    var Step=function(ele,opt){
        this.$element=ele,
            this.defaults={
                barBackground:"#ddd",
                titleColor:"#ddd",
                tipColor:"#000",
                tipStep:"#ddd",
                title:["第一步","第二步","第三步","第四步","第五步"],
                index:1,
            },
            this.options = $.extend({}, this.defaults, opt)
    }
    Step.prototype = {
        init: function(){
            var content="<div class='contant_step'><div class='line_bar'></div><ul class='content_box'></ul></div>";
            var a=this.$element.append(content);
            var title=this.options.title;
            var list = '';
            for(var i=0;i<title.length;i++){
                list+="<li >"+
                    "  <p class='title'>"+title[i]+"</p>"+
                    "  <div><p class='tip'>"+(i+1)+"</p><p class='bar'></p></div>"+
                    "</li>"
            }
            $(".content_box").append(list);
            a.find(".line_bar").css({
                background:this.options.barBackground
            });
            a.find(".title").css({
                color:this.options.titleColor
            });
            a.find(".tip").css({
                color:this.options.tipColor
            });
            a.find(".bar").css({
                color:this.options.tipStep
            });
            var indexs=this.options.index
            if(indexs<1 || indexs>title.length){
                alert("index值必须在1—"+title.length+"之间");
            }else{
                a.find(".content_box li").eq(this.options.index).prevAll().addClass("active");}

        },
        previous: function(){
            var self = this,
                ele = self.$element;
            var index = ele.find("li.active").length;
            if (index == 1) {
                return false
            }
            ele.find("li").eq(index - 1).removeClass("active");
        },
        next:function(){
            var self = this,
                ele = self.$element;
            var index = ele.find("li.active").length;
            if (index == ele.find("li").length) {
                return;
            }
            ele.find("li").eq(index).addClass("active");
        },
        num:function(step){
            var self = this,
                ele = self.$element;
            if (step < 0 || step > ele.find("li").length) {
                return false;
            }else{
                ele.find("li").removeClass("active");
                var $target = ele.find("li").eq(step - 1);
                $target.addClass("active");
                $target.prevAll("li").addClass("active");
            }
        }
    }
    $.fn.stepBar=function(options){
        var stepBar = new Step(this, options);
        return this.each(function () {
            /*通过对参数的判断，使用函数*/
            if (typeof(options) == 'string') {
                switch(options){
                    case 'previous':
                        stepBar.previous();
                        break;
                    case 'next':
                        stepBar.next();
                        break;
                }
            }else if (typeof(options)=="number"){
                stepBar.num(options);
            }else{
                stepBar.init();
            }
        });
    }
})(jQuery, window, document);

/***/ })

/******/ });