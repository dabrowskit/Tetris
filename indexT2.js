const canvas = document.getElementById("gameCanvas");
// canvas.width  = 0.9 * window.innerWidth;
// canvas.height =  0.9 * window.innerHeight;
const context = canvas.getContext('2d');
var scaleAdjust = 1.15;
canvas.width  = 300*scaleAdjust;
canvas.height =  400*scaleAdjust;
var scaleSize = 20*scaleAdjust;

context.scale(scaleSize, scaleSize);

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

const matrixStart = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,1,1,1,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

// funckja wyswietlajaca jeden element macierzy TD
function drawMatrix(matrix) {
    for (let i = 0; i<=1;) {   
        let xAxis = Math.floor(Math.random()*15);
        let yAxis = Math.floor(Math.random()*20);

            if (matrix[yAxis][xAxis] == 0) { 
                context.fillStyle = "#4E3CAA";
                context.fillRect(xAxis, yAxis, 1, 1);
                matrix[yAxis][xAxis] = 2;
                i += 1;
            } else if (matrix[yAxis][xAxis] == 1) {
                context.fillStyle = "#5DAC94"; //no taki jak tla domyslnie
                context.fillRect(xAxis, yAxis, 1, 1);
                i += 1;
           } else if (matrix[yAxis][xAxis] == 2) {
                i = i;
           }  
    }                      
}

for (k=0;k<300;k++){
    exp = 0.45;
    sleep(300*Math.pow(k,exp)).then(() => {
        drawMatrix(matrixStart);
        k = k+1;
    });
}
 

//wychwytywanie swpiow
var directionCatch;
var myElement = document.getElementById('screenArea');
// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// listen to events...
mc.on("swipeleft swiperight swipeup swipedown tap press", function(ev) {
    directionCatch = ev.type;
    document.getElementById("generalInfo").innerHTML = directionCatch;
});







 











/*


const matrix = [
    [0,1,0,0],
    [0,1,0,0],
    [0,0,0,0],
    [0,0,0,0],
];


let offset = 0;

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y ) => {
        row.forEach((value, x) => {
            if (value !==0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x,
                                 y + offset.y ,1,1);            
            }
        });
    });  
}

const player = {
    pos: {x: 0, y: 0},
    matrix: matrix,
}

function draw() {
    context.fillStyle = "rgb(34, 111, 190)";
    context.fillRect(0,0,canvas.width, canvas.height);
    drawMatrix(player.matrix, player.pos)
}




*/


