// サイト全体で使う架空施設の基本データ
// ※本サイトはLLMO（LLM最適化）設計のデモンストレーション用に作成した架空施設です。

export const SITE = {
  siteName: "ひまわり高齢者介護施設（デモサイト）",
  operatorName: "社会福祉法人ひまわり会（デモ）",
  shortName: "ひまわり高齢者介護施設",
  domain: "https://kaigo-llmo-demo.aul-dox.jp",
  description:
    "札幌市中央区の高齢者介護施設「ひまわり高齢者介護施設」。定期巡回・随時対応型訪問介護看護、訪問看護、施設内デイサービスを提供。定員60床、居室はすべて1K個室、月額10万円から。",
  telephone: "011-000-0000",
  email: "contact@kaigo-llmo-demo.aul-dox.jp",
  address: {
    postalCode: "〒060-0042",
    region: "北海道",
    locality: "札幌市中央区",
    streetAddress: "大通西10丁目1-1 ひまわりビル3F",
    full: "北海道札幌市中央区大通西10丁目1-1 ひまわりビル3F",
  },
  geo: {
    latitude: 43.0596,
    longitude: 141.3378,
  },
  capacity: 60,
  roomType: "1K個室",
  priceFrom: 100000,
  services: [
    {
      name: "定期巡回・随時対応型訪問介護看護",
      slug: "teiki-junkai",
      summary:
        "1日複数回の短時間巡回訪問と、通報による随時対応を組み合わせた24時間対応サービス。夜間・緊急時も含め、必要なタイミングで介護・看護を提供します。",
      priceNote: "月額 44,000円〜（要介護度により変動）",
    },
    {
      name: "訪問看護",
      slug: "houmon-kango",
      summary:
        "看護師が居室を訪問し、健康状態の観察、医療処置、服薬管理、主治医との連携などを行います。医療的ケアが必要な方も安心して在宅・入居生活を継続できます。",
      priceNote: "1回あたり 8,000円〜（介護保険適用時の自己負担1割の場合）",
    },
    {
      name: "デイサービス（施設内）",
      slug: "day-service",
      summary:
        "施設内の機能訓練室・食堂を利用した通所サービス。入浴、食事、レクリエーション、機能訓練を1日単位で提供し、生活リズムの維持と社会的交流を支援します。",
      priceNote: "1日あたり 6,500円〜（送迎・食事代別途）",
    },
  ],
  jobs: [
    {
      title: "介護職員（正社員）",
      employmentType: "正社員",
      salaryMin: 220000,
      salaryMax: 280000,
      salaryNote: "月給22万円〜28万円（経験・資格による）",
      workHours: "実働8時間（シフト制・早番/日勤/遅番/夜勤）",
      qualifications: "介護福祉士歓迎、未経験可（初任者研修は入職後取得支援あり）",
    },
    {
      title: "看護師（正社員・パート）",
      employmentType: "正社員・パート",
      salaryMin: 280000,
      salaryMax: 350000,
      salaryNote: "月給28万円〜35万円（正社員）／時給1,600円〜（パート）",
      workHours: "実働8時間（日勤中心、オンコール対応あり）",
      qualifications: "看護師免許必須、訪問看護経験者優遇",
    },
    {
      title: "生活相談員",
      employmentType: "正社員",
      salaryMin: 230000,
      salaryMax: 290000,
      salaryNote: "月給23万円〜29万円",
      workHours: "実働8時間（日勤）",
      qualifications: "社会福祉士・介護福祉士・社会福祉主事任用資格のいずれか",
    },
  ],
} as const;
