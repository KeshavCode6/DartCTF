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

/***/ "./src/leaderboard.js":
/*!****************************!*\
  !*** ./src/leaderboard.js ***!
  \****************************/
/***/ (() => {

eval("const leaderboard = document.querySelector(\"#leaderboard-body\");\r\n\r\nfor (var i = 1; i <= 100; i++) {\r\n\r\n    const lbUserHtml = `\r\n    <th scope=\"row\">#${i}</th>\r\n    <td>John</td>\r\n    <td>U.S</td>\r\n    `\r\n\r\n    const element = document.createElement(\"tr\");\r\n    element.innerHTML = lbUserHtml;\r\n\r\n    leaderboard.appendChild(element);\r\n\r\n}\n\n//# sourceURL=webpack://app/./src/leaderboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/leaderboard.js"]();
/******/ 	
/******/ })()
;