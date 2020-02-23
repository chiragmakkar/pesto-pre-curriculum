const {
    describe,
    it,
    expect
} = require('./index')

const subtract = (a, b) => a - b

describe('Arithmetic Subtraction', () => {
    it('returns the difference of two numbers', () => {
        const difference = subtract(2, 1)
        expect(difference).toBe(1);
    }) 
})