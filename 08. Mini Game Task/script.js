const boxes = document.querySelectorAll('.box');
const reset = document.getElementById('reset');
const colors = ["red", "green", "blue"];

function setColors(){
    boxes.forEach((box) => box.style.backgroundColor = "red");
}

function onBoxClick(event){
    const currentColor = event.target.style.backgroundColor;
    const nextColor = colors[(colors.indexOf(currentColor) +1) % colors.length];
    event.target.style.backgroundColor = nextColor;

    checkifAllColors();
}

function checkifAllColors(){
    let firstColor = boxes[0].style.backgroundColor;
    if(Array.from(boxes).every(box => box.style.backgroundColor === firstColor)){
        setTimeout(() => {
            alert("You Won The Game!");
        }, 100);
    }

}

function resetbtn(){
    setColors();
}

setColors();
boxes.forEach(box => box.addEventListener('click', onBoxClick));
reset.addEventListener('click', resetbtn);



// const boxes = document.querySelectorAll('.box');
// const resetBtn = document.getElementById('reset');
// let colors = ["red", "blue", "green"];

// function setColors(){
//     boxes.forEach((box) => box.style.backgroundColor = "red");
// }

// function boxClick(event){
//     let currentColor = event.target.style.backgroundColor;
//     let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];

//     event.target.style.backgroundColor = nextColor;

//     isAllColorMatching();
// }

// function isAllColorMatching() {
//     let firstColor = boxes[0].style.backgroundColor;
//     if (Array.from(boxes).every(box => box.style.backgroundColor === firstColor)) {
//         setTimeout(() => {
//             alert("You won the game!")
//         }, 300);
//     }
// }


// function resetGame(){
//     setColors();
// }



// boxes.forEach((box) => box.addEventListener('click', boxClick));
// setColors();
// resetBtn.addEventListener('click', resetGame);