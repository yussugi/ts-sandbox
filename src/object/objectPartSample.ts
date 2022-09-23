/**
 * 部分型関係(構造的部分型)
 */
type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj: FooBarBaz = {
  foo: "hello",
  bar: 1,
  baz: false,
};

// FooBarBaz型はFooBar型の上位互換であり、部分型である
// 構造的部分型と呼ばれる(プロパティを実際に比較して部分型か決定)
const partObj: FooBar = obj;
