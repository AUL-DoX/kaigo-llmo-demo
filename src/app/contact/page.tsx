import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SunflowerMark from "@/components/SunflowerMark";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${SITE.shortName}へのお問い合わせ。ご入居・サービス利用に関するご相談、採用に関するお問い合わせを受け付けています。`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-[#fffaf2]">
        <div className="max-w-5xl mx-auto px-4 pt-14 pb-8">
          <h1 className="text-3xl font-bold text-stone-900">お問い合わせ</h1>
          <p className="mt-3 text-stone-700 max-w-2xl leading-relaxed">
            ご入居・サービスのご利用に関するご相談、採用に関するお問い合わせは、
            お電話またはメールにて承っております。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="overflow-x-auto rounded-2xl border border-amber-100">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-amber-100">
                <th className="w-40 text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  電話
                </th>
                <td className="px-4 py-3">
                  {SITE.telephone}（受付 9:00〜18:00、土日祝も対応）
                </td>
              </tr>
              <tr className="border-b border-amber-100">
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  メール
                </th>
                <td className="px-4 py-3">{SITE.email}</td>
              </tr>
              <tr>
                <th className="text-left bg-amber-50 px-4 py-3 font-medium text-stone-700">
                  所在地
                </th>
                <td className="px-4 py-3">{SITE.address.full}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-stone-500">
          ※本サイトはデモサイトのため、実際のフォーム送信・受付機能はありません。
          お問い合わせフォームのバックエンド実装は今後の検討事項です。
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-14 border-t border-amber-100 mt-6">
        <div className="flex items-center gap-3">
          <SunflowerMark className="w-8 h-8 shrink-0" />
          <h2 className="text-xl font-bold text-stone-900">
            こういうサイトを作りたい方へ
          </h2>
        </div>
        <p className="mt-4 text-stone-700 leading-relaxed">
          このサイトは、LLM（AI）に正しく理解・引用されることを意識して設計した
          「LLMO（LLM最適化）」のデモサイトです。数値や条件を曖昧にせず明記すること、
          FAQ形式やJSON-LDなどの構造化データを適切に組み込むことを意識して制作しています。
          同じような考え方でホームページを作りたい、見直したいという方は、お気軽にご相談ください。
        </p>
      </section>
    </>
  );
}
