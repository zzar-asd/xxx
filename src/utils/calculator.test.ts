import { describe, it, expect } from 'vitest';
import { add, subtract } from './calculator';

describe('calculator', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it('should add a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should return the same number when adding zero', () => {
      expect(add(7, 0)).toBe(7);
      expect(add(0, 7)).toBe(7);
    });

    it('should handle decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should return a negative result when right is larger', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-1, -2)).toBe(1);
    });

    it('should subtract a negative number (equivalent to addition)', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it('should return the same number when subtracting zero', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    it('should return zero when subtracting equal numbers', () => {
      expect(subtract(4, 4)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(subtract(1.5, 0.5)).toBeCloseTo(1.0);
    });

    it('should handle large numbers', () => {
      expect(subtract(1_000_000, 999_999)).toBe(1);
    });
  });
});
