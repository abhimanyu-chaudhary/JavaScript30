let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');


const hourDisplay = document.getElementById('hour');
const minutesDisplay = document.getElementById('minute');
const secondsDisplay = document.getElementById('second');
const miliSecondDisplay = document.getElementById('milisecond');

function startTimer(){
    interval = setInterval(() => {
        miliseconds++;
        if(miliseconds === 10){
            miliseconds = 0;
            seconds++;
        }
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
        if(minutes === 60){
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 100);

    startButton.disabled = true;
   
}


function stopTimer(){
    clearInterval(interval);
    startButton.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    startButton.disabled = false;
    updateDisplay();
}



function updateDisplay(){
    hourDisplay.textContent = formatTime(hours);
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    miliSecondDisplay.textContent = formatTime(miliseconds);
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


