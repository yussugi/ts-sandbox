/**
 * クラス
 */

/**
 * クラス宣言
 */
class UserClass {
  // コンストラクタがない場合は初期値を設定
  name: string = "";
  age: number = 0;
  // オプショナルプロパティも可能
  sex?: string = "none";
  // 読み取り専用の例
  readonly classType = "user";

  // メソッド宣言
  isAdult(): boolean {
    // thisの扱いには注意
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }
}
// インスタンス作成(引数なし)
const satoClass = new UserClass();

/**
 * クラス宣言(コンストラクタあり)
 */
class UserClassHasConstructor {
  // コンストラクタがある場合は初期値省略可能
  name: string;
  readonly age: number;

  // コンストラクタで初期値を定義
  constructor(name: string, age: number) {
    this.name = name;
    // コンストラクタ内でのみreadonlyプロパティにも代入可能
    // コンストラクタはオブジェクト作成中の振る舞いとなるため変更が許容される
    // readonlyはオブジェクト作成後の変更不可を定義
    this.age = age;
  }

  isAdult(): boolean {
    // thisの扱いには注意
    return this.age >= 20;
  }
}
// インスタンス作成(引数あり)
const satoClassHasConstructor = new UserClassHasConstructor("sato", 25);

/**
 * クラス宣言(staticプロパティ・メソッドあり)
 */
class UserClassHasStaticProperty {
  // staticプロパティ
  static adminName: string = "yamada";
  // staticメソッド
  static getAdminUser() {
    return new UserClassHasStaticProperty(
      UserClassHasStaticProperty.adminName,
      25
    );
  }

  // 通常プロパティ
  name: string;
  age: number;

  // コンストラクタ定義
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}
// staticプロパティの直接呼び出し：Class名.staticプロパティ
console.log(UserClassHasStaticProperty.adminName); // "yamada"
// staticメソッドの直接呼び出し：Class名.staticメソッド
// メソッド内でadminNameとageの値を持つnewインスタンス生成
const admin = UserClassHasStaticProperty.getAdminUser();
console.log(admin.age); // 25
console.log(admin.isAdult()); // true

/**
 * アクセスビリティ修飾子(public, private, protected)
 */
class UserClassHasAccessbility {
  name: string;
  // privateは#でも表現することが可能
  private age: number;
  #sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.#sex = sex;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }

  public isMale(): boolean {
    return this.#sex === "Male";
  }
}
const privateYamada = new UserClassHasAccessbility("yamada", 26, "Male");
console.log(privateYamada.name); // "yamada"
// console.log(privateYamada.age) // これはprivateへのアクセスなのでエラー
console.log(privateYamada.isAdult()); // true ここではageを利用している
console.log(privateYamada.isMale()); // true ここではsexを利用している

/**
 * コンストラクタの省略
 */
class UserClassOmissionConstructor {
  // コンストラクタの引数へのpublic/private/protected修飾子は必須
  // 引数であると同時にクラスのプロパティにもなる
  // TypeScript特有のため注意
  constructor(public name: string, private age: number) {}
}
const omissionYamada = new UserClassOmissionConstructor("yamada", 30);
console.log(omissionYamada); // UserClassOmissionConstructor{ name: "yamada", age: 30}
console.log(omissionYamada.name); // "yamada"
// console.log(omissionYamada.age) // これはprivateへのアクセスなのでエラー

/**
 * 型引数を持つクラス
 */
class UserClassHasType<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}
// 型引数Tにstringのデータを渡した場合
const yamadaHasDataString = new UserClassHasType<string>(
  "yamada",
  25,
  "追加データ"
);
console.log(yamadaHasDataString.data); // "追加データ"
// 型引数Tに式を渡した場合(型引数リストは省略して推論させる)
const yamadaHasDataT = new UserClassHasType("yamada", 25, { num: 123 });
console.log(yamadaHasDataT.data); // {num:123}
