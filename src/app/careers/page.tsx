import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "ひまわり高齢者介護施設の採用情報。介護職員・看護師・生活相談員を募集。職種ごとの給与、勤務条件、応募方法を掲載しています。",
};

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

      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold text-neutral-900">採用情報</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl leading-relaxed">
          {SITE.shortName}（運営：{SITE.operatorName}）では、
          一緒に地域の介護・看護を支えるスタッフを募集しています。職種・給与・勤務条件は以下の通りです。
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {SITE.jobs.map((job) => (
          <div key={job.title} className="border border-neutral-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-neutral-900">{job.title}</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-neutral-200">
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <th className="w-40 text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                      雇用形態
                    </th>
                    <td className="px-4 py-3">{job.employmentType}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                      給与
                    </th>
                    <td className="px-4 py-3">{job.salaryNote}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                      勤務時間
                    </th>
                    <td className="px-4 py-3">{job.workHours}</td>
                  </tr>
                  <tr>
                    <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
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
        <h2 className="text-xl font-bold text-neutral-900">応募方法</h2>
        <div className="mt-4 border border-neutral-200 rounded-lg p-6 text-sm text-neutral-700 leading-relaxed">
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
