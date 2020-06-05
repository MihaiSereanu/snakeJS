import { howLong } from "./food.js";
import { changeDifficulty } from "./snake.js";

export function checkControl() {
  let normal = document.querySelector(".normal");
  normal.onclick = () => changeDifficulty(normal.value);

  let hard = document.querySelector(".hard");
  hard.onclick = () => changeDifficulty(hard.value);

  let extreme = document.querySelector(".extreme");
  extreme.onclick = () => changeDifficulty(extreme.value);

  let slider = document.querySelector(".slider");
  let longDisplay = document.getElementById("display");
  slider.oninput = () => (
    howLong(slider.value),
    (longDisplay.innerHTML = `Increase by: ${slider.value}`)
  );
}

// export function checkPause(paused) {
//   function togglePause() {
//     if (!paused) {
//       paused = true;
//     } else if (paused) {
//       paused = false;
//     }
//   }

//   document.body.onkeyup = function (e) {
//     if (e.keyCode === 32) togglePause();
//   };
//   console.log(paused);
//   return paused;
// }
