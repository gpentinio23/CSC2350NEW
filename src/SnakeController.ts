import Snake from "./Snake";
import WorldModel from "./Worldmodel";
import Point from "./Point";

/**
 * Controls a snake in a world.
 */
class SnakeController {
    /** The world the snake lives in. */
    public snakeWorld: WorldModel;

    /** The controlled snake. */
    public slitherer: Snake;

    /**
     * Creates a controller.
     * @param worldModel The world model.
     * @param snake The snake to control.
     */
    constructor(snakeWorld: WorldModel, slitherer: Snake) {
        this.slitherer = slitherer;
        this.snakeWorld = snakeWorld;
    }

    /** Turns the snake right. */
    public turnSnakeRight(): void {
        this.slitherer.turnRight();
        console.log(`Snake turned right, new direction: ${this.slitherer.direction}`); // Add this line
    }

    /** Turns the snake left. */
    public turnSnakeLeft(): void {
        this.slitherer.turnLeft();
        console.log(`Snake turned left, new direction: ${this.slitherer.direction}`); // Add this line
    }

    /** Gets the snake's position. */
    public get snakePosition(): Point {
        return this.slitherer.position;
    }

    /** Gets the snake's direction. */
    public get snakeDirection(): number {
        return this.slitherer.direction;
    }

    /** Gets the world width. */
    public get worldWidth(): number {
        return this.snakeWorld.width;
    }

    /** Gets the world height. */
    public get worldHeight(): number {
        return this.snakeWorld.height;
    }
}

export default SnakeController;
