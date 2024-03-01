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

eval("const urlParams = new URLSearchParams(window.location.search);\nconst board = urlParams.get(\"board\");\nconst title = board.charAt(0).toUpperCase() + board.slice(1)\nfetch('/getLevels', {\n    method: 'POST',\n    headers: {\n        'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\"category\": board})\n})\n.then(response => response.json())\n.then(data => {\n    totalLevels = 0\n    Object.keys(data).forEach(element => {\n\n        if(element == \"completion\"){\n            $(\"#boardCompletion\").text(`${data[\"completion\"]}%`)\n        }\n        else{\n            let img = \"unsolved\";\n            if(data[element].solved){\n                img = \"solved\";\n            }\n    \n            levelSlot = `\n            <div class=\"col mb-2\"> \n                <div class=\"card c1\" id=\"chall-card\" style=\"margin: 0px; min-width: 200px;\">\n                    <div class=\"card-body d-flex align-items-center flex-column\">\n                        <h5 class=\"card-title d-flex justify-content-between align-items-center\" id=\"L1C1\">\n                            <span style=\"margin-right: 12px;\">${element}</span>\n                            <a id=\"playCyber\" class=\"btn btn-outline-primary btn-sm\" href=\"${`challenge?board=${board}&id=${totalLevels+1}`}\">Play</a>\n                        </h5>\n                        <p class=\"card-text d-flex justify-content-center align-items-center\">\n                            <img src=\"../../resources/icons/${img}.png\" style=\"width: 75%;\" class=\"img-thumbnail\" alt=\"...\">\n                            <p class=\"level-name\" style=\"font-size: 15px; font-weight: 600; margin-bottom: 0px;\">${data[element][\"name\"]}</p>\n                            <p class=\"level-points\" style=\"font-size: 15px; font-weight: 600; margin-bottom: 0px; color: darkred;\">${data[element][\"points\"]}pts</p>\n                        </p>\n                    </div>\n                </div>\n            </div>`;\n\n            totalLevels += 1;\n    \n            if (totalLevels >= 5){\n                $(\"#row2\").append(levelSlot);\n            }\n            else{\n                $(\"#row1\").append(levelSlot);\n            }\n        }\n    });\n})\n.catch(error => {\n    console.error('There was a problem with the fetch operation:', error);\n});\n\n\n//# sourceURL=webpack://app/./src/challengeSelect.js?");

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