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
    const formDeparture=document.getElementById('dateInput').value;
        postData('http://localhost:8001/addEntry', {formDestination})
        .then (() => {
        postData2('http://localhost:8001/addEntry', {formDeparture})   
        .then (() => {
        updateUI()
        })
    })
}

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
        const apiData=await response.json();
        console.log('Data received:', apiData);
        return apiData;
    }catch(error){
        console.log('error',error);
    }
}

/* Function to POST data */
const postData2=async(url='', data={})=>{
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
    const request=await fetch('http://localhost:8001/data');
    try{
        const newEntry=await request.json();
        document.getElementById('date').innerHTML='Date: '+newEntry.date;
        document.getElementById('destination').innerHTML='Location: '+newEntry.destination;
        document.getElementById('country').innerHTML='Country: '+newEntry.country;
        document.getElementById('city').innerHTML='City: '+newEntry.city;
        document.getElementById('temp').innerHTML='Temperature in ºC: '+newEntry.temp;
    }catch(error){
        console.log('error',error);
    }
}

export { performAction }
export { postData }
export { postData2 }
export { updateUI }