import CanvasWorldView from "./CanvasWorldView";
import WorldModel from "./Worldmodel";
import Snake from "./Snake";
import Point from "./Point";

// Helper to create a mock 2D context
function createMockContext(): CanvasRenderingContext2D {
  return {
    fillRect: jest.fn(),
    clearRect: jest.fn(),
    getContextAttributes: jest.fn(),
    fillStyle: '',
    canvas: document.createElement('canvas'),
    // Add any other needed mock methods/properties
  } as unknown as CanvasRenderingContext2D;
}

describe("CanvasWorldView", () => {
  let view: CanvasWorldView;
  let mockContext: CanvasRenderingContext2D;

  beforeEach(() => {
    // Mock canvas and context
    const canvas = document.createElement("canvas");
    mockContext = createMockContext();
    jest.spyOn(document, "createElement").mockReturnValue(canvas);
    jest.spyOn(canvas, "getContext").mockReturnValue(mockContext);
    
    view = new CanvasWorldView(20); // scalingFactor = 20
  });

  it("appends a canvas to the document body", () => {
    expect(document.body.contains(view["worldCanvas"])).toBe(true);
  });

  it("sets canvas dimensions based on model and scaling", () => {
    const snake = new Snake(new Point(0, 0), 1, 1); // Updated to use Point
    const model = new WorldModel();
    view.display(model);

    expect(view["worldCanvas"].width).toBe(100);  // 5 * 20
    expect(view["worldCanvas"].height).toBe(120); // 6 * 20
  });

  it("fills the background with black", () => {
    const snake = new Snake(new Point(0, 0), 1, 1); // Updated to use Point
    const model = new WorldModel();
    view.display(model);

    expect(mockContext.fillStyle).toBe("blue"); // Final color is for snake
    expect(mockContext.fillRect).toHaveBeenCalledWith(0, 0, 100, 100); // black background
  });

  it("draws the snake at the correct scaled position", () => {
    const snake = new Snake(new Point(2, 3), 1, 1); // Updated to use Point
    const model = new WorldModel();
    view.display(model);

    // Final call is for snake's square
    expect(mockContext.fillRect).toHaveBeenCalledWith(40, 60, 20, 20);
  });
});
