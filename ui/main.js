console.log('Loaded!');

//change text value on the main screen

var element= document.getElementById("main-text");


var img= document.getElementById('madi');
var marginLeft=0;
function moveRight () {
    marginLeft= marginLeft + 1;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick= function () {
    var interval=setInterval(moveRight, 5);

};
