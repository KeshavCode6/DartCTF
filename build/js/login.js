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

eval("const UpdateLoginbutton = ()=>{\n    fetch('/auth/loggedIn')\n    .then(response => response.json())\n    .then(data => {\n      if (data[\"loggedIn\"]==true) {\n        $(\"#dashboardLink\").removeClass(\"nav-link disabled\")\n        $(\"#dashboardLink\").addClass(\"nav-link\")\n        $(\"#login\").text(\"Logout\")\n        $(\"#login\").removeAttr(\"data-toggle\");\n        $(\"#login\").removeAttr(\"data-target\");\n        $(\"#login\").attr(\"href\", \"/auth/logout\")\n      } else {\n        $(\"#dashboardLink\").removeClass(\"nav-link\")\n        $(\"#dashboardLink\").addClass(\"nav-link disabled\")\n        $(\"#login\").text(\"Login\")\n        $(\"#login\").attr(\"data-toggle\", \"modal\");\n        $(\"#login\").attr(\"data-target\", \"#loginModal\");\n        $(\"#login\").removeAttr(\"href\")\n      }\n    })\n    .catch(error => {\n      console.error('Error checking authentication:', error);\n    });\n}\n\nUpdateLoginbutton();\n\n//# sourceURL=webpack://app/./src/login.js?");

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