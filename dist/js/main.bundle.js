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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('App started!');\r\n\r\n//https://github.com/buzinas/simple-scrollbar/blob/master/simple-scrollbar.js\r\n\r\n;(function(root, factory) {\r\n    if (true) {\r\n      module.exports = factory(window, document)\r\n    } else {}\r\n  })(this, function(w, d) {\r\n    var raf = w.requestAnimationFrame || w.setImmediate || function(c) { return setTimeout(c, 0); };\r\n  \r\n    function initEl(el) {\r\n      if (Object.prototype.hasOwnProperty.call(el, 'data-simple-scrollbar')) return;\r\n      Object.defineProperty(el, 'data-simple-scrollbar', { value: new SimpleScrollbar(el) });\r\n    }\r\n  \r\n    // Mouse drag handler\r\n    function dragDealer(el, context) {\r\n      var lastPageY;\r\n  \r\n      el.addEventListener('mousedown', function(e) {\r\n        lastPageY = e.pageY;\r\n        el.classList.add('ss-grabbed');\r\n        d.body.classList.add('ss-grabbed');\r\n  \r\n        d.addEventListener('mousemove', drag);\r\n        d.addEventListener('mouseup', stop);\r\n  \r\n        return false;\r\n      });\r\n  \r\n      function drag(e) {\r\n        var delta = e.pageY - lastPageY;\r\n        lastPageY = e.pageY;\r\n  \r\n        raf(function() {\r\n          context.el.scrollTop += delta / context.scrollRatio;\r\n        });\r\n      }\r\n  \r\n      function stop() {\r\n        el.classList.remove('ss-grabbed');\r\n        d.body.classList.remove('ss-grabbed');\r\n        d.removeEventListener('mousemove', drag);\r\n        d.removeEventListener('mouseup', stop);\r\n      }\r\n    }\r\n  \r\n    // Constructor\r\n    function ss(el) {\r\n      this.target = el;\r\n  \r\n      this.direction = w.getComputedStyle(this.target).direction;\r\n  \r\n      this.bar = '<div class=\"ss-scroll\">';\r\n  \r\n      this.wrapper = d.createElement('div');\r\n      this.wrapper.setAttribute('class', 'ss-wrapper');\r\n  \r\n      this.el = d.createElement('div');\r\n      this.el.setAttribute('class', 'ss-content');\r\n  \r\n      if (this.direction === 'rtl') {\r\n        this.el.classList.add('rtl');\r\n      }\r\n  \r\n      this.wrapper.appendChild(this.el);\r\n  \r\n      while (this.target.firstChild) {\r\n        this.el.appendChild(this.target.firstChild);\r\n      }\r\n      this.target.appendChild(this.wrapper);\r\n  \r\n      this.target.insertAdjacentHTML('beforeend', this.bar);\r\n      this.bar = this.target.lastChild;\r\n  \r\n      dragDealer(this.bar, this);\r\n      this.moveBar();\r\n  \r\n      w.addEventListener('resize', this.moveBar.bind(this));\r\n      this.el.addEventListener('scroll', this.moveBar.bind(this));\r\n      this.el.addEventListener('mouseenter', this.moveBar.bind(this));\r\n  \r\n      this.target.classList.add('ss-container');\r\n  \r\n      var css = w.getComputedStyle(el);\r\n        if (css['height'] === '0px' && css['max-height'] !== '0px') {\r\n          el.style.height = css['max-height'];\r\n      }\r\n    }\r\n  \r\n    ss.prototype = {\r\n      moveBar: function(e) {\r\n        var totalHeight = this.el.scrollHeight,\r\n            ownHeight = this.el.clientHeight,\r\n            _this = this;\r\n  \r\n        this.scrollRatio = ownHeight / totalHeight;\r\n  \r\n        var isRtl = _this.direction === 'rtl';\r\n        var right = isRtl ?\r\n          (_this.target.clientWidth - _this.bar.clientWidth + 18) :\r\n          (_this.target.clientWidth - _this.bar.clientWidth) * -1;\r\n  \r\n        raf(function() {\r\n          // Hide scrollbar if no scrolling is possible\r\n          if(_this.scrollRatio >= 1) {\r\n            _this.bar.classList.add('ss-hidden')\r\n          } else {\r\n            _this.bar.classList.remove('ss-hidden')\r\n            _this.bar.style.cssText = 'height:' + Math.max(_this.scrollRatio * 100, 10) + '%; top:' + ((_this.el.scrollTop / totalHeight ) * 90 + 1.5) + '%;right:' + (right + 10)  + 'px;';\r\n          }\r\n        });\r\n      }\r\n    }\r\n  \r\n    function initAll() {\r\n      var nodes = d.querySelectorAll('*[ss-container]');\r\n  \r\n      for (var i = 0; i < nodes.length; i++) {\r\n        initEl(nodes[i]);\r\n      }\r\n    }\r\n  \r\n    d.addEventListener('DOMContentLoaded', initAll);\r\n    ss.initEl = initEl;\r\n    ss.initAll = initAll;\r\n  \r\n    var SimpleScrollbar = ss;\r\n    return SimpleScrollbar;\r\n  });\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\user\\projects\\test-idap\\src\\js\\main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js?");

/***/ })

/******/ });