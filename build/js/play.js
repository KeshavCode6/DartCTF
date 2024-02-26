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

eval("fetch('/getLoginInfo')\r\n  .then(response => response.json())\r\n  .then(data => {\r\n    $(\"#profile-name\").text(data[\"display\"]);\r\n    $(\"#profileNameEdit\").text(data[\"display\"])\r\n    $(\"#profile-pts\").text(`${data[\"points\"]} pts`);\r\n    $(\"#profile-username\").text(`[@${data[\"username\"]}]`);\r\n    $(\"#profile-picture\").attr(\"src\", data[\"picture\"]);\r\n  })\r\n  .catch(error => {\r\n    console.error('Error checking authentication:', error);\r\n  });\r\n\r\nlet editProfile = false;\r\n$(\"#editName\").on(\"click\", () => {\r\n  editProfile = !editProfile;\r\n  if (editProfile) {\r\n    $(\"#profileNameEdit\").css(\"display\", \"none\")\r\n    $(\"#profileEditInput\").css(\"display\", \"block\")\r\n  }\r\n  else {\r\n    $(\"#profileNameEdit\").css(\"display\", \"block\")\r\n    $(\"#profileEditInput\").css(\"display\", \"none\")\r\n  }\r\n})\r\n\r\n$('#sendEditProfile').on(\"click\", function () {\r\n  var formData = new FormData($('#editProfile')[0]);\r\n\r\n  // Make AJAX request\r\n  $.ajax({\r\n    url: '/editProfile',\r\n    type: 'POST',\r\n    data: formData,\r\n    processData: false,\r\n    contentType: false,\r\n    success: function (response) {\r\n      // Handle success\r\n      $(\"#result\").text('Profile updated successfully');\r\n      $(\"#result\").css('color', \"green\");\r\n\r\n      setTimeout(() => {\r\n        location.reload();\r\n      }, 1000);\r\n    },\r\n    error: function (xhr, status, error) {\r\n      var errorMessage = xhr.responseText.split(\"<pre>\")[1].split(\"</pre>\")[0].split(\"<br>\")[0]\r\n      $(\"#result\").css('color', \"red\");\r\n      $(\"#result\").text(errorMessage);\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://app/./src/play.js?");

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