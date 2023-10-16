const gameContainer = document.querySelector('.gameContainer');
const startButton = document.querySelector('.startButton');
function gridGen(){
    for(i=1;i<=2500;i++){
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        pixel.setAttribute('id', i);
        pixel.style.backgroundColor = 'white';
        pixel.addEventListener('click', () =>{
            pixel.style.backgroundColor = 'black';
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
    if((Number(curPixel.id) - 1) % 10 != 0){
        leftNeighbor = document.getElementById(`${Number(curPixel.id) - 1}`);
        if(leftNeighbor.style.backgroundColor == 'black'){
            neighborList.push('left');
        }
    }
    if(Number(curPixel.id) % 10 != 0){
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
    if(Number(curPixel.id) > 50 && (Number(curPixel.id) - 1) % 10 != 0){
        nWNeighbor = document.getElementById(`${Number(topNeighbor.id) - 1}`);
        if(nWNeighbor.style.backgroundColor == 'black'){
            neighborList.push('north west');
        }
    }
    if(Number(curPixel.id) > 50 && Number(curPixel.id) % 10 != 0){
        nENeighbor = document.getElementById(`${Number(topNeighbor.id) + 1}`);
        if(nENeighbor.style.backgroundColor == 'black'){
            neighborList.push('north east');
        }
    }
    if(Number(curPixel.id) <= 2450 && (Number(curPixel.id) - 1) % 10 != 0){
        sWNeighbor = document.getElementById(`${Number(bottomNeighbor.id) - 1}`);
        if(sWNeighbor.style.backgroundColor == 'black'){
            neighborList.push('south west');
        }
    }
    if(Number(curPixel.id) <= 2450 && Number(curPixel.id) % 10 != 0){
        sENeighbor = document.getElementById(`${Number(bottomNeighbor.id) + 1}`);
        if(sENeighbor.style.backgroundColor == 'black'){
            neighborList.push('south east');
        }
    }
    if(neighborList.length < 2 || neighborList.length > 3 && curPixel.style.backgroundColor == 'black'){
        curPixel.style.backgroundColor = 'white';
        return('done');
    }
    else if(curPixel.style.backgroundColor == 'white' && neighborList.length == 3){
        curPixel.style.backgroundColor = 'black';
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
}

startButton.addEventListener('click', () => {
    for(a=1;a<100;a++){
        setTimeout(function(){
            gameLoop();
        }, 1000)
    }
})

gridGen();