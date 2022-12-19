import { arrayNumbers, arrayCars } from "./data.js";

export const compareNumbers = () => arrayNumbers.sort((a, b) => a - b);
// console.log(compareNumbers);
export const compareCars = () => arrayCars.sort();
// console.log(compareCars);