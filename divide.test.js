const {
    describe,
    it,
    expect
} = require('./index')

const divide = require('./divide')

describe('Arithmetic Division', () => {
    it('returns the division of two numbers', () => {
        const division = divide(2, 1)
        expect(division).toBe(2);
    }) 
})