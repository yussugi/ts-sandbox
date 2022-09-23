/**
 * 分割代入
 */

// オブジェクトの場合
const dsObj = {
  dsfoo: "hello",
  dsbar: "world",
};
// 一般的な記法
const { dsfoo, dsbar } = dsObj;

// ネストした場合
const nested = {
  dsnum: 123,
  nestObj: {
    nestfoo: "nest-hello",
    nestbar: "nest-world",
  },
  nestedArr: ["nest1", "nest2", "nest3"],
};
// ネストから取得
const {
  dsnum,
  nestObj: { nestfoo },
} = nested;
console.log(dsnum, nestfoo); // 123 nest-hello

// 配列の場合
const dsArr: number[] = [1, 2, 3, 4, 5];
const [first, second, third] = dsArr;
console.log(first, second, third); // 1 2 3
// 配列要素をスキップする場合は空白を使用
const [, skipSecond, , skipFour, ,] = dsArr;
console.log(skipSecond, skipFour); // 2 4

// オブジェクト内のネストされた配列からの取得
// { 配列プロパティ : [変数]}
const {
  nestedArr: [nestArrFoo, nestArrBar],
} = nested;
console.log(nestArrFoo, nestArrBar); // nest1 nest2

// 分割代入の初期値
// オプショナルプロパティの存在するオブジェクトにて利用
type daObj = {
  dafoo?: number;
};
const daObj1: daObj = {};
const daObj2: daObj = { dafoo: -1234 };

// 値が設定されていないオブジェクトのプロパティにデフォルト値設定
const { dafoo = 500 } = daObj1;
// 値が設定されているオブジェクトのプロパティにデフォルト値設定
const { dafoo: dabar = 500 } = daObj2;
// 値が設定されている場合はそちらを優先、なければ初期値を適用
// 正確には「undefinedの場合にデフォルト値が適用される」
// nullに対しては何も行わず、三項演算子との挙動は異なる
console.log(dafoo, dabar); // 500 -1234

// restパターン
// 分割代入後の残りのプロパティを持つオブジェクトを生成
const restPattern = {
  restfoo: "hello",
  restbar: 123,
  restbaz: false,
};
const { restfoo, ...restObj } = restPattern;
console.log(restfoo, restObj); // hello { restbar: 123, restbaz: false }

// restパターン:配列
const restArr = [1, 2, 3, 4, 5];
const [rest_first, rest_second, ...rest] = restArr;
console.log(rest_first, rest_second, rest); // 1 2 [3, 4, 5]
