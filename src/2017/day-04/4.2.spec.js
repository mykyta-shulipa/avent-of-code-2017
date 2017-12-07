import getResult from './4.2';
import dayInput from './4.input';

describe('4.2', () => {
  it('should return 3 given test input', () => {
    const expected = 3;
    const input = [
      'abcde fghij',
      'abcde xyz ecdab',
      'a ab abc abd abf abj',
      'iiii oiii ooii oooi oooo',
      'oiii ioii iioi iiio',
    ];

    expect(getResult(input)).toEqual(expected);
  });

  it('should return 186 given day input', () => {
    const expected = 186;

    expect(getResult(dayInput)).toEqual(expected);
  });
});
