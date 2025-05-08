import Snake from "./Snake";
import Point from "./Point";

describe("Snake", () => {
    it("moves right correctly", () => {
        const snake = new Snake(new Point(0, 0), 3, 1); // right
        snake.move(2);
        expect(snake.position.x).toBe(2);
        expect(snake.position.y).toBe(0);
    });

    it("turns left from right to up", () => {
        const snake = new Snake(new Point(5, 5), 1, 1); // right
        snake.turnLeft(); // should now face up
        snake.move(1);
        expect(snake.position.x).toBe(5);
        expect(snake.position.y).toBe(4);
    });

    it("turns right from right to down", () => {
        const snake = new Snake(new Point(5, 5), 1, 1); // right
        snake.turnRight(); // should now face down
        snake.move(1);
        expect(snake.position.x).toBe(5);
        expect(snake.position.y).toBe(6);
    });

    it("detects collision with itself", () => {
        const snake = new Snake(new Point(3, 3), 4, 1); // long enough for loop
        snake.move(1);
        snake.turnRight = () => (snake["currentDirection"] = -2); // manually set down
        snake.move(1);
        snake.turnLeft();
        snake.move(1);
        snake.turnRight = () => (snake["currentDirection"] = 2);
        snake.move(1);
        snake.turnRight();
        snake.move(1); // should now overlap head

        expect(snake.didCollide(snake)).toBe(true);
    });

    it("detects collision with another snake", () => {
        const snake1 = new Snake(new Point(2, 2), 2, 1);
        const snake2 = new Snake(new Point(4, 2), 2, -1);
        snake1.move(1);
        snake2.move(1);
        snake1.move(1); // now both snakes should have head at (3,2)

        expect(snake1.didCollide(snake2)).toBe(true);
    });
});
