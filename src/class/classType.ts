/**
 * クラスの型
 */

/**
 * instanceof演算子
 * newで生成されたインスタンス(オブジェクト)であるかを判別
 */
class UserInstanceOf {
  name: string = "";
  age: number = 25;
}
// newでインスタンス生成
const yamadaof = new UserInstanceOf();
console.log(yamadaof instanceof UserInstanceOf); // true
console.log({} instanceof UserInstanceOf); // false

// この場合はインスタンス生成ではない
// yamadaNormalはUserInstanceOf型である
const yamadaNormal: UserInstanceOf = {
  name: "yamda normal",
  age: 30,
};
// yamadaNormalはインスタンスではないのでfalse
console.log(yamadaNormal instanceof UserInstanceOf); // false

/**
 * instanceofの利用
 * ビジネスロジックでは多用されない
 * 「クラスである」ことに依存したロジックは望ましくない
 */
type HasAge = {
  age: number;
};

class UserClassUsingInstanceOf {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge) {
  if (customer instanceof UserClassUsingInstanceOf) {
    // 以降、型の絞り込み機能によってcustomerがUserClassUsingInstanceOf型になる
    // よって、nameプロパティへのアクセスが可能
    if (customer.name === "suzuki") {
      return 0;
    }
  }
  return customer.age < 18 ? 1800 : 1000;
}

const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 18 };
const suzuki = new UserClassUsingInstanceOf("suzuki", 18);

console.log(getPrice(customer1)); // 1800
console.log(getPrice(customer2)); // 1000
// UserClassUsingInstanceOf型はHasAge型の部分型なので引数として問題なし
console.log(getPrice(suzuki)); // 0
