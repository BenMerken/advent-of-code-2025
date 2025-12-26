import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import { parseInput } from "../../utils/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "input.txt");
const ranges = parseInput(inputPath)[0].split(",");

const invalidRegEx = new RegExp(/^(\d*)\1$/);
let invalidIdsSum = 0;

ranges.forEach((range) => {
  const [start, end] = range.split("-").map((num) => parseInt(num, 10));

  for (let i = start; i <= end; i++) {
    if (invalidRegEx.test(i.toString())) invalidIdsSum += i;
  }
});

console.log("Day 2 part 1 solution:", invalidIdsSum);
