 import Snake from "./Snake";

/**
const moveSnakes = (times: number, turn: boolean = false) => {
  const greenSnake = new Snake();
  const maroonSnake = new Snake();
  let totalSquares = 0;

  for (let i = 0; i < times; i++) {
    const numSquares1 = Math.floor(Math.random() * 100);
    const numSquares2 = Math.floor(Math.random() * 100);
    greenSnake.move(numSquares1);
    maroonSnake.move(numSquares2);
    greenSnake.move(5);
    totalSquares += numSquares2;
    if (turn) {
      const numSquares3 = Math.floor(Math.random() * 100);
      const numSquares4 = Math.floor(Math.random() * 10);
      greenSnake.turnRight();
      maroonSnake.turnLeft();
      maroonSnake.move(numSquares3);
      totalSquares -= numSquares3;
      greenSnake.move(numSquares3);
      maroonSnake.turnRight();
      maroonSnake.turnLeft();
      maroonSnake.turnRight();
      maroonSnake.move(numSquares4);
      totalSquares += numSquares4;
    }
  }

  return { actual: maroonSnake.position, expected: totalSquares };
};

describe("Snake Tests", function () {
  const tests = [0, 3, 10, 4].map((num, index) => moveSnakes(num, index > 2));

  const testDescriptions = [
    "starts with the correct position of 0",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
    "has the correct position after 4+ random moves with turns",
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>
      expect(tests[index].expected).toBe(tests[index].actual),
    );
  });
});


describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});
*/

it("updates the x-position correctly after moving", function() {
  let snake1 = new Snake(0,1);
  const numSquares5 = Math.floor(Math.random() * 10);
  snake1.move(numSquares5)
  expect(snake1.position.x).toBe(numSquares5)
});

it("updates the y-position correctly after moving",function() {
  //Facing up so moves down
  let snake1 = new Snake(0,2)
  const numSquares4 = Math.floor(Math.random()*10+1);
  snake1.move(numSquares4)
  expect(snake1.position.y).toBe(numSquares4*-1)
});


export {};
