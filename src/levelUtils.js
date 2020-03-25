function buildLevel(game, level) {

  let ships = [];

  level.forEach((row, rowIndex) => {
    row.forEach((ship, shipIndex) => {
      if (ship === 1) {
        let position = {
          x: 80 * shipIndex,
          y: 40 + 24 * rowIndex
        };
        ships.push(new Ship(game, position));
      }
    });
  });

  return ships;
}


const level1 = [

    [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1]

];

const level2 = [

    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];