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

    equals(p: Point): boolean {
        return this.xcoord === p.x && this.ycoord === p.y;
    }
}

export default Point;