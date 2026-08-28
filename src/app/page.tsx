import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SunflowerMark from "@/components/SunflowerMark";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "トップページ",
  description: SITE.description,
};

const FEATURES = [
  {
    title: "24時間対応の在宅・入居支援",
    body: "定期巡回・随時対応型訪問介護看護により、日中・夜間を問わず必要なタイミングで介護・看護を受けられます。",
  },
  {
    title: "医療と介護の連携",
    body: "看護師による訪問看護と介護職員の連携により、医療的ケアが必要な方も安心して生活を続けられる体制を整えています。",
  },
  {
    title: "施設内デイサービスで生活にリズムを",
    body: "入浴・食事・機能訓練・レクリエーションを組み合わせた通所サービスで、心身の機能維持と社会的なつながりを支援します。",
  },
];

const DAILY_SCHEDULE = [
  { time: "7:00", label: "起床・検温・朝の身支度" },
  { time: "8:00", label: "朝食（見守り・食事介助）" },
  { time: "10:00", label: "機能訓練・デイサービス（希望者）" },
  { time: "12:00", label: "昼食・服薬確認" },
  { time: "15:00", label: "レクリエーション・自由時間" },
  { time: "18:00", label: "夕食・入浴" },
  { time: "21:00", label: "就寝・夜間巡回開始" },
];

const VOICES = [
  {
    name: "入居者ご家族（80代女性のご家族）",
    text:
      "夜間の巡回があると聞いて安心して預けられました。母の顔色が明るくなったのが一番うれしいです。",
  },
  {
    name: "介護職員（勤続3年）",
    text:
      "夜勤も一人にならない体制なので、無理なく続けられています。利用者さんの変化に気づける距離感が好きです。",
  },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.shortName,
    alternateName: SITE.siteName,
    description: SITE.description,
    url: SITE.domain,
    telephone: SITE.telephone,
    parentOrganization: {
      "@type": "Organization",
      name: SITE.operatorName,
    },
    address: {
      "@type": "PostalAddress",
      postalCode: SITE.address.postalCode.replace("〒", ""),
      addressRegion: SITE.address.region,
      addressLocality: SITE.address.locality,
      streetAddress: SITE.address.streetAddress,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: "札幌市中央区",
    priceRange: `¥${SITE.priceFrom.toLocaleString()}〜`,
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-[#fffaf2]">
        <div className="max-w-5xl mx-auto px-4 pt-14 pb-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-amber-700 text-sm font-semibold tracking-wide">
              札幌市中央区の高齢者介護施設
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              その人らしい毎日を、
              <br />
              ひまわりのように明るく。
            </h1>
            <p className="mt-4 text-stone-700 leading-relaxed max-w-xl">
              {SITE.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-block rounded-full bg-amber-600 px-6 py-3 text-white text-sm font-semibold shadow-sm hover:bg-amber-700 transition-colors"
              >
                サービス内容を見る
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-full border border-amber-300 bg-white px-6 py-3 text-stone-800 text-sm font-semibold hover:bg-amber-50 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-amber-100 flex items-center justify-center shadow-inner">
              <SunflowerMark className="w-32 h-32 sm:w-40 sm:h-40" />
            </div>
          </div>
        </div>
      </section>

      {/* 理念 */}
      <section className="bg-white border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold text-stone-900">施設の理念</h2>
          <p className="mt-3 text-stone-700 leading-relaxed max-w-2xl">
            「住み慣れた地域で、その人らしく暮らし続ける」ことを支えるため、
            介護・看護・生活支援を一体的に提供します。医療的ケアが必要になっても、
            重度化しても、できる限り住み慣れた環境での生活を継続できるよう支援することを理念としています。
          </p>
        </div>
      </section>

      {/* 特徴 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-stone-900">施設の特徴</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 一日の流れ */}
      <section className="bg-amber-50/60 border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold text-stone-900">ご入居者の一日（例）</h2>
          <p className="mt-2 text-sm text-stone-500">
            ※体調やご希望に応じて個別に調整します。あくまで標準的な一日の流れです。
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {DAILY_SCHEDULE.map((s) => (
              <li
                key={s.time}
                className="flex items-center gap-4 bg-white rounded-xl border border-amber-100 px-4 py-3"
              >
                <span className="text-amber-700 font-bold w-14 shrink-0">
                  {s.time}
                </span>
                <span className="text-sm text-stone-700">{s.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 声 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-stone-900">ご家族・スタッフの声</h2>
        <p className="mt-2 text-xs text-stone-400">
          ※本サイトはデモのため、以下は架空の声（イメージ）です。
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {VOICES.map((v) => (
            <blockquote
              key={v.name}
              className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-stone-700 leading-relaxed">“{v.text}”</p>
              <footer className="mt-4 text-sm text-amber-700 font-medium">
                — {v.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* 施設概要 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-stone-900">施設概要</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-amber-100">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-amber-100">
                <th className="w-40 text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  施設名
                </th>
                <td className="px-4 py-3">{SITE.shortName}</td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  運営法人
                </th>
                <td className="px-4 py-3">{SITE.operatorName}</td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  所在地
                </th>
                <td className="px-4 py-3">{SITE.address.full}</td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  定員
                </th>
                <td className="px-4 py-3">{SITE.capacity}床（{SITE.roomType}）</td>
              </tr>
              <tr>
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  料金
                </th>
                <td className="px-4 py-3">
                  月額 {SITE.priceFrom.toLocaleString()}円〜（{SITE.roomType}）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
