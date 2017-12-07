import getResult from './3.2';
import dayInput from './3.input';

describe('3.2', () => {
  it('should return 23 given "15"', () => {
    const expected = 23;
    const input = 15;

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 295229 given day input', () => {
    const expected = 295229;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
