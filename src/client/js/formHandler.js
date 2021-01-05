/* Global Variables */

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
        postPix('http://localhost:8001/addPix', {formDestination}) 
        .then (() => {
        updateUI()
        .then (() => {
        updatePix()    
        })})})})
}

/* Function to POST geoData */
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

/* Function to POST tempData */
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

/* Function to POST pixData */
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

/*Function to update User Interface*/
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
    }catch(error){
        console.log('error',error);
    }
}

/*Function to update User Interface*/
const updatePix=async()=>{
    const request=await fetch('http://localhost:8001/pix');
    try{
        const newPicture=await request.json();
        document.getElementById('dest_picture').setAttribute("src", newPicture.picture);
    }catch(error){
        console.log('error',error);
    }
}


export { performAction }
export { postGeo }
export { postWeather }
export { postPix }
export { updateUI }
export { updatePix }
