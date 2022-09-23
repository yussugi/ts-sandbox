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
