const secDiv =document.getElementById('sec'),
minDiv =document.getElementById('min'),
hourDiv =document.getElementById('hour');
setInterval(updateClock,1000);

function updateClock() {
    let date =new Date(),
    sec = date.getSeconds()/60,
    min = (date.getMinutes() +  sec)/60,
    hour = ( date.getHours() +min ) / 12;



    secDiv.style.transform = "rotate("+ (sec *360) + "deg)";
    minDiv.style.transform = "rotate("+ (min *360) + "deg)";
    hourDiv.style.transform = "rotate("+ (hour *360) + "deg)";
}

updateClock()