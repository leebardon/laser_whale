export function buildLevel(game, level) {

  let ships = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (ship === 1) {
        let position = {
          x: 80 * shipIndex,
          y: 75 + 24 * rowIndex
        };
        ships.push(new Ship(game, position));
      }
    });
  });

  return ships;
}

export const level1 = [
    [0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];



