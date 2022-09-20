"use:strict";

//MAP
//REDUCE
//STRING TO ARRAY
//SPLIT

const timeNodes = [...document.querySelectorAll("[data-time]")];
console.log(timeNodes);
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, seconds] = timeCode.split(":").map(parseFloat);
    return mins * 60 + seconds;
  })
  .reduce((total, next) => total + next);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = seconds % 3600;
console.log(secondsLeft);
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(minutes);
console.log(secondsLeft);

console.log(
  `Total Duration Of All The Videos = Hour(${hours}) / Minute(${minutes}) / Second(${secondsLeft})`
);
