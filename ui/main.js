console.log('Loaded!');

//change text value on the main screen

var element= document.getElementById("main-text");

element.innerHTML = 'What the cluck bro?????';

var img= document.getElementById("imge");

img.onclick= function () {
    img.style.marginleft= '100px';
};
