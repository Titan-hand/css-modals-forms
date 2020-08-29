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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-range.js */ \"./js/input-range.js\");\n/* harmony import */ var _utils_get_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get_id */ \"./js/utils/get_id.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"load\", (e) => {\r\n  Object(_utils_get_id__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"loader\").style.display = \"none\";\r\n  Object(_input_range_js__WEBPACK_IMPORTED_MODULE_0__[\"getInputsRangeToPutToolTips\"])();\r\n});\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/input-range.js":
/*!***************************!*\
  !*** ./js/input-range.js ***!
  \***************************/
/*! exports provided: getInputsRangeToPutToolTips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInputsRangeToPutToolTips\", function() { return getInputsRangeToPutToolTips; });\n// manage the tooltip in the input range\r\nconst addToolTip = (labelsArr) => {\r\n    for (let i = 0; i < labelsArr.length; i++) {\r\n        // get input range value\r\n        const value = labelsArr[i].querySelector('input[type=range]').value;\r\n        // create tooltip\r\n        const div = document.createElement('div');\r\n        div.classList.add('input-range-toolTip');\r\n        div.textContent = value;\r\n\r\n        labelsArr[i].append(div);\r\n    }\r\n}\r\n\r\nconst updateToolTipValue = ({target}, label) => {\r\n    const { value } = target;\r\n    const toolTip = label.querySelector('.input-range-toolTip');\r\n    toolTip.textContent = value;\r\n}\r\n\r\nconst getInputsRangeToPutToolTips = () => {\r\n    // all labels with .input-range class\r\n    const inputContainerRanges = [...document.querySelectorAll('label.input-range')];\r\n    addToolTip(inputContainerRanges);\r\n    \r\n    inputContainerRanges.forEach( label => {\r\n        const input = label.querySelector('input[type=range]');\r\n        input.addEventListener('input', (ev) => updateToolTipValue(ev, label));\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/input-range.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_get_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/get_id */ \"./js/utils/get_id.js\");\n/* harmony import */ var _utils_toggle_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/toggle_modal */ \"./js/utils/toggle_modal.js\");\n// utils\r\n\r\n\r\n\r\nwindow.addEventListener(\r\n  \"load\",\r\n  () => {\r\n    const all_btn_modals = document.querySelectorAll(\"[data-modal]\");\r\n\r\n    all_btn_modals.forEach((btn_modal) => {\r\n      // get id of modal for button action\r\n      const modal_id = btn_modal.getAttribute(\"data-modal\");\r\n\r\n      // get the HTML button of modal with id: modal_id\r\n      const btn_close_modal = Object(_utils_get_id__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modal_id).querySelector(\r\n        \".modal__button-close\"\r\n      );\r\n\r\n      Object(_utils_toggle_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(btn_modal, modal_id);\r\n      Object(_utils_toggle_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(btn_close_modal, modal_id);\r\n    });\r\n  },\r\n  false\r\n);\r\n\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/utils/error.js":
/*!***************************!*\
  !*** ./js/utils/error.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst error_ref = (text) => {\r\n  throw new ReferenceError(`\\n\\n⚠️ ${text}.\\n`);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (error_ref);\r\n\n\n//# sourceURL=webpack:///./js/utils/error.js?");

/***/ }),

/***/ "./js/utils/get_id.js":
/*!****************************!*\
  !*** ./js/utils/get_id.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getNode = (id) => document.getElementById(id);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNode);\n\n//# sourceURL=webpack:///./js/utils/get_id.js?");

/***/ }),

/***/ "./js/utils/toggle_modal.js":
/*!**********************************!*\
  !*** ./js/utils/toggle_modal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./js/utils/error.js\");\n/* harmony import */ var _get_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_id */ \"./js/utils/get_id.js\");\n\r\n\r\n\r\nconst show_modal = (modal_id) => {\r\n  // get HTML modal\r\n  const modal = Object(_get_id__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modal_id);\r\n\r\n  // check if the modal is active in the window\r\n  if (!modal) {\r\n    Object(_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n      `\\n\\n⚠️ The container ´#${modal_id}´ don't exist in the DOM.\\n`,\r\n      \"color: red;\"\r\n    );\r\n  }\r\n\r\n  if (modal.classList.contains(\"modal--active\")) {\r\n    modal.classList.remove(\"modal--active\");\r\n    modal.classList.add(\"modal--disabled\");\r\n\r\n    // stop all videos inside modal\r\n    const modal_videos = [...modal.querySelectorAll(\"video\")];\r\n    const modal_videos_iframe = [...modal.querySelectorAll(\"iframe\")];\r\n    modal_videos.forEach((video) => video.pause());\r\n    modal_videos_iframe.forEach((video) => (video.src = video.src));\r\n    return;\r\n  }\r\n\r\n  // if it is active, disable the modal\r\n  modal.classList.remove(\"modal--disabled\");\r\n  modal.classList.add(\"modal--active\");\r\n};\r\n\r\nconst toggle_modal = (btn, modal_id) => {\r\n  btn.addEventListener(\"click\", () => show_modal(modal_id), false);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggle_modal);\r\n\n\n//# sourceURL=webpack:///./js/utils/toggle_modal.js?");

/***/ })

/******/ });