export const heroCopy = {
  catchphrase: "ありのままの存在を光輝かせる場所。",
  subcopy: "一歩先の幸せへ。",
  description:
    "遊ぶ楽校やたは、子ども一人ひとりの「ありのまま」を大切にし、その子らしさがそっと輝きだす場所です。自然の中で過ごす時間、夢中になれる遊びや体験、人とのあたたかいつながり。そのひとつひとつを重ねながら、安心して自分でいられる毎日を育みます。「自分らしく」過ごせた今日の積み重ねが、自分らしく生きていく力になる——遊ぶ楽校やたは、そんな子どもたちの未来を育む居場所でありたいと願っています。",
};

export const siteInfo = {
  name: "遊ぶ楽校やた",
  tagline: "自然の中で、遊びながら育つ。",
  orgName: "一般社団法人 遊ぶ楽校やた",
  email: "info@asobu-gakkou-yata.jp",
  lineUrl: "https://lin.ee/example-yata",
  instagramUrl: "https://www.instagram.com/asobu_gakkou_yata/",
  instagramHandle: "@asobu_gakkou_yata",
};

// ヘッダー内ナビ（参照デザイン: ホーム/について/活動のようす/利用案内/スタッフ紹介/よくある質問 の6項目）
export const headerNavLinks = [
  { href: "#home", label: "ホーム" },
  { href: "#about", label: "遊ぶ楽校やたについて" },
  { href: "#activity", label: "活動のようす" },
  { href: "#guide", label: "利用案内" },
  { href: "#staff", label: "スタッフ紹介" },
  { href: "#faq", label: "よくある質問" },
] as const;

// モバイルメニュー用（ヘッダー6項目 + サポーター募集/アクセス/お問い合わせを追加）
export const navLinks = [
  ...headerNavLinks,
  { href: "#supporter", label: "サポーター募集" },
  { href: "#access", label: "アクセス" },
  { href: "#contact", label: "お問い合わせ" },
] as const;

export const philosophyCards = [
  {
    num: "一",
    text: "子ども一人ひとりのありのままの存在、個性を光輝かせる",
  },
  {
    num: "二",
    text: "子ども自身が本来持っている力を最大限に生かせるようサポートし、環境を創る",
  },
  {
    num: "三",
    text: "親御さんと想いや情報を交換し、共に学び、共に歩む",
  },
] as const;

export const philosophyMessage = {
  emphasis: "ワクワク ドキドキ\n子ども時代を、思いっきり子どもらしく過ごそう",
  body: "ありのまま、心のままにエネルギーを発散させ、枠や型にとらわれず、豊かな発想で「今」を全力で生きる。遊ぶ楽校やたは、そんな学校以外の学び場です。",
};

export const aboutDescription =
  "遊ぶ楽校やたは、北九州市門司区にあるフリースクールです。「遊び」を通して学び、人とつながり、安心できる居場所を一緒につくっています。";

// パンフレット掲載のメッセージ（原文どおり。改行・余白もそのまま活かす）
export const yataMessage = {
  heading: "ワクワク　ドキドキ",
  stanzas: [
    ["子ども時代を、思いっきり", "子どもらしく過ごそう"],
    ["ありのまま", "心のままに"],
    ["エネルギーを発散させ", "枠や型にとらわれず"],
    ["豊かな発想で", "「今」を全力で生きる"],
    ["遊ぶ楽校やたは", "そんな、学校以外の学び場です。"],
  ],
} as const;

export const pillars = [
  { title: "自然の中でのびのび", description: "野外活動や自然体験を通して、心と体を育みます。", icon: "🌳", tone: "grass" },
  { title: "一人ひとりを大切に", description: "その子のペースを大切に、寄り添いながらサポートします。", icon: "🧒", tone: "sky" },
  { title: "安心できる居場所", description: "ありのままの自分でいられる、あたたかい場所です。", icon: "💗", tone: "pink" },
  { title: "遊びが学びになる", description: "遊びや体験から学びが生まれ、生きる力を育てます。", icon: "🌱", tone: "sun" },
  { title: "つながりを大切に", description: "子ども同士、家族、地域とのつながりを大切にしています。", icon: "🐦", tone: "orange" },
] as const;

export const activitiesIntro =
  "曜日ごとにテーマを分けて、「知能」「感性」「身体」をバランスよく育む活動を行っています。";

export const weekdayPrograms = [
  {
    day: "月曜日",
    tone: "mon",
    title: "知能の育ち",
    items: [
      "子ども新聞から時事問題を学ぶ",
      "教科学習（国語・算数・社会）",
      "お金の楽習",
      "行事の事前・事後楽習",
    ],
  },
  {
    day: "火曜日",
    tone: "tue",
    title: "感性の育ち",
    items: ["食の楽習（調理して、みんなでお昼ごはん）", "EQ 感情学習", "ものづくり（絵画・縫い物・図工）"],
  },
  {
    day: "木曜日",
    tone: "thu",
    title: "身体の育ち",
    items: [
      "野外活動、自然楽習で体づくり",
      "磯遊び、川遊び、公園遊び",
      "火起こし・体育館でスポーツ",
      "畑楽習・散歩・体力づくり",
      "羽釜でごはんを炊いて食べる",
    ],
  },
] as const;

