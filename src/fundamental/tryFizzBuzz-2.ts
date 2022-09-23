/**
 * case1:normal
 */
console.log("===case1 start===");
for (let i: number = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // 3の倍数かつ5の倍数の場合、"FizzBuzz"と出力
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // 3の倍数の場合、"Fizz"と出力
    console.log("Fizz");
  } else if (i % 5 === 0) {
    // 5の倍数の場合、"Buzz"と出力
    console.log("Buzz");
  } else {
    // 3の倍数でなく、5の倍数でもない場合、整数をそのまま出力
    console.log(i);
  }
}
console.log("===case1 end===");

/**
 * case2:配列利用
 */
console.log("===case2 start===");
const arr: (number | string)[] = [];
for (let i: number = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // 3の倍数かつ5の倍数の場合、"FizzBuzz"と出力
    arr.push("FizzBuzz");
  } else if (i % 3 === 0) {
    // 3の倍数の場合、"Fizz"と出力
    arr.push("Fizz");
  } else if (i % 5 === 0) {
    // 5の倍数の場合、"Buzz"と出力
    arr.push("Buzz");
  } else {
    // 3の倍数でなく、5の倍数でもない場合、整数をそのまま出力
    arr.push(i);
  }
}

arr.map((i) => {
  console.log(i);
});

console.log("===case2 end===");

/**
 * case3:一直線
 */
console.log("===case3 start===");
let strUnion: string = "";
for (let i: number = 0; i <= 100; i++) {
  if (typeof arr[i] === "string") {
    strUnion += arr[i] + " ";
  } else if (typeof arr[i] === "number") {
    strUnion += String(arr[i]) + " ";
  }
}
console.log(strUnion);
console.log("===case3 end===");
