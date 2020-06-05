import { onSnake, elongate } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = randomFoodPosition();
let GET_LONG = 1;

export function howLong(value) {
  GET_LONG = value;
  console.log(GET_LONG);
}

export function update() {
  if (onSnake(food)) {
    elongate(GET_LONG);
    food = randomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");

  gameBoard.appendChild(foodElement);
}

function randomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
