import { describe, it, expect } from 'vitest';
import { Substract } from './subtract.js';

describe('Subtract test', () => {
  it('can subtract two numbers from eachother', () => {
    expect(Substract(0, 0)).toBe(0);
    expect(Substract(9, 5)).toBe(4);
    expect(Substract(0, 7)).toBe(-7);
  });
});
