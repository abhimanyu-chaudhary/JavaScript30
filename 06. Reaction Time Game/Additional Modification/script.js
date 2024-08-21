const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const boxes = document.querySelectorAll('.box');
const grid = document.getElementById('grid');
const tableData = document.getElementById('tableData').querySelector('tbody');

const timeData = document.getElementById('timeData');

let startTime, endTime, timeGap, activeBox, interval;

let mouseClick = 0;
let duration = 3;


startBtn.addEventListener('click', startTask);
grid.addEventListener('click', reactionTime);
resetBtn.addEventListener('click', resetTask);
pauseBtn.addEventListener('click', pauseTask);



function startTask(){
    
        if(activeBox){
            activeBox.classList.remove('active');
        }
            clearInterval(interval);
            let randomIndex = Math.floor(Math.random() * boxes.length);
            activeBox = boxes[randomIndex];
            activeBox.classList.add('active');
    
            startTime = new Date().getTime();
        
            interval =  setTimeout(() => {
                clearInterval(interval);
                startTask();
            }, duration * 1000);
    
}

function reactionTime(event){
    if(event.target.classList.contains('active')){
        endTime = new Date().getTime();
        timeGap = endTime - startTime;
        mouseClick++;

        
        
        const row = document.createElement('tr');
        row.innerHTML = `<td>${mouseClick}</td> <td>${timeGap/1000}</td> <td>${timeGap/1000}</td> ` ;

        tableData.appendChild(row);


        interval = setInterval(() => {
                 
            startTask();
            
           
        }, duration * 1000);
              
    }

     

}

function resetTask(){
    clearInterval(interval);
    if(activeBox){
        activeBox.classList.remove('active');
    }
    tableData.innerHTML = '';
    mouseClick = 0;
}

function pauseTask(event){
    clearInterval(interval);
    if(activeBox){
        activeBox.classList.remove('active');
    }
}
