/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/challengeSelect.js":
/*!********************************!*\
  !*** ./src/challengeSelect.js ***!
  \********************************/
/***/ (() => {

eval("const urlParams = new URLSearchParams(window.location.search);\r\nconst board = urlParams.get(\"board\");\r\n\r\nswitch (board) {\r\n    case \"web\":\r\n        console.log(\"web challenges!!!\");\r\n        break;\r\n}\n\n//# sourceURL=webpack://app/./src/challengeSelect.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/challengeSelect.js"]();
/******/ 	
/******/ })()
;