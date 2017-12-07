export default function (input) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
    const row = input[rowIndex];
    let result = 0;
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const item = row[columnIndex];
      const filtered = row.filter(rowItem => rowItem !== item && rowItem % item === 0);
      if (filtered.length === 1) {
        result = filtered[0] / item;
        break;
      }
    }

    sum += result;
  }

  return sum;
}
