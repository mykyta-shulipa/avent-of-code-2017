export default function (input) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
    const row = input[rowIndex];
    const maxInRow = Math.max(...row);
    const minInRow = Math.min(...row);
    sum += maxInRow - minInRow;
  }

  return sum;
}
