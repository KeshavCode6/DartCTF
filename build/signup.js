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

/***/ "./src/signup.js":
/*!***********************!*\
  !*** ./src/signup.js ***!
  \***********************/
/***/ (() => {

eval("$(document).ready(()=>{\r\n    $(\"#signupForm\").toggleClass(\"slide-right\")\r\n})\r\n\r\n$('#backToLogin').on('click', ()=>{\r\n    $(\"#signupForm\").toggleClass(\"slide-right\")\r\n    $(\"#signupForm\").addClass(\"slide-left\")\r\n    setTimeout(function(){\r\n       window.location.href=\"/login\"\r\n    }, 500);\r\n})\r\n\r\n$(\"#usernameSignup\").on('keyup', async (e) => {\r\n    if (e.key === 'Enter' || e.keyCode === 13) {\r\n        $(\"#emailSignup\").focus()\r\n    }\r\n});\r\n$(\"#emailSignup\").on('keyup', async (e) => {\r\n    if (e.key === 'Enter' || e.keyCode === 13) {\r\n        $(\"#passwordSignup\").focus()\r\n    }});\r\n$(\"#passwordSignup\").on('keyup', async (e) => {\r\n    if (e.key === 'Enter' || e.keyCode === 13) {\r\n        $(\"#passwordConfirmSignup\").focus()\r\n    }});\r\n$(\"#passwordConfirmSignup\").on('keyup', async (e) => {\r\n    if (e.key === 'Enter' || e.keyCode === 13) {\r\n        await signUp();\r\n    }});\r\n\r\n$(\"#signup\").on(\"click\", async ()=>{\r\n    await signUp();\r\n})\r\n\r\nvar signUp = async () => {\r\n    // Basic POST request with JSON payload\r\n    try {\r\n      const response = await fetch('/signup', {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n          // Other headers as needed\r\n        },\r\n        body: JSON.stringify({\r\n          user: $(\"#emailSignup\").val(),\r\n          pwd: $(\"#passwordSignup\").val(),\r\n          pwdConfirm:$(\"#passwordConfirmSignup\").val()\r\n        }),\r\n      });\r\n  \r\n      if (!response.ok) {\r\n        throw new Error(`HTTP error! Status: ${response.status}`);\r\n      }\r\n  \r\n      const data = await response.json();\r\n      if(data.success==false){\r\n        setError(data.message);\r\n      }\r\n      else\r\n      {\r\n        document.location.href=data.redirect\r\n      }\r\n\r\n    } catch (error) {\r\n      console.error('Fetch error:', error);\r\n    }\r\n  };\r\n  \r\nvar setError = (msg)=>{\r\n    $('#SignupErrorMsg').text(msg);\r\n    clearSigninFields();\r\n  }\r\n\r\nvar clearSigninFields = () =>{\r\n    $('#usernameSignup').text(\"\");\r\n    $('#emailSignup').text(\"\");\r\n    $('#passwordSignup').text(\"\");\r\n    $('#passwordConfirmSignup').text(\"\");\r\n}\n\n//# sourceURL=webpack://app/./src/signup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/signup.js"]();
/******/ 	
/******/ })()
;