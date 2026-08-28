import type { Metadata } from "next";
import Link from "next/link";
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

      <section className="max-w-5xl mx-auto px-4 pt-12 pb-10">
        <p className="text-emerald-700 text-sm font-semibold">
          札幌市中央区の高齢者介護施設
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
          {SITE.shortName}
        </h1>
        <p className="mt-4 text-neutral-700 leading-relaxed max-w-2xl">
          {SITE.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="inline-block rounded-md bg-emerald-700 px-5 py-2.5 text-white text-sm font-semibold hover:bg-emerald-800"
          >
            サービス内容を見る
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-md border border-neutral-300 px-5 py-2.5 text-neutral-800 text-sm font-semibold hover:bg-neutral-50"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold text-neutral-900">施設の理念</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed max-w-2xl">
            「住み慣れた地域で、その人らしく暮らし続ける」ことを支えるため、
            介護・看護・生活支援を一体的に提供します。医療的ケアが必要になっても、
            重度化しても、できる限り住み慣れた環境での生活を継続できるよう支援することを理念としています。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-neutral-900">施設の特徴</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-neutral-900">施設概要</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <tbody>
              <tr className="border-b border-neutral-200">
                <th className="w-40 text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  施設名
                </th>
                <td className="px-4 py-3">{SITE.shortName}</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  運営法人
                </th>
                <td className="px-4 py-3">{SITE.operatorName}</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  所在地
                </th>
                <td className="px-4 py-3">{SITE.address.full}</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  定員
                </th>
                <td className="px-4 py-3">{SITE.capacity}床（{SITE.roomType}）</td>
              </tr>
              <tr>
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
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
