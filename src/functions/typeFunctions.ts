/**
 * 関数の型
 */
// 基本形：(引数リスト) => 返り値の型
const xRepeat = (num: number): string => "x".repeat(num);

// typeによる型別名の定義も可能
type F = (repeatNum: number) => string;
// 型注釈も可能
const xRepeatF: F = (num: number): string => "x".repeat(num);

// コールシグネチャ:オブジェクト型の中で利用できる構文
// この場合、オブジェクトは「関数である」という意味が付与される
// プロパティを保有する/関数である という2つの性質を持つ
type SigFunc = {
  isUsed?: boolean;
  (arg: number): void;
};
const double: SigFunc = (arg: number) => {
  console.log(arg * 2);
};
// doubleはSigFunc型なのでisUsedプロパティを持つ
double.isUsed = true;
console.log(double.isUsed); // true
// doubleはSigFunc型でありnumberを受け取る関数として呼び出せる
double(1000); // 2000

/**
 * 関数型の部分型
 */

// 引数の数による部分型
// UnaryFuncはBinaryFuncの部分型
type UnaryFunc = (arg: number) => number;
type BinaryFunc = (left: number, right: number) => number;

// 2つの関数を用意
const doublef: UnaryFunc = (arg) => arg * 2;
const add: BinaryFunc = (left, right) => left + right;
// UnaryFuncであるdoublefをBinaryFuncとして扱うことが可能
const binf: BinaryFunc = doublef;
console.log(binf(10, 100)); // 10 * 2 = 20
