//04. Math Enforcer 
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


const { expect, assert } = require('chai');

describe ('mathEnforcer', () =>{
    it('mathEnforcer.addFive() input params', () => {
        assert.isNaN(mathEnforcer.addFive(NaN),1);
        assert.isUndefined(mathEnforcer.addFive('a'),2);
        assert.isUndefined(mathEnforcer.addFive(null),3);
        assert.isUndefined(mathEnforcer.addFive([]),4);
        assert.isNaN(mathEnforcer.subtractTen(NaN),5);
        assert.isUndefined(mathEnforcer.subtractTen('a'),6);
        assert.isUndefined(mathEnforcer.subtractTen(null),7);
        assert.isUndefined(mathEnforcer.subtractTen([]),8);
        assert.isUndefined(mathEnforcer.sum('a', 1),9);
        assert.isUndefined(mathEnforcer.sum(1, 'a'),10);
        assert.isUndefined(mathEnforcer.sum('1', 1),11);
        assert.isUndefined(mathEnforcer.sum(1, '1'),12);
    })
    it('mathEnforcer.addFive()', () => {
        assert.equal(mathEnforcer.addFive(5),10);
        assert.equal(mathEnforcer.addFive(-5),0);
        assert.equal(mathEnforcer.addFive(-5.5),-0.5);
        assert.equal(mathEnforcer.addFive(1.2),6.2);
        assert.equal(mathEnforcer.addFive(1.233333),6.233333);
    })
    it('mathEnforcer.subtractTen()', () => {
        assert.equal(mathEnforcer.subtractTen(10),0);
        assert.equal(mathEnforcer.subtractTen(15),5);
        assert.equal(mathEnforcer.subtractTen(-5),-15);
        assert.equal(mathEnforcer.subtractTen(1.2),-8.8);
        assert.equal(mathEnforcer.subtractTen(1.233333),-8.766667);
    })
    it('mathEnforcer.sum() input params', () => {
        assert.equal(mathEnforcer.sum(5,5),10);
        assert.equal(mathEnforcer.sum(-5,-5),-10);
        assert.equal(mathEnforcer.sum(5,-5),0);
        assert.equal(mathEnforcer.sum(-1.2,1.2),0);
        assert.equal(mathEnforcer.sum(-1.233333,1.233333),0);

    })
});
