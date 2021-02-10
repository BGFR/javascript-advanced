//2.	Even or Odd

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
console.log(isOddOrEven(''));

describe ('Sum numbers', () =>{
    it('not a string', () => {
        assert.equal(isOddOrEven(1), undefined);
        assert.equal(isOddOrEven([]), undefined)
        assert.equal(isOddOrEven(null), undefined)
    });
    it('is even', () => {
        assert.equal(isOddOrEven('abcd'), 'even');
        assert.equal(isOddOrEven(''), 'even')
        assert.equal(isOddOrEven('1234'), 'even')
    });
    it('is odd', () => {
        assert.equal(isOddOrEven('abc'), 'odd');
        assert.equal(isOddOrEven('123'), 'odd')
    });
})
