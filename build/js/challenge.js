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

eval("const urlParams = new URLSearchParams(window.location.search);\r\nconst board = urlParams.get(\"board\");\r\nconst challId = parseInt(urlParams.get(\"id\"));\r\n\r\nfunction capitalizeFirstLetter(string) {\r\n  return string.charAt(0).toUpperCase() + string.slice(1);\r\n}\r\n\r\ndocument.title = `${capitalizeFirstLetter(board)} C${challId}`;\r\n\r\nfetch('/getLevelData', {\r\n  method: 'POST',\r\n  headers: {\r\n      'Content-Type': 'application/json'\r\n  },\r\n  body: JSON.stringify({\"category\": board, \"challId\": challId})\r\n})\r\n.then(response => response.json())\r\n.then(data => {\r\n\r\n  const {name, challId, difficulty, desc, res} = data;\r\n  $(\".challname\").text(`${capitalizeFirstLetter(board)} C${challId}`);\r\n  $(\".challdiff\").text(`Difficulty: ${capitalizeFirstLetter(difficulty)}`);\r\n  $(\"#challdesc\").text(desc);\r\n  \r\n  for (var r of res) {\r\n    const ulItem = document.createElement(\"li\");\r\n    ulItem.innerText = r;\r\n    $(\".challres\").append(ulItem);\r\n  }\r\n\r\n})\r\n\r\nfetch('/getLevelHtml', {\r\n  method: 'POST',\r\n  headers: {\r\n      'Content-Type': 'application/json'\r\n  },\r\n  body: JSON.stringify({\"board\": board, \"chall\": challId})\r\n})\r\n.then(response => response.text())\r\n.then(data => {\r\n  $(\"#result\").append(data);\r\n})\r\n\r\n$(\"#enterflag\").on('click', ()=>{\r\n    var flag = $(\"#flaginput\").val();\r\n    if(flag.length>0){\r\n        fetch('/enterFlag', {\r\n            method: 'POST',\r\n            headers: {\r\n              'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({'flag':flag, \"url\":window.location.href})\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n          \r\n          let color = \"primary\"\r\n          $(\"#flagResult\").empty()\r\n\r\n          if(!data.success){\r\n            color = \"success\"\r\n          }\r\n\r\n          const alert = `\r\n            <div class=\"alert alert-${color} alert-dismissible fade show\" role=\"alert\">\r\n            ${data.msg}\r\n            <button type=\"button\" class=\"close btn btn-close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n            </div>\r\n          `\r\n\r\n          $(\"#flagResult\").append(alert)\r\n        })\r\n        .catch(error => {\r\n          console.error('Error checking authentication:', error);\r\n        });\r\n    }\r\n    else{\r\n        $(\"#flagResult\").empty()\r\n\r\n        const alert = `\r\n        <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\r\n        Flag Input is empty!!\r\n        <button type=\"button\" class=\"close btn btn-close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n        </div>\r\n        `\r\n\r\n        $(\"#flagResult\").append(alert)\r\n    }\r\n});\n\n//# sourceURL=webpack://app/./src/challenge.js?");

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