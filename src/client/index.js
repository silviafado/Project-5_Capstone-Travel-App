
import { performAction, postGeo, postWeather, postPix, updateUI, updatePix } from './js/formHandler';
import { todayDate, startDate, endDate, control1, control2, controller, controller2 } from './js/helpers'
import { showSlides, plusSlides, currentSlide } from './js/slides'

import './styles/style.scss'
import './styles/slides.scss'

import './assets/images/1.jpg'
import './assets/images/2.jpg'
import './assets/images/3.jpg'
import './assets/images/4.jpg'
import './assets/images/logo_geonames.png'
import './assets/images/logo_weatherbit.png'
import './assets/images/logo_pixabay.png'


export {
    performAction,
    postGeo,
    postWeather,
    postPix,
    updateUI,
    updatePix,
    startDate,
    todayDate,
    endDate,
    control1,
    control2,
    controller,
    controller2,
    showSlides,
    plusSlides,
    currentSlide,
}

alert("Welcome to Travel App :)")
console.log("Hello!!");