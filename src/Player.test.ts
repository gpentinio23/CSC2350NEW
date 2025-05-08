import Snake from "./Snake";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./Player";
import Point from "./Point";

describe("AvoidWallsPlayer", () => {
    it("turns up when facing left at the left edge and in upper half", () => {
        const snake = new Snake(new Point(0, 2), 1, -1); // Facing left
        const world = new WorldModel();
        world.addSnake(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);

        // Move snake's head to left edge and upper half
        (snake as any).parts[0] = new Point(0, 2);

        player.makeTurn();

        expect(controller.snakeDirection).toBe(-2); // Should turn up
    });

    it("turns down when facing left at the left edge and in lower half", () => {
        const snake = new Snake(new Point(0, 7), 1, -1); // Facing left
        const world = new WorldModel();
        world.addSnake(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);

        (snake as any).parts[0] = new Point(0, 7);

        player.makeTurn();

        expect(controller.snakeDirection).toBe(2); // Should turn down
    });

    it("does not turn when not at an edge", () => {
        const snake = new Snake(new Point(5, 5), 1, 1); // Facing right
        const world = new WorldModel();
        world.addSnake(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);

        player.makeTurn();

        expect(controller.snakeDirection).toBe(1); // Should remain facing right
    });
});
