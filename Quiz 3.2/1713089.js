var num1 = '';
var num2 = '';
var operator = '';
var total = '';




function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }

    displayButton(num);
}


function handleOperator(operator)
{
  if (operator === '') {
       operator = oper;
   } else {
       handleTotal();
       operator = oper;
   }
}

$(document).ready(function() {
    $('button').on('click', function(e) {
        let button = e.target.innerHTML;
        if (button >= '0' && btn <= '9') {
            console.log('number');
        } else {
            console.log('operator');
        }
    });
});

function displayButton(button) {
    $('.showno').text(button);
}


function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
            case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '*':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
}
