console.log('Loaded!');

//change text value on the main screen

var element= document.getElementById("main-text");

element.innerHTML = 'What the cluck bro?????';

var img= document.getElementById('madi');
var marginLeft=0;
function marginRight () {
    marginLeft= marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick= function () {
    var inte=setInterval(moveRight,100);
    img.style.marginLeft='1000px';
};
