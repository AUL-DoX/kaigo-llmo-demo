import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "ひまわり高齢者介護施設の採用情報。介護職員・看護師・生活相談員を募集。職種ごとの給与、勤務条件、応募方法を掲載しています。",
};

const APPEALS = [
  {
    title: "夜勤も一人にしない体制",
    body: "定期巡回サービスのコールセンターと連携し、夜間ひとりで抱え込まない勤務環境を整えています。",
  },
  {
    title: "資格取得支援あり",
    body: "初任者研修・実務者研修・介護福祉士の受験費用を法人が一部負担。未経験からのキャリアアップを応援します。",
  },
  {
    title: "多職種で支え合うチーム",
    body: "介護職・看護師・生活相談員が日々情報共有しながら連携するので、一人で判断を抱え込みません。",
  },
];

export default function CareersPage() {
  const jobPostingsJsonLd = SITE.jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.title}の募集。${job.qualifications}。${job.workHours}。`,
    datePosted: "2026-08-01",
    validThrough: "2026-12-31",
    employmentType:
      job.employmentType === "正社員"
        ? "FULL_TIME"
        : job.employmentType.includes("パート")
        ? "PART_TIME"
        : "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.operatorName,
      sameAs: SITE.domain,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.streetAddress,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode.replace("〒", ""),
        addressCountry: "JP",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: "MONTH",
      },
    },
  }));

  return (
    <>
      {jobPostingsJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <section className="bg-gradient-to-b from-amber-50 to-[#fffaf2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">採用情報</h1>
            <p className="mt-3 text-stone-700 max-w-2xl leading-relaxed">
              {SITE.shortName}（運営：{SITE.operatorName}）では、
              一緒に地域の介護・看護を支えるスタッフを募集しています。職種・給与・勤務条件は以下の通りです。
            </p>
          </div>
          <figure className="overflow-hidden rounded-[2rem_2rem_.75rem_2rem] shadow-xl">
            <Image src="/images/care-team.webp" alt="介護・看護について話し合う職員チームのイメージ" width={1536} height={864} priority sizes="(min-width: 1024px) 54vw, 100vw" className="aspect-[16/8] w-full object-cover object-center" />
            <figcaption className="bg-white px-4 py-1.5 text-right text-xs text-stone-500">※画像はイメージです</figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-stone-900">ひまわりで働く魅力</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {APPEALS.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-stone-900">{a.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-xl font-bold text-stone-900">募集職種</h2>
        {SITE.jobs.map((job) => (
          <div
            key={job.title}
            className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-stone-900">{job.title}</h3>
            <div className="mt-4 overflow-x-auto rounded-xl border border-amber-100">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-amber-100">
                    <th className="w-40 text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                      雇用形態
                    </th>
                    <td className="px-4 py-3">{job.employmentType}</td>
                  </tr>
                  <tr className="border-b border-amber-100">
                    <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                      給与
                    </th>
                    <td className="px-4 py-3">{job.salaryNote}</td>
                  </tr>
                  <tr className="border-b border-amber-100">
                    <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                      勤務時間
                    </th>
                    <td className="px-4 py-3">{job.workHours}</td>
                  </tr>
                  <tr>
                    <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                      応募資格
                    </th>
                    <td className="px-4 py-3">{job.qualifications}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-stone-900">応募方法</h2>
        <div className="mt-4 bg-white border border-amber-100 rounded-2xl p-6 shadow-sm text-sm text-stone-700 leading-relaxed">
          <p>
            お問い合わせページの応募フォームより、希望職種・氏名・連絡先をご記入のうえご送信ください。
            書類選考の後、1週間以内に面接日程をご連絡します。
          </p>
          <p className="mt-3">
            提出書類：履歴書（写真付き）、職務経歴書（実務経験がある場合）
          </p>
        </div>
      </section>
    </>
  );
}
