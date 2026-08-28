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
      <section className="bg-gradient-to-b from-amber-50 to-[#fffaf2]">
        <div className="max-w-5xl mx-auto px-4 pt-14 pb-8">
          <h1 className="text-3xl font-bold text-stone-900">アクセス</h1>
          <p className="mt-3 text-stone-700 max-w-2xl leading-relaxed">
            {SITE.shortName}の所在地・アクセス方法をご案内します。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="overflow-x-auto rounded-2xl border border-amber-100">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-amber-100">
                <th className="w-40 text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  所在地
                </th>
                <td className="px-4 py-3">
                  {SITE.address.postalCode} {SITE.address.full}
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  電話番号
                </th>
                <td className="px-4 py-3">{SITE.telephone}</td>
              </tr>
              <tr>
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  受付時間
                </th>
                <td className="px-4 py-3">9:00〜18:00（土日祝も受付、緊急時は24時間対応）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-stone-900">交通アクセス</h2>
        <ul className="mt-5 space-y-3">
          {[
            "札幌市営地下鉄東西線「西11丁目」駅から徒歩8分",
            "札幌市電「西線11条」停留所から徒歩5分",
            "札幌駅前バスターミナルから路線バスで約15分",
            "お車の場合：施設専用駐車場あり（来訪者用3台）",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-white border border-amber-100 rounded-xl px-4 py-3 text-sm text-stone-700"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-stone-900">地図</h2>
        <div className="mt-5 border border-amber-100 rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title={`${SITE.shortName}の地図`}
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            className="w-full h-80"
            loading="lazy"
          />
        </div>
        <p className="mt-2 text-xs text-stone-400">
          ※本サイトはデモサイトのため、地図上のピンは実在の場所を正確に示すものではありません。
        </p>
      </section>
    </>
  );
}
