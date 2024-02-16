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

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

eval("var active = [\"\", \"\", \"\"]\r\nvar src = \"resources/logo.svg\"\r\n\r\nif(window.location.href.endsWith(\"/home\")){\r\n    active[0] = \"active\"\r\n}\r\nif(window.location.href.endsWith(\"/about\")){\r\n    active[1] = \"active\"\r\n}\r\nif(window.location.href.endsWith(\"/dashboard\")){\r\n    active[2] = \"active\"\r\n}\r\nif(window.location.href.includes(\"/challengeSelect\")){\r\n    active[2] = \"active\"\r\n    src = \"../../resources/logo.svg\"\r\n}\r\n\r\n\r\nconst html = `\r\n<nav class=\"navbar navbar-expand-md navbar-dark\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"navbar-brand\" href=\"/home\">\r\n                <img src=\"${src}\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n                Dart CTF\r\n            </a>\r\n\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n                <ul class=\"navbar-nav mb-2 mb-lg-0\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link ${active[0]}\" aria-current=\"page\" href=\"/home\">Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link ${active[1]}\" href=\"/about\">About</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link ${active[2]}\" id=\"dashboardLink\" href=\"/dashboard\">Dashboard</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"d-flex\">\r\n                    <a id=\"login\" class=\"btn btn-success\" type=\"submit\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </nav>\r\n`\r\n\r\nconst element = document.createElement(\"div\");\r\nelement.innerHTML = html;\r\n\r\ndocument.body.append(element);\n\n//# sourceURL=webpack://app/./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/navbar.js"]();
/******/ 	
/******/ })()
;