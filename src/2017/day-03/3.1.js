const directions = 'RULD';

export default function getResult(input) {
  const sequence = ['_']; // initial point

  let initialExtent = 1;
  let currentExtent = 1;
  let currentDirectionIndex = 0;
  let currentDirection = directions[currentDirectionIndex];

  while (sequence.length < input) {
    if (currentExtent < 1) {
      if (currentDirectionIndex < directions.length - 1) {
        currentDirectionIndex++;
      } else {
        currentDirectionIndex = 0;
      }

      currentDirection = directions[currentDirectionIndex];
      // should be increased each two directions
      initialExtent += 0.5;
      currentExtent = Math.floor(initialExtent);
    }

    sequence.push(currentDirection);
    currentExtent--;
  }

  const changesXPositive = sequence.filter(x => x === 'R').length;
  const changesXNegative = sequence.filter(x => x === 'L').length;
  const changesYPositive = sequence.filter(x => x === 'U').length;
  const changesYNegative = sequence.filter(x => x === 'D').length;
  const result = Math.abs(Math.abs(changesXPositive - changesXNegative) + Math.abs(changesYPositive - changesYNegative));

  return result;
}
