import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "サービス紹介",
  description:
    "ひまわり高齢者介護施設が提供するサービス一覧。定期巡回・随時対応型訪問介護看護、訪問看護、施設内デイサービスの内容・対象地域・定員・料金を掲載。",
};

export default function ServicesPage() {
  return (
    <>
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
        <div className="rounded-[2rem] border border-amber-100 bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-xl font-bold text-stone-900">ご利用までの流れ・よくある質問</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600">介護認定を受けていない方、担当ケアマネジャーがいない方もご相談いただけます。見学から利用開始までの手順、費用、医療的ケアなどを詳しくご案内しています。</p>
          <Link href="/faq" className="sun-button mt-6">ご利用案内・FAQを見る</Link>
        </div>
      </section>
    </>
  );
}
