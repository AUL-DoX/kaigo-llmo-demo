import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { FAQS, USAGE_STEPS } from "@/lib/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "よくある質問・ご利用までの流れ",
  description: `${SITE.shortName}への相談から利用開始までの流れ。介護認定前、ケアマネジャーがいない場合、見学、費用、医療的ケアなどの質問に回答します。`,
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section>
        <div className="max-w-5xl mx-auto px-4 pt-14 pb-12">
          <p className="text-sm font-semibold tracking-wide text-amber-800">初めての方へ</p>
          <h1 className="mt-3 font-bold">よくある質問・ご利用までの流れ</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-700">
            ご相談から利用開始までに確認することと、介護認定・ケアマネジャー・費用・医療的ケアなど、よくいただく質問をまとめています。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">ご利用までの流れ</h2>
        <p className="mt-4 max-w-3xl text-stone-600 leading-relaxed">
          介護認定の状況や担当ケアマネジャーの有無にかかわらず、最初にご相談いただけます。以下は当施設での標準的な確認手順です。
        </p>
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {USAGE_STEPS.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-amber-100 bg-white p-6 pl-20 shadow-sm">
              <span className="absolute left-5 top-6 grid h-10 w-10 place-items-center rounded-full bg-[#2f684f] font-bold text-white">{index + 1}</span>
              <h3 className="font-bold text-stone-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-sm leading-relaxed text-stone-700">
          <p className="font-semibold text-[#214d3b]">介護認定前・ケアマネジャーがいない方へ</p>
          <p className="mt-2">介護保険サービスの利用には原則として要介護・要支援認定とケアプランが必要です。要支援1・2の方は地域包括支援センター等、要介護1〜5の方は居宅介護支援事業所のケアマネジャーが主な相談先になります。当施設への相談は、その前の段階でも受け付けています。</p>
        </div>
      </section>

      <section className="border-y border-amber-100 bg-amber-50/50">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold">よくある質問</h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-amber-100 bg-white p-5 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-stone-900">
                  <span>Q. {faq.question}</span>
                  <span aria-hidden="true" className="text-xl leading-none text-amber-700 transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-4 border-t border-amber-100 pt-4 text-sm leading-relaxed text-stone-600">A. {faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="rounded-[2rem] bg-[#214d3b] p-7 text-white sm:p-10">
          <h2 className="text-2xl font-bold !text-white">状況が決まっていなくてもご相談ください</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-emerald-50">介護認定の申請前、担当ケアマネジャーが決まっていない段階でも、現在の状況と希望を伺い、次に確認することをご案内します。</p>
          <Link href="/contact#contact-form" className="sun-button mt-6">お問い合わせ</Link>
        </div>

        <div className="mt-8 text-xs leading-relaxed text-stone-500">
          <p>制度上の一般的な流れは、厚生労働省「介護サービス情報公表システム」および札幌市の案内を参照しています。</p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <a className="underline hover:text-amber-800" href="https://www.kaigokensaku.mhlw.go.jp/commentary/flow.html" target="_blank" rel="noreferrer">厚生労働省：サービス利用までの流れ</a>
            <a className="underline hover:text-amber-800" href="https://www.city.sapporo.jp/kaigo/k100citizen/k141sinse.html" target="_blank" rel="noreferrer">札幌市：介護サービスの利用申請手続き</a>
          </p>
          <p className="mt-2">※本サイトおよび施設はデモ用の架空設定です。施設独自の手順・受け入れ条件はデモとして掲載しています。</p>
        </div>
      </section>
    </>
  );
}
