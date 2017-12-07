import getResult from './1.1';
import dayInput from './1.input';

describe('1.1', () => {
  it('should return 3 given "1122"', () => {
    const expected = 3;
    const input = '1122';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 4 given "1111"', () => {
    const expected = 4;
    const input = '1111';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 0 given "1234"', () => {
    const expected = 0;
    const input = '1234';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 9 given "91212129"', () => {
    const expected = 9;
    const input = '91212129';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 1251 given day input', () => {
    const expected = 1251;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
