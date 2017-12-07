export default function getResult(testData) {
  const input = [...testData];
  let steps = 0;
  let offset = 0;
  while (offset >= 0 && offset < input.length) {
    const prevPosition = offset;
    offset += input[offset];
    steps++;
    input[prevPosition] += 1;
  }

  return steps;
}
