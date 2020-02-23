const { describe, it, expect } = require("./index")
const add = require("./add")

describe('Arithmetic Sum', () => {
    it('returns the sum of two numbers', () => {
        const sum = add(1, 2)
        expect(sum).toBe(3);
    }) 
})