//3.	Char Lookup
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const { expect, assert } = require('chai');

describe ('lookupChar', () =>{
    it('first not a string', () => {
        assert.equal(lookupChar(1,0), undefined);
        assert.equal(lookupChar([],0), undefined)
        assert.equal(lookupChar(null,0), undefined)

    });
    it('second not a number', () => {
        assert.equal(lookupChar('abc',''), undefined);
        assert.equal(lookupChar('abc',[]), undefined)
        assert.equal(lookupChar('abc','a'), undefined)
        assert.equal(lookupChar('abc',null), undefined)
        assert.equal(lookupChar('abc','1'), undefined)
        assert.equal(lookupChar('abc',1.5), undefined)
        assert.equal(lookupChar('abc',' '), undefined)
        assert.equal(lookupChar(1.5,0), undefined)
    });
    it('input correct, but index incorrect', () => {
        assert.equal(lookupChar('abc',-1), 'Incorrect index');
        assert.equal(lookupChar('abc',3), 'Incorrect index')
        assert.equal(lookupChar('abc',4), 'Incorrect index')
        assert.equal(lookupChar('',0), 'Incorrect index')
        // assert.equal(lookupChar(' ',0), 'Incorrect index')
        });
    it('input correct, return char', () => {
        assert.equal(lookupChar('abc',0), 'a');
        assert.equal(lookupChar('abc',1), 'b')
        assert.equal(lookupChar('abc',2), 'c')
        });

});
