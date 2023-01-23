import axios from "axios";

// memo Map
const memo: Map<number, number> = new Map<number, number>();

// rule set
async function executeRule(seed: string, n: number): Promise<number> {
  if (n === 0) return 1;
  if (n === 1) return 2;

  if (n % 2 === 0) {
    // f(n-1) + f(n-2) + f(n-3) + f(n-4)
    // 再帰呼び出し
    const recursiveNumbers: number[] = [1, 2, 3, 4];
    let result = 0;
    for (const recursive of recursiveNumbers) {
      result += await executeRule(seed, n - recursive);
    }
    // console.log(`${n}:${result}`);
    return result;
  }
  return await usingMemo(seed, n);
}

// use memo
async function usingMemo(seed: string, n: number): Promise<number> {
  // キー重複時はmemoから取得
  if (memo.has(n)) {
    if (memo.get(n) != null) return memo.get(n) as number;
  }
  // キーがない場合はAPI call後にmemoに追加
  const result = await callApi(seed, n);
  memo.set(n, result);
  return result;
}

// main
async function main() {
  // code to run
  let seed = "gegdafgsa";
  let n = 14;
  const result = await executeRule(seed, n);
  console.log(result);
}

// API Call
const callApi = async (seed: string, n: number): Promise<number> => {
  const url = "http://challenge-server.code-check.io/api/recursive/ask";
  const response = await axios.get(url, {
    params: {
      seed: seed,
      n: n,
    },
  });
  return response.data.result;
};

main();

// error object
type errorObj = {
  errCode: string;
  message: string;
};

// const validate = (argv: string[]): errorObj | undefined => {
//   // 引数が一つもない場合
//   if (argv.length === 0) {
//     return { errCode: "1", message: "引数が一つも指定されていません." };
//   }

//   // 引数が一つしかない場合
//   if (argv.length < 2) {
//     return { errCode: "1", message: "引数が一つしか指定されていません." };
//   }

//   // 第二引数の型が正しくない場合
//   if (typeof parseInt(argv[1]) !== "number") {
//     return { errCode: "1", message: "第二引数の型が正しく指定されていません." };
//   }
// };
