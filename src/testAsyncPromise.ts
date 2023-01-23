import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();

const readFooText = () => {
  readFile("foo.txt", "utf8", (err, result) => {
    const endTime = performance.now();
    console.log(`${endTime - startTime}ミリ秒かかりました`);
    return result;
  });
};

export async function getText(): Promise<any> {
  const result = await readFile("foo.txt", "utf8", (err, result) => {
    if (err == null) {
      console.log("エラーなしの場合");
      console.log(`callback内でのresult : ${result}`);
    } else {
      throw err;
    }
  });
  return result;
}

// console.log("getText call 前");
// const result = await getText();
// console.log(result);

// jsonwebtoken.verify(
//   accessToken,
//   pem,
//   { algorithms: ['RS256'], issuer: this.configService.get('IDCS_ISS') },
//   (err, validatedToken) => {
//     if (err == null) {
//       // error が発生しなければトークンを返す
//       return validatedToken;
//     }
//     // https://github.com/auth0/node-jsonwebtoken#jsonwebtokenerror
//     // 上記エラー項目参照. messageに詳細が入る
//     // e.g.'invalid signature'
//     this.logger.error(`${err.name}:${err.message}`);
//     throw new LoginAuthenticationError();
//   },
// );
