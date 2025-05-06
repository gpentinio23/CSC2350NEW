import Snake from "./Snake"

class Point {
	constructor(private xcoord: number, private ycoord: number) {
	}
	/**
	 * The current x,y coordinates of the snake
	 */
	public get x() {
		return this.xcoord
	}
	public get y() {
		return this.ycoord
	}
}

export default Point;