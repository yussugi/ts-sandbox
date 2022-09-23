import { createInterface } from "readline";

/**
 * プロパティ名省略
 */
const name: string = "hoge";
const user = {
  name,
  age: 20,
};

/**
 * オブジェクト[式]での利用
 * e.g. obj.[num > 0 ? : "good" : "bad"]
 */
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const message = {
  good: "0以上の数値が入力されました",
  bad: "負の数値を入力しないでください",
};

rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  // オブジェクト[式]という形式での利用
  console.log(message[num >= 0 ? "good" : "bad"]);
  rl.close();
});
