import { useEffect } from "react";
import Snake from "./Snake";
import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import HumanPlayer from "./HumanPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import GameController from "./GameController";
import Point from "./Point";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";
import Food from "./Food";

export default function App() {
    useEffect(() => {
        // Initialize snake and world
        const handlers = new ActorCollisionHandlers();
        const snake = new Snake(new Point(1, 1), 1); // 3-part snake starting at (1,1)
        handlers.addCollisionAction("snake", "food", new SnakeFoodCollisionHandler());
        handlers.addCollisionAction("snake", "snake", new SnakeSnakeCollisionHandler());
        const world = new WorldModel(handlers);
        world.addActor(snake);

        // Setup view
        const view = new CanvasWorldView(25); // pixels per grid square
        world.addView(view);


        //Add foood
        const foodInterval = setInterval(() => {
            const x = Math.floor(Math.random() * world.width);
            const y = Math.floor(Math.random() * world.height);
            world.addActor(new Food(x, y));
        }, 4000);

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
