/**
 * typeと関数を利用した場合
 */
type UserTryType = {
  name: string;
  age: number;
};

function createUserTryType(name: string, age: number) {
  if (name === "") {
    throw new Error("名前は空にできません！");
  }
  return {
    name,
    age,
  };
}

function getMessageTryType(user: UserTryType, message: string): string {
  return `${user.name} (${user.age}) 「${message}」`;
}

const yamada_try_class = createUserTryType("yamada-try-class", 25);
console.log(getMessageTryType(yamada_try_class, "こんにちは"));

/**
 * Classとメソッドを利用した場合
 */
class UserTryClass {
  // nameもプライベートにすればカプセル化になる
  readonly name: string;
  readonly #age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません");
    }
    this.name = name;
    this.#age = age;
  }

  public getMessageTryClass(message: string): string {
    return `${this.name} (${this.#age}) 「${message}」`;
  }
}
const tanaka_try_class = new UserTryClass("tanaka-try-class", 30);
console.log(tanaka_try_class.getMessageTryClass("こんにちは"));

/**
 * クラスを関数に置き換える
 */
function createUserClassToFn(name: string, age: number) {
  return (message: string) => {
    // クロージャの利用
    return `${name} (${age}) 「${message}」`;
  };
}

const getMessageClassToFn = createUserClassToFn("sato-try-class", 40);
console.log(getMessageClassToFn("こんにちは"));
