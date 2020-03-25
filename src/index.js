let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;
function gameLoop(timestamp) {

  let deltaTime = timestamp - lastTime;

  lastTime = timestamp;

  // 1. clear previous frame
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // 2. update positions of new frame
  game.update(deltaTime);

  // 3. draw new updated frame 
  game.draw(context); 

  //---------//

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
