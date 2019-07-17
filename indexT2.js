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

const matrixPlay = [
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
];

const matrixElement = [
    [4,4,4,4,4,4,4,5,4,4,4,4,4,4,4], 
    [4,4,4,4,4,4,4,5,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,5,5,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
];



// funckja wyswietlajaca jeden element macierzy TD
function drawMatrixTd(matrix) {
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
            } else if (matrix[yAxis][xAxis] == 3) {
                context.fillStyle = "white"; //3 dla matrix play
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
        drawMatrixTd(matrixStart);
        k = k+1;
    });
}
 


//czekamy az zaladuje sie TD potem zaczyna sie gra, koniec na koncu kodu
// sleep(4000).then(() => {

    sleep(4000).then(() => {


//wychwytywanie swpiow
var directionCatch = 0;
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
        if (ev.type == "swipeleft"){
            player.pos.x--;
        }
        if (ev.type == "swiperight"){
            player.pos.x++;
        }
        if (ev.type == "swipedown"){
            player.pos.y++;
            dropCounter = 0;
        }
        if (ev.type == "tap"){
            gameActive = 1; // potem dodac rotate
        }
        console.log(player.pos.x);

});


//////



function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type)
{
    if (type === 'I') {
        return [
            [0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [1, 1, 1, 1, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [2, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 0, 0],
            [0, 3, 0],
            [3, 3, 3],
        ];
    } else if (type === 'O') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 0],
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = "#F901A7";
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = '#D5B4A7';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
    }
}

function playerReset() {
    const pieces = 'ILJO';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    lastTime = time;

    draw();
    requestAnimationFrame(update);
}

function updateScore() {
    document.getElementById('score').innerText = player.score;
}

document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        playerMove(-1);
    } else if (event.keyCode === 39) {
        playerMove(1);
    } else if (event.keyCode === 40) {
        playerDrop();
    } else if (event.keyCode === 81) {
        playerRotate(-1);
    } else if (event.keyCode === 87) {
        playerRotate(1);
    }
});

const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

const arena = createMatrix(12, 20);

const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
};

playerReset();
updateScore();
update();





});

















/*


const matrix = [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,0,1,0],
];

const player = {
    pos: {x: 5, y: 5},
    matrix: matrix,
}

let offset = 0;

function draw() {
    context.fillStyle = "white";
    context.fillRect(0,0,canvas.width, canvas.height);
    drawMatrix2(player.matrix, player.pos);
    }

function drawMatrix2(matrix, offset) {
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

function playerDrop() {
    player.pos.y++;
    dropCounter = 0;
}





let dropCounter = 0;
let dropInterval = 750;
let lastTime = 0;
function update(time = 0){
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval){
       playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}




update();

*/


// }); // do sleep





