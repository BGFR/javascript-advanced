//PB-02. Greatest Common Divisor – GCD 
function greatestCommonDivisor (a,b) {
    let lowerNum = Math.min(a,b)
    for(let i = lowerNum; i > 0; i--){
        if( a % i == 0 && b % i == 0){
            console.log(i);
            break;
        }
    }
}

greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)
