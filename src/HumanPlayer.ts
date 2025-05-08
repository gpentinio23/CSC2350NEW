import Player from "./Player";  
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";

class HumanPlayer extends Player {
    private handler: IInputHandler;

    constructor(sc: SnakeController, handler: IInputHandler) {
        super(sc);
        this.handler = handler;
    }

    public makeTurn(): void {
        if (this.handler.madeLeftMove()) {
            this.sc.turnSnakeLeft();
            this.handler.resetLeftMove();
        }
        else if (this.handler.madeRightMove()) {
            this.sc.turnSnakeRight();
            this.handler.resetRightMove();
        }
    }
}

export default HumanPlayer