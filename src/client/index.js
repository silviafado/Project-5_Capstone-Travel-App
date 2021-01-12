
import { performAction, postGeo, postWeather, postPix, updateUI, updatePix } from './js/formHandler';
import { todayDate, startDate, endDate } from './js/helpers'
import { showSlides, plusSlides, currentSlide } from './js/slides'

import './styles/style.scss'
import './styles/slides.scss'
import './styles/responsive.scss'

import './assets/images/1.jpg'
import './assets/images/2.jpg'
import './assets/images/3.jpg'
import './assets/images/4.jpg'
import './assets/images/5.jpg'
import './assets/images/6.jpg'
import './assets/images/7.jpg'
import './assets/images/adventure.jpg'
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
    showSlides,
    plusSlides,
    currentSlide,
}

console.log("Hello!!");

/* Event listener to add function to Search button */
document.addEventListener('DOMContentLoaded', () => {
    const generate=document.getElementById('button').addEventListener('click', performAction);
});    