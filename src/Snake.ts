 import display from "./display";

// place your code on line 5 above the export statement below

// -1 = left
// 1 =right
// 2 = up
// -2 = down
 /**Class representing a snake. */
class Snake {
	private currentPosition: number;
	private currentDirection: number;
	public position: Point;
	/**
	 * Create a snake.
	 * Constructor variables for currentPosition, currentDirection and position to point towards
	 */
	constructor(curPosition:number, curDirection:number){
		this.currentPosition = curPosition;
		this.currentDirection = curDirection		
		this.position = new Point(0,0);

	/**
	 * Moves the snake for the given number of squares
	 * @param squres - number of squares to move the snake
	 */
	}
	public move(squares:number){
		//Facing right
		if (this.currentDirection ===1){
			this.position = new Point(this.position.x +squares, this.position.y)
		}
		//Facing left
		else if (this.currentDirection === -1) {
			this.position = new Point(this.position.x - squares, this.position.y)
		}
		//Facing up
		else if (this.currentDirection === 2){
			this.position = new Point(this.position.x,this.position.y - squares)
		}
		//Facing down
		else if (this.currentDirection === -2){
		this.position = new Point(this.position.x, this.position.y + squares)
	}	
		}
	/**Turn left method in this order: 
	 * Turns the snake 90 degrees counterclockwise
	 * If facing right, turning left will cause you to face up
	 * If facing left, turning left will cause you to face down
	 * If facing down, turning left will cause you face right
	 * If facing up, turning left will cause you to face left
	 */
	public turnLeft(){
		if (this.currentDirection === 1) {
			this.currentDirection = 2
		}
		else if (this.currentDirection === -1){
			this.currentDirection = -2
		}
		else if (this.currentDirection === -2){
			this.currentDirection = 1
		}
		else if (this.currentDirection === 1){
			this.currentDirection = - 1
		}
	}
	/**Turn right method in this order:
	 * Turns the snake 90 degree clockwise
	 * If facing right, turning right will cause you to face down
	 * If facing left, turn right will case you to face up
	 * If facing down, turning right will cause you to face left
	 * If facing up, turning right will cause you to face right
	 */
	public turnRight(){
		if (this.currentDirection === 1){
			this.currentDirection = -2
		}
		if (this.currentDirection === -1){
			this.currentDirection = 2
		}
		if (this.currentDirection === -2){
			this.currentDirection = -1
		}
		if (this.currentDirection === 1){
			this.currentDirection = 1
		}

	}

/**
	public turn(){
		if (this.currentDirection === 1){
			this.currentDirection = -1
		}
		else if (this.currentDirection === -1) {
			this.currentDirection =1
		}
	}
	*/

	/**
	public get position(){
		return this.currentPosition
	}
	*/
}

/**Class representing the snake on the x,y coordinate plane
 */

class Point{
	constructor(private xcoord:number, private ycoord:number){
	}
	/**
	 * The current x,y coordinates of the snake
	 */
			public get x(){
			return this.xcoord
		}
			public get y(){
			return this.ycoord
		}
}
/**
const snakeThree = new Snake();
const myWorld = new WorldModel();
myWorld.update(3)
console.log(myWorld.getSnake())
*/


export default Snake;
