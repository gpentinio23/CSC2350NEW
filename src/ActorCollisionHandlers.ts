import ICollisionHandler from './ICollisionHandler';

class ActorCollisionHandlers {
    private pairs: Map<string, ICollisionHandler> = new Map();


    cosntructor() {
        this.pairs = new Map();
    }
    /**
     * Combines two type names into a collision key.
     * @param a Type of actor initiating collision
     * @param b Type of actor collided with
     * @returns A string key used in the map
     */
    private toKey(a: string, b: string): string {
        return `${a},${b}`;
    }

    /**
     * Registers a collision action between two types.
     * @param a Collider type
     * @param b Collided type
     * @param handler Handler to apply
     */
    addCollisionAction(a: string, b: string, handler: ICollisionHandler): void {
        this.pairs.set(this.toKey(a, b), handler);
    }

    /**
     * Checks if a handler exists for a type pair.
     * @param a Collider type
     * @param b Collided type
     * @returns True if a handler exists
     */
    hasCollisionAction(a: string, b: string): boolean {
        return this.pairs.has(this.toKey(a, b));
    }

    /**
     * Applies the correct handler for a collision if it exists.
     * @param a Collider
     * @param b Collided actor
     */
    applyCollisionAction(a: any, b: any): void {
        const key = this.toKey(a.type, b.type);
        const handler = this.pairs.get(key);
        if (handler) {
            handler.applyAction(a, b);
        }
    }
}


export default ActorCollisionHandlers;