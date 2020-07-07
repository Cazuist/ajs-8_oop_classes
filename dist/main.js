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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Bowman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Bowman */ \"./src/js/Bowman.js\");\n/* harmony import */ var _js_Swordsman__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Swordsman */ \"./src/js/Swordsman.js\");\n/* harmony import */ var _js_Magician__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Magician */ \"./src/js/Magician.js\");\n/* harmony import */ var _js_Daemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Daemon */ \"./src/js/Daemon.js\");\n/* harmony import */ var _js_Undead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Undead */ \"./src/js/Undead.js\");\n/* harmony import */ var _js_Zombie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Zombie */ \"./src/js/Zombie.js\");\n// eslint-disable-next-line no-unused-vars\n\n\n// eslint-disable-next-line no-unused-vars\n\n\n// eslint-disable-next-line no-unused-vars\n\n\n// eslint-disable-next-line no-unused-vars\n\n\n// eslint-disable-next-line no-unused-vars\n\n\n// eslint-disable-next-line no-unused-vars\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Bowman.js":
/*!**************************!*\
  !*** ./src/js/Bowman.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bowman; });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass Bowman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(name, type = 'Bowman') {\n    super(name, type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Bowman.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\nclass Character {\n  constructor(name, type) {\n    this.checkParam(name, type);\n\n    this.name = name;\n    this.type = type;\n\n    this.health = 100;\n    this.level = 1;\n\n    this.attack = this.getCharactersList()[type].attack;\n    this.defence = this.getCharactersList()[type].defence;\n  }\n\n  checkParam(name, type) {\n    const list = this.getCharactersList();\n    const types = Object.keys(list);\n\n    if (typeof name !== 'string') {\n      throw new Error('Имя персонажа должно быть строкой!');\n    } else if (name.length < 2 || name.length > 10) {\n      throw new Error('Имя персонажа должно быть не менее 2 и не более 10 символов!');\n    } else if (this.constructor.name === 'Character' && !types.includes(type)) {\n      throw new Error('Неизвестный тип персонажа!');\n    }\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  getCharactersList() {\n    return {\n      Bowman: { attack: 25, defence: 25 },\n      Swordsman: { attack: 40, defence: 10 },\n      Magician: { attack: 10, defence: 40 },\n      Daemon: { attack: 25, defence: 25 },\n      Undead: { attack: 40, defence: 10 },\n      Zombie: { attack: 10, defence: 40 },\n    };\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Character.js?");

/***/ }),

/***/ "./src/js/Daemon.js":
/*!**************************!*\
  !*** ./src/js/Daemon.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Daemon; });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass Daemon extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(name, type = 'Daemon') {\n    super(name, type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Daemon.js?");

/***/ }),

/***/ "./src/js/Magician.js":
/*!****************************!*\
  !*** ./src/js/Magician.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Magician; });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass Magician extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(name, type = 'Magician') {\n    super(name, type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Magician.js?");

/***/ }),

/***/ "./src/js/Swordsman.js":
/*!*****************************!*\
  !*** ./src/js/Swordsman.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Swordsman; });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass Swordsman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(name, type = 'Swordsman') {\n    super(name, type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Swordsman.js?");

/***/ }),

/***/ "./src/js/Undead.js":
/*!**************************!*\
  !*** ./src/js/Undead.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Undead; });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass Undead extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(name, type = 'Undead') {\n    super(name, type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Undead.js?");

/***/ }),

/***/ "./src/js/Zombie.js":
/*!**************************!*\
  !*** ./src/js/Zombie.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Zombie; });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass Zombie extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(name, type = 'Zombie') {\n    super(name, type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Zombie.js?");

/***/ })

/******/ });