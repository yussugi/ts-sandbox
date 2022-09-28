/**
 * try-catch-finally
 */
try {
  console.log("1.エラーを発生させます"); // 一番目
  throwFunction();
  console.log("ここは呼ばれない");
} catch (err) {
  console.log("2.エラーをキャッチしました"); // 二番目
  console.log(err); // 三番目「Error: エラーが発生しました ~エラー詳細~」
} finally {
  // 大域脱出
  console.log("4.finally句の処理"); // 四番目
}
console.log("5.try-catch-finally後の処理"); // 五番目

function throwFunction() {
  // throwは何でも投げられる
  throw new Error("3.エラーが発生しました");
}

/**
 * try-catchではなく失敗を表す値を返すパターン
 */
function getAverageErroPattern(nums: number[]) {
  if (nums.length === 0) {
    return undefined;
  }
  return sumErrPattern(nums) / nums.length;
}

function sumErrPattern(nums: number[]): number {
  let result: number = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
console.log(getAverageErroPattern([1, 2, 3, 4, 5])); // 3
console.log(getAverageErroPattern([])); // undefiend
