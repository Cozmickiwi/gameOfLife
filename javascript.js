const gameContainer = document.querySelector('.gameContainer');
const startButton = document.querySelector('.startButton');
let liveCells = [];
let deadCells = [];
function gridGen(){
    for(i=1;i<=2500;i++){
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        pixel.setAttribute('id', i);
        pixel.style.backgroundColor = 'white';
        pixel.addEventListener('mousemove', event =>{
            if (event.buttons == 1){
                pixel.style.backgroundColor = 'black';
            }
            //console.log(pixel.id);
        })
        
        gameContainer.appendChild(pixel);
    }
}

function game(curPixel){
    let neighborList = [];
    let leftNeighbor;
    let rightNeighbor;
    let topNeighbor;
    let bottomNeighbor;
    let nWNeighbor;
    let nENeighbor;
    let sWNeighbor;
    let sENeighbor
    if((Number(curPixel.id) - 1) % 50 != 0){
        leftNeighbor = document.getElementById(`${Number(curPixel.id) - 1}`);
        if(leftNeighbor.style.backgroundColor == 'black'){
            neighborList.push('left');
        }
    }
    if(Number(curPixel.id) % 50 != 0){
        rightNeighbor = document.getElementById(`${Number(curPixel.id) + 1}`);
        if(rightNeighbor.style.backgroundColor == 'black'){
            neighborList.push('right');
        }
    }
    if(Number(curPixel.id) > 50){
        topNeighbor = document.getElementById(`${Number(curPixel.id) - 50}`);
        if(topNeighbor.style.backgroundColor == 'black'){
            neighborList.push('top');
        }
    }
    if(Number(curPixel.id) <= 2450){
        bottomNeighbor = document.getElementById(`${Number(curPixel.id) + 50}`);
        if(bottomNeighbor.style.backgroundColor == 'black'){
            neighborList.push('bottom');
        }
    }
    if(Number(curPixel.id) > 50 && (Number(curPixel.id) - 1) % 50 != 0){
        nWNeighbor = document.getElementById(`${Number(topNeighbor.id) - 1}`);
        if(nWNeighbor.style.backgroundColor == 'black'){
            neighborList.push('north west');
        }
    }
    if(Number(curPixel.id) > 50 && Number(curPixel.id) % 50 != 0){
        nENeighbor = document.getElementById(`${Number(topNeighbor.id) + 1}`);
        if(nENeighbor.style.backgroundColor == 'black'){
            neighborList.push('north east');
        }
    }
    if(Number(curPixel.id) <= 2450 && (Number(curPixel.id) - 1) % 50 != 0){
        sWNeighbor = document.getElementById(`${Number(bottomNeighbor.id) - 1}`);
        if(sWNeighbor.style.backgroundColor == 'black'){
            neighborList.push('south west');
        }
    }
    if(Number(curPixel.id) <= 2450 && Number(curPixel.id) % 50 != 0){
        sENeighbor = document.getElementById(`${Number(bottomNeighbor.id) + 1}`);
        if(sENeighbor.style.backgroundColor == 'black'){
            neighborList.push('south east');
        }
    }
    if((neighborList.length < 2 && curPixel.style.backgroundColor == 'black') || (neighborList.length > 3 && curPixel.style.backgroundColor == 'black')){
        deadCells.push(curPixel);
        return('done');
    }
    else if(curPixel.style.backgroundColor == 'white' && neighborList.length == 3){
        liveCells.push(curPixel);
        return('done');
    }
    else{
        return('done');
    }
}

function gameLoop(){
    for(i=1;i<=2500;i++){
        game((document.getElementById(i)));
    }
    cellChanger();
    return('a');
}

function cellChanger(){
    if(liveCells.length > 0){
        liveCells.forEach((cell, index) => {
            liveCells[index].style.backgroundColor = 'black';
            
        })
    }
    if(deadCells.length > 0){
        deadCells.forEach((cell, index) => {
            deadCells[index].style.backgroundColor = 'white';
        })
    }
    liveCells = [];
    deadCells = [];
    return('done');
}

startButton.addEventListener('click', () => {
    setInterval(() => {gameLoop()}, 100);
})

gridGen();