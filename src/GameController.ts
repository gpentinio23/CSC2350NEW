import WorldModel from "./Worldmodel";
import Player from "./Player";
import IWorldView from "./IWorldView";

/**
 * Controls the main game loop, players, and view rendering.
 * 
 * The GameController orchestrates interaction between the world model, 
 * players, and world view. It runs the game loop and updates the state
 * of the game at regular intervals.
 */
class GameController {
    /** The model of the world being simulated. */
    private world: WorldModel;

    /** The first player participating in the game. */
    private player1: Player | null = null;

    /** The second player participating in the game. */
    private player2: Player | null = null;

    /** Timestamp of the last update frame. */
    private lastTime: number = 0;

    /** Optional view to render the world. */
    private view?: IWorldView;

    /**
     * Creates a GameController instance.
     * @param world - The model of the game world.
     */
    constructor(world: WorldModel) {
        this.world = world;
    }

    /**
     * Sets the first player.
     * @param p - The player to assign to player1.
     */
    setPlayer1(p: Player): void {
        this.player1 = p;
    }

    /**
     * Sets the second player.
     * @param p - The player to assign to player2.
     */
    setPlayer2(p: Player): void {
        this.player2 = p;
    }

    /**
     * Sets the view used to display the world.
     * @param view - The view implementing IWorldView.
     */
    setView(view: IWorldView): void {
        this.view = view;
    }

    /**
     * Starts the main game loop, triggering player moves, 
     * world updates, and view rendering.
     */
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
        };
        requestAnimationFrame(updateFrame);
    }
}

export default GameController;
