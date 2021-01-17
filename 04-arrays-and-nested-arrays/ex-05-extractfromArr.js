//05. Extract Increasing Subsequence from Array 
function extractfromArr(arr) {

    let biggestNum = 0;
    let output = [];
    for (let line of arr) {
        if (line >= biggestNum) {
            output.push(line);
            biggestNum = line;
        }
    }
    return output
}

extractfromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractfromArr([1, 2, 3, 4]);
extractfromArr([20, 3, 2, 15, 6, 1]);
