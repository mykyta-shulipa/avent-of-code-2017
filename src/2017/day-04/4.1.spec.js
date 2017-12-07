import getResult from './4.1';
import dayInput from "./4.input";

describe('4.1:', () => {
  it('should return 2 given test input', () => {
    const expected = 2;
    const input = [
      'aa bb cc dd ee',
      'aa bb cc dd aa',
      'aa bb cc dd aaa',
    ];

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 455 given day input', () => {
    const expected = 455;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
