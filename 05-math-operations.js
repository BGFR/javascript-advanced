//05. Math Operations 

function mathOperations(a, b, operator) {
    let result = 0;
    if (operator == '+') {
        result = a + b
    } else if (operator == '-') {
        result = a - b;
    } else if (operator == '*') {
        result = a * b;
    } else if (operator == '/') {
        result = a / b;
    } else if (operator == '%') {
        result = a % b;
    } else if (operator == '**') {
        result = a ** b;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
