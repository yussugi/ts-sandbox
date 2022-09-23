/**
 * オブジェクトでプロパティに型定義を行い初期値を入れる場合
 */
const obj1: {
  name: string;
  age: number;
} = {
  name: "hoge",
  age: 20,
};

/**
 * 型名の宣言:type => 型の別名を付与する
 * 型の実体はあくまでも{ foo:number }といったもの
 */
type HumanObj = {
  foo: string;
  bar: number;
};

const obj2: HumanObj = {
  foo: "私は人間です",
  bar: 20,
};

const { foo, bar } = obj2;
console.log(foo);
console.log(bar);

/**
 * オプショナルプロパティ:?
 * 読み取り専用プロパティ:readonly
 */
type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
  readonly hoge: string;
};

const obj3: MyObj = {
  foo: false,
  bar: true,
  // なくても良い
  // baz: 1000,
  hoge: "名前変更禁止！",
};
// 値の変更不可
// obj3.hoge = "fuga";
