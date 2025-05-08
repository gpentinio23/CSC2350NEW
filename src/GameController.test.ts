import GameController from './GameController';
import WorldModel from './Worldmodel';
import Player from './Player';
import IWorldView from './IWorldView';
import ActorCollisionHandlers from './ActorCollisionHandlers';
import SnakeFoodCollisionHandler from './SnakeFoodCollisionHandler';
import SnakeSnakeCollisionHandler from './SnakeSnakeCollisionHandler';

function createWorldModel(): WorldModel {
    const handlers = new ActorCollisionHandlers();
    handlers.addCollisionAction("snake", "food", new SnakeFoodCollisionHandler());
    handlers.addCollisionAction("snake", "snake", new SnakeSnakeCollisionHandler());
    return new WorldModel(handlers);
}

it("should call makeTurn on player1 if set", () => {
    const world = createWorldModel();
    const player1 = { makeTurn: jest.fn() } as unknown as Player;

    const controller = new GameController(world);
    controller.setPlayer1(player1);

    (controller as any).lastTime = 0;
    (controller as any).view = { display: jest.fn() } as IWorldView;
    (controller as any).run();

    expect(player1.makeTurn).toHaveBeenCalled();
});

it("should call makeTurn on player2 if set", () => {
    const world = createWorldModel();
    const player2 = { makeTurn: jest.fn() } as unknown as Player;

    const controller = new GameController(world);
    controller.setPlayer2(player2);

    (controller as any).lastTime = 0;
    (controller as any).view = { display: jest.fn() } as IWorldView;
    (controller as any).run();

    expect(player2.makeTurn).toHaveBeenCalled();
});

it("should call display on view when set", () => {
    const world = createWorldModel();
    const mockView = { display: jest.fn() } as IWorldView;

    const controller = new GameController(world);
    controller.setView(mockView);

    (controller as any).lastTime = 0;
    controller.run();

    expect(mockView.display).toHaveBeenCalled();
});
