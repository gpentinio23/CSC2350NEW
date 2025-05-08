import IWorldView from "./IWorldView";
import ArrayIterator from "./ArrayIterator";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import IActor from "./IActor";
import ICollidable from "./ICollidable";
import Snake from "./Snake";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";
import ICollisionHandler from "./ICollisionHandler";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";


/**
 * Represents the world model containing multiple actors and views.
 * Handles updates, collisions, and rendering.
 */
class WorldModel {
    private actors: IActor[] = [];
    private views: IWorldView[] = [];
    private _width: number = 100;
    private _height: number = 100;
    private handlers: ActorCollisionHandlers;

    /**
     * Creates a new WorldModel with a collision handler map.
     * @param aca The actor collision handler manager
     */
    constructor(aca: ActorCollisionHandlers) {
        this.handlers = aca;
    }

    /**
     * Adds an actor to the world.
     * @param actor The actor to add
     */
    addActor(actor: IActor): void {
        this.actors.push(actor);
    }

    /**
     * Adds a view to the world.
     * @param view The view to add
     */
    addView(view: IWorldView): void {
        this.views.push(view);
    }

    /**
     * Returns the width of the world.
     */
    get width(): number {
        return this._width;
    }

    /**
     * Returns the height of the world.
     */
    get height(): number {
        return this._height;
    }

    /**
     * Returns an iterator over all actors in the world.
     */
    get allActors(): ArrayIterator<IActor> {
        return new ArrayIterator(this.actors);
    }

    /**
     * Returns an array of all snakes in the world.
     */
    get snakes(): Snake[] {
        return this.actors.filter((a): a is Snake => a.type === "snake");
    }

    /**
     * Updates all actors in the world and applies collision handlers.
     */
    update(): void {
        for (const actor of this.actors) {
            actor.update();
        }

        for (let i = 0; i < this.actors.length; i++) {
            for (let j = 0; j < this.actors.length; j++) {
                if (i === j) continue;

                const a = this.actors[i];
                const b = this.actors[j];

                if (
                    a.isActive && b.isActive &&
                    typeof (a as any).didCollide === "function" &&
                    (a as any).didCollide(b)
                ) {
                    if (this.handlers.hasCollisionAction(a.type, b.type)) {
                        this.handlers.applyCollisionAction(a, b);
                    }
                }

            }
        }

        for (const view of this.views) {
            view.display(this);
        }
    }
}

export default WorldModel;
