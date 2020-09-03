module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Launch/Launch.js":
/*!*************************************!*\
  !*** ./components/Launch/Launch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Launch; });\n/* harmony import */ var _Launch_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Launch.module.css */ \"./components/Launch/Launch.module.css\");\n/* harmony import */ var _Launch_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Launch_module_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/solo/Desktop/sirsoco/socodezine/socodezine/components/Launch/Launch.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction Launch() {\n  const {\n    0: date,\n    1: setDay\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    day: \"\",\n    hour: \"\",\n    minutes: \"\",\n    seconds: \"\"\n  });\n\n  const countFunc = () => {\n    //date for counter\n    var countDownDate = new Date('Sep 10, 2020 00:00:00').getTime(); //current date\n\n    var now = new Date().getTime(); //updated time\n\n    var distance = countDownDate - now; // Time calculations for days, hours, and minutes and seconds \n\n    var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n    var second = Math.floor(distance % (1000 * 60) / 1000);\n    setDay({\n      day: days,\n      hour: hours,\n      minutes: minutes,\n      seconds: second\n    });\n  }; // Update the count down every 1 second\n\n\n  var x = setInterval(countFunc);\n  return __jsx(\"body\", {\n    className: _Launch_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.background,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Launch_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.timerdiv,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: _Launch_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.timer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \" 0\", date.day, \":0\", date.hour, \":\", date.minutes, \":\", date.seconds)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaC9MYXVuY2guanM/MTRmNCJdLCJuYW1lcyI6WyJMYXVuY2giLCJkYXRlIiwic2V0RGF5IiwidXNlU3RhdGUiLCJkYXkiLCJob3VyIiwibWludXRlcyIsInNlY29uZHMiLCJjb3VudEZ1bmMiLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsInNlY29uZCIsIngiLCJzZXRJbnRlcnZhbCIsInN0eWxlcyIsImJhY2tncm91bmQiLCJ0aW1lcmRpdiIsInRpbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFpQkMsc0RBQVEsQ0FBQztBQUM1QkMsT0FBRyxFQUFFLEVBRHVCO0FBRTVCQyxRQUFJLEVBQUUsRUFGc0I7QUFHNUJDLFdBQU8sRUFBRSxFQUhtQjtBQUk1QkMsV0FBTyxFQUFFO0FBSm1CLEdBQUQsQ0FBL0I7O0FBT0EsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDbkI7QUFDTCxRQUFJQyxhQUFhLEdBQUcsSUFBSUMsSUFBSixDQUFTLHVCQUFULEVBQWtDQyxPQUFsQyxFQUFwQixDQUZ3QixDQUd4Qjs7QUFDQSxRQUFJQyxHQUFHLEdBQUksSUFBSUYsSUFBSixHQUFXQyxPQUFYLEVBQVgsQ0FKd0IsQ0FLeEI7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHSixhQUFhLEdBQUdHLEdBQS9CLENBTndCLENBT3hCOztBQUNBLFFBQUlFLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQW5CLENBQVg7QUFDQSxRQUFJSSxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFULElBQXNDLE9BQU8sRUFBUCxHQUFZLEVBQWxELENBQVgsQ0FBWjtBQUNBLFFBQUlQLE9BQU8sR0FBR1MsSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFULElBQWlDLE9BQU8sRUFBeEMsQ0FBWCxDQUFkO0FBQ0EsUUFBSUssTUFBTSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUFULEdBQTJCLElBQXRDLENBQWI7QUFDQVgsVUFBTSxDQUFDO0FBQ0hFLFNBQUcsRUFBRVUsSUFERjtBQUVIVCxVQUFJLEVBQUVZLEtBRkg7QUFHSFgsYUFBTyxFQUFFQSxPQUhOO0FBSUhDLGFBQU8sRUFBRVc7QUFKTixLQUFELENBQU47QUFNQyxHQWxCRCxDQVI2QixDQTJCMUI7OztBQUNILE1BQUlDLENBQUMsR0FBR0MsV0FBVyxDQUFDWixTQUFELENBQW5CO0FBRUEsU0FDSTtBQUFNLGFBQVMsRUFBRWEseURBQU0sQ0FBQ0MsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUVGLHlEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0N2QixJQUFJLENBQUNHLEdBQXJDLFFBQTRDSCxJQUFJLENBQUNJLElBQWpELE9BQXdESixJQUFJLENBQUNLLE9BQTdELE9BQXVFTCxJQUFJLENBQUNNLE9BQTVFLENBREEsQ0FESixDQURKO0FBUUgiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdW5jaC9MYXVuY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF1bmNoLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdW5jaCgpIHtcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF5XSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZGF5OiBcIlwiLFxuICAgICAgICBob3VyOiBcIlwiLFxuICAgICAgICBtaW51dGVzOiBcIlwiLFxuICAgICAgICBzZWNvbmRzOiBcIlwiXG4gICAgfSlcblxuICAgIGNvbnN0IGNvdW50RnVuYyA9ICgpID0+IHtcbiAgICAgICAgIC8vZGF0ZSBmb3IgY291bnRlclxuICAgIHZhciBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJ1NlcCAxMCwgMjAyMCAwMDowMDowMCcpLmdldFRpbWUoKTtcbiAgICAvL2N1cnJlbnQgZGF0ZVxuICAgIHZhciBub3cgPSAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgLy91cGRhdGVkIHRpbWVcbiAgICB2YXIgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xuICAgIC8vIFRpbWUgY2FsY3VsYXRpb25zIGZvciBkYXlzLCBob3VycywgYW5kIG1pbnV0ZXMgYW5kIHNlY29uZHMgXG4gICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgdmFyIHNlY29uZCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgc2V0RGF5KHtcbiAgICAgICAgZGF5OiBkYXlzLFxuICAgICAgICBob3VyOiBob3VycyxcbiAgICAgICAgbWludXRlczogbWludXRlcyxcbiAgICAgICAgc2Vjb25kczogc2Vjb25kXG4gICAgfSlcbiAgICB9XG4gICAgICAgLy8gVXBkYXRlIHRoZSBjb3VudCBkb3duIGV2ZXJ5IDEgc2Vjb25kXG4gICAgdmFyIHggPSBzZXRJbnRlcnZhbChjb3VudEZ1bmMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Ym9keSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXJkaXZ9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyfT4gMHtkYXRlLmRheX06MHtkYXRlLmhvdXJ9OntkYXRlLm1pbnV0ZXN9OntkYXRlLnNlY29uZHN9IFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2JvZHk+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Launch/Launch.js\n");

