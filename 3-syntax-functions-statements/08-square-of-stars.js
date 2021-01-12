//08. Square of Stars

function squareofStars(size) {
    size == null? size = 5:'';
    for(let i = 0; i < size; i++){
        console.log('* '.repeat(size));
    }
}

squareofStars()
squareofStars(1)
squareofStars(2)
squareofStars(5)
