import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "アクセス",
  description: `${SITE.shortName}の所在地・アクセス方法。${SITE.address.full}`,
};

export default function AccessPage() {
  const mapQuery = encodeURIComponent(SITE.address.full);

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold text-neutral-900">アクセス</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl leading-relaxed">
          {SITE.shortName}の所在地・アクセス方法をご案内します。
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <tbody>
              <tr className="border-b border-neutral-200">
                <th className="w-40 text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  所在地
                </th>
                <td className="px-4 py-3">
                  {SITE.address.postalCode} {SITE.address.full}
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  電話番号
                </th>
                <td className="px-4 py-3">{SITE.telephone}</td>
              </tr>
              <tr>
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  受付時間
                </th>
                <td className="px-4 py-3">9:00〜18:00（土日祝も受付、緊急時は24時間対応）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-neutral-900">交通アクセス</h2>
        <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
          <li>札幌市営地下鉄東西線「西11丁目」駅から徒歩8分</li>
          <li>札幌市電「西線11条」停留所から徒歩5分</li>
          <li>札幌駅前バスターミナルから路線バスで約15分</li>
          <li>お車の場合：施設専用駐車場あり（来訪者用3台）</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-neutral-900">地図</h2>
        <div className="mt-4 border border-neutral-200 rounded-lg overflow-hidden">
          <iframe
            title={`${SITE.shortName}の地図`}
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            className="w-full h-80"
            loading="lazy"
          />
        </div>
        <p className="mt-2 text-xs text-neutral-400">
          ※本サイトはデモサイトのため、地図上のピンは実在の場所を正確に示すものではありません。
        </p>
      </section>
    </>
  );
}
