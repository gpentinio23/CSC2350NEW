import Snake from "./Snake";
import SnakeController from "./SnakeController";
import Worldmodel from "./Worldmodel";
import Point from "./Point";



abstract class Player {
	protected sc: SnakeController;

	constructor(sc: SnakeController) {
		this.sc = sc;
	}

	abstract makeTurn(): void;
}

class AvoidWallsPlayer extends Player {
	constructor(sc: SnakeController) {
		super(sc);
	}

	public makeTurn(): void {
		const direction = this.sc.snakeDirection;
		const pos = this.sc.snakePosition;
		const worldW = this.sc.worldWidth;
		const worldH = this.sc.worldHeight;
		const halfH = worldH / 2;
		const halfW = worldW / 2;
		const atTopEdge = pos.y === 0;
		const atBottomEdge = pos.y === worldH - 1;
		const atLeftEdge = pos.x === 0;
		const atRightEdge = pos.x === worldW - 1;
		// If facing left and at left edge
		if (direction === -1 && atLeftEdge) {
			if (pos.y <= halfH) {
				this.sc.turnSnakeLeft();  // go up
			} else {
				this.sc.turnSnakeRight(); // go down
			}
		}
		// If facing right and at right edge
		else if (direction === 1 && atRightEdge) {
			if (pos.y <= halfH) {
				this.sc.turnSnakeRight(); // go down
			} else {
				this.sc.turnSnakeLeft();  // go up
			}
		}
		// If facing up and at top edge
		else if (direction === 2 && atTopEdge) {
			if (pos.x <= halfW) {
				this.sc.turnSnakeLeft(); // go left
			} else {
				this.sc.turnSnakeRight(); // go right
			}
		}
		// If facing down and at bottom edge
		else if (direction === -2 && atBottomEdge) {
			if (pos.x <= halfW) {
				this.sc.turnSnakeRight(); // go right
			} else {
				this.sc.turnSnakeLeft(); // go left
			}
		}
		// Otherwise: no imminent wall collision → do nothing
	}
}


export default Player;
export default AvoidWallsPlayer;