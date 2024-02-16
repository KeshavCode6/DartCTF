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

/***/ "./src/challengeSelect.js":
/*!********************************!*\
  !*** ./src/challengeSelect.js ***!
  \********************************/
/***/ (() => {

eval("const urlParams = new URLSearchParams(window.location.search);\r\nconst board = urlParams.get(\"board\");\r\nconst title = board.charAt(0).toUpperCase() + board.slice(1)\r\n\r\ndocument.title = title+\" Board\"\r\n$(\"#boardname\").text(title)\r\n\r\nfetch('/getLevels', {\r\n    method: 'POST',\r\n    headers: {\r\n        'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify({\"category\": board})\r\n})\r\n\r\n.then(response => response.json())\r\n.then(data => {\r\n    totalLevels = 0\r\n    Object.keys(data).forEach(element => {\r\n        console.log(data[element])\r\n        let img = \"unsolved\"\r\n\r\n        if(data[element].solved){\r\n            img=\"solved\"\r\n        }\r\n\r\n        levelSlot = `\r\n        <div class=\"col-md-2 mb-2\"> \r\n        <div class=\"card h-60 c1\" id=\"chall-card\" style=\"margin: 0px; min-width: 200px;\">\r\n                <div class=\"card-body d-flex align-items-center flex-column\">\r\n                    <h5 class=\"card-title d-flex justify-content-between align-items-center\" id=\"L1C1\">\r\n                        <span style=\"margin-right: 12px;\">${element}</span>\r\n                        <a id=\"playCyber\" class=\"btn btn-outline-primary btn-sm\" href=\"${`challengeSelect/programming/c${totalLevels+1}`}\">Play</a>\r\n                    </h5>\r\n                    <p class=\"card-text d-flex justify-content-center align-items-center\">\r\n                        <img src=\"../../resources/icons/${img}.png\" style=\"width: 75%;\"\r\n                            class=\"img-thumbnail\" alt=\"...\">\r\n                        <p class=\"level-name\" style=\"font-size: 15px; font-weight: 600; margin-bottom: 0px;\">${data[element][\"name\"]}</p>\r\n                        <p class=\"level-points\" style=\"font-size: 15px; font-weight: 600; margin-bottom: 0px; color: darkred;\">${data[element][\"points\"]}pts</p>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>       \r\n        ` \r\n        \r\n        if (totalLevels>=4){\r\n            $(\"#row1\").append(levelSlot)\r\n        }\r\n        else{\r\n            $(\"#row2\").append(levelSlot)\r\n        }\r\n        totalLevels+=1\r\n    });\r\n})\r\n.catch(error => {\r\n    console.error('There was a problem with the fetch operation:', error);\r\n});\r\n\n\n//# sourceURL=webpack://app/./src/challengeSelect.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/challengeSelect.js"]();
/******/ 	
/******/ })()
;