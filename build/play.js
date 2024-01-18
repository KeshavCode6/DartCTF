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

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/***/ (() => {

eval("$(document).ready(() => {\r\n    $(\".ChallengePlay\").on(\"click\", function () {\r\n        $(\"#overlay\").css('display', 'flex');\r\n\r\n        $(\".caseBox div:not(.closeButtonContainer)\").css('display', 'none');\r\n\r\n        // Use $(this) to convert the clicked element to a jQuery object\r\n        const targetId = $(this).attr('id').toLowerCase();\r\n        $(`#${targetId}`).css('display', 'flex');\r\n        $(\"#levelType\").text(targetId.toUpperCase());\r\n    });\r\n\r\n    $(\"#closeCase\").on(\"click\", () => {\r\n        $(\"#overlay\").css('display', 'none');\r\n    });\r\n\r\n    fetch('/getLoginInfo')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log(data);\r\n      $(\"#ProfileName\").text(`${data[\"username\"].givenName} ${data[\"username\"].familyName}`)\r\n      $(\"#ProfilePicture\").attr('src', data['picture'])\r\n      $(\"#ProfilePoints\").text(`${data['points']} pts`)\r\n    })\r\n    .catch(error => {\r\n      console.error('Error checking authentication:', error);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://app/./src/play.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/play.js"]();
/******/ 	
/******/ })()
;