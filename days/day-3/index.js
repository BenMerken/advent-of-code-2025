import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import { parseInput } from "../../utils/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "input.txt");
const banks = parseInput(inputPath);

let sum = 0;

banks.forEach((bank) => {
  const [leftDigit, leftDigitIndex] = getHighestDigitAndIndex(
    bank.substring(0, bank.length - 1)
  );
  const [rightDigit] = getHighestDigitAndIndex(
    bank.substring(leftDigitIndex + 1)
  );

  sum += parseInt(`${leftDigit}${rightDigit}`);
});

console.log(`Day 3 part 1 solution: ${sum}`);

function getHighestDigitAndIndex(bank) {
  let digit = 0;
  let highestDigitIndex = 0;

  for (let i = 0; i < bank.length; i++) {
    const checkingDigit = parseInt(bank[i], 10);

    if (digit < checkingDigit) {
      digit = checkingDigit;
      highestDigitIndex = i;
    }
  }

  return [digit, highestDigitIndex];
}
