import getResult from './2.2';
import dayInput from './2.input';

describe('2.2', () => {
  it('should return 9 given test input', () => {
    const expected = 9;
    const input = [
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5],
    ];

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 326 given day input', () => {
    const expected = 326;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