/***/ }),

/***/ "./components/Launch/Launch.module.css":
/*!*********************************************!*\
  !*** ./components/Launch/Launch.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"background\": \"Launch_background__3cH6-\",\n\t\"timer\": \"Launch_timer__3itJp\",\n\t\"timerdiv\": \"Launch_timerdiv__3dpMW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaC9MYXVuY2gubW9kdWxlLmNzcz9kY2YwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF1bmNoL0xhdW5jaC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2dyb3VuZFwiOiBcIkxhdW5jaF9iYWNrZ3JvdW5kX18zY0g2LVwiLFxuXHRcInRpbWVyXCI6IFwiTGF1bmNoX3RpbWVyX18zaXRKcFwiLFxuXHRcInRpbWVyZGl2XCI6IFwiTGF1bmNoX3RpbWVyZGl2X18zZHBNV1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Launch/Launch.module.css\n");

/***/ }),

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.module.css */ \"./components/Nav/Nav.module.css\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/solo/Desktop/sirsoco/socodezine/socodezine/components/Nav/Nav.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Nav() {\n  const {\n    0: nav,\n    1: setNav\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.directoryHide);\n\n  const slidebar = () => {\n    console.log('hello');\n    setNav(_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.directoryOpen);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flexRow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Menu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: slidebar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 42\n    }\n  }, \"MENU\")), __jsx(\"div\", {\n    className: nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, \"Portfolio\"), __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"Services\"), __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, \"Contact\"), __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, \"About\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXYuanM/OGZmMCJdLCJuYW1lcyI6WyJOYXYiLCJuYXYiLCJzZXROYXYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImRpcmVjdG9yeUhpZGUiLCJzbGlkZWJhciIsImNvbnNvbGUiLCJsb2ciLCJkaXJlY3RvcnlPcGVuIiwiZmxleFJvdyIsIk1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JDLHNEQUFRLENBQUNDLHNEQUFNLENBQUNDLGFBQVIsQ0FBOUI7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDbkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQU4sVUFBTSxDQUFDRSxzREFBTSxDQUFDSyxhQUFSLENBQU47QUFDSCxHQUhEOztBQUtBLFNBQ0ksbUVBQ0E7QUFBSyxhQUFTLEVBQUVMLHNEQUFNLENBQUNNLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRU4sc0RBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QjtBQUFHLFdBQU8sRUFBRUwsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTdCLENBREosRUFHSTtBQUFLLGFBQVMsRUFBRUwsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLENBSEosQ0FEQSxDQURKO0FBY0giLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2Lm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgICBjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoc3R5bGVzLmRpcmVjdG9yeUhpZGUpXG4gICAgXG4gICAgY29uc3Qgc2xpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gICAgICAgIHNldE5hdihzdHlsZXMuZGlyZWN0b3J5T3Blbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudX0+PGEgb25DbGljaz17c2xpZGViYXJ9Pk1FTlU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYXZ9PlxuICAgICAgICAgICAgICAgIDxhPlBvcnRmb2xpbzwvYT4gXG4gICAgICAgICAgICAgICAgPGE+U2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/Nav.js\n");

