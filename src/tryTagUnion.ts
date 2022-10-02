/**
 * タグ付きユニオントライアル1
 */
type Option<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

/**
 * オブジェクトのタグで出力を変える関数
 *
 * @param obj タグ付きユニオン型のオブジェクト
 */
function getOptionValue(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

/**
 * ユーザー定義型ガードの利用
 *
 * @param obj タグ付きユニオン型のオブジェクト
 * @returns objのtag: "some" => true (それ以外はfalse)
 */
function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

const five: Option<number> = {
  tag: "some",
  value: 5,
};

const nothing: Option<number> = {
  tag: "none",
};

getOptionValue(five); // 5
getOptionValue(nothing); // 何も表示されない

/**
 * タグ付きユニオントライアル3
 */
function doubelOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}

/**
 * タグ付きユニオン3とコンソール出力を満たすための関数
 *
 * @param obj タグ付きユニオン型のオブジェクト
 * @param cb コールバック関数(Tを引数に取りUを返す)
 * @returns Option<U>型のオブジェクト(引数のOptionと中身が異なる可能性を鑑みてUとする)
 */
function mapOption<T, U>(obj: Option<T>, cb: (value: T) => U): Option<U> {
  // タグ付きユニオンではif文よりswitch文が適している(tagが増えることを考慮)
  // defaultをあえて使わなければtagが増えた際にコンパイルエラーを起こせる
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: cb(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}

const four: Option<number> = {
  tag: "some",
  value: 4,
};
const nothing2: Option<number> = {
  tag: "none",
};

console.log(doubelOption(four)); // { tag: "some", value: 8}
console.log(doubelOption(nothing2)); // { tag: "none"}
