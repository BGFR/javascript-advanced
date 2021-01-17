//04. Rotate Array 
function rotateArray(arr,num) {

    for(i = 0; i < num; i++){
        arr.unshift(arr[arr.length-1])
        arr.pop()
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2)
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
