import Snake from "./Snake"

/**
 * Represents a point in the world.
 */
class Point {
    constructor(public x: number, public y: number) { }

    /**
     * Compares two points for equality.
     * @param p The point to compare
     * @returns True if x and y match
     */
    equals(p: Point): boolean {
        return this.x === p.x && this.y === p.y;
    }
}


export default Point