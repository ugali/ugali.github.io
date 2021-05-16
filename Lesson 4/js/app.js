let myDate = document.getElementById('dateTime');

function lastUpdateTimeDate(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let today = date.getDate();
    let time = date.toLocaleTimeString('it-IT');
    myDate.innerHTML = `${today}/ ${month}/ ${year} ${time}`;
    console.log(myDate);
}

lastUpdateTimeDate();