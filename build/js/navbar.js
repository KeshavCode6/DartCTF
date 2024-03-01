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

eval("var active = [\"\", \"\", \"\"]\r\nvar src = \"resources/logo.svg\"\r\n\r\nif (window.location.href.endsWith(\"/home\")) {\r\n    active[0] = \"active\"\r\n}\r\nif (window.location.href.endsWith(\"/about\")) {\r\n    active[1] = \"active\"\r\n}\r\nif (window.location.href.includes(\"/dashboard\")) {\r\n    active[2] = \"active\"\r\n}\r\nif (window.location.href.includes(\"/challengeSelect\")) {\r\n    active[2] = \"active\"\r\n    src = \"../../resources/logo.svg\"\r\n}\r\n\r\n\r\nconst html = `\r\n<nav class=\"navbar navbar-expand-md navbar-dark\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"navbar-brand\" href=\"/home\">\r\n                <img src=\"${src}\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n                Dart CTF\r\n            </a>\r\n\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n                <ul class=\"navbar-nav mb-2 mb-lg-0\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link ${active[0]}\" aria-current=\"page\" href=\"/home\">Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link ${active[1]}\" href=\"/about\">About</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link ${active[2]}\" id=\"dashboardLink\" href=\"/dashboard\">Dashboard</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"d-flex\">\r\n                    <a id=\"login\" class=\"btn btn-success\" type=\"submit\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </nav>\r\n    <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Login</h5>\r\n                    <button class=\"btn btn-close\" type=\"submit\" data-toggle=\"modal\" data-target=\"#loginModal\"></button>\r\n                </div>\r\n                <div class=\"modal-body d-flex justify-content-center align-items-center\">\r\n                    <button class=\"gsi-material-button\" onclick=\"window.location.href='/auth/google'\">\r\n                        <div class=\"gsi-material-button-state\"></div>\r\n                        <div class=\"gsi-material-button-content-wrapper\">\r\n                            <div class=\"gsi-material-button-icon\">\r\n                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"\r\n                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display: block;\">\r\n                                    <path fill=\"#EA4335\"\r\n                                        d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\">\r\n                                    </path>\r\n                                    <path fill=\"#4285F4\"\r\n                                        d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\">\r\n                                    </path>\r\n                                    <path fill=\"#FBBC05\"\r\n                                        d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\">\r\n                                    </path>\r\n                                    <path fill=\"#34A853\"\r\n                                        d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\">\r\n                                    </path>\r\n                                    <path fill=\"none\" d=\"M0 0h48v48H0z\"></path>\r\n                                </svg>\r\n                            </div>\r\n                            <span class=\"gsi-material-button-contents\">Sign in with Google</span>\r\n                            <span style=\"display: none;\">Sign in with Google</span>\r\n                        </div>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n`\r\n\r\nconst element = document.createElement(\"div\");\r\nelement.innerHTML = html;\r\n\r\ndocument.body.append(element);\n\n//# sourceURL=webpack://app/./src/navbar.js?");

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