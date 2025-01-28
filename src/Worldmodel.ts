import Snake from "./Snake";



class WorldModel{
	private snakeone: Snake;
	constructor (){
		this.snakeone = new Snake();
	}
	/**Update method to move the snake
	 * @param steps - the number of squares to move the snake
	 */
	public update(steps:number){
		this.snakeone.move(steps);
	}
	/**Retrieves the snake
	 */
	public getSnake(): Snake {
		return this.snakeone;
	} 
}


export default WorldModel;
