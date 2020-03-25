class Ship {
    constructor(game, position) {
        this.image = document.getElementById("img_ship1");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = position;
        this.width = 75;
        this.height = 30;

        this.readyForDeletion = false;

    }

    update() {
        if(detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.game.score += 30
            this.readyForDeletion = true;
        }
    }

    draw(context) {
        context.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height
        );
    }
}