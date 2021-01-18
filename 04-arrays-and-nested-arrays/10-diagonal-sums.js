//10. Diagonal Sums
function diagonalSums (matrix) {
    let leftDiagonal = 0;
    let rightsecDiag = 0;

    for(let i = 0; i < matrix.length; i++){
        leftDiagonal += matrix[i][i]
        rightsecDiag+=matrix[i][matrix.length - i -1]
    }

    console.log(leftDiagonal, rightsecDiag);

} 
diagonalSums ([[20, 40],
 [10, 60]]
)
diagonalSums ([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)
