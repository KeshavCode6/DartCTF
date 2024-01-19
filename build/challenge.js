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

/***/ "./src/challenge.js":
/*!**************************!*\
  !*** ./src/challenge.js ***!
  \**************************/
/***/ (() => {

eval("\r\n\r\n$(document).ready(()=>{\r\n    /* Basically making the next element visible or not when clicked */\r\n    $(\".collapsible\").click(function() {\r\n        $(this).toggleClass(\"active\");\r\n        var content = $(this).next();\r\n\r\n        if (content.is(\":visible\")) {\r\n            $(this).find(\"img\").attr(\"src\", \"../../resources/icons/line-angle-down-icon.png\");\r\n            content.slideUp();\r\n        } else {\r\n            $(this).find(\"img\").attr(\"src\", \"../../resources/icons/line-angle-up-icon.png\");\r\n            content.slideDown();\r\n        }\r\n    });\r\n\r\n    $(\"#enterFlag\").on('click', ()=>{\r\n        console.log(\"hi\")\r\n        var flag = $(\"#flag\").val();\r\n        if(flag.length>0){\r\n            fetch('/enterFlag', {\r\n                method: 'POST',\r\n                headers: {\r\n                  'Content-Type': 'application/json'\r\n                },\r\n                body: JSON.stringify({'flag':flag, \"url\":window.location.pathname})\r\n            })\r\n            .then(response => response.json())\r\n            .then(data => {\r\n              alert(data[\"msg\"])\r\n            })\r\n            .catch(error => {\r\n              console.error('Error checking authentication:', error);\r\n            });\r\n        }\r\n        else{\r\n            alert(\"Flag Input is empty\")\r\n        }\r\n    });\r\n})\r\n\n\n//# sourceURL=webpack://app/./src/challenge.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/challenge.js"]();
/******/ 	
/******/ })()
;