import getResult from './2.1';
import dayInput from './2.input';

describe('2.1', () => {
  it('should return 18 given test input', () => {
    const expected = 18;
    const input = [
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8],
    ];

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 45972 given day input', () => {
    const expected = 45972;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
