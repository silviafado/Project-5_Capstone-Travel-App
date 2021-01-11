var Client;Client =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 63:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "currentSlide": () => /* reexport */ currentSlide,
  "endDate": () => /* reexport */ endDate,
  "performAction": () => /* reexport */ performAction,
  "plusSlides": () => /* reexport */ plusSlides,
  "postGeo": () => /* reexport */ postGeo,
  "postPix": () => /* reexport */ postPix,
  "postWeather": () => /* reexport */ postWeather,
  "showSlides": () => /* reexport */ showSlides,
  "startDate": () => /* reexport */ startDate,
  "todayDate": () => /* reexport */ todayDate,
  "updatePix": () => /* reexport */ updatePix,
  "updateUI": () => /* reexport */ updateUI
});

;// CONCATENATED MODULE: ./src/client/js/formHandler.js
// Function called by event listener
function performAction(event){
    event.preventDefault()
    const formDestination=document.getElementById('destinationInput').value;
    const formDeparture=document.getElementById('startDate').value;
    const formReturn=document.getElementById('endDate').value;
        postGeo('http://localhost:8001/addEntry', {formDestination})
        .then (() => {
        postWeather('http://localhost:8001/addTemp', {formDeparture, formReturn})   
        .then (() => {
        postPix('http://localhost:8001/addPix', {formDestination}) 
        .then (() => {
        updateUI()
        .then (() => {
        updatePix()    
        })})})})
}

// Function to POST geoData
const postGeo=async(url='', data={})=>{
    console.log(data)
    const response=await fetch(url, {
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

// Function to POST tempData
const postWeather=async(url='', data={})=>{
    console.log(data)
    const response=await fetch(url, {
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

// Function to POST pixData
const postPix=async(url='', data={})=>{
    console.log(data)
    const response=await fetch(url, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const apiPix=await response.json();
        console.log('Data received:', apiPix);
        return apiPix;
    }catch(error){
        console.log('error',error);
    }
}

// Function to update User Interface
const updateUI=async()=>{
    const request=await fetch('http://localhost:8001/data');
    try{
        const newEntry=await request.json();
        document.getElementById('date').innerHTML='Date: '+newEntry.date;
        document.getElementById('city').innerHTML='City: '+newEntry.city;
        document.getElementById('country').innerHTML='Country: '+newEntry.country;       
        document.getElementById('temp').innerHTML='Temperature in ºC: '+newEntry.temp;
        document.getElementById('max_temp').innerHTML='Maximum temperature in ºC: '+newEntry.max_temp;
        document.getElementById('min_temp').innerHTML='Minimum temperature in ºC: '+newEntry.min_temp;
        document.getElementById('wind_dir').innerHTML='Wind direction in degrees: '+newEntry.wind_dir;
        document.getElementById('wind_speed').innerHTML='Wind speed in m/s: '+newEntry.wind_speed.toFixed(2);
        document.getElementById('precipitation').innerHTML='Probability of Precipitation (%): '+newEntry.precipitation;
        document.getElementById('trip_duration').innerHTML='Duration of the trip: '+newEntry.duration+' days';
    }catch(error){
        console.log('error',error);
    }
}

// Function to upload picture on User Interface
const updatePix=async()=>{
    const request=await fetch('http://localhost:8001/pix');
    try{
        const newPicture=await request.json();
        document.getElementById('dest_picture').setAttribute("src", newPicture.picture);
    }catch(error){
        console.log('error',error);
    }
}








;// CONCATENATED MODULE: ./src/client/js/helpers.js
const todayDate = new Date();
const startDate = document.getElementById('startDate').valueAsDate = new Date();
const endDate = document.getElementById('endDate').valueAsDate = new Date();




;// CONCATENATED MODULE: ./src/client/js/slides.js
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}




;// CONCATENATED MODULE: ./src/client/assets/images/1.jpg
/* harmony default export */ const _1 = (__webpack_require__.p + "assets/images/1.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/2.jpg
/* harmony default export */ const _2 = (__webpack_require__.p + "assets/images/2.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/3.jpg
/* harmony default export */ const _3 = (__webpack_require__.p + "assets/images/3.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/4.jpg
/* harmony default export */ const _4 = (__webpack_require__.p + "assets/images/4.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/5.jpg
/* harmony default export */ const _5 = (__webpack_require__.p + "assets/images/5.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/6.jpg
/* harmony default export */ const _6 = (__webpack_require__.p + "assets/images/6.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/7.jpg
/* harmony default export */ const _7 = (__webpack_require__.p + "assets/images/7.jpg");
;// CONCATENATED MODULE: ./src/client/assets/images/logo_geonames.png
/* harmony default export */ const logo_geonames = (__webpack_require__.p + "assets/images/logo_geonames.png");
;// CONCATENATED MODULE: ./src/client/assets/images/logo_weatherbit.png
/* harmony default export */ const logo_weatherbit = (__webpack_require__.p + "assets/images/logo_weatherbit.png");
;// CONCATENATED MODULE: ./src/client/assets/images/logo_pixabay.png
/* harmony default export */ const logo_pixabay = (__webpack_require__.p + "assets/images/logo_pixabay.png");
;// CONCATENATED MODULE: ./src/client/index.js























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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(63);
/******/ })()
;