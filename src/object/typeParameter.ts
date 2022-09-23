/**
 * 型引数
 */
// 型引数を持つ型はジェネリック型と呼ばれる
type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// ジェネリック型を利用
// Familyではなく、Family<number, string>という型
const useGenericType: Family<number, string> = {
  mother: 1,
  father: 1,
  child: "三兄弟",
};
