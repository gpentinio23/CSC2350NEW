import IInputHandler from './IInputHandler';
/**
 * An input handler that listens for left and right arrow key presses.
 * Implements the IInputHandler interface to track directional input
 * from keyboard arrow keys.
 */
class LRKeyInputHandler implements IInputHandler {
    /**
     * Tracks whether the left arrow key was pressed since the last reset.
     */
    private wasLeftArrowPushed: boolean = false;
    /**
     * Tracks whether the right arrow key was pressed since the last reset.
     */
    private wasRightArrowPushed: boolean = false;

    private wasUpArrowPushed: boolean = false;
    private wasDownArrowPushed: boolean = false;

    /**
     * Constructs a new LRKeyInputHandler and attaches a keydown event listener
     * to detect "ArrowLeft" and "ArrowRight" key presses.
     */
    attach():void {
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.wasLeftArrowPushed = true;
            } else if (event.key === "ArrowRight") {
                this.wasRightArrowPushed = true;
            }
            else if (event.key === "ArrowUp") {
                this.wasUpArrowPushed = true;
            }
            else if (event.key === "ArrowDown") {
                this.wasDownArrowPushed = true;
            }
        });
    }
    /**
     * Returns true if the left arrow key was pressed since the last reset.
     * @returns {boolean} True if a left move was made; otherwise, false.
     */
    madeLeftMove(): boolean {
        return this.wasLeftArrowPushed;
    }
    /**
     * Returns true if the right arrow key was pressed since the last reset.
     * @returns {boolean} True if a right move was made; otherwise, false.
     */
    madeRightMove(): boolean {
        return this.wasRightArrowPushed;
    }
    /**
     * Resets the left arrow key press state to false.
     */
    resetLeftMove(): void {
        this.wasLeftArrowPushed = false;
    }
    /**
     * Resets the right arrow key press state to false.
     */
    resetRightMove(): void {
        this.wasRightArrowPushed = false;
    }
    /**
    * Returns true if the up arrow key was pressed since the last reset.
    * @returns {boolean} True if an up move was made; otherwise, false.
    */
    madeUpMove(): boolean {
        return this.wasUpArrowPushed;
    }

    /**
     * Returns true if the down arrow key was pressed since the last reset.
     * @returns {boolean} True if a down move was made; otherwise, false.
     */
    madeDownMove(): boolean {
        return this.wasDownArrowPushed;
    }
    resetUpMove(): void {
        this.wasUpArrowPushed = false;
    }

    /**
     * Resets the down arrow key press state to false.
     */
    resetDownMove(): void {
        this.wasDownArrowPushed = false;
    }
}

export default LRKeyInputHandler;