//07. Sorting Numbers 
function sortingNumbers(arr) {
    let asc = arr.slice()
    asc.sort((a,b) => {return a-b})
    let result = []

    for(let i = 0; i < arr.length; i++){
        result.push(asc.shift())
        result.push((asc.pop()))
    }

    // return Array.from(new Set(result)) ;
    return result.filter(x => x !=undefined) ;


}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
