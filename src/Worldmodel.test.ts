import WorldModel from "./Worldmodel";
import Snake from "./Snake";
import Point from "./Point";

describe("WorldModel", () => {
    it("adds snakes and updates their position", () => {
        const world = new WorldModel();
        const snake = new Snake(new Point(0, 0), 1, 1); // right
        world.addSnake(snake);

        world.update(3);
        expect(snake.position.x).toBe(3);
        expect(snake.position.y).toBe(0);
    });

    it("removes a snake after collision with another", () => {
        const world = new WorldModel();

        const snake1 = new Snake(new Point(1, 1), 2, 1); // right
        const snake2 = new Snake(new Point(5, 1), 2, -1); // left
        world.addSnake(snake1);
        world.addSnake(snake2);

        // Move them toward each other so heads collide
        world.update(2); // both move closer
        world.update(1); // should now collide

        expect(world.snakes.length).toBeLessThan(2); // one or both should be removed
    });

    it("calls display on all views", () => {
        const world = new WorldModel();
        const snake = new Snake(new Point(0, 0), 1, 1);
        world.addSnake(snake);

        const mockView = { display: jest.fn() };
        world.addView(mockView);

        world.update(1);

        expect(mockView.display).toHaveBeenCalledWith(world);
    });
});
