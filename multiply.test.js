const {
    describe,
    it,
    expect
} = require('./index')

const multiply = require("./multiply")

describe('Arithmetic Multiplication', () => {
    it('returns the product of two numbers', () => {
        const product = multiply(2, 1)
        expect(product).toBe(2);
    }) 
})