class Ball {
    constructor(game) {
        this.image = document.getElementById("img_ball");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = {x: 10, y: 10};
        this.speed = {x: 5, y: 5};
        this.size = 18;
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

        // does ball hit top or bottom?
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        // does ball collide with paddle?
        let bottomOfBall = this.position.y + this.size; 
        let topOfPaddle = this.game.paddle.position.y;
        let leftOfPaddle = this.game.paddle.position.x;
        let rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if(
            bottomOfBall >= topOfPaddle &&
            this.position.x >= leftOfPaddle &&
            this.position.x + this.size <= rightOfPaddle
        ) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

        // does ball hit ships?

    }


}