//7.	Add / Subtract
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
const { expect, assert } = require('chai');

let getFunction = createCalculator()
getFunction.add(10)
getFunction.subtract(5)
console.log(getFunction.get(),);

describe('containing the functions', () => {
    it('return object with properties: add, subtract, get', () => {
        expect(createCalculator()).to.haveOwnProperty('add');
        expect(createCalculator()).to.haveOwnProperty('subtract');
        expect(createCalculator()).to.haveOwnProperty('get');
    });
    it('keep internal sum', () => {
        let calculator = createCalculator()
        assert.equal(calculator.get(), 0)
        calculator.add(2)
        assert.equal(calculator.get(), 2)
        calculator.add(2)
        assert.equal(calculator.get(), 4)
    });
    it('add and subtract', () => {
        let calculator = createCalculator()
        assert.equal(calculator.get(), 0)
        calculator.add(2)
        calculator.add('2')
        assert.equal(calculator.get(), 4)
        calculator.subtract(2)
        calculator.subtract('2')
        assert.equal(calculator.get(), 0)
    });

});
