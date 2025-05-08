import Food from "./Food";

it("marks food as inactive after being eaten", () => {
    const food = new Food(3, 4);
    food.eat();
    expect(food.isActive).toBe(false);
});

it("returns correct position", () => {
    const food = new Food(1, 2);
    expect(food.position.x).toBe(1);
    expect(food.position.y).toBe(2);
});

it("has type 'food'", () => {
    const food = new Food(0, 0);
    expect(food.type).toBe("food");
});
