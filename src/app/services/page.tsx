import type { Metadata } from "next";
import Image from "next/image";
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

      <section className="bg-gradient-to-b from-amber-50 to-[#fffaf2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">サービス紹介</h1>
            <p className="mt-3 text-stone-700 max-w-2xl leading-relaxed">
              {SITE.shortName}では、在宅・入居どちらの形でも住み慣れた環境での生活を続けられるよう、
              以下の3つのサービスを組み合わせて提供しています。対象地域は札幌市中央区、定員は{SITE.capacity}床です。
            </p>
          </div>
          <figure className="overflow-hidden rounded-[2rem_.75rem_2rem_2rem] shadow-xl">
            <Image src="/images/care-home-room.webp" alt="明るく落ち着いた居室と共有スペースのイメージ" width={1536} height={864} priority sizes="(min-width: 1024px) 52vw, 100vw" className="aspect-[16/8] w-full object-cover object-center" />
            <figcaption className="bg-white px-4 py-1.5 text-right text-xs text-stone-500">※画像はイメージです</figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        {SITE.services.map((s) => (
          <div
            key={s.slug}
            id={s.slug}
            className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-stone-900">{s.name}</h2>
            <p className="mt-2 text-stone-700 leading-relaxed">{s.summary}</p>
            <p className="mt-3 text-sm font-medium text-amber-700">
              {s.priceNote}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-stone-900">
          対象地域・定員・料金
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-amber-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left px-4 py-3 font-medium text-stone-700 border-b border-amber-100">
                  項目
                </th>
                <th className="text-left px-4 py-3 font-medium text-stone-700 border-b border-amber-100">
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-amber-100">
                <th className="text-left px-4 py-3 font-medium text-stone-700 bg-amber-50">
                  対象地域
                </th>
                <td className="px-4 py-3">札幌市中央区（近隣区は要相談）</td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left px-4 py-3 font-medium text-stone-700 bg-amber-50">
                  定員
                </th>
                <td className="px-4 py-3">{SITE.capacity}床（{SITE.roomType}）</td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left px-4 py-3 font-medium text-stone-700 bg-amber-50">
                  居室料
                </th>
                <td className="px-4 py-3">
                  月額 {SITE.priceFrom.toLocaleString()}円〜（{SITE.roomType}、水道光熱費別）
                </td>
              </tr>
              {SITE.services.map((s) => (
                <tr key={s.slug} className="border-b border-amber-100 last:border-b-0">
                  <th className="text-left px-4 py-3 font-medium text-stone-700 bg-amber-50">
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
        <h2 className="text-xl font-bold text-stone-900">よくある質問</h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
            <div
              key={f.question}
              className="bg-white border border-amber-100 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-stone-900">Q. {f.question}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                A. {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
