import getResult from './5.1';
import dayInput from './5.input';

describe('5.1', () => {
  it('should return 5 given test input', () => {
    const expected = 5;
    const input = [0, 3, 0, 1, -3];

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 343467 given day input', () => {
    const expected = 343467;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
