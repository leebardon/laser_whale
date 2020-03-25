const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEXTLEVEL: 4,
    NEWGAME: 5
}


class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.score = 0;
        this.gameObjects = [];
        this.ships = [];
        this.lives = 3;
    
        this.levels = [level1, level2];
        this.currentLevel = 0;

        new InputHandler(this.paddle, this);
    }

    start() {

        if (
            this.gamestate !== GAMESTATE.MENU &&
            this.gamestate !== GAMESTATE.NEXTLEVEL 
        ) 
                return;

        this.ships = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();
        this.gameObjects = [this.ball, this.paddle];
        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltaTime) {  

        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

        // don't update if pause hit or if on menu screen, or if gameover 
        if(
            this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
        ) 
            return; 

        if(this.ships.length === 0) {
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEXTLEVEL;
            this.start();
        }

        [...this.gameObjects, ...this.ships].forEach(object => object.update(deltaTime));

        this.ships = this.ships.filter(object => !object.readyForDeletion);
    }

    draw(context) {
        [...this.gameObjects, ...this.ships].forEach(obj => obj.draw(context));

        context.font = "25px Monaco";
        context.fillText("Lives:" + this.lives, 70, 35);
        context.fillText("  Score:" + this.score, 200, 35)
        

        // pause screen display
        if(this.gamestate == GAMESTATE.PAUSED){
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(47, 74, 63, 0.5)";
            context.fill();

            context.font = "60px Impact";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("PAUSING IS FOR DWEEBS", this.gameWidth / 2, this.gameHeight / 2);
        };

        // menu screen display
        if(this.gamestate == GAMESTATE.MENU || this.gamestate == GAMESTATE.NEWGAME){
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(47, 74, 63, 1)";
            context.fill();

            context.font = "40px Impact";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Press SPACE To Start", this.gameWidth / 2, this.gameHeight / 2);

            context.font = "20px Impact";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Controls:", this.gameWidth / 2, this.gameHeight / 2 - 250 );
            context.fillText("Left and Right Arrow to Move", this.gameWidth / 2, this.gameHeight / 2 - 200);
            context.fillText("'P' to Pause Game.", this.gameWidth / 2, this.gameHeight / 2 - 170);
        };

        // gameover display
        if(this.gamestate == GAMESTATE.GAMEOVER){
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(47, 74, 63, 1)";
            context.fill();

            context.font = "40px Impact";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("{   FAIL WHALE   }", this.gameWidth / 2, this.gameHeight / 2 - 200);
            context.fillText("SCORE:  " + this.score, this.gameWidth / 2, this.gameHeight / 2 - 150);
            context.font = "30px Impact";
            context.fillText("Refresh Page to Start New Game!", this.gameWidth / 2, this.gameHeight / 2 + 200 )
            
           
            // document.addEventListener("keydown", (e) => {
            //     debugger
            //     if(e.keycode == 13) {
            //             this.gamestate = GAME.NEWGAME;
            //             this.start();
            //     }
            // })

        };


 
    }

    togglePause() {
        if(this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        };
    };

}