import Snake from "./Snake";
import Food from "./Food";
import Point from "./Point";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";

it("eats food and grows snake when collision occurs", () => {
    const snake = new Snake(new Point(0, 0), 1);
    const food = new Food(5, 5);
    const handler = new SnakeFoodCollisionHandler();

    handler.applyAction(snake, food);

    expect(food.isActive).toBe(false);
    expect(snake.parts.length).toBe(2);
});
