import WorldModel from "./Worldmodel";
import Player from "./Player";
import IWorldView from "./IWorldView";

class GameController {
    private world: WorldModel;
    private player1: Player | null = null;
    private player2: Player | null = null;
    private lastTime: number = 0;
    private view?: IWorldView

    constructor(world: WorldModel) {
        this.world = world;
    }

    setPlayer1(p: Player): void {
        this.player1 = p;
    }
    setPlayer2(p: Player): void {
        this.player2 = p;
    }

    setView(view: IWorldView): void {
        this.view = view;
    }

    run(): void {
        const updateFrame = (time: number) => {
            if (this.player1) this.player1.makeTurn();
            if (this.player2) this.player2.makeTurn();

            if (time - this.lastTime > 75) {
                this.world.update();
                this.lastTime = time;

                if (this.view) {
                    this.view.display(this.world);
                }
            }
            requestAnimationFrame(updateFrame);
        }
        requestAnimationFrame(updateFrame);
    }
}

export default GameController;