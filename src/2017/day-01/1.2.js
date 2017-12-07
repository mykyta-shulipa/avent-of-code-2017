export default function (input) {
  const inputDigits = Array.from(input).map(Number);
  const border = inputDigits.length / 2;

  let sum = 0;
  for (let index = 0; index < inputDigits.length; index++) {
    const current = inputDigits[index];
    const indexSum = index - border;
    const indexDigitToMatch = indexSum < 0 ?
      inputDigits.length - Math.abs(indexSum) :
      indexSum;
    const digitToMatch = inputDigits[indexDigitToMatch];

    if (current === digitToMatch) {
      sum += current;
    }
  }

  return sum;
}
