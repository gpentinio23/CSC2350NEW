import Snake from "./Snake";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./Player";
import Point from "./Point";

describe("AvoidWallsPlayer", () => {
  it("turns up when facing left at the left edge and in upper half", () => {
    const snake = new Snake(0, -1); // Facing left
    const world = new WorldModel(snake, 10, 10);
    const controller = new SnakeController(world, snake);
    const player = new AvoidWallsPlayer(controller);

    // Position snake at left edge and upper half
    snake.position = new Point(0, 2);

    player.makeTurn();

    expect(controller.snakeDirection).toBe(-2); // Should turn up
  });

  it("turns down when facing left at the left edge and in lower half", () => {
    const snake = new Snake(0, 2); // Facing left
    const world = new WorldModel(snake, 10, 10);
    const controller = new SnakeController(world, snake);
    const player = new AvoidWallsPlayer(controller);

    // Position snake at left edge and lower half
    snake.position = new Point(0, 7);

    player.makeTurn();

    expect(controller.snakeDirection).toBe(2); // Should turn down
  });

  it("does not turn when not at an edge", () => {
    const snake = new Snake(5, 2); // Facing right
    const world = new WorldModel(snake, 10, 10);
    const controller = new SnakeController(world, snake);
    const player = new AvoidWallsPlayer(controller);

    player.makeTurn();

    expect(controller.snakeDirection).toBe(-1); // Should remain facing right
  });
});
