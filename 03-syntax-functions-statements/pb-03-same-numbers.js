//PB-03. Same Numbers 
function sameNumbers (num) {
let arr = num.toString().split('').map(Number)
if(Array.from(new Set(arr)).length == 1){
    console.log(true);
} else {
    console.log(false);
}

let total = arr.reduce((a,b) => a+b)
console.log(total);
}


sameNumbers(2222222)
sameNumbers(1234)
