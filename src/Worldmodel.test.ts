import WorldModel from "./Worldmodel";
import Snake from "./Snake";
import Point from "./Point";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";

/**
 * Initializes a WorldModel with default snake-food and snake-snake collision handlers.
 */
function setupWorld(): WorldModel {
    const handlers = new ActorCollisionHandlers();
    handlers.addCollisionAction("snake", "snake", new SnakeSnakeCollisionHandler());
    handlers.addCollisionAction("snake", "food", new SnakeFoodCollisionHandler());
    return new WorldModel(handlers);
}

describe("WorldModel", () => {
    it("adds snakes and updates their position", () => {
        const world = setupWorld();
        const snake = new Snake(new Point(0, 0), 1, 1); // right
        world.addActor(snake);

        world.update();
        world.update();
        world.update();

        expect(snake.position.x).toBe(3);
        expect(snake.position.y).toBe(0);
    });

    it("removes a snake after collision with another", () => {
        const world = setupWorld();

        const snake1 = new Snake(new Point(1, 1), 2, 1); // right
        const snake2 = new Snake(new Point(5, 1), 2, -1); // left
        world.addActor(snake1);
        world.addActor(snake2);

        world.update();
        world.update();
        world.update();

        expect(world.snakes.length).toBeLessThan(2);
    });

    it("calls display on all views", () => {
        const world = setupWorld();
        const snake = new Snake(new Point(0, 0), 1, 1);
        world.addActor(snake);

        const mockView = { display: jest.fn() };
        world.addView(mockView);

        world.update();

        expect(mockView.display).toHaveBeenCalledWith(world);
    });
});
