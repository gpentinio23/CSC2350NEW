import Snake from "./Snake";
import IWorldView from "./IWorldView"
import Point from "./Point";


class WorldModel{
	public snake: Snake;
	private _width: number;
	private _height: number;
    private worldView: IWorldView | null = null; // Initialize worldView to null
	constructor (snake: Snake, width: number, height: number){
		this.snake = snake;
		this._width = width;
		this._height = height;
	}
	/**Update method to move the snake
	 * @param steps - the number of squares to move the snake
	 */
	update(steps: number): void {
		if (this.snake.position.x < 0) {
			this.snake.position = new Point(0, this.snake.position.y);
		} else if (this.snake.position.x >= this.width) {
			this.snake.position = new Point(this.width - 1, this.snake.position.y);
		}

		if (this.snake.position.y < 0) {
			this.snake.position = new Point(this.snake.position.x, 0);
		} else if (this.snake.position.y >= this.height) {
			this.snake.position = new Point(this.snake.position.x, this.height - 1);
		}
		this.snake.move(steps);

		if (this.worldView){
			this.worldView.display(this)
		}
	}

	/**Sets the world view
	 * @param worldView - the world view to set
	 * Triggers view if a view is not null
	 */ 
	setView(view:IWorldView){
		this.worldView = view;
		}
		


	/**Retrieves the snake
	 */
	public get Snake(): Snake {
		return this.snake;
	} 

	public get width(): number {
		return this._width;
	}
	public get height(): number {
		return this._height
	}


}


export default WorldModel;
