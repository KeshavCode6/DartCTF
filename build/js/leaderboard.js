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

eval("const leaderboard = document.querySelector(\"#leaderboard-body\");\n\nconst showLeaderboard = (data) =>{\n    for (var i = 0; i < Object.keys(data).length; i++) {\n        \n        username = Object.keys(data)[i]\n\n        const lbUserHtml = `\n        <th scope=\"row\">#${i+1}</th>\n        <td>${data[username][0]}</td>\n        <td>${username}</td>\n        <td>${data[username][1]}</td>\n        `\n    \n        const element = document.createElement(\"tr\");\n        element.innerHTML = lbUserHtml;\n    \n        leaderboard.appendChild(element);\n    }\n}\nconst UpdateLeaderboard = ()=>{\n    fetch('/getLeaderboard')\n    .then(response => response.json())\n    .then(data => {\n        showLeaderboard(data);\n    })\n    .catch(error => {\n      console.error('Error checking authentication:', error);\n    });\n}\n\n$(document).ready(()=>{\n    UpdateLeaderboard();\n})\n\n//# sourceURL=webpack://app/./src/leaderboard.js?");

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