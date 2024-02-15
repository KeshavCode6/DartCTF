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

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/***/ (() => {

eval("const profileNameRow = document.querySelector(\"#profile-name-row\");\r\nconst usernameRow = document.querySelector(\"#username-row\");\r\n\r\nconst profileName = profileNameRow.children[0];\r\nconst username = usernameRow.children[0];\r\n\r\nconst editProfileName = profileNameRow.children[1];\r\nconst editUsername = usernameRow.children[1];\r\n\r\nprofileNameRow.addEventListener(\"mouseover\", () => {\r\n    editProfileName.style.opacity = 0.5;\r\n})\r\n\r\nusernameRow.addEventListener(\"mouseover\", () => {\r\n    editUsername.style.opacity = 0.5;\r\n})\r\n\r\nprofileNameRow.addEventListener(\"mouseleave\", () => {\r\n    editProfileName.style.opacity = 0;\r\n})\r\n\r\nusernameRow.addEventListener(\"mouseleave\", () => {\r\n    editUsername.style.opacity = 0;\r\n})\r\n\r\neditProfileName.addEventListener(\"click\", () => {\r\n\r\n  profileName.hidden = true;\r\n\r\n  const editInput = document.createElement(\"input\");\r\n  editInput.setAttribute(\"id\", \"profile-name\");\r\n  editInput.setAttribute(\"class\", \"editable\");\r\n\r\n  profileNameRow.insertBefore(editInput, profileNameRow.children[0]);\r\n\r\n})\r\n\r\nfetch('/getLoginInfo')\r\n.then(response => response.json())\r\n.then(data => {\r\n  $(\"#profile-name\").text(data[\"display\"]);\r\n  $(\"#profile-pts\").text(`${data[\"points\"]} pts`);\r\n  $(\"#profile-username\").text(`@${data[\"username\"]}`);\r\n  $(\"#profile-picture\").attr(\"src\", data[\"picture\"]);\r\n})\r\n.catch(error => {\r\n  console.error('Error checking authentication:', error);\r\n});\n\n//# sourceURL=webpack://app/./src/play.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/play.js"]();
/******/ 	
/******/ })()
;