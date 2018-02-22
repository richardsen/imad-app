console.log('Loaded!');

//change text value on the main screen

var element= document.getElementById("main-text");

element.innerHTML = 'What the cluck bro?????';

var img= document.getElementById('madi');

img.onclick= function () {
    var inte=setInterval(moveLeft,100);
    img.style.marginLeft='1000px';
};
