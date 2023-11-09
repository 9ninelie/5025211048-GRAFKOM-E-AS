var freeze = false;
var shrink = false;
var unshrink = false;
var rotateX = false;
var rotateY = false;
var rotateZ = false;


function onMouseClick(event){
    freeze = !freeze;
    shrink = !shrink;
}

document.addEventListener('click', onMouseClick, false);

function onKeydown(event){
    if(event.keyCode == 32){
        freeze = true;
    }
    else if (event.keyCode === 37) {
        shrink = true;
    }
    else if (event.keyCode === 39) {
        unshrink = true;
    }
    else if (event.key === 'x') {
        rotateX = !rotateX;
    } else if (event.key === 'y') {
        rotateY = !rotateY;
    } else if (event.key === 'z') {
        rotateZ = !rotateZ;
    }
}

function onKeyup(event){
    if(event.keyCode == 32){
        freeze = false;
    }
    else if (event.keyCode === 37) {
        shrink = false;
    }
    else if (event.keyCode === 39) {
        unshrink = false;
    }
}

document.addEventListener('keydown', onKeydown, false);
document.addEventListener('keyup', onKeyup, false);