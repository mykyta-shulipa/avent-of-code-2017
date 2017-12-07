const directions = 'RULD';
const SEPARATOR = ';';

function getCoordinatesDeltaByDirection(direction) {
  switch (direction) {
    case 'R':
      return {x: 1, y: 0};
    case 'U':
      return {x: 0, y: 1};
    case 'L':
      return {x: -1, y: 0};
    case 'D':
      return {x: 0, y: -1};
  }
}

function getNewCoordsWithDelta(coords, delta) {
  return {
    x: coords.x + delta.x,
    y: coords.y + delta.y
  };
}

function getKeyByCoords({x, y}) {
  return `${x}${SEPARATOR}${y}`;
}

function getSavedValue(map, x, y) {
  return map[getKeyByCoords({x, y})] || 0;
}

function getNewValue(map, newPointCoordinates) {
  const {x, y} = newPointCoordinates;
  return getSavedValue(map, x - 1, y - 1)
    + getSavedValue(map, x - 1, y)
    + getSavedValue(map, x - 1, y + 1)
    + getSavedValue(map, x, y - 1)
    + getSavedValue(map, x, y + 1)
    + getSavedValue(map, x + 1, y - 1)
    + getSavedValue(map, x + 1, y)
    + getSavedValue(map, x + 1, y + 1);
}

export default function getResult(input) {
  const map = {
    [`${0}${SEPARATOR}${0}`]: 1, // initial point
  };

  let initialExtent = 1;
  let currentExtent = 1;
  let currentDirectionIndex = 0;
  let currentDirection = directions[currentDirectionIndex];
  let currentCoords = {x: 0, y: 0};
  let currentValue = 0;

  while (currentValue <= input) {
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

    const delta = getCoordinatesDeltaByDirection(currentDirection);
    currentCoords = getNewCoordsWithDelta(currentCoords, delta);
    currentValue = getNewValue(map, currentCoords);

    map[getKeyByCoords(currentCoords)] = currentValue;
    currentExtent--;
  }

  return currentValue;
}
