/**
 * データ処理(map/filterを使わない)
 */
const tryFetchData = () => {};
type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// ユーザーデータ格納用の配列作成
const users: User[] = [];
// CSVファイルの改行を削除
const userDataCSV = data.split("\n");

// 改行削除後の配列データに関する処理開始
for (const data of userDataCSV) {
  // データが空であれば何もしない(最初と最後の改行コードを考慮)
  if (data !== "") {
    // カンマを削除して分割代入
    const [name, ageStr, premiumUserStr] = data.split(",");
    // 文字列以外を変換
    const age = Number(ageStr);
    const premiumUser = premiumUserStr === "1"; // 値が"1"であればtrueとする

    // ユーザーデータとして格納
    users.push({
      name, // 以下は省略可能 : name,
      age, // 以下は省略可能 : age,
      premiumUser, // 以下は省略可能 : premiumUser,
    });
  }
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name}(${user.age})はプレミアムユーザーではありません。`
    );
  }
}
