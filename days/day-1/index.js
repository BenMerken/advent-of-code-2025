import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import { parseInput } from "../../utils/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "input.txt");
const input = parseInput(inputPath);

let reading = 50;
let timesZeroHit = 0;

input.forEach((line) => {
  const [direction, value] = [line[0], parseInt(line.slice(1))];

  if (direction === "L") {
    reading -= value;
  } else {
    reading += value;
  }
  if (Math.abs(reading % 100) === 0) timesZeroHit++;

  console.log(`Current reading: ${reading}`);
});

console.log("Day 1 solution:", timesZeroHit);
