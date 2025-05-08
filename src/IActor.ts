import Point from "./Point";

/**
 * Interface representing any actor in the game world.
 */
interface IActor {
    /**
     * Updates the state of the actor.
     */
    update(): void;
    type: string;
    position: Point;
    isActive: boolean;
}

/**
 * Interface for actors that can participate in collisions.
 * Extends IActor.
 */

export default IActor;