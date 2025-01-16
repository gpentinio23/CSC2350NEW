import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
 import Car from "./Car";
 import Duck from "./Duck";
 import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const redCar = new Car();
    const blueCar = new Car();
    redCar.drive();
    blueCar.drive();

    const duckOne = new Duck();
    const duckTwo = new Duck();
    duckOne.quack();
    duckTwo.quack();


    const snakeOne = new Snake();
    snakeOne.move(1);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
