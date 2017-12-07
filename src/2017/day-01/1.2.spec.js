import getResult from './1.2';
import dayInput from './1.input';

describe('1.2', () => {
  it('should return 6 given "1212"', () => {
    const expected = 6;
    const input = '1212';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 0 given "1221"', () => {
    const expected = 0;
    const input = '1221';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 4 given "123425"', () => {
    const expected = 4;
    const input = '123425';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 12 given "123123"', () => {
    const expected = 12;
    const input = '123123';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 4 given "12131415"', () => {
    const expected = 4;
    const input = '12131415';

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 1244 given day input', () => {
    const expected = 1244;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
