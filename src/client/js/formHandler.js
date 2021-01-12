// Function called by event listener
function performAction(event){
    event.preventDefault()
    const formDestination=document.getElementById('destination_input').value;
    const formDeparture=document.getElementById('start_date').value;
    const formReturn=document.getElementById('end_date').value;
        postData('http://localhost:8001/addEntry', {formDestination, formDeparture, formReturn})
        .then (() => {
        updateUI() 
        })
}        

// Function to POST travelData
const postData=async(url='', data={})=>{
    console.log(data)
    const response=await fetch(url, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const postResult=await response.json();
        console.log('Data received:', postResult);
        return postResult;
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
        document.getElementById('dest_picture').setAttribute("src", newEntry.picture);
    }catch(error){
        console.log('error',error);
    }
}


export { performAction }
export { postData }
export { updateUI }