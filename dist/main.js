/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://capstone-travel-app/./src/client/styles/style.scss?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"performAction\": () => /* reexport safe */ _js_app__WEBPACK_IMPORTED_MODULE_0__.performAction,\n/* harmony export */   \"getWeather\": () => /* reexport safe */ _js_app__WEBPACK_IMPORTED_MODULE_0__.getWeather,\n/* harmony export */   \"postData\": () => /* reexport safe */ _js_app__WEBPACK_IMPORTED_MODULE_0__.postData,\n/* harmony export */   \"updateUI\": () => /* reexport safe */ _js_app__WEBPACK_IMPORTED_MODULE_0__.updateUI\n/* harmony export */ });\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/client/js/app.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n\n\n\n\n\n\n\n\n\n\nalert(\"Welcome to Travel App :)\")\nconsole.log(\"Hello!!\");\n\n//# sourceURL=webpack://capstone-travel-app/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"performAction\": () => /* binding */ performAction,\n/* harmony export */   \"getWeather\": () => /* binding */ getWeather,\n/* harmony export */   \"postData\": () => /* binding */ postData,\n/* harmony export */   \"updateUI\": () => /* binding */ updateUI\n/* harmony export */ });\n/* Global Variables */\n\n/* Personal API Key for OpenWeatherMap API */\nlet baseURL='http://api.openweathermap.org/data/2.5/weather?q=';\nconst apiKey='&appid=1111cbdcf8fc8f48d8f36f640aab97dc&units=metric';\n\n/* Create a new date instance dynamically with JS */\nlet d = new Date();\nlet newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();\n\n/* Event listener to add function to existing HTML DOM element */\nconst generate=document.getElementById('generate').addEventListener('click', performAction);\n\n/* Function called by event listener */\nfunction performAction(e){\n    const zip=document.getElementById('zip').value;\n    const url=baseURL+zip+apiKey;\n    const feelings=document.getElementById('feelings').value;\n    getWeather(url)\n        .then (function(data){\n            console.log(data)\n        postData('http://localhost:8000/addEntry', data={date:newDate, location: data.name, country:data.sys.country, temp:data.main.temp, content:feelings})\n        .then (function(newEntry){\n        updateUI()\n        })\n    })\n}\n\n/* Function to GET Web API Data */\nconst getWeather=async(url)=>{\n    const res=await fetch(url)\n    try{\n        const data=await res.json();\n        console.log(data);\n        return (data);\n    }catch(error){\n        console.log('error', error);\n    }\n};\n\n/* Function to POST data */\nconst postData=async(url='', data={})=>{\n    console.log(data)\n    const response=await fetch(url, {\n    method:'POST',\n    credentials:'same-origin',\n    headers:{'Content-Type':'application/json; charset=UTF-8'},\n    body: JSON.stringify(data),\n    })\n    try{\n        const newData=await response.json();\n        console.log(newData);\n        return newData\n    }catch(error){\n        console.log('error',error);\n    }\n}\n\n/*Function to update User Interface*/\nconst updateUI=async()=>{\n    const request=await fetch('http://localhost:8000/all');\n    try{\n        const newEntry=await request.json();\n        document.getElementById('date').innerHTML='Date: '+newEntry.date;\n        document.getElementById('location').innerHTML='Location: '+newEntry.location;\n        document.getElementById('country').innerHTML='Country: '+newEntry.country;\n        document.getElementById('temp').innerHTML='Temperature in ºC: '+newEntry.temp;\n        document.getElementById('content').innerHTML='Feelings: '+newEntry.content;\n    }catch(error){\n        console.log('error',error);\n    }\n}\n\n\n\n\n\n\n//# sourceURL=webpack://capstone-travel-app/./src/client/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/client/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;