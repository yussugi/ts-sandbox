/**
 * 継承
 */

/**
 * 親クラスの実装
 */
class UserClassParent {
  name: string;
  #age: number;
  // protectedにすれば子クラスで再利用可能だが使い方に注意

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

/**
 * 子クラスの実装
 */
class PremiumUserClass extends UserClassParent {
  rank: number;
  // 子クラスのコンストラクタ
  constructor(name: string, age: number, rank: number) {
    // super呼び出し(親クラスのコンストラクタ呼び出し)を実行すること
    super(name, age);
    this.rank = rank;
  }
  // isAdultのオーバーライド
  // 親クラスの() => boolean型と同じであること
  public override isAdult(): boolean {
    return true;
  }
}

// 親クラスでは引数2つ
const normalSato = new UserClassParent("sato", 15);
// 子クラスでは引数3つ
const premiumSato = new PremiumUserClass("sato", 15, 3);

console.log(normalSato.isAdult()); // false
console.log(premiumSato.isAdult()); // true
console.log(premiumSato.rank); // 3

/**
 * implementsの利用
 */
type HasName = {
  name: string;
};

// HasNameの部分型であることを明言するためのimplements
class UserClassImpl implements HasName {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}
