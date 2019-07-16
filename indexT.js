const canvasElem = document.getElementById("gameCanvas");
const ctx = canvasElem.getContext("2d");

ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);



document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
}


drake = dragula({
    revertOnSpill: true,
    mirrorContainer: document.querySelector('.movecontainer')
}).on('drag', function(el, source) {
    // On mobile this prevents the default page scrolling while dragging an item.
    $(document).on('touchstart', function(e) {
        e.preventDefault();
    });
}).on('drop', function(el, target, source, sibling) {
    // On mobile this turns on default page scrolling after the end of a drag drop.
    $(document).off('touchstart');
});
