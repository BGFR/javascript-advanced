//6.	RGB to Hex

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

const { expect, assert } = require('chai');

describe('check rgbToHexColor', () => {
    it('input 1', () => {
        assert.equal(rgbToHexColor(256, 255, 255), undefined, 'check red');
    });
    it('input 2', () => {
        assert.equal(rgbToHexColor(255, 256, 255), undefined, 'check green');
    });
    it('input 3', () => {
        assert.equal(rgbToHexColor(255, 255, 256), undefined, 'check blue');
    });
    it('input 4', () => {
        assert.equal(rgbToHexColor(-1, 255, 255), undefined, 'check red');
    });
    it('input 5', () => {
        assert.equal(rgbToHexColor(255, -1, 255), undefined, 'check green');
    });
    it('input 6', () => {
        assert.equal(rgbToHexColor(255, 255, -1), undefined, 'check blue');
    });
    it('input 7', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000', 'check out1');
    });
    it('input 8', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF', 'check out2');
    });
})