/***/ }),

/***/ "./components/Nav/Nav.module.css":
/*!***************************************!*\
  !*** ./components/Nav/Nav.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"flexRow\": \"Nav_flexRow__297-E\",\n\t\"directoryOpen\": \"Nav_directoryOpen__3suGi\",\n\t\"directoryHide\": \"Nav_directoryHide__3tDt3\",\n\t\"displayNav\": \"Nav_displayNav__1wCSf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXYubW9kdWxlLmNzcz82OWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYvTmF2Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmbGV4Um93XCI6IFwiTmF2X2ZsZXhSb3dfXzI5Ny1FXCIsXG5cdFwiZGlyZWN0b3J5T3BlblwiOiBcIk5hdl9kaXJlY3RvcnlPcGVuX18zc3VHaVwiLFxuXHRcImRpcmVjdG9yeUhpZGVcIjogXCJOYXZfZGlyZWN0b3J5SGlkZV9fM3REdDNcIixcblx0XCJkaXNwbGF5TmF2XCI6IFwiTmF2X2Rpc3BsYXlOYXZfXzF3Q1NmXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/Nav.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Launch_Launch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Launch/Launch.js */ \"./components/Launch/Launch.js\");\n/* harmony import */ var _components_Nav_Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav.js */ \"./components/Nav/Nav.js\");\nvar _jsxFileName = \"/Users/solo/Desktop/sirsoco/socodezine/socodezine/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction HomePage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Nav_Nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }), __jsx(_components_Launch_Launch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"Welcome to Next.js!\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixTQUNELG1FQUNHLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEVBRUcsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixDQUZILENBREM7QUFTRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXVuY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF1bmNoL0xhdW5jaC5qc1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXYvTmF2LmpzXCI7XG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuKFxuIDw+XG4gICAgPE5hdj48L05hdj5cbiAgICA8TGF1bmNoPlxuICAgICAgICAgIFxuICAgICAgPGRpdj5XZWxjb21lIHRvIE5leHQuanMhPC9kaXY+XG4gICAgPC9MYXVuY2g+XG4gIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });