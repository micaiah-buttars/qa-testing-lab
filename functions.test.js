const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test("Should return 2", () => {
    expect(returnTwo()).toBe(2)
})

test("Should return 'Hello, {name}.'", () => {
    expect(greeting('James')).toEqual('Hello, James.')
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})


describe("math functions", () => {
    test("Should return sum", () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })

    test("Should return difference", () => {
        expect(subtract(5, 2)).toBe(3)
        expect(subtract(15, 9)).toBe(6)
    })

    test("Should return product", () => {
        expect(multiply(1, 2)).toBe(2)
        expect(multiply(5, 9)).toBe(45)
    })

    test("Should return quotient", () => {
        expect(divide(9, 3)).toBe(3)
        expect(divide(10, 2)).toBe(5)
    })
    
})