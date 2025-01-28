 import Snake from "./Snake";
 import Worldmodel from "./Worldmodel";


it("updates the y position correctly after being turned and moved given that it started facing the right",function(){
let snake1 = new Snake(0,1);
let myWorld = new Worldmodel(snake1);
const numSquares4 = Math.floor(Math.random() * 10);
myWorld.update(numSquares4);
expect(snake1.position.x).toBe(numSquares4)
snake1.turnRight();
myWorld.update(numSquares4);
expect(snake1.position.x).toBe(0)
});






 export {};
