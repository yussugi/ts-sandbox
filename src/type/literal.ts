/**
 * テンプレートリテラル
 * e.g. `Hello, ${string}!`
 * ここでは${}の中にあるstringは"型名"を指す
 */
function getHelloStr(): `Hello, ${string}!` {
  const random = Math.random();
  if (random < 0.3) {
    return "Hello, world!";
  } else if (random < 0.6) {
    return "Hello, my wolrd!";
  } else if (random < 0.9) {
    // error:以下は戻り値の型と一致しない => 末尾の!がない
    // return "Hello, wolrd.";
    return "Hello, myyyyy world!";
  } else {
    // error:以下は戻り値の型と一致しない => Hellのoがない
    // return "Hell, world!";
    return "Hello, my woooooooooorld!";
  }
}

/**
 * 関数の返り値を型推論するケース
 *
 * @param userName テンプレートリテラル生成に必要な名前:型引数にTを利用
 * @returns 型推論したテンプレートリテラル
 */
function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}
const yamadaKey: "user:yamada" = makeKey("yamada");
console.log(yamadaKey); // user:yamada

/**
 * 引数にテンプレートリテラルを利用し、返り値としてテンプレートリテラルから
 * sliceした値を返却する
 *
 * @param key テンプレートリテラル
 * @returns 引数で与えられたテンプレートリテラルから先頭の5文字をsliceした値
 */
function fromKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}
const tanakaKey = fromKey("user:tanaka");
console.log(tanakaKey); // tanaka

/**
 * リテラル型とユニオン型を組み合わせたケース
 * ※ 実際にはここまで関数の振る舞いが変わるような使い方はしない
 * ※ 処理の内部で判定されるなどのケースで利用
 *
 * @param type "plus"と"minus"のユニオン型
 * @returns 引数に応じた値(1 or -1)
 */
function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}
console.log(signNumber("plus")); // 1
console.log(signNumber("minus")); // -1
