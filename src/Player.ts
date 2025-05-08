import Snake from "./Snake";
import SnakeController from "./SnakeController";
import Worldmodel from "./Worldmodel";
import Point from "./Point";

/**Class representing the player
 * Takes the SnakeController as an argument in the constructor
 * Contains a makeTurn abstract method
 */
abstract class Player {
	protected sc: SnakeController;

	constructor(sc: SnakeController) {
		this.sc = sc;
	}

	abstract makeTurn(): void;
}

/**
 * Class extending from the player class that makes
 * sure that the snake won't crash into a wall
 */
class AvoidWallsPlayer extends Player {
	constructor(sc: SnakeController) {
		super(sc);
	}

	/**
	 * Decides if the snake needs to turn to avoid hitting the wall.
	 * Turns the snake left or right depending on its position and direction.
	 */
	public makeTurn(): void {
		let direction = this.sc.snakeDirection;
		let pos = this.sc.snakePosition;
		let worldW = this.sc.worldWidth;
		let worldH = this.sc.worldHeight;
		let halfH = worldH / 2;
		let halfW = worldW / 2;
		let atTopEdge = pos.y <= 0;
		let atBottomEdge = pos.y >= worldH - 1;
		let atLeftEdge = pos.x <= 0;
		let atRightEdge = pos.x >= worldW - 1;

		// If facing left and at the left edge, turn up or down
		if (direction === -1 && atLeftEdge) {
			if (pos.y <= halfH) {
				this.sc.turnSnakeLeft(); // go up
			} else {
				this.sc.turnSnakeRight(); // go down
			}
		}
		// If facing right and at the right edge, turn down or up
		else if (direction === 1 && atRightEdge) {
			if (pos.y <= halfH) {
				this.sc.turnSnakeRight(); // go down
			} else {
				this.sc.turnSnakeLeft(); // go up
			}
		}
		// If facing up and at the top edge, turn left or right
		else if (direction === 2 && atTopEdge) {
			if (pos.x <= halfW) {
				this.sc.turnSnakeLeft(); // go left
			} else {
				this.sc.turnSnakeRight(); // go right
			}
		}
		// If facing down and at the bottom edge, turn right or left
		else if (direction === -2 && atBottomEdge) {
			if (pos.x <= halfW) {
				this.sc.turnSnakeRight(); // go right
			} else {
				this.sc.turnSnakeLeft(); // go left
			}
		}
	}
}

// Use named export for AvoidWallsPlayer
export default AvoidWallsPlayer ;