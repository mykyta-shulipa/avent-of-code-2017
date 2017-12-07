import getResult from './3.1';
import dayInput from './3.input';

describe('3.1', () => {
  it('should return 0 given "1"', () => {
    const expected = 0;
    const input = 1;

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 3 given "12"', () => {
    const expected = 3;
    const input = 12;

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 2 given "23"', () => {
    const expected = 2;
    const input = 23;

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 31 given "1024"', () => {
    const expected = 31;
    const input = 1024;

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 419 given day input', () => {
    const expected = 419;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
