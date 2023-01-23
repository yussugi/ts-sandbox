let sessionObject = {
  sessionId: "aiueo",
  accessToken: "sessionObjectAccess",
  refreshToken: "sessionObjectRefresh",
  idToken: "sessionObjectId",
  accessTokenExpires: 1665058560,
  memberId: "yupon",
  data: {
    hoge: "fuga", // TODO dataの内容は定義すること
  },
};

let tokenObject = {
  accessToken: "tokenObjectAccess",
  refreshToken: "tokenObjectRefresh",
  idToken: "tokenObjectId",
};

console.log(sessionObject);
console.log(tokenObject);

sessionObject = { ...sessionObject, ...tokenObject };
console.log(sessionObject);

const REQUEST_TYPE = {
  user: "USER",
  spoof: "SPOOF",
} as const;

type RequestType = typeof REQUEST_TYPE[keyof typeof REQUEST_TYPE];

console.log(tokenObject.accessToken);

const roles: string[] = ["admin"];
if (!roles.length) {
  console.log("配列が空です");
}

const decoded = {
  user_tz: "Asia/Tokyo",
  at_hash: "wMFIGotg_72e29TvAZUn0Q",
  sub: "XRIBE5FF3EUPLT22Z5US6ZG7B6T7WD2C",
  user_locale: "ja",
  idp_name: "UserNamePassword",
  sidle: 480,
  idp_guid: "UserNamePassword",
  amr: ["USERNAME_PASSWORD"],
  iss: "https://identity.oraclecloud.com/",
  user_tenantname: "idcs-aa1922f4e0dd4a949f4483471bdad0e7",
  client_id: "a7e1bc5923914c6c94561fd562a2f60f",
  sid: "2f27c30025bf4fa888345a0f2a15f8e8:18cfb2",
  authn_strength: "2",
  azp: "a7e1bc5923914c6c94561fd562a2f60f",
  auth_time: 1665054943,
  session_exp: 1665083743,
  client_tenantname: "idcs-aa1922f4e0dd4a949f4483471bdad0e7",
  region_name: "ap-tokyo-idcs-1",
  user_lang: "en",
  exp: 1665083743,
  iat: 1665054960,
  client_name: "検証-認可コード-検電FE",
  client_guid: "a84dcedb49b04632b4f1c655df6a09cb",
  idp_type: "LOCAL",
  tenant: "idcs-aa1922f4e0dd4a949f4483471bdad0e7",
  jti: "a88ed23e6c894d499f223db4a3fc6152",
  user_displayname: "557QSGNIWABKXMEATCZYWVXAGYUF5ZLO Dummy",
  sub_mappingattr: "userName",
  primTenant: false,
  tok_type: "IT",
  nonce: "1f2591264b004a07a4038d0325c33cd9_20221006112033",
  ca_guid: "cacct-1ac254a03bfa463bb276bf177346ed30",
  aud: [
    "https://identity.oraclecloud.com/",
    "a7e1bc5923914c6c94561fd562a2f60f",
  ],
  user_id: "87410ff357b046f385de8e09bae530e3",
  tenant_iss:
    "https://idcs-aa1922f4e0dd4a949f4483471bdad0e7.identity.oraclecloud.com:443",
};

console.log(decoded.exp);

const sugichans: string[] = ["unko"];
if (sugichans.length === 0) {
  console.log("空の配列です");
}

if (typeof sugichans !== "object") {
  console.log(`${sugichans}がオブジェクトではありません`);
}
if (Array.isArray(sugichans)) {
  console.log(`${sugichans[0]}は配列です`);
}

const strBool: string = "";
if (strBool) {
  console.log(`${strBool}は空ではありません`);
} else {
  console.log(`${strBool}は空です`);
}

type Token = {
  idToken: string;
  accessToken: string;
  refreshToken: string;
};

type LoginSession = {
  memberId: string;
  userRelationKey: string;
} & Token;

let loginSession: LoginSession = {
  idToken: "aiueo",
  accessToken: "kakiku",
  refreshToken: "sasisu",
  memberId: "member",
  userRelationKey: "relation",
};
// トークンの格納
function setToken(token: {
  idToken: string;
  accessToken: string;
  refreshToken: string;
}) {
  const { idToken, accessToken, refreshToken } = token;

  // loginSession.idToken = idToken;
  // loginSession.accessToken = accessToken;
  // loginSession.refreshToken = refreshToken;
  loginSession = { ...loginSession, ...token };
  console.log(loginSession);
}

const token: Token = {
  idToken: "id",
  accessToken: "access",
  refreshToken: "refresh",
};
setToken(token);
