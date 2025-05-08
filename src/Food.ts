import Point from "./Point";
import IActor from "./IActor";


class Food implements IActor {
    private currentPosition: Point;
    private isCurrentlyActive: boolean;

    /**
     * Constructs a Food instance at given coordinates.
     * @param x X-coordinate
     * @param y Y-coordinate
     */
    constructor(x: number, y: number) {
        this.currentPosition = new Point(x, y);
        this.isCurrentlyActive = true;
    }
    /**
     * Marks the food as eaten.
     */
    eat(): void {
        this.isCurrentlyActive = false;
    }
    /** Gets the food's position. */
    get position(): Point {
        return this.currentPosition;
    }
    /** Gets whether the food is still active. */
    get isActive(): boolean {
        return this.isCurrentlyActive;
    }
    /** Gets the actor type. */
    get type(): string {
        return "food";
    }
    /** Updates the food state (no-op). */
    update(): void { }
}


export default Food




