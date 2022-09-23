import { createInterface } from "readline";
/**
 * 演算子の利用方法Tips
 */

/**
 * !演算子の利用
 */
const num1 = 1000;

if (!Number.isNaN(num1)) {
  console.log(num1, "はNaNではありません");
}

/**
 * !!式の利用(!!式 = 式を真偽値に変換した結果)
 */
const input1 = "123";
const input2 = "";

const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty); // true

const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty); // false

/**
 * ??演算子(ES2022)
 */
const secret = process.env.SECRET ?? "default";
// SECRET=hoge node dist/hoge.js で実行した場合は環境変数の値を表示
console.log(`secretは${secret}です`);

/**
 * &&, || の利用と短絡評価
 */
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください:", (name) => {
  // nameがtrueならnameを、falseならgetDefaultName関数を呼び出し(短絡評価)
  const displayName = name || getDefaultName();
  console.log(`こんにちは、${displayName}さん`);
  rl.close();
});

const getDefaultName = () => "名無し";
