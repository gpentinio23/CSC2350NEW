import Point from "./Point";
import ICollidable from "./ICollidable";
import IActor from "./IActor";

/**
 * Class representing a snake on the x,y coordinate plane.
 */
class Snake {
    private currentDirection: number;
    private currentParts: Point[];
    private isCurrentlyActive: boolean = true;

    /**
     * Create a new Snake.
     * @param startPosition The initial head position.
     * @param size The total number of body segments (head + tail).
     * @param direction The initial direction (default is 1 = right).
     */
    constructor(startPosition: Point, size: number, direction: number = 1) {
        this.currentDirection = direction;
        this.currentParts = [startPosition];

        for (let i = 1; i < size; i++) {
            const prev = this.currentParts[i - 1];
            if (direction === 1) this.currentParts.push(new Point(prev.x - 1, prev.y));
            else if (direction === -1) this.currentParts.push(new Point(prev.x + 1, prev.y));
            else if (direction === 2) this.currentParts.push(new Point(prev.x, prev.y + 1));
            else if (direction === -2) this.currentParts.push(new Point(prev.x, prev.y - 1));
        }
    }

    /**
     * Update the snake's position
     * This method is called every tick of the game loop.
     * Checks if the snake is dead or active
     */
    update(): void {
        this.move(1)
    }

    die(): void {
        this.isCurrentlyActive = false;
    }

    get isActive(): boolean {
        return this.isCurrentlyActive;
    }

    get type(): string {
        return "snake";
  
    }

    /**
     * Get the snake's head position.
     */
    public get position(): Point {
        return this.currentParts[0];
    }

    /**
     * Get all parts (head + tail) of the snake.
     */
    public get parts(): Point[] {
        return this.currentParts;
    }

    /**
     * Get the current direction of the snake.
     */
    public get direction(): number {
        return this.currentDirection;
    }

    /**
     * Move the snake forward by a number of squares.
     * Tail follows the body, and head moves in the direction.
     * @param squares Number of squares to move.
     */
    public move(squares: number): void {
        for (let i = this.currentParts.length - 1; i > 0; i--) {
            this.currentParts[i] = this.currentParts[i - 1];
        }

        const head = this.currentParts[0];
        let newHead: Point;

        switch (this.currentDirection) {
            case 1: newHead = new Point(head.x + squares, head.y); break;
            case -1: newHead = new Point(head.x - squares, head.y); break;
            case 2: newHead = new Point(head.x, head.y - squares); break;
            case -2: newHead = new Point(head.x, head.y + squares); break;
            default: newHead = head;
        }

        this.currentParts[0] = newHead;
    }

    /**
     * Turn the snake left (90° counterclockwise).
     */
    public turnLeft(): void {
        if (this.currentDirection === 1) this.currentDirection = 2;
        else if (this.currentDirection === -1) this.currentDirection = -2;
        else if (this.currentDirection === -2) this.currentDirection = 1;
        else if (this.currentDirection === 2) this.currentDirection = -1;
    }

    /**
     * Turn the snake right (90° clockwise).
     */
    public turnRight(): void {
        if (this.currentDirection === 1) this.currentDirection = -2;
        else if (this.currentDirection === -1) this.currentDirection = 2;
        else if (this.currentDirection === -2) this.currentDirection = -1;
        else if (this.currentDirection === 2) this.currentDirection = 1;
    }

    /**
     * Check if this snake's head collides with any part of another snake.
     * @param s The other snake (can also be this snake).
     * @returns true if head collides with another body part.
     */
    didCollide(actor: IActor): boolean {
        if (actor["type"] !== "snake") {
            return this.position.equals(actor["position"]);
        } else if (actor === this) {
            return this.parts.slice(1).some(p => p.equals(this.position));
        } else {
            return this.parts.some((p: Point) => p.equals(this.position));
        }
    }

    grow(): void {
        const tail = this.parts[this.parts.length - 1];
        let newTail: Point;

        switch (this.currentDirection) {
            case 1: newTail = new Point(tail.x - 1, tail.y); break;
            case -1: newTail = new Point(tail.x + 1, tail.y); break;
            case 2: newTail = new Point(tail.x, tail.y + 1); break;
            case -2: newTail = new Point(tail.x, tail.y - 1); break;
        }

        this.parts.push(newTail!);
    }

}

export default Snake;
