import { describe, it, expect } from 'vitest';
import { Add, Substract } from './index.js';

describe('Index module exports', () => {
  it('exports Add function', () => {
    expect(Add).toBeDefined();
    expect(typeof Add).toBe('function');
  });

  it('exports Substract function', () => {
    expect(Substract).toBeDefined();
    expect(typeof Substract).toBe('function');
  });

  it('Add function works correctly', () => {
    expect(Add(2, 3)).toBe(5);
  });

  it('Subtract function works correctly', () => {
    expect(Substract(5, 3)).toBe(2);
  });
});
