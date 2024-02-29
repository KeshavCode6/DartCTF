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

eval("fetch('/getLoginInfo')\n  .then(response => response.json())\n  .then(data => {\n    $(\"#profile-name\").text(data[\"display\"]);\n    $(\"#profileNameEdit\").text(data[\"display\"])\n    $(\"#profile-pts\").text(`${data[\"points\"]} pts`);\n    $(\"#profile-username\").text(`[@${data[\"username\"]}]`);\n    $(\"#profile-picture\").attr(\"src\", data[\"picture\"]);\n  })\n  .catch(error => {\n    console.error('Error checking authentication:', error);\n  });\n\nlet editProfile = false;\n$(\"#editName\").on(\"click\", () => {\n  editProfile = !editProfile;\n  if (editProfile) {\n    $(\"#profileNameEdit\").css(\"display\", \"none\")\n    $(\"#profileEditInput\").css(\"display\", \"block\")\n  }\n  else {\n    $(\"#profileNameEdit\").css(\"display\", \"block\")\n    $(\"#profileEditInput\").css(\"display\", \"none\")\n  }\n})\n\n$('#sendEditProfile').on(\"click\", function () {\n  var formData = new FormData($('#editProfile')[0]);\n\n  // Make AJAX request\n  $.ajax({\n    url: '/editProfile',\n    type: 'POST',\n    data: formData,\n    processData: false,\n    contentType: false,\n    success: function (response) {\n      // Handle success\n      $(\"#result\").text('Profile updated successfully');\n      $(\"#result\").css('color', \"green\");\n\n      setTimeout(() => {\n        location.reload();\n      }, 1000);\n    },\n    error: function (xhr, status, error) {\n      var errorMessage = xhr.responseText.split(\"<pre>\")[1].split(\"</pre>\")[0].split(\"<br>\")[0]\n      $(\"#result\").css('color', \"red\");\n      $(\"#result\").text(errorMessage);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://app/./src/play.js?");

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