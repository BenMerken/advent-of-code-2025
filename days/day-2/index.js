import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import { parseInput } from "../../utils/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "input.txt");
const ranges = parseInput(inputPath)[0].split(",");

const part1InvalidRegEx = new RegExp(/^(\d+)\1$/);
const part2InvalidRegEx = new RegExp(/^(\d+)\1\1*$/);
let part1InvalidIdsSum = 0;
let part2InvalidIdsSum = 0;

ranges.forEach((range) => {
  const [start, end] = range.split("-").map((num) => parseInt(num, 10));

  for (let i = start; i <= end; i++) {
    if (part1InvalidRegEx.test(i.toString())) part1InvalidIdsSum += i;
    if (part2InvalidRegEx.test(i.toString())) part2InvalidIdsSum += i;
  }
});

console.log("Day 2 part 1 solution:", part1InvalidIdsSum);
console.log("Day 2 part 2 solution:", part2InvalidIdsSum);
