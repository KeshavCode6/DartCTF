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

/***/ "./src/codeEditor.js":
/*!***************************!*\
  !*** ./src/codeEditor.js ***!
  \***************************/
/***/ (() => {

eval("var editor;\r\n\r\n$(document).ready(()=>{\r\n    editor = CodeMirror.fromTextArea(document.getElementById(\"editor\"), {\r\n        mode:\"text/x-python\",\r\n        theme:\"darcula\",\r\n        lineNumbers:true,\r\n        autoCloseBrackets:true\r\n    });\r\n    var width = window.innerWidth;\r\n    editor.setSize(width*0.75, \"500\");\r\n    $(\"#run\").on(\"click\", submitCode);\r\n})\r\n\r\n\r\n\r\n\r\nconst submitCode = async() => {\r\n    try {\r\n        var output = await fetch(\"https://t53kt8tm-3000.use2.devtunnels.ms/codeEditor\", {\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"  // Corrected header name\r\n            },\r\n            body: JSON.stringify({ \"code\": editor.getValue() })  // Convert the object to JSON string\r\n        });\r\n\r\n        var output = await output.json();\r\n        console.log(output);\r\n        $(\"#output\").text(output.output);\r\n    } catch (error) {\r\n        console.error(\"Error with running code:\", error);\r\n    }\r\n};\n\n//# sourceURL=webpack://app/./src/codeEditor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/codeEditor.js"]();
/******/ 	
/******/ })()
;