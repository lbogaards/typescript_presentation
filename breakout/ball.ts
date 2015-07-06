class Ball extends ex.Actor {
    constructor(engine: ex.Engine, bricks: ex.Actor[]) {
        super(Config.BallStartX, Config.BallStartY, Config.BallWidth, Config.BallHeight, ex.Color.Red);
        this.dx = Config.BallVector.x;
        this.dy = Config.BallVector.y;
        this.collisionType = ex.CollisionType.Elastic;

        this.on('collision', (e: ex.CollisionEvent) => {
            if (bricks.indexOf(e.other) > -1) {
                e.other.collisionType = ex.CollisionType.PreventCollision;
                e.other.fade(0, 400);
                e.other.ay = Config.BrickAccel;
            } else {
                var borrow = e.other.dx * Config.BallBorrow;
                this.dx += borrow;
            }
        });

        this.on('exitviewport', (e: ex.ExitViewPortEvent) => {
            this.dx = 0;
            this.dy = 0;
            // you lose
            if (State.balls < 1) {
                var youLose = new ex.Label("Game Over", engine.getWidth() / 2, engine.getHeight() / 2, "50px Arial");
                youLose.textAlign = ex.TextAlign.Center;
                youLose.color = ex.Color.Chartreuse;
                this.scene.addChild(youLose);
            } else {
                State.balls--;
                var newBallTimer = new ex.Timer(() => {
                    this.x = Config.BallStartX;
                    this.y = Config.BallStartY;
                    this.dx = Config.BallVector.x;
                    this.dy = Config.BallVector.y;
                }, 1000, false);

                this.scene.addTimer(newBallTimer);
            }
        });
    }

    public update(engine, delta) {
        super.update(engine, delta);
        let half = this.getWidth()/2;
        if (this.x < half) {
            this.x = half;
            this.dx = -1 * this.dx;
        }
        if (this.y < half) {
            this.y = half;
            this.dy = -1 * this.dy;
        }

        if (this.x + half > engine.getWidth()) {
            this.x = engine.getWidth() - half;
            this.dx = -1 * this.dx;
        }
    }
}
