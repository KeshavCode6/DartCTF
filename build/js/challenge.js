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

eval("const urlParams = new URLSearchParams(window.location.search);\nconst board = urlParams.get(\"board\");\nconst challId = parseInt(urlParams.get(\"id\"));\n\nfunction capitalizeFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\ndocument.title = `${capitalizeFirstLetter(board)} C${challId}`;\n\n// fetch('/getLevelData', {\n//   method: 'POST',\n//   headers: {\n//       'Content-Type': 'application/json'\n//   },\n//   body: JSON.stringify({\"category\": board, \"challId\": challId})\n// })\n// .then(response => response.json())\n// .then(data => {\n//   console.log(data);\n\n//   const {name, challId, difficulty, desc, res} = data;\n//   $(\".challname\").text(`${capitalizeFirstLetter(board)} C${challId}`);\n//   $(\".challdiff\").text(`Difficulty: ${capitalizeFirstLetter(difficulty)}`);\n//   $(\"#challdesc\").text(desc);\n  \n//   for (var r of res) {\n//     const ulItem = document.createElement(\"li\");\n//     ulItem.innerText = r;\n//     $(\".challres\").append(ulItem);\n//   }\n\n// })\n\nfetch('/getLevelHtml', {\n  method: 'POST',\n  headers: {\n      'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\"board\": board, \"chall\": challId})\n})\n.then(response => response.text())\n.then(data => {\n  $(\"#result\").append(data);\n})\n\n$(\"#enterflag\").on('click', ()=>{\n    var flag = $(\"#flaginput\").val();\n    if(flag.length>0){\n        fetch('/enterFlag', {\n            method: 'POST',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({'flag':flag, \"url\":window.location.href})\n        })\n        .then(response => response.json())\n        .then(data => {\n          \n          let color = \"primary\"\n          $(\"#flagResult\").empty()\n          console.log(data)\n\n          if(!data.success){\n            color = \"success\"\n          }\n\n          const alert = `\n            <div class=\"alert alert-${color} alert-dismissible fade show\" role=\"alert\">\n            ${data.msg}\n            <button type=\"button\" class=\"close btn btn-close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\n            </div>\n          `\n\n          $(\"#flagResult\").append(alert)\n        })\n        .catch(error => {\n          console.error('Error checking authentication:', error);\n        });\n    }\n    else{\n        $(\"#flagResult\").empty()\n\n        const alert = `\n        <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\n        Flag Input is empty!!\n        <button type=\"button\" class=\"close btn btn-close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\n        </div>\n        `\n\n        $(\"#flagResult\").append(alert)\n    }\n});\n\n//# sourceURL=webpack://app/./src/challenge.js?");

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