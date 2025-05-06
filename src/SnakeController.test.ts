import Snake from "./Snake";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import Point from "./Point";

describe("SnakeController", () => {
    it("turns the snake left", () => {
        const snake = new Snake(0, 1); // initially facing right
        const world = new WorldModel(snake, 10, 10);
        const controller = new SnakeController(world, snake);

        controller.turnSnakeLeft();
        expect(controller.snakeDirection).toBe(2); // should be up
    });

    it("turns the snake right", () => {
        const snake = new Snake(0, 1); // initially facing right
        const world = new WorldModel(snake, 10, 10);
        const controller = new SnakeController(world, snake);

        controller.turnSnakeRight();
        expect(controller.snakeDirection).toBe(-1); // should be down
    });

    it("returns the correct snake position", () => {
        const snake = new Snake(0, 1);
        const world = new WorldModel(snake, 10, 10);
        const controller = new SnakeController(world, snake);

        expect(controller.snakePosition.x).toBe(0);
        expect(controller.snakePosition.y).toBe(0);
    });

    it("returns the correct world width and height", () => {
        const snake = new Snake(0, 1);
        const world = new WorldModel(snake, 30, 20);
        const controller = new SnakeController(world, snake);

        expect(controller.worldWidth).toBe(30);
        expect(controller.worldHeight).toBe(20);
    });
});
