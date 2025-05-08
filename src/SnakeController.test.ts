import Snake from "./Snake";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import Point from "./Point";
import ActorCollisionHandlers from "./ActorCollisionHandlers";

describe("SnakeController", () => {
    function setup(): { world: WorldModel; snake: Snake; controller: SnakeController } {
        const handlers = new ActorCollisionHandlers();
        const world = new WorldModel(handlers);
        const snake = new Snake(new Point(0, 0), 1, 1);
        world.addActor(snake);
        const controller = new SnakeController(world, snake);
        return { world, snake, controller };
    }

    it("turns the snake left", () => {
        const { controller } = setup();
        controller.turnSnakeLeft();
        expect(controller.snakeDirection).toBe(2); // up
    });

    it("turns the snake right", () => {
        const { controller } = setup();
        controller.turnSnakeRight();
        expect(controller.snakeDirection).toBe(-2); // down
    });

    it("returns the correct snake position", () => {
        const { controller } = setup();
        expect(controller.snakePosition.x).toBe(0);
        expect(controller.snakePosition.y).toBe(0);
    });

    it("returns the correct world dimensions", () => {
        const { controller } = setup();
        expect(controller.worldWidth).toBe(100);
        expect(controller.worldHeight).toBe(100);
    });
});