import IActor from "./IActor";


/**
 * Interface for actors that can participate in collisions.
 * Extends IActor.
 */
interface ICollidable extends IActor {
    /**
     * Determines if this actor collided with another actor.
     * @param other Another actor in the world
     * @returns True if this actor has collided with the other
     */
    didCollide(other: IActor): boolean;
}

/**
 * Interface for collision action handlers.
 */

export default ICollidable;