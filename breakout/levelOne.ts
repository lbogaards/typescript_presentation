class LevelOne extends ex.Scene {
    constructor(engine: ex.Engine) {
        super();

        let bricks: ex.Actor[] = [];
        let that = this;
        for (var i = 0; i < 8; i++) {
                (function () {
                    var tmp = new Brick(50 + 100 * i, 100, 90, 30, ex.Color.Yellow);
                    State.bricks++;
                    that.addChild(tmp);
                    bricks.push(tmp);
                })();
        }

        var ball = new Ball(engine, bricks);
        this.addChild(ball);

        var paddle = new Paddle(Config.PaddleStartX, engine.getHeight() - Config.PaddlePadding, Config.PaddleWidth, Config.PaddleHeight, engine, 1);
        this.addChild(paddle);

    }
}
