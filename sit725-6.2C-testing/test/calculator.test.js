const chai = require('chai');
const expect = chai.expect;

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Tests', () => {

    it('should add correctly', () => {
        expect(add(5, 3)).to.equal(8);
    });

    it('should subtract correctly', () => {
        expect(subtract(5, 3)).to.equal(2);
    });

    it('should multiply correctly', () => {
        expect(multiply(4, 5)).to.equal(20);
    });

    it('should divide correctly', () => {
        expect(divide(10, 2)).to.equal(5);
    });

    it('should throw error for divide by zero', () => {
        expect(() => divide(10, 0)).to.throw("Cannot divide by zero");
    });

    it('should throw error for invalid input', () => {
        expect(() => add("a", 5)).to.throw("Invalid input");
    });

});