export default function getResult(testData) {
  const input = [...testData];
  let steps = 0;
  let offset = 0;
  while (offset >= 0 && offset < input.length) {
    const prevOffset = offset;
    offset += input[offset];

    const newValue = input[prevOffset] < 3 ?
      input[prevOffset] + 1 :
      input[prevOffset] - 1;

    input[prevOffset] = newValue;
    steps += 1;
  }

  return steps;
}
