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

eval("const leaderboard = document.querySelector(\"#leaderboard-body\");\r\nvar filterIndex = 0;\r\n\r\nconst filterToName = {\r\n    0:\"Top Global\",\r\n    1:\"Top Country\"\r\n}\r\nconst showLeaderboard = (data) =>{\r\n    for (var i = 0; i < Object.keys(data).length; i++) {\r\n        \r\n        username = Object.keys(data)[i]\r\n\r\n        const lbUserHtml = `\r\n        <th scope=\"row\">#${i+1}</th>\r\n        <td>${data[username][0]}</td>\r\n        <td>${username}</td>\r\n        <td>${data[username][1]}</td>\r\n        <td>US</td>\r\n        `\r\n    \r\n        const element = document.createElement(\"tr\");\r\n        element.innerHTML = lbUserHtml;\r\n    \r\n        leaderboard.appendChild(element);\r\n    }\r\n}\r\nconst UpdateLeaderboard = ()=>{\r\n    fetch('/getLeaderboard')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        showLeaderboard(data);\r\n    })\r\n    .catch(error => {\r\n      console.error('Error checking authentication:', error);\r\n    });\r\n}\r\n\r\n$(\"#editFilters\").on(\"click\", ()=>{\r\n    filterIndex+=1;\r\n    if(filterIndex>1){\r\n        filterIndex = 0\r\n    }\r\n    $(\"#editFilters\").text(filterToName[filterIndex])\r\n\r\n    $(\"#leaderboard-body\").empty()\r\n    UpdateLeaderboard();\r\n})\r\n\r\n\r\n$(document).ready(()=>{\r\n    UpdateLeaderboard();\r\n})\n\n//# sourceURL=webpack://app/./src/leaderboard.js?");

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