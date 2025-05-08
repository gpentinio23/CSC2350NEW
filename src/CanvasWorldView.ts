import IWorldView from "./IWorldView";
import WorldModel from "./Worldmodel";
import Snake from "./Snake";
import Food from "./Food";
import Point from "./Point";


/**
 * A canvas-based implementation of the IWorldView interface.
 * Responsible for rendering the current state of the world model.
 */
class CanvasWorldView implements IWorldView {
    /** Number of pixels per unit in the world model grid. */
    private scalingFactor: number;
    /** The canvas element that will be used for rendering. */
    private worldCanvas: HTMLCanvasElement;
    /** 2D rendering context for the canvas. */
    private context: CanvasRenderingContext2D;

    /**
     * Constructs a new CanvasWorldView instance.
     * @param scalingFactor - Number of pixels per model grid unit.
     */
    constructor(scalingFactor: number) {
        this.scalingFactor = scalingFactor;
        this.worldCanvas = document.createElement("canvas");
        this.context = this.worldCanvas.getContext("2d")!;
        document.body.appendChild(this.worldCanvas);
    }

    /**
     * Renders all active actors (e.g., snakes, food) onto the canvas.
     * @param world - The WorldModel containing all actors.
     */
    display(world: WorldModel): void {
        const width = world.width * this.scalingFactor;
        const height = world.height * this.scalingFactor;
        this.worldCanvas.width = width;
        this.worldCanvas.height = height;

        // Clear canvas and fill background
        this.context.clearRect(0, 0, width, height);
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, width, height);

        // Iterate through and render each actor
        let actorIterator = world.allActors;
        let result = actorIterator.next();

        while (!result.done) {
            const actor = result.value!;

            if (!actor.isActive) {
                result = actorIterator.next();
                continue;
            }

            if (actor.type === "snake" && "parts" in actor) {
                this.context.fillStyle = "white";
                const snake = actor as { parts: Point[] };
                for (const part of snake.parts) {
                    this.context.fillRect(
                        part.x * this.scalingFactor,
                        part.y * this.scalingFactor,
                        this.scalingFactor,
                        this.scalingFactor
                    );
                }
            } else if (actor["type"] === "food") {
                this.context.fillStyle = "red";
                this.context.fillRect(
                    actor.position.x * this.scalingFactor,
                    actor.position.y * this.scalingFactor,
                    this.scalingFactor,
                    this.scalingFactor
                );
            }

            result = actorIterator.next();
        }
    }
}

export default CanvasWorldView;
