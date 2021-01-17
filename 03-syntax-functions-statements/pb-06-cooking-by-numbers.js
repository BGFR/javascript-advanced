//PB-06. Cooking by Numbers 
function cookingbyNumbers (...arr) {
    let num = Number(arr.shift())
for(line of arr){
    line == 'chop'? num = num /2:"";
    line == 'dice'? num = Math.sqrt(num):"";
    line == 'spice'? num = num+1 :"";
    line == 'bake'? num = num*3:"";
    line == 'fillet'? num = ((num*10) * 8/100) :"";
    console.log(num);
}
}

cookingbyNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingbyNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
