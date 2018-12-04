var textFieldX = document.querySelector('#x');
var textFieldY = document.querySelector('#y');
var btn = document.querySelector('button');


function showTotal()
{
  var total = Number(textFieldX.value) + Number(textFieldY.value);

  var msg = ' the value of the two number is ' + total;






  // display showTotal
  var el = document.getElementNyId('message'); //
  el.textContent = total;


}

btn.click = showTotal; // eventhandler properties
