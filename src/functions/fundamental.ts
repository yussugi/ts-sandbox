/**
 * 関数(オブジェクトの一種)
 */

// 一般的な記述
type Human = {
  height: number;
  weight: number;
};
// 引数を分割代入で
const calcBMI = function ({ height, weight }: Human): number {
  // 引数を型にして変数を分割代入で定義するのもアリ(propsとか)
  return weight / height ** 2;
};
const yamada: Human = { height: 1.8, weight: 80 };
console.log(calcBMI(yamada));

type ReturnObj = {
  bmi: number;
};
// 省略形かつオブジェクトリテラルを利用したい場合
// => のあとにオブジェクトと明示するために()を付与して({})とする
// こうすることで()内の{}はオブジェクトを示す
const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({
  // ここはオブジェクトのプロパティと値
  bmi: weight / height ** 2,
});
console.log(calcBMIObject(yamada));

// メソッド記法
const methodObj = {
  // プロパティ名(メソッド)の名前指定
  double(num: number): number {
    return num * 2;
  },
  // アロー関数を使用した場合
  double2: (num2: number): number => num2 * 2,
};
console.log(methodObj.double(100)); // 200
console.log(methodObj.double2(200)); // 400

// 可変長引数の宣言(...引数: rest引数構文)
// rest引数は引数の末尾でのみ有効
const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
};
console.log(sum(1, 10, 100)); // 1110
console.log(sum(123, 456)); // 123456
// console.log(sum()); // 引数が合わないためエラー

// スプレッド構文(...配列名)
const sum2 = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};
const nums = [1, 2, 3, 4, 5];
// 関数呼び出し時、引数に(...配列名)と与える
// 可変長引数に渡す必要がある(tupleを使えば出来るが、あまり使われない)
console.log(sum2(...nums));

// オプショナル引数の宣言(初期値の指定なしの場合、引数名?:型 で定義)
const toLowerOrUpper = (str: string, upper?: boolean) => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
console.log(toLowerOrUpper("Hello")); // hello
console.log(toLowerOrUpper("Hello", undefined)); // hello 第二引数はboolean | undefined のUNION型
console.log(toLowerOrUpper("Hello", false)); // hello
console.log(toLowerOrUpper("Hello", true)); // HELLO

// オプショナル引数の宣言(初期値の指定ありの場合、引数名:型=式 で定義)
const toLowerOrUpperSecondary = (str: string, upper: boolean = false) => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
console.log(toLowerOrUpperSecondary("Hello")); // hello
console.log(toLowerOrUpperSecondary("Hello", undefined)); // hello 第二引数にundefinedを渡すとfalse判定
console.log(toLowerOrUpperSecondary("Hello", false)); // hello
console.log(toLowerOrUpperSecondary("Hello", true)); // HELLO

// コールバック関数の利用
// e.g. 配列
type CallBackUser = {
  name: string;
  age: number;
};
const callusers: CallBackUser[] = [
  { name: "yamada", age: 20 },
  { name: "sato", age: 15 },
];
// mapを利用して新しい配列を作成する
// mapの引数にコールバック関数を与える
// callusers:CallBackUser型から新しくu:CallBackUser型を生成し、name要素をreturnしている
const names = callusers.map((u: CallBackUser): string => u.name);
console.log(names); // ["yamada", "sato"]

// === 配列のその他メソッド === //
// filter:式の結果がtrueの要素だけreturnする
const adultUsers = callusers.filter((u: CallBackUser): boolean => u.age >= 20);
console.log(adultUsers); // [{name:"yamada", age:20}]
// every:配列のすべての要素に対して式の結果を評価し、true/falseを返却
const allAdult = callusers.every((u: CallBackUser): boolean => u.age >= 20);
console.log(allAdult); // false
// some:配列のすべての要素に対して式の結果を評価し、一つでもtrueならばtrue
const seniorExists = callusers.some((u: CallBackUser): boolean => u.age >= 60);
console.log(seniorExists); // false
// find:配列の要素から式の結果に一致する要素を返却
const sato = callusers.find((u: CallBackUser): boolean =>
  u.name.startsWith("sato")
);
console.log(sato); // {name:"sato", age:15}
