import { useEffect } from "react";
import Snake from "./Snake";
import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import HumanPlayer from "./HumanPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import GameController from "./GameController";
import Point from "./Point";

export default function App() {
    useEffect(() => {
        // Initialize snake and world
        const snake = new Snake(new Point(1, 1), 10); // 3-part snake starting at (1,1)
        const world = new WorldModel();
        world.addSnake(snake);

        // Setup view
        const view = new CanvasWorldView(20); // 20 pixels per grid square
        world.addView(view);

        // Setup controller and input
        const controller = new SnakeController(world, snake);
        const inputHandler = new LRKeyInputHandler();
        inputHandler.attach();
        const player = new HumanPlayer(controller, inputHandler);

        // Setup game
        const game = new GameController(world);
        game.setPlayer1(player);
        game.setView(view);
        game.run();
    }, []);

    return (
        <div className="App">
            <h1>Snake Game</h1>
        </div>
    );
}
