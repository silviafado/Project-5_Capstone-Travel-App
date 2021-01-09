const todayDate = new Date();
const startDate = document.getElementById('startDate').valueAsDate = new Date();
const endDate = document.getElementById('endDate').valueAsDate = new Date();

const control1 = document.getElementById('startDate').addEventListener('change', controller);
const control2 = document.getElementById('endDate').addEventListener('change', controller2);


function controller(e){
    if(startDate < todayDate){
        alert('You should enter a date grater than today!');
    }
    else if (startDate > todayDate+16){
        alert ('Forecast is only available for 16 days.');
    }
}        

function controller2 (e){
    if(endDate < startDate){
        alert('Return date should be after departure date.');
        endDate = null;
    }
}


export { todayDate }
export { startDate }
export { endDate }
export { control1 }
export { control2 }
export { controller }
export { controller2 }
