import IWorldView from "./IWorldView";
import WorldModel from "./Worldmodel";


/**
 * Canvas-based implementation of the IWorldView.
 */
export class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  /**
   * Creates a CanvasWorldView instance.
   * @param scalingFactor Number of pixels per grid unit in the model.
   */
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }

  /**
   * Displays the current world state on the canvas.
   * @param world The world model to display.
   */
  display(world: WorldModel): void {
    let width = world.width * this.scalingFactor;
    let height = world.height * this.scalingFactor;
    this.worldCanvas.width = width;
      this.worldCanvas.height = height;
    this.context.clearRect(0, 0, width, height);
    this.context.fillStyle = "black";
    this.context.fillRect(0,0,width,height)
    //this.context.clearRect(0, 0, width, height);
    let snake = world.snake;
    let snakeX = snake.position.x * this.scalingFactor;
    let snakeY = snake.position.y * this.scalingFactor;
    this.context.fillStyle = "blue";
    this.context.fillRect(snakeX,snakeY,this.scalingFactor,this.scalingFactor);
  }
}

export default CanvasWorldView;
