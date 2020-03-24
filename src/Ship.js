class Ship {
    constructor(game, position) {
        this.image = document.getElementById("img_ship1");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = position;
        this.width = 66;
        this.height = 30;

    }

    update() {

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