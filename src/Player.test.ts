import Snake from "./Snake";
import WorldModel from "./Worldmodel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./Player";
import Point from "./Point";
import ActorCollisionHandlers from "./ActorCollisionHandlers";

describe("AvoidWallsPlayer", () => {
    function setupAtEdge(y: number): { controller: SnakeController; player: AvoidWallsPlayer } {
        const handlers = new ActorCollisionHandlers();
        const world = new WorldModel(handlers);
        const snake = new Snake(new Point(0, y), 1, -1); // Facing left
        world.addActor(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);
        (snake as any).parts[0] = new Point(0, y);
        return { controller, player };
    }

    it("turns up when facing left at the left edge and in upper half", () => {
        const { controller, player } = setupAtEdge(2);
        player.makeTurn();
        expect(controller.snakeDirection).toBe(-2); // Should turn up
    });

    it("turns down when facing left at the left edge and in lower half", () => {
        const { controller, player } = setupAtEdge(7);
        player.makeTurn();
        expect(controller.snakeDirection).toBe(2); // Should turn down
    });

    it("does not turn when not at an edge", () => {
        const handlers = new ActorCollisionHandlers();
        const world = new WorldModel(handlers);
        const snake = new Snake(new Point(5, 5), 1, 1); // Facing right
        world.addActor(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);
        player.makeTurn();
        expect(controller.snakeDirection).toBe(1); // Should remain facing right
    });
});
