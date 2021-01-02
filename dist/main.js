var Client;Client =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 300:
/***/ ((module, exports) => {



// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ 70:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "performAction": () => /* reexport */ performAction,
  "postGeo": () => /* reexport */ postGeo,
  "postWeather": () => /* reexport */ postWeather,
  "updateUI": () => /* reexport */ updateUI,
  "uploadPix": () => /* reexport */ uploadPix
});

// EXTERNAL MODULE: ./node_modules/node-fetch/browser.js
var browser = __webpack_require__(300);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./src/client/js/formHandler.js
/* Global Variables */



/* Create a new date instance dynamically with JS */
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Event listener to add function to existing HTML DOM element */
const generate=document.getElementById('performAction').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(event){
    event.preventDefault()
    let formDestination=document.getElementById('destinationInput').value;
    const formDeparture=document.getElementById('startDate').value;
        postGeo('http://localhost:8001/addEntry', {formDestination})
        .then (() => {
        postWeather('http://localhost:8001/addTemp', {formDeparture})   
        .then (() => {
        updateUI()
        })
        .then (() => {
        uploadPix()    
        })
    })
}

/* Function to POST data */
const postGeo=async(url='', data={})=>{
    console.log(data)
    const response=await browser_default()(url, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const apiData=await response.json();
        console.log('Data received:', apiData);
        return apiData;
    }catch(error){
        console.log('error',error);
    }
}

/* Function to POST data */
const postWeather=async(url='', data={})=>{
    console.log(data)
    const response=await browser_default()(url, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const apiTemp=await response.json();
        console.log('Data received:', apiTemp);
        return apiTemp;
    }catch(error){
        console.log('error',error);
    }
}

/*Function to update User Interface*/
const updateUI=async()=>{
    const request=await browser_default()('http://localhost:8001/data');
    try{
        const newEntry=await request.json();
        document.getElementById('date').innerHTML='Date: '+newEntry.date;
        document.getElementById('city').innerHTML='City: '+newEntry.city;
        document.getElementById('country').innerHTML='Country: '+newEntry.country;       
        document.getElementById('temp').innerHTML='Temperature in ºC: '+newEntry.temp;
        document.getElementById('max_temp').innerHTML='Maximum temperature in ºC: '+newEntry.max_temp;
        document.getElementById('min_temp').innerHTML='Minimum temperature in ºC: '+newEntry.min_temp;
        document.getElementById('wind_dir').innerHTML='Wind direction in degrees: '+newEntry.wind_dir;
        document.getElementById('wind_speed').innerHTML='Wind speed in m/s: '+newEntry.wind_speed;
        document.getElementById('precipitation').innerHTML='Probability of Precipitation (%): '+newEntry.precipitation;
    }catch(error){
        console.log('error',error);
    }
}

const uploadPix=async()=>{
    const request=await browser_default()('http://localhost:8001/pix');
    try{
        const newPix=await request.json();
    }catch(error){
        console.log('error',error);
    }
}






;// CONCATENATED MODULE: ./src/client/index.js







alert("Welcome to Travel App :)")
console.log("Hello!!");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(70);
/******/ })()
;