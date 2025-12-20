import fs from "node:fs";

export function parseInput(inputPath) {
  return fs
    .readFileSync(inputPath, "utf-8")
    .split("\r\n")
    .filter((line) => line.length > 0);
}
