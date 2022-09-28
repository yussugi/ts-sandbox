/**
 * ユニオン型
 */
type Animal = {
  species: string;
};

type HumanU = {
  name: string;
};

/**
 * 基本形
 * type UnionUser =
 *   | Animal
 *   | HumanU
 * といった記載も可能(ここではPrettierで整形される)
 */
type UnionUser = Animal | HumanU;

const tama: UnionUser = {
  species: "Felis",
};
const yamadaU: UnionUser = {
  name: "yamadaU",
};

/**
 * 伝播するユニオン型
 * 同名のプロパティに異なる型を与えた場合
 * e.g. AnimalU2.age: string / HumanU2.age: number
 * => age: string | number
 * 同じ型を与えた場合は number | number ではなくnumber型
 */
type AnimalU2 = {
  species: string;
  age: string;
};
type HumanU2 = {
  name: string;
  age: number;
};

type UnionUser2 = AnimalU2 | HumanU2;

const tama2: AnimalU2 = {
  species: "Felis",
  age: "歳はとらない",
};
const yamadaU2: HumanU2 = {
  name: "yamadaU2",
  age: 30,
};

function showAge(user: UnionUser2) {
  // ユニオン型の伝播により、ageは`string | number`型となる
  const age = user.age;
  console.log(age);
}

showAge(yamadaU2);

/**
 * 伝播するユニオン型：関数の場合
 */
type MysteryFunc = ((str: string) => string) | ((str: string) => number);

/**
 * 受け取ったstringをstringまたはnumberで返すMysteryFuncを引数に取る関数
 * resultには渡される関数によって異なる型が入る
 * stringを受け取ってstringを返す関数 => string型
 * stringを受け取ってnumberを返す関数 => number型
 *
 * @param func MysteryFunc型(実態は受け取ったstringをstring | number で返す関数)
 */
function useMysteryFunc(func: MysteryFunc) {
  const result = func("yamada-union-func");
  console.log(result);
}

// stringを受け取ってstringを返す関数
function stringToString(name: string): MysteryFunc {
  return (name) => name;
}
// stringを受け取ってnumberを返す関数
function stringToNumber(name: string): MysteryFunc {
  return (name) => 123;
}

// それぞれ異なる関数を渡す
useMysteryFunc(stringToString("yamada")); // yamada-union-func
useMysteryFunc(stringToNumber("tanaka")); // 123
