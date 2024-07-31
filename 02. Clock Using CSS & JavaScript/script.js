const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

function setTime(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360) + 90;
    secHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360 ) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(() => {
    setTime();
    
}, 1000);

const digiHourHand = document.querySelector('.digi-hour');
const digiMinHand = document.querySelector('.digi-min');
const digiSecHand = document.querySelector('.digi-sec');
const amPm = document.querySelector('.ampm');
function setDigiTime(){
    const now = new Date();

    const seconds = now.getSeconds();
    digiSecHand.innerText = seconds;

    const minutes = now.getMinutes();
    digiMinHand.innerText = (minutes) +  " " + ":";

    const hours = now.getHours();
    digiHourHand.innerText = (hours - 12) + " " + ":";

    if(hours > 12){
        amPm.innerText = "PM";
    }else{
        amPm.innerText = "AM"; 
    }

}

setInterval(() => {
    setDigiTime();   
}, 1000);

