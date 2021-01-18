// //11. Diagonal Attack 
function diagonalAttack(arr) {
let matrix = arr.map((x) => x.split(' ').map(Number))

    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for(let i = 0; i < matrix.length; i++){
        leftDiagonal += matrix[i][i]
        rightDiagonal += matrix[i][matrix[i].length-i -1]
    }
    if(leftDiagonal == rightDiagonal){
        for(let j = 0; j < matrix.length; j++){
            for(let k = 0; k < matrix[j].length; k++){
                if(j !== k && matrix[j].length -j -1 !== k){
                    matrix[j][k] = leftDiagonal
                }
            }
        }
    } 

    console.log(matrix.map(x => x.join(' ')).join('\n'))

}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']
)
