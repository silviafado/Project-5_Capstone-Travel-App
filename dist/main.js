var Client;Client =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 70:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getWeather": () => /* reexport */ getWeather,
  "performAction": () => /* reexport */ performAction,
  "postData": () => /* reexport */ postData,
  "updateUI": () => /* reexport */ updateUI
});

;// CONCATENATED MODULE: ./src/client/js/formHandler.js
/* Global Variables */

/* Personal API Key for OpenWeatherMap API */
let baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey='&appid=1111cbdcf8fc8f48d8f36f640aab97dc&units=metric';

/* Create a new date instance dynamically with JS */
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Event listener to add function to existing HTML DOM element */
const generate=document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zip=document.getElementById('zip').value;
    const url=baseURL+zip+apiKey;
    const feelings=document.getElementById('feelings').value;
    getWeather(url)
        .then (function(data){
            console.log(data)
        postData('http://localhost:8001/addEntry', data={date:newDate, location: data.name, country:data.sys.country, temp:data.main.temp, content:feelings})
        .then (function(newEntry){
        updateUI()
        })
    })
}

/* Function to GET Web API Data */
const getWeather=async(url)=>{
    const res=await fetch(url)
    try{
        const data=await res.json();
        console.log(data);
        return (data);
    }catch(error){
        console.log('error', error);
    }
};

/* Function to POST data */
const postData=async(url='', data={})=>{
    console.log(data)
    const response=await fetch(url, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const newData=await response.json();
        console.log(newData);
        return newData
    }catch(error){
        console.log('error',error);
    }
}

/*Function to update User Interface*/
const updateUI=async()=>{
    const request=await fetch('http://localhost:8001/all');
    try{
        const newEntry=await request.json();
        document.getElementById('date').innerHTML='Date: '+newEntry.date;
        document.getElementById('destination').innerHTML='Location: '+newEntry.destination;
        document.getElementById('country').innerHTML='Country: '+newEntry.country;
        document.getElementById('city').innerHTML='Country: '+newEntry.city;
        document.getElementById('temp').innerHTML='Temperature in ºC: '+newEntry.temp;
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