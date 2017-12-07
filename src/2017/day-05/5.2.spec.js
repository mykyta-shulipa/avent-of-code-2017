import getResult from './5.2';
import dayInput from './5.input';

describe('5.2', () => {
  it('should return 10 given test input', () => {
    const expected = 10;
    const input = [0, 3, 0, 1, -3];

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 24774780 given day input', () => {
    const expected = 24774780;

    expect(getResult(dayInput)).toEqual(expected);
  });
})
