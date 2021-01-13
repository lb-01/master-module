const Subtract = require('./subtract');

describe('Subtract test', () => {
    it('can subtract two numbers from eachother', () => {
        expect(Subtract(0, 0)).toBe(0);
        expect(Subtract(9, 5)).toBe(4);
        expect(Subtract(0, 7)).toBe(-7);
    });
});
