import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import { checkControl } from "./settings.js";

let lastRenderTime = 0;
let gameOver = false;
let paused = false;
const gameBoard = document.getElementById("game-board");

// Pause Game
function checkPaused() {
  function togglePause() {
    if (!paused) {
      paused = true;
      alert("Press OK.");
      alert("Game will pause until you press Spacebar again.");
    } else if (paused) {
      paused = false;
      alert("Game will resume after you press OK.");
    }
  }

  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) togglePause();
  };
}

// // Game loop
function main(currentTime) {
  checkControl();
  checkPaused();

  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      window.location = "/main.html";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secLastRender = (currentTime - lastRenderTime) / 1000;
  if (secLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  if (!paused) {
    draw();
    update();
  }
}

// Starting the loop
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
