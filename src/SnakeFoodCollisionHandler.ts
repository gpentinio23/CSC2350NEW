import Snake from "./Snake";
import Food from "./Food";
import ICollisionHandler from "./ICollisionHandler";

/**
 * Handles collisions between a Snake and a Food object.
 * When a collision occurs, the food is marked as eaten and the snake grows.
 */
class SnakeFoodCollisionHandler implements ICollisionHandler {
    /**
     * Applies the collision action for a Snake and a Food.
     * @param s - The Snake instance that collided with food.
     * @param f - The Food instance that was collided with.
     */
    applyAction(s: Snake, f: Food): void {
        f.eat();
        s.grow();
    }
}

export default SnakeFoodCollisionHandler;
