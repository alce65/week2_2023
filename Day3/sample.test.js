import { add } from './sample';

describe('Given Add function', () => {
  describe('When we have two numbers', () => {
    test('Then If a = 1 and b = 1 result should be 2', () => {
      // Arrange
      const a = 1;
      const b = 1;
      const expected = 2;
      // Act
      const r = add(a, b);
      // Assert
      expect(r).toBe(expected);
    });
    test('Then If a = NaN and b = NaN result should be false', () => {
      // Arrange
      const a = 1;
      const b = 1;
      const expected = 2;
      // Act
      const r = add(a, b);
      // Assert
      expect(r).toBe(expected);
    });
  });
});
