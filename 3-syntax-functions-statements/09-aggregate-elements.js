//09. Aggregate Elements

function aggregateElements(arr) {
    let sum = arr.reduce((a,b) => a+b)
    let inverse = arr.reduce((a,b) => a + 1/b, 0)
    console.log(sum);
    console.log(inverse);
    console.log(arr.join(''));
}

aggregateElements([2, 3, 4])
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])
