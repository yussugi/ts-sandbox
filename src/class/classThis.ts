/**
 * アロー関数におけるthis
 */
class UserClassUseThis {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public filterOlder(users: readonly UserClassUseThis[]): UserClassUseThis[] {
    // filter呼び出し時にアロー関数を使用
    // このthisはfilterOlderメソッド内のthisと同じ(アロー関数内のthisは外側の関数のthisを受け継ぐ)
    // メソッド内のthisは呼び出し元のインスタンスに応じる
    return users.filter((u) => u.#age > this.#age);
  }
}

const this_yamada = new UserClassUseThis("yamada", 25);
const this_john = new UserClassUseThis("john", 15);
const this_bob = new UserClassUseThis("bob", 40);

// この呼び出しでfilterOlderメソッド内のthisはthis_yamadaになる
// 与えられたインスタンス配列よりもageが大きいインスタンスを新しい配列にして返す
// u.#age(uは渡されたインスタンスたち) > this.#age(thisはthis_yamada)
const older = this_yamada.filterOlder([this_john, this_bob]);
console.log(older); // [ UserClassUseThis {name: bob} ]
