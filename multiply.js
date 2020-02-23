const {
    describe,
    it,
    expect
} = require('./index')

const multiply = (a, b) => a * b

describe('Arithmetic Multiplication', () => {
    it('returns the product of two numbers', () => {
        const product = multiply(2, 1)
        expect(product).toBe(2);
    }) 
})