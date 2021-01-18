//11. Equal Neighbors 
function equalNeighbors (arr) {
let equalsCount = 0;
let newArr = arr.flat()
for(let i = 0; i < newArr.length-1; i++){
    newArr[i] == newArr[i+arr[0].length] ? equalsCount++ :''
    if((i+1) % (arr[0].length) !== 0 && newArr[i] == newArr[i+1]){
    equalsCount++
    }
}
return equalsCount;

} 
console.log(equalNeighbors ([
['2', '3', '4', '7', '0'],
['4', '1', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))
equalNeighbors ([
['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)
