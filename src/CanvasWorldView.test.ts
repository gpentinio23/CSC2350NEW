import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./Worldmodel";
import Snake from "./Snake";
import Point from "./Point";
import SnakeController from "./SnakeController";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import AvoidWallsPlayer from "./Player";

describe("CanvasWorldView", () => {
    function createMockContext(): CanvasRenderingContext2D {
        return {
            fillRect: jest.fn(),
            clearRect: jest.fn(),
            getContextAttributes: jest.fn(),
            fillStyle: '',
            canvas: document.createElement('canvas'),
        } as unknown as CanvasRenderingContext2D;
    }

    let view: CanvasWorldView;
    let mockContext: CanvasRenderingContext2D;

    beforeEach(() => {
        const canvas = document.createElement("canvas");
        mockContext = createMockContext();
        jest.spyOn(document, "createElement").mockReturnValue(canvas);
        jest.spyOn(canvas, "getContext").mockReturnValue(mockContext);
        view = new CanvasWorldView(20);
    });

    it("appends a canvas to the document body", () => {
        expect(document.body.contains(view["worldCanvas"])).toBe(true);
    });

    it("draws world with snake on correct position", () => {
        const handlers = new ActorCollisionHandlers();
        const model = new WorldModel(handlers);
        const snake = new Snake(new Point(2, 3), 1, 1);
        model.addActor(snake);
        view.display(model);
        expect(mockContext.fillRect).toHaveBeenCalledWith(40, 60, 20, 20);
    });
});

describe("AvoidWallsPlayer", () => {
    function setupAtEdge(y: number): { controller: SnakeController; player: AvoidWallsPlayer } {
        const handlers = new ActorCollisionHandlers();
        const world = new WorldModel(handlers);
        const snake = new Snake(new Point(0, y), 1, -1); // facing left
        world.addActor(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);
        (snake as any).parts[0] = new Point(0, y);
        return { controller, player };
    }

    it("turns up when at left edge and upper half", () => {
        const { controller, player } = setupAtEdge(2);
        player.makeTurn();
        expect(controller.snakeDirection).toBe(-2);
    });

    it("turns down when at left edge and lower half", () => {
        const { controller, player } = setupAtEdge(7);
        player.makeTurn();
        expect(controller.snakeDirection).toBe(2);
    });

    it("does not turn when not at an edge", () => {
        const handlers = new ActorCollisionHandlers();
        const world = new WorldModel(handlers);
        const snake = new Snake(new Point(5, 5), 1, 1);
        world.addActor(snake);
        const controller = new SnakeController(world, snake);
        const player = new AvoidWallsPlayer(controller);
        player.makeTurn();
        expect(controller.snakeDirection).toBe(1);
    });
});