export const extraEvents = [
  { emoji: "🍽️", title: "やた食堂", description: "みんなで作ってみんなで食べる" },
  { emoji: "🏢", title: "企業訪問", description: "社会とつながる体験学習" },
  { emoji: "🛒", title: "マルシェ出店", description: "自分たちで考えてお店を出す体験" },
] as const;

export const guideItems = [
  { label: "対象", value: "小学生・中学生" },
  { label: "日時", value: "月曜日・火曜日・木曜日　10:00〜15:15" },
  {
    label: "場所",
    value:
      "月・火曜日：ZATTA ZISSE（ザッタジッセ） 北九州市門司区東港町4-68\n木曜日：大積公民館 北九州市門司区大積725-29",
  },
  { label: "見学・体験", value: "随時受付中！ 体験は1回目無料、2・3回目は1,000円" },
] as const;

export const priceCards = [
  { plan: "1day 単発", price: "3,000円", unit: "", note: "" },
  { plan: "週1コース", price: "11,000円", unit: "/月", note: "月4回" },
  { plan: "週2コース", price: "21,000円", unit: "/月", note: "月8回" },
  { plan: "週3コース", price: "30,000円", unit: "/月", note: "月12回" },
] as const;

export const staffMembers = [
  {
    name: "みっきー（寺田美貴）",
    role: "楽長",
    message:
      "教師10年。子どもたちと本気で遊ぶ、笑う、話す、体験する。「ありのままの存在を愛で満たして生きていく」がテーマ。",
    emoji: "🌳",
  },
  {
    name: "ちえちゃん",
    role: "月曜日担当",
    message: "保育士、3児の母。我が子の不登校をきっかけにやたと出会いました。一緒に楽しく学びましょう。",
    emoji: "🌻",
  },
  {
    name: "まりちゃん（山之内真理）",
    role: "火曜日担当・EQ感情学習",
    message: "SELファシリテーター。自分が何をしている時に心が躍るのか、自分探しの旅を子どもたちと一緒に。",
    emoji: "💗",
  },
  {
    name: "いくちゃん（藤井生衣）",
    role: "お金の楽習担当",
    message: "ファイナンシャルプランナー。愛と感謝をもってお金と向き合う大切さを、一緒に経験しています。",
    emoji: "💰",
  },
  {
    name: "ガッキー（前垣美沙子）",
    role: "美術担当・現代アーティスト",
    message: "自由に生きられる居場所探しのお手伝いを楽しみたいです。",
    emoji: "🎨",
  },
] as const;

export const supporterMessage = {
  emphasis: "子どもたちの今を応援する 〜心身の健康と成長のために〜",
  body: [
    "何らかの理由で学校に行けなかったり、行かないことを選択した子どもたちには、実体験や人との関わりを育む場所が必要です。",
    "小学生・中学生は社会性や自己形成の基盤がつくられる大切な時期。すべての子どもに学ぶ環境は保障されるべきであり、フリースクールはその大切な選択肢のひとつです。",
  ],
  closingEmphasis: "皆さまのご支援は、子どもたちの無限の可能性を応援します。",
  closingBody:
    "ありのままの自分を愛され、認められながら育つことが、やがて社会の一員として自分らしく生きていける力へとつながっていきます。",
};

export const supporterPlans = [
  { title: "個人サポーター", price: "1,000円/月", note: "年額 12,000円" },
  { title: "企業サポーター", price: "10,000円/月", note: "年額 120,000円" },
  { title: "単発サポーター", price: "金額自由", note: "都合のよいタイミングで" },
] as const;

export const faqItems = [
  {
    question: "見学や体験はできますか？",
    answer: "はい、随時受付しています。体験は1回目無料、2・3回目は1,000円です。お気軽にお問い合わせください。",
  },
  {
    question: "対象年齢を教えてください。",
    answer: "小学生・中学生が対象です。",
  },
  {
    question: "どんな子が通っていますか？",
    answer:
      "好きなことを伸ばしたい子、いろいろな体験をしたい子、今の学校に違和感を感じている子、思いっきり遊びたい子など、さまざまです。",
  },
  {
    question: "週に何回通えますか？",
    answer: "週1回（月4回）、週2回（月8回）、週3回（月12回）のコースがあります。1day単発の利用も可能です。",
  },
  {
    question: "活動日と時間を教えてください。",
    answer: "月曜日・火曜日・木曜日の 10:00〜15:15 です。",
  },
  {
    question: "大人向けのイベントはありますか？",
    answer: "月1回「ゆるゆる茶話会」を開催しています。EQワークショップや進路説明会も不定期で行っています。",
  },
] as const;

export const accessLocations = [
  {
    day: "月・火曜日",
    tone: "mon",
    name: "ZATTA ZISSE（ザッタジッセ）",
    address: "北九州市門司区東港町4-68",
  },
  {
    day: "木曜日",
    tone: "thu",
    name: "大積公民館",
    address: "北九州市門司区大積725-29",
  },
] as const;

export const footerLinks = [
  { href: "#home", label: "ホーム" },
  { href: "#about", label: "やたについて" },
  { href: "#activity", label: "活動のようす" },
  { href: "#guide", label: "利用案内" },
  { href: "#supporter", label: "サポーター募集" },
  { href: "#contact", label: "お問い合わせ" },
] as const;
