/**
 * FizzBuzzの判定を行う関数
 *
 * @param index 配列の要素
 * @returns 判定結果(Fizz | Buzz | FizzBuzz | 数値)
 */
const getFizzBuzzString = (index: number): string | number => {
  if (index % 3 === 0 && index % 5 === 0) {
    return "FizzBuzz";
  } else if (index % 3 === 0) {
    return "Fizz";
  } else if (index % 5 === 0) {
    return "Buzz";
  } else {
    return index;
  }
};

/**
 * 第一引数から始まり、第二引数までを格納した配列を作成する関数
 * 第一引数から第二引数までは1ずつ値が増加する
 *
 * @param start 作成する配列の最初に位置する数値
 * @param end 作成する配列の最後に位置する数値
 * @returns [第一引数, ..., 第二引数] の配列
 */
const sequence = (start: number, end: number): number[] => {
  const numArr: number[] = [];
  for (let i = start; i <= end; i++) {
    numArr.push(i);
  }
  return numArr;
};

// 結果出力その1
console.log("通常ループ");
for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

// 結果出力その2
console.log("for-of ループ");
for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
