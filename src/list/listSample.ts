/**
 * 配列
 */

// 配列型
const arr1: string[] = ["hoge", "fuga"];

// Array<T>による型引数の定義
const arr2: Array<{ name: string }> = [
  { name: "山田" },
  { name: "佐藤" },
  { name: "田中" },
];

// for-of文によるループ処理
// ループごとに変数が作り直されるためconstで問題ない
// 配列の要素が毎回代入されるため配列の中身は変わらない
const arr3: number[] = [10, 100, 1000];
for (const elm of arr3) {
  console.log(elm);
}
