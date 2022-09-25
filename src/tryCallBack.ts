/**
 * コールバック関数の利用
 */

/**
 * 配列に対してコールバック関数を呼び出し処理を行う関数
 *
 * @param array 任意の配列
 * @param cb 任意配列に対する処理
 * @returns callbackで行われる処理の結果
 */
function map<T, U>(array: T[], cb: (value: T) => U): U[] {
  const result: U[] = [];
  for (const arr of array) {
    result.push(cb(arr));
  }
  return result;
}

const testData = [1, 1, 2, 3, 5, 8, 13];
const result = map(testData, (x) => x * 10);
// [10, 10, 20, 30, 50, 80, 130]と表示される
console.log(result);
