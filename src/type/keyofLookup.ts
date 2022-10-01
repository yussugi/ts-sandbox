/**
 * lookup型
 * T[K] T:オブジェクト / K:文字列リテラル
 */
type HumanLP = {
  type: "human";
  name: string;
  age: number;
};

/**
 * lookup型利用サンプル
 * lookup型を利用することでHumanLP型の変更に追随可能
 * e.g. ageプロパティがnumberから変更されてもこの関数は影響を受けない
 *
 * @param human HumanLP型で定義されたオブジェクト
 * @param age lookup型を利用:HumanLP型のageプロパティの型(number型)
 * @returns 第一引数のオブジェクトに第二引数の年齢を上書きしたオブジェクト
 */
function setAgeLP(human: HumanLP, age: HumanLP["age"]) {
  return {
    ...human,
    age,
  };
}

const yamadaLP: HumanLP = {
  type: "human",
  name: "yamadaLP",
  age: 30,
};

const yamadaLP2 = setAgeLP(yamadaLP, 40);
console.log(yamadaLP2); // { type:"human", name:"yamadaLP", age:40 }

/**
 * keyof型
 * keyof T => Tのプロパティ文字列
 * e.g. T = {name, age} => keyof T = "name" | "age"
 */
const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};

/**
 * keyof typeof を活用した関数
 * "keyof typeof 変数"で、変数の型におけるプロパティ名を文字列で取得・渡すことが可能
 * (今回は引数unitにプロパティ名を渡す)
 *
 * @param value ミリメートル、メートル、キロメートルに変換する値
 * @param unit 変数mmConversionTableの型(typeof mm~)に対するkeyof => "mm" | "m" | "km"
 * @returns 第一引数をミリメートル、メートル、キロメートルに変換したオブジェクト
 */
function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  // unitは"mm" | "m" | "km" 型
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

console.log(convertUnits(5600, "m")); // { "mm": 5600000, "m": 5600, "km": 5.6}

/**
 * keyof型/lookup型とジェネリクス
 * K extends keyof Tにより、Kはkeyof Tの部分型
 * e.g. TがHumanTKの場合、keyof Tは"name" | "age"型となる
 *
 * @param obj 任意のオブジェクト
 * @param key オブジェクトTのkeyofで継承されたobjのプロパティ(string | number | symbol型)
 * @returns lookupにより推論されたプロパティの型を持つ値
 */
function getTK<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type HumanTK = {
  name: string;
  age: number;
};

const yamadaTK = {
  name: "yamadaTK",
  age: 30,
};

const yamadaTKName = getTK(yamadaTK, "name");
const yamadaTKAge = getTK(yamadaTK, "age");
console.log(yamadaTKName); // yamadaTK
console.log(yamadaTKAge); // 30
