export default function getResult(input) {
  const inputDigits = Array.from(input).map(Number);

  let sum = 0;
  for (var index = 0; index < inputDigits.length - 1; index++) {
    const current = inputDigits[index];
    const next = inputDigits[index + 1];
    if (current === next) {
      sum += current;
    }
  }

  if (inputDigits[0] === inputDigits[inputDigits.length - 1]) {
    sum += inputDigits[0];
  }

  return sum;
}
