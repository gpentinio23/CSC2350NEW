import Snake from "./Snake";



class WorldModel{
	private snake: Snake;
	private _width: number;
	private _height: number;
	constructor (snake: Snake, width: number, height: number){
		this.snake = snake;
		this._width = width;
		this._height = height;
	}
	/**Update method to move the snake
	 * @param steps - the number of squares to move the snake
	 */
	public update(steps:number){
		this.snake.move(steps);
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
