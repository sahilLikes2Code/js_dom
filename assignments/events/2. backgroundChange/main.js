
var button = document.querySelector('#magic-button');


function randomColor () {
    var randomNumber = String(Math.random() * 98349787345);
    var randomSixDigitNumber = randomNumber.substring(3, 9);
    var color =  '#' + randomSixDigitNumber;
    return color;
}


function click() {
    document.body.style.backgroundColor = randomColor();
};

button.onclick = click;

