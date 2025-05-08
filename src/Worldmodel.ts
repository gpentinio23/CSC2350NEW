import Snake from "./Snake";
import IWorldView from "./IWorldView";

/**
 * Represents the world model containing multiple snakes and views.
 */
class WorldModel {
	private allSnakes: Snake[] = [];
	private allViews: IWorldView[] = [];
	private _width: number = 100;
	private _height: number = 100;

	constructor() { }

	/**
	 * Adds a snake to the world.
	 * @param s Snake to add.
	 */
	addSnake(s: Snake): void {
		this.allSnakes.push(s);
	}

	/**
	 * Adds a view to the world.
	 * @param v View to add.
	 */
	addView(v: IWorldView): void {
		this.allViews.push(v);
	}

	/**
	 * Returns all snakes in the world.
	 */
	public get snakes(): Snake[] {
		return this.allSnakes;
	}

	/**
	 * Returns the world's width.
	 */
	public get width(): number {
		return this._width;
	}

	/**
	 * Returns the world's height.
	 */
	public get height(): number {
		return this._height;
	}

	/**
	 * Updates all snakes and views in the world.
	 * Moves all snakes forward and removes any that collide.
	 * @param steps Number of steps to move each snake.
	 */
	update(steps: number): void {
		for (const snake of this.allSnakes) {
			snake.move(steps);
		}

		const toRemove: Snake[] = [];

		for (const snake of this.allSnakes) {
			for (const other of this.allSnakes) {
				if (snake !== other && snake.didCollide(other) && !toRemove.includes(snake)) {
					toRemove.push(snake);
					break;
				}
			}
		}

		this.allSnakes = this.allSnakes.filter(s => !toRemove.includes(s));

		for (const view of this.allViews) {
			view.display(this);
		}
	}
}

export default WorldModel;
