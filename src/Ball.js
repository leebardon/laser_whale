class Ball {
    
    constructor(game) {
        this.image = document.getElementById("img_ball");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.size = 18;
        this.reset();
    }

    reset() {
        this.position = {x: 100, y: 250};
        this.speed = {x: 11, y: -11};
    }

    draw(context) {
        context.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // does ball hit sides?
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }

        // does ball hit top?
        if(this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        // does ball hit bottom? 
        if(this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
            this.reset();
        }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

    }


}