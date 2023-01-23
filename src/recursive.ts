// function calculate(n: number): number {
//   if (n === 0) return 0;
//   console.log(`${n}回目の呼び出し`);
//   return n + calculate(n - 1);
// }

// function main() {
//   for (let i = 0; i <= 10; i++) {
//     console.log(`${i}までの和 = ${calculate(i)}`);
//   }
// }

// console.log(main());

// フィボナッチ数列
// function fibo(fiboNum: number): number {
//   // base case
//   if (fiboNum === 0) return 0;
//   if (fiboNum === 1) return 1;
//   // recursive
//   return fibo(fiboNum - 1) + fibo(fiboNum - 2);
// }

// function fiboMain() {
//   for (let i = 0; i <= 10; i++) {
//     console.log(`${i}項目の値:${fibo(i)}`);
//   }
// }

// フィボナッチ数列のメモ化
const memo: Map<number, number> = new Map<number, number>();
function fiboMemo(n: number, memo: Map<number, number>): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  // memoのチェック:計算済みなら答えをリターンする
  if (memo.has(n)) {
    if (memo.get(n) == null) {
      throw console.error("keyに該当する値が存在しないため処理を終了します.");
    }
    // memoのkey:nに対する値の存在チェックを実施しているためasを利用する
    return memo.get(n) as number;
  }
  // 未計算の場合はmemoにセットする
  const result = fiboMemo(n - 1, memo) + fiboMemo(n - 2, memo);
  memo.set(n, result);
  return memo.get(n) ?? 0;
}

function fiboMain() {
  const startTime = performance.now();
  for (let n = 0; n <= 50; n++) {
    console.log(`${n} 項目の値: ${fiboMemo(n, memo)}`);
  }
  const endTime = performance.now();
  console.log(endTime - startTime);
}

fiboMain();
