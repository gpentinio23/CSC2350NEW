
import { useEffect, useRef } from "react";
import Snake from "./Snake";
import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import HumanPlayer from "./HumanPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import GameController from "./GameController";

export default function App() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        //Initialize the game components
        const snake = new Snake(1,1); // Starting position (0, 0)
        const world = new WorldModel(snake, 100, 100); // World size 20x20
        const controller = new SnakeController(world, snake);

        // Attach the canvas to the DOM
        const canvasElement = canvasRef.current!;
        const view = new CanvasWorldView(20); // Scaling factor of 20 pixels per grid unit
        view["worldCanvas"] = canvasElement; // Use the canvas from the DOM
        view["context"] = canvasElement.getContext("2d")!;

        // Input handler for arrow keys
        const inputHandler = new LRKeyInputHandler();
        const human = new HumanPlayer(controller, inputHandler);

        // Game controller
        const game = new GameController(world);
        game.setPlayer1(human);
        game.setView(view);

        // Start the game loop
        game.run();

        // Attach the input handler to the document
        inputHandler.attach();

   


    }, []);
    return (
        <div className="App">
            <h1>Snake Game</h1>
            <canvas ref={canvasRef} width="400" height="400" style={{ border: "1px solid black" }}></canvas>
        </div>
    );
}