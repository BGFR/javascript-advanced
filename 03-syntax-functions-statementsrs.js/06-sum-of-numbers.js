//06. Sum of Numbers N…M 06-sum-of-numbers.js

function sumOfNumbers(n,m) {
n = Number(n);
m = Number(m);
    let result = 0;
    for(let i = n; i <=m; i++){
        result+= i;
    }
    return result;
    
}

sumOfNumbers('1', '5' );
sumOfNumbers('-8', '20');
