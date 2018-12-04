

var number1 = 10;
var number2 = 20;
var myNumber1 = '3';
var myNumber2 = '4';

var num = 47;
var address = 'Jalan Gombak';
var add = num + address;


var count1 = number1 + number2;
var count2 = myNumber1 + myNumber2;

var string = 'apa khabar';

var el = document.getElementById('one');
el.textContent = count1;

var e2 = document.getElementById('two');
e2.textContent = count2; // concatenation

var e3 = document.getElementById('three');
e3.textContent = add; // concatenation

var e4 = document.getElementByClass('satu');
e4.textContent = string;

document.getElementByClass('three').textContent = add;
