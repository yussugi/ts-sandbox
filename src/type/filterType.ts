type SignType = "plus" | "minus";

function signNumberFilter(type: SignType) {
  return type === "plus" ? 1 : -1;
}

/**
 * 型の絞り込み(コントロールフロー解析)について
 *
 * @param num 任意の整数
 * @param type +1 or -1
 * @returns num * typeの結果 / typeが"none"型である場合は0を返却
 */
function numberWithSign(num: number, type: SignType | "none") {
  // 型の絞り込み実施
  if (type === "none") {
    // typeは"none"型
    return 0;
  } else {
    // 型の絞り込みを行った結果、signNumberFilter(SignType型)を呼び出せる
    // TypeScriptコンパイラが"none"型である可能性が排除されたことを理解して実行可能になる
    // * VSCodeでtypeにマウスオーバーさせれば"SignType型"と表示される
    return num * signNumberFilter(type);
  }
}

console.log(numberWithSign(5, "plus")); // 5
console.log(numberWithSign(5, "minus")); // -5
console.log(numberWithSign(5, "none")); // 0

/**
 * 三項演算子を利用することも可能
 */
function numberWithSign2(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumberFilter(type);
}
console.log(numberWithSign2(4, "plus")); // 4
console.log(numberWithSign2(4, "minus")); // -4
console.log(numberWithSign2(4, "none")); // 0

/**
 * typeof演算子の利用
 */
function formatNumberOrString(value: number | string) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}
console.log(formatNumberOrString(3.14)); // 3.140
console.log(formatNumberOrString("yamada")); // "yamada"

/**
 * 代数的データ型(algebraic data type)をユニオン型で再現するケース
 * 型にtagプロパティを与える
 * 別名：タグ付きユニオン、直和型
 */
type AnimalAlgebraic = {
  tag: "animal";
  species: string;
};

type HumanAlgebraic = {
  tag: "human";
  name: string;
};

type RobotAlgebraic = {
  tag: "robot";
  name: string;
};

type UserAlgebraic = AnimalAlgebraic | HumanAlgebraic | RobotAlgebraic;

const tamaAlg: UserAlgebraic = {
  tag: "animal",
  species: "felis",
};

const yamadaAlg: UserAlgebraic = {
  tag: "human",
  name: "yamada",
};

const doraAlg: RobotAlgebraic = {
  tag: "robot",
  name: "doraemon",
};

/**
 * ランタイムに見える形としてuser.tagを利用する
 * これにより任意のオブジェクト型で型の絞り込みが可能(擬似的な代数的データ型)
 */
function getUserNameAlg(user: UserAlgebraic): string {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "名無し";
  }
}
console.log(getUserNameAlg(tamaAlg)); // 名無し
console.log(getUserNameAlg(yamadaAlg)); // yamada
console.log(getUserNameAlg(doraAlg)); // 名無し

/**
 * 型が増えることを考慮した場合、switchを利用した方が良い
 * (今回、Robotが追加されたとすると、if-elseでは名無しになってしまう)
 * switchではdefaultがなくても、返り値のstring型をすべて満たすと判断される(undefiendがない)
 * => さらにdefaultを入れなければコンパイルエラーを起こして気づかせてくれる
 */
function getUserNameAlgSwitch(user: UserAlgebraic): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
    case "robot":
      return `ぼく${user.name}`;
  }
}
console.log(getUserNameAlgSwitch(tamaAlg)); // 名無し
console.log(getUserNameAlgSwitch(yamadaAlg)); // yamada
console.log(getUserNameAlgSwitch(doraAlg)); // ぼくdoraemon
