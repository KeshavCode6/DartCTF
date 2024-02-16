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

eval("$(\"#enterflag\").on('click', ()=>{\r\n    var flag = $(\"#flaginput\").val();\r\n    if(flag.length>0){\r\n        fetch('/enterFlag', {\r\n            method: 'POST',\r\n            headers: {\r\n              'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({'flag':flag, \"url\":window.location.pathname})\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n          \r\n          let color = \"primary\"\r\n          $(\"#result\").empty()\r\n          console.log(data)\r\n\r\n          if(!data.success){\r\n            color = \"success\"\r\n          }\r\n\r\n          const alert = `\r\n            <div class=\"alert alert-${color} alert-dismissible fade show\" role=\"alert\">\r\n            ${data.msg}\r\n            <button type=\"button\" class=\"close btn btn-close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n            </div>\r\n          `\r\n\r\n          $(\"#result\").append(alert)\r\n        })\r\n        .catch(error => {\r\n          console.error('Error checking authentication:', error);\r\n        });\r\n    }\r\n    else{\r\n        alert(\"Flag Input is empty\")\r\n    }\r\n});\n\n//# sourceURL=webpack://app/./src/challenge.js?");

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