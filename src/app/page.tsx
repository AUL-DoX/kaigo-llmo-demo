import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-18 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white/80 border border-amber-200 px-4 py-1.5 text-amber-800 text-sm font-semibold tracking-wide shadow-sm">
              札幌市中央区の高齢者介護施設
            </p>
            <h1 className="mt-5 text-4xl sm:text-[2.65rem] xl:text-5xl font-bold text-stone-900 leading-[1.35]">
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
                className="sun-button"
              >
                サービス内容を見る
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center rounded-full border border-[#2f684f] bg-white px-6 py-3 text-[#214d3b] text-sm font-semibold hover:bg-emerald-50 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_.75rem] bg-amber-50 shadow-[0_25px_70px_rgba(112,80,31,0.18)] ring-1 ring-white">
              <Image
                src="/images/care-home-hero.webp"
                alt="明るい共有スペースで会話する入居者と介護職員のイメージ"
                width={1536}
                height={864}
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="aspect-[4/3] w-full object-cover object-[64%_center]"
              />
              <figcaption className="absolute bottom-3 right-4 rounded-full bg-black/45 px-3 py-1 text-[11px] text-white backdrop-blur-sm">※画像はイメージです</figcaption>
              <div className="absolute left-4 bottom-7 rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-[#2f684f] shadow-lg">24時間の安心を</div>
              <div className="absolute right-4 top-8 rounded-2xl bg-[#2f684f] px-4 py-3 text-sm font-semibold text-white shadow-lg">地域とともに</div>
            </figure>
          </div>
        </div>
      </section>

      {/* 理念 */}
      <section className="bg-white border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-4 py-14 grid gap-8 md:grid-cols-[1fr_.9fr] md:items-center">
          <div>
            <h2 className="text-xl font-bold text-stone-900">施設の理念</h2>
            <p className="mt-3 text-stone-700 leading-relaxed max-w-2xl">
              「住み慣れた地域で、その人らしく暮らし続ける」ことを支えるため、
              介護・看護・生活支援を一体的に提供します。医療的ケアが必要になっても、
              重度化しても、できる限り住み慣れた環境での生活を継続できるよう支援することを理念としています。
            </p>
          </div>
          <figure className="overflow-hidden rounded-[2rem_.75rem_2rem_2rem] shadow-lg">
            <Image src="/images/care-home-room.webp" alt="木の温もりを感じる個室と共有スペースのイメージ" width={1536} height={864} sizes="(min-width: 768px) 42vw, 100vw" className="aspect-[16/10] w-full object-cover" />
            <figcaption className="bg-white px-4 py-2 text-right text-xs text-stone-500">※画像はイメージです</figcaption>
          </figure>
        </div>
      </section>

      {/* 特徴 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-stone-900">施設の特徴</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="warm-card bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
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
          <div className="grid gap-7 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-xl font-bold text-stone-900">ご入居者の一日（例）</h2>
              <p className="mt-2 text-sm text-stone-500">
                ※体調やご希望に応じて個別に調整します。あくまで標準的な一日の流れです。
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl shadow-md">
              <Image src="/images/resident-activity.webp" alt="入居者と介護職員が花を生けるレクリエーションのイメージ" width={1536} height={864} sizes="(min-width: 768px) 52vw, 100vw" className="aspect-[16/7] w-full object-cover object-center" />
              <figcaption className="bg-white px-4 py-1.5 text-right text-xs text-stone-500">※画像はイメージです</figcaption>
            </figure>
          </div>
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
              className="warm-card bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
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
