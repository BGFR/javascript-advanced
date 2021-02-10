//5.	Check for Symmetry
const { expect, assert } = require('chai');
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('check symmetry', () => {
    describe('check input', () => {
        it('input 1', () => {
            assert.equal(isSymmetric(1), false);
        });
        it('input 2', () => {
            assert.equal(isSymmetric('1'), false);
        });
        it('input 3', () => {
            assert.equal(isSymmetric(null), false);
        });
        it('input 4', () => {
            assert.equal(isSymmetric(true), false);
        });
        it('input 5', () => {
            assert.equal(isSymmetric(undefined), false);
        });
        it('input 6', () => {
            assert.equal(isSymmetric(isSymmetric()), false);
        });
        it('input 7', () => {
            assert.equal(isSymmetric({ asd: 2 }), false);
        });
        it('input 8', () => {
            assert.equal(isSymmetric('a'), false);
        });
        it('input 9', () => {
            assert.equal(isSymmetric([]), true);
        });
    });

    describe('check func', () => {
        it('input 10', () => {
            assert.equal(isSymmetric([1]), true);
        });
        it('input 11', () => {
            assert.equal(isSymmetric(['1']), true);
        });
        it('input 12', () => {
            assert.equal(isSymmetric([1, '1']), false);
        });
        it('input 13', () => {
            assert.equal(isSymmetric([1, 1]), true);
        });
        it('input 14', () => {
            assert.equal(isSymmetric(['a']), true);
        });
        it('input 15', () => {
            assert.equal(isSymmetric(['a','a']), true);
        });
        it('input 16', () => {
            assert.equal(isSymmetric(['a','b']), false);
        });
        it('input 17', () => {
            assert.equal(isSymmetric(['a','a','a']), true);
        });
        it('input 18', () => {
            assert.equal(isSymmetric(['a','b','a']), true);
        });
        it('input 19', () => {
            assert.equal(isSymmetric([1,2,3]), false);
        });
        it('input 20', () => {
            assert.equal(isSymmetric(['a', 'b', 'c']), false);
        });

    });
});
