import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください:", (line) => {
  // 数値が入力されると以下を実行
  // lineはstring型なので変換
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});
