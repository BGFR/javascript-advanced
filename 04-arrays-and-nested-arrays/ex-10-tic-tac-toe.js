//10. Tic-Tac-Toe 
function ticTacToe(input) {
    let matrix = Array(3)
    .fill()
    .map(() => Array(3).fill('false'));

    let turn = 'X';
    let winner = 'n';
    let isFree = true;

    for (let i = 0; i < input.length; i++) {
        let [x, y] = input[i].split(' ').map(Number)
        if (matrix[x][y] == 'false') {
            matrix[x][y] = turn;
            if (turn == 'X') {
                turn = 'O'
            } else if (turn == 'O') {
                turn = 'X'
            }

            if (!freeSpaces) {
                isFree = false;
                break;
            }

            for (let line of matrix) {
                if (line.every((el) => el === 'X') ||
                    line.every((el) => el === 'O')) {
                    winner = line[0]
                    isFree = false;
                }
            }

            let newMatrix = matrix[0]
                .map((_, col) => matrix.map((row) => row[col]))
            for (let line of newMatrix) {
                if (line.every((el) => el === 'X') ||
                    line.every((el) => el === 'O')) {
                    winner = line[0]
                    isFree = false;
                }
            }
            let values = matrix.join(',').split(',')
            if ((values[0] == values[4] && values[0] == values[8] && values[4] !== 'false') ||
                (values[2] == values[4] && values[2] == values[6] && values[4] !== 'false')

            ) {
                winner = values[4]
                isFree = false;
            }

        } else {
            console.log(`This place is already taken. Please choose another!`);
        }
        if (!isFree) {
            break;
        }

    }

    if (winner == 'n') {
        console.log(`The game ended! Nobody wins :(`);
    } else {
        console.log(`Player ${winner} wins!`);
    }

    console.log(matrix.map(x => x.join('\t')).join('\n'));

    function freeSpaces(matrix){
        return matrix.flat().some(x => x == 'false')
    }
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"])
