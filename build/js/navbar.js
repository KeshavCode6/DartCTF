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

eval("var active = [\"\", \"\", \"\"]\nvar src = \"resources/logo.svg\"\n\nif (window.location.href.endsWith(\"/home\")) {\n    active[0] = \"active\"\n}\nif (window.location.href.endsWith(\"/about\")) {\n    active[1] = \"active\"\n}\nif (window.location.href.includes(\"/dashboard\")) {\n    active[2] = \"active\"\n}\nif (window.location.href.includes(\"/challengeSelect\")) {\n    active[2] = \"active\"\n    src = \"../../resources/logo.svg\"\n}\n\n\nconst html = `\n<nav class=\"navbar navbar-expand-md navbar-dark\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand\" href=\"/home\">\n                <img src=\"${src}\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n                Dart CTF\n            </a>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n                <ul class=\"navbar-nav mb-2 mb-lg-0\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link ${active[0]}\" aria-current=\"page\" href=\"/home\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link ${active[1]}\" href=\"/about\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link ${active[2]}\" id=\"dashboardLink\" href=\"/dashboard\">Dashboard</a>\n                    </li>\n                </ul>\n                <div class=\"d-flex\">\n                    <a id=\"login\" class=\"btn btn-success\" type=\"submit\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>\n                </div>\n            </div>\n\n        </div>\n    </nav>\n    <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Login</h5>\n                    <button class=\"btn btn-close\" type=\"submit\" data-toggle=\"modal\" data-target=\"#loginModal\"></button>\n                </div>\n                <div class=\"modal-body d-flex justify-content-center align-items-center\">\n                    <button class=\"gsi-material-button\" onclick=\"window.location.href='/auth/google'\">\n                        <div class=\"gsi-material-button-state\"></div>\n                        <div class=\"gsi-material-button-content-wrapper\">\n                            <div class=\"gsi-material-button-icon\">\n                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"\n                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display: block;\">\n                                    <path fill=\"#EA4335\"\n                                        d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\">\n                                    </path>\n                                    <path fill=\"#4285F4\"\n                                        d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\">\n                                    </path>\n                                    <path fill=\"#FBBC05\"\n                                        d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\">\n                                    </path>\n                                    <path fill=\"#34A853\"\n                                        d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\">\n                                    </path>\n                                    <path fill=\"none\" d=\"M0 0h48v48H0z\"></path>\n                                </svg>\n                            </div>\n                            <span class=\"gsi-material-button-contents\">Sign in with Google</span>\n                            <span style=\"display: none;\">Sign in with Google</span>\n                        </div>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n`\n\nconst element = document.createElement(\"div\");\nelement.innerHTML = html;\n\ndocument.body.append(element);\n\n//# sourceURL=webpack://app/./src/navbar.js?");

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