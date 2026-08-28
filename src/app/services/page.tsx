import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "サービス紹介",
  description:
    "ひまわり高齢者介護施設が提供するサービス一覧。定期巡回・随時対応型訪問介護看護、訪問看護、施設内デイサービスの内容・対象地域・定員・料金を掲載。",
};

const FAQS = [
  {
    question: "対象となる地域はどこですか？",
    answer:
      "札幌市中央区全域を対象としています。中央区以外の方はご相談ください。近隣区への対応可否は個別にご案内します。",
  },
  {
    question: "要介護度はどのくらいから利用できますか？",
    answer:
      "要支援1〜2、要介護1〜5まで幅広く対応しています。要介護度によってご利用いただけるサービスや料金が異なりますので、詳細はお問い合わせください。",
  },
  {
    question: "医療的ケアが必要でも入居できますか？",
    answer:
      "看護師による訪問看護と連携しているため、たんの吸引や経管栄養などの医療的ケアが必要な方も入居いただけます。主治医・訪問診療との連携体制も整えています。",
  },
  {
    question: "料金には何が含まれますか？",
    answer:
      "居室料（1K個室、月額100,000円〜）に加え、ご利用になるサービス（定期巡回・訪問看護・デイサービス）は介護保険適用のもと別途費用がかかります。食費・水道光熱費も別途となります。",
  },
  {
    question: "夜間の緊急時にも対応してもらえますか？",
    answer:
      "定期巡回・随時対応型訪問介護看護では、24時間対応のコールセンターを設置しており、夜間・緊急時の通報にも随時対応します。",
  },
];

export default function ServicesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold text-neutral-900">サービス紹介</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl leading-relaxed">
          {SITE.shortName}では、在宅・入居どちらの形でも住み慣れた環境での生活を続けられるよう、
          以下の3つのサービスを組み合わせて提供しています。対象地域は札幌市中央区、定員は{SITE.capacity}床です。
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {SITE.services.map((s) => (
          <div
            key={s.slug}
            id={s.slug}
            className="border border-neutral-200 rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-neutral-900">{s.name}</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">{s.summary}</p>
            <p className="mt-3 text-sm font-medium text-emerald-700">
              {s.priceNote}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-neutral-900">
          対象地域・定員・料金
        </h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <thead>
              <tr className="bg-neutral-50">
                <th className="text-left px-4 py-3 font-medium text-neutral-700 border-b border-neutral-200">
                  項目
                </th>
                <th className="text-left px-4 py-3 font-medium text-neutral-700 border-b border-neutral-200">
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-medium text-neutral-700 bg-neutral-50">
                  対象地域
                </th>
                <td className="px-4 py-3">札幌市中央区（近隣区は要相談）</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-medium text-neutral-700 bg-neutral-50">
                  定員
                </th>
                <td className="px-4 py-3">{SITE.capacity}床（{SITE.roomType}）</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-medium text-neutral-700 bg-neutral-50">
                  居室料
                </th>
                <td className="px-4 py-3">
                  月額 {SITE.priceFrom.toLocaleString()}円〜（{SITE.roomType}、水道光熱費別）
                </td>
              </tr>
              {SITE.services.map((s) => (
                <tr key={s.slug} className="border-b border-neutral-200 last:border-b-0">
                  <th className="text-left px-4 py-3 font-medium text-neutral-700 bg-neutral-50">
                    {s.name}
                  </th>
                  <td className="px-4 py-3">{s.priceNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-neutral-900">よくある質問</h2>
        <div className="mt-5 space-y-4">
          {FAQS.map((f) => (
            <div key={f.question} className="border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900">Q. {f.question}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                A. {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
