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

eval("\r\n\r\n$(document).ready(()=>{\r\n    $(\"#close\").on(\"click\", ()=>{\r\n        $(\"#overlay\").css(\"display\", \"none\")\r\n    })\r\n    UpdateLoginbutton();\r\n})\r\n\r\nconst UpdateLoginbutton = ()=>{\r\n    // Updating login or logout button depending on login state\r\n    fetch('/auth/loggedIn')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      if (data[\"loggedIn\"]==true) {\r\n        $(\"#login\").attr(\"href\", \"auth/logout\")\r\n        $(\"#login\").text(\"Logout\")\r\n        $(\"#login\").on(\"click\", ()=>{})\r\n      } else {\r\n        $(\"#login\").removeAttr(\"href\")\r\n        $(\"#login\").text(\"Login\")\r\n        $(\"#login\").on(\"click\", ()=>{\r\n            $(\"#overlay\").css(\"display\", \"flex\")\r\n        })    \r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Error checking authentication:', error);\r\n    });\r\n}\r\n\r\n$(\"#Play\").on('click', ()=>{\r\n  fetch('/auth/loggedIn')\r\n  .then(response => response.json())\r\n  .then(data => {\r\n    console.log(data)\r\n    if (data[\"loggedIn\"]==true) {\r\n      window.location =\"/play\"\r\n    }\r\n    else\r\n    {\r\n      $(\"#overlay\").css(\"display\", \"flex\")\r\n    }\r\n  })\r\n})\n\n//# sourceURL=webpack://app/./src/login.js?");

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