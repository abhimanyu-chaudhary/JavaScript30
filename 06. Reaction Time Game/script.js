const grid = document.getElementById('grid');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timeTable = document.getElementById('timeTable').querySelector('tbody');
let startTime, activeBox;
let attempt = 0;


// Create a 4x4 grid
function createGrid() {
    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
}


// Start the game
function startGame() {
    if (activeBox) {
        activeBox.classList.remove('active');
    }
    
    const boxes = document.querySelectorAll('.box');
    const randomIndex = Math.floor(Math.random() * boxes.length);
    activeBox = boxes[randomIndex];
    activeBox.classList.add('active');
    
    startTime = new Date().getTime();
}


// Record the reaction time
function recordReactionTime(event) {
    if (event.target.classList.contains('active')) {
        const endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        attempt++;
        
        const row = document.createElement('tr');
        row.innerHTML = `<td>${attempt}</td><td>${reactionTime}</td>`;
        timeTable.appendChild(row);
        
        startGame();
    }
}

// Reset the game
function resetGame() {
    if (activeBox) {
        activeBox.classList.remove('active');
    }
    timeTable.innerHTML = '';
    attempt = 0;
}

// Add event listeners
grid.addEventListener('click', recordReactionTime);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

// Initialize the grid
createGrid();
