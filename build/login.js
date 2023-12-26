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

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("var login = async() =>{\r\n  // Basic POST request with JSON payload\r\n  var response = await fetch('/login', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n      // Other headers as needed\r\n    },\r\n    body: JSON.stringify({\r\n      user:$(\"#emailLogin\").val(), \r\n      pwd:$(\"#passwordLogin\").val()\r\n    })\r\n  })\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`HTTP error! Status: ${response.status}`);\r\n  }\r\n\r\n  const data = await response.json();\r\n  if(data.success==false){\r\n    setError(data.message);\r\n  }\r\n  else\r\n  {\r\n    document.location.href=data.redirect\r\n  }\r\n\r\n}\r\n\r\n$('#login').on('click', async ()=>{\r\n  await login();\r\n})\r\n\r\n$(document).ready(()=>{\r\n  $(\"#loginContainer\").removeClass(\"slide-left\");\r\n  $(\"#loginContainer\").addClass(\"slide-right\")\r\n})\r\n\r\n\r\n$(\"#signupNow\").on(\"click\", ()=>{\r\n  $(\"#loginContainer\").removeClass(\"slide-right\");\r\n  $(\"#loginContainer\").addClass(\"slide-left\");\r\n\r\n  setTimeout(function(){\r\n    window.location.href=\"/signup\"\r\n}, 500);\r\n})\r\n\r\n\r\nvar setError = (msg)=>{\r\n  $('#ErrorMsg').text(msg);\r\n}\r\n\r\nvar clearSigninFields = () =>{\r\n  $('#emailLogin').text(\"\");\r\n  $('#passwordLogin').text(\"\");\r\n}\r\n\r\n$(\"#passwordLogin\").on('keyup', async (e) => {\r\n  if (e.key === 'Enter' || e.keyCode === 13) {\r\n    await login();\r\n  }\r\n});\r\n\r\n$(\"#emailLogin\").on('keyup', async (e) => {\r\n  if (e.key === 'Enter' || e.keyCode === 13) {\r\n    $(\"#passwordLogin\").focus()\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://app/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;