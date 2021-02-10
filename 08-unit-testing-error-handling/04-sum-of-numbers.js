//4.	Sum of Numbers Lab
function sum (arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num)
    }
    return sum;
}

const { expect, assert } = require('chai');

describe ('Sum numbers', () =>{
    it('sums single number', () => {
        assert.equal(sum([1]), 1, 'takes array of number');
        assert.equal(sum([1,2,3]), 6, 'takes array of numbers')
        assert.equal(sum([2,3,4]), 9, 'takes array of numbers')
    });
})
