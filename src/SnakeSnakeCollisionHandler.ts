import Snake from "./Snake";
import ICollisionHandler from "./ICollisionHandler";

class SnakeSnakeCollisionHandler implements ICollisionHandler {
    applyAction(s1: Snake, _s2: Snake): void {
        s1.die();
    }
}

export default SnakeSnakeCollisionHandler
