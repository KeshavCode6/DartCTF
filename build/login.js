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

eval("const UpdateLoginbutton = ()=>{\r\n    fetch('/auth/loggedIn')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      if (data[\"loggedIn\"]==true) {\r\n        $(\"#dashboardLink\").removeClass(\"nav-link disabled\")\r\n        $(\"#dashboardLink\").addClass(\"nav-link\")\r\n        $(\"#login\").text(\"Logout\")\r\n        $(\"#login\").removeAttr(\"data-toggle\");\r\n        $(\"#login\").removeAttr(\"data-target\");\r\n        $(\"#login\").attr(\"href\", \"/auth/logout\")\r\n        console.log(\"in\")\r\n      } else {\r\n        $(\"#dashboardLink\").removeClass(\"nav-link\")\r\n        $(\"#dashboardLink\").addClass(\"nav-link disabled\")\r\n        $(\"#login\").text(\"Login\")\r\n        $(\"#login\").attr(\"data-toggle\", \"modal\");\r\n        $(\"#login\").attr(\"data-target\", \"#loginModal\");\r\n        console.log(\"out\")\r\n        $(\"#login\").removeAttr(\"href\")\r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Error checking authentication:', error);\r\n    });\r\n}\r\n\r\nUpdateLoginbutton();\n\n//# sourceURL=webpack://app/./src/login.js?");

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