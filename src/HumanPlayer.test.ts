import HumanPlayer from './HumanPlayer';
import SnakeController from './SnakeController';
import IInputHandler from './IInputHandler';

// Create a basic mock SnakeController
const mockSnakeController: SnakeController = {
    turnSnakeLeft: jest.fn(),
    turnSnakeRight: jest.fn(),
} as unknown as SnakeController;

describe("HumanPlayer", () => {
    it("should turn left if left move was made", () => {
        const mockHandler: IInputHandler = {
            madeLeftMove: () => true,
            madeRightMove: () => false,
            resetLeftMove: jest.fn(),
            resetRightMove: jest.fn(),
        };

        const player = new HumanPlayer(mockSnakeController, mockHandler);
        player.makeTurn();

        expect(mockSnakeController.turnSnakeLeft).toHaveBeenCalled();
        expect(mockHandler.resetLeftMove).toHaveBeenCalled();
    });

    it("should turn right if right move was made", () => {
        const mockHandler: IInputHandler = {
            madeLeftMove: () => false,
            madeRightMove: () => true,
            resetLeftMove: jest.fn(),
            resetRightMove: jest.fn(),
        };

        const player = new HumanPlayer(mockSnakeController, mockHandler);
        player.makeTurn();

        expect(mockSnakeController.turnSnakeRight).toHaveBeenCalled();
        expect(mockHandler.resetRightMove).toHaveBeenCalled();
    });

    it("should do nothing if no input was made", () => {
        const mockHandler: IInputHandler = {
            madeLeftMove: () => false,
            madeRightMove: () => false,
            resetLeftMove: jest.fn(),
            resetRightMove: jest.fn(),
        };

        const player = new HumanPlayer(mockSnakeController, mockHandler);
        player.makeTurn();

        expect(mockSnakeController.turnSnakeLeft).not.toHaveBeenCalled();
        expect(mockSnakeController.turnSnakeRight).not.toHaveBeenCalled();
        expect(mockHandler.resetLeftMove).not.toHaveBeenCalled();
        expect(mockHandler.resetRightMove).not.toHaveBeenCalled();
    });
});
