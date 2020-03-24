class Game {

    // import { buildLevel, level1 }  from "./src/levels.mjs";

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        const level1 = [
            [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

        let ships = [];

        level1.forEach((row, rowIndex) => {
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

        this.gameObjects = [this.ball, this.paddle, ...ships];

        new InputHandler(this.paddle);
    }

    update(deltaTime) {        
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(context) {
        this.gameObjects.forEach(obj => obj.draw(context));
    }

}