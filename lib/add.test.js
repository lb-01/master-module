const Add = require('./add');

describe('Add test', () => {
    it('can add two numbers together', () => {
        expect(Add(0, 0)).toBe(0);
        expect(Add(3, 4)).toBe(7);
        expect(Add(10, -10)).toBe(0);
    });
});
