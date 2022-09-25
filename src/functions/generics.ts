/**
 * ジェネリクス
 */

/**
 * 基本形
 * 関数<型引数たち>(引数たち)
 *
 * @param element 任意の型：第二引数の回数、配列にPushされる
 * @param length 配列にPushする回数
 * @returns 第一引数を第二引数の回数Pushした配列
 */
function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

console.log(repeat<string>("a", 5)); // ["a", "a", "a", "a", "a"]
console.log(repeat<number>(123, 3)); // [123, 123, 123]

/**
 * function関数式
 * const hoge = 関数<型引数たち>(引数たち)
 */
const repeat2 = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

/**
 * アロー関数
 * const hoge = <型引数たち>(引数たち):戻りの型 => 式
 * ※型引数リストが実引数リストの前に置かれる※
 *
 * @param element
 * @param length
 * @returns
 */
const repeat3 = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

/**
 * 型引数リストが2つの場合
 * <型引数たち>(引数たち):戻りの型
 */
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
  left,
  right,
];
// pは[string, number型]
const p = pair<string, number>("yamada", 20);

/**
 * extendsやオプショナル型引数も可能
 * 例：型引数をstring型のnameプロパティを持つオブジェクトに固定
 */
const repeat4 = <T extends { genericsName: string }>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

type HasNameAndAge = {
  genericsName: string;
  age: number;
};

console.log(repeat4({ genericsName: "sato", age: 50 }, 3)); // [{genericsName: "sato", age: 50 }, ...(合計3回呼び出し)]
