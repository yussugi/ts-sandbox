import { getText } from "./testAsyncPromise.js";

console.log("call async function");
const result = await getText();
console.log(`call result : ${result}`);
