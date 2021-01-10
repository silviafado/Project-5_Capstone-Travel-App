
import { performAction, postGeo, postWeather, postPix, updateUI, updatePix } from './js/formHandler';
import { todayDate, startDate, endDate } from './js/helpers'
import { showSlides, plusSlides, currentSlide } from './js/slides'

import './styles/style.scss'
import './styles/slides.scss'
import './styles/responsive.scss'

import './assets/images/44dedf10ab048affca1f.jpg'
import './assets/images/60e12d72799d19301dbf.jpg'
import './assets/images/bc94de424ac893816c71.jpg'
import './assets/images/3f27660d13eb755e223b.jpg'
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

alert("Welcome to Travel App :)")
console.log("Hello!!");