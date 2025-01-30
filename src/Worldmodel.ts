import Snake from "./Snake";



class WorldModel{
	private snake: Snake;
	constructor (snake: Snake){
		this.snake = snake;
	}
	/**Update method to move the snake
	 * @param steps - the number of squares to move the snake
	 */
	public update(steps:number){
		this.snake.move(steps);
	}
	/**Retrieves the snake
	 */
	public getSnake(): Snake {
		return this.snake;
	} 
}


export default WorldModel;
