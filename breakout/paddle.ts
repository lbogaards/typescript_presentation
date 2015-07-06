class Paddle extends ex.Actor {
    constructor(x, y, width, height, engine: ex.Engine, public direction:number, public leftRightMode: boolean = true) {
        super(x, y, width, height, ex.Color.Chartreuse);
        this.collisionType = ex.CollisionType.Fixed;
    }

    public update(engine: ex.Engine, delta: number) {
        super.update(engine, delta);
        this.dx = 0;
        this.dy = 0;

        if (engine.input.keyboard.isKeyPressed(ex.Input.Keys.Left)) {
            this.dx = -Config.PaddleSpeed;
        }
        if (engine.input.keyboard.isKeyPressed(ex.Input.Keys.Right)) {
            this.dx = Config.PaddleSpeed;
        }

        if (this.x < 0) {
            this.x = 0;
        }

        if (this.x < this.getWidth()/2 ) {
          this.x = this.getWidth()/2
        }

        if ((this.x + (this.getWidth()/2)) > engine.getWidth()) {
          this.x = engine.getWidth() - (this.getWidth()/2);
        }
    }
}
