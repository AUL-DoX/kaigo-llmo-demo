import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${SITE.shortName}へのお問い合わせ。ご入居・サービス利用に関するご相談、採用に関するお問い合わせを受け付けています。`,
};

export default function ContactPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold text-neutral-900">お問い合わせ</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl leading-relaxed">
          ご入居・サービスのご利用に関するご相談、採用に関するお問い合わせは、
          お電話またはメールにて承っております。
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-200">
            <tbody>
              <tr className="border-b border-neutral-200">
                <th className="w-40 text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  電話
                </th>
                <td className="px-4 py-3">
                  {SITE.telephone}（受付 9:00〜18:00、土日祝も対応）
                </td>
              </tr>
              <tr className="border-b border-neutral-200">
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  メール
                </th>
                <td className="px-4 py-3">{SITE.email}</td>
              </tr>
              <tr>
                <th className="text-left bg-neutral-50 px-4 py-3 font-medium text-neutral-700">
                  所在地
                </th>
                <td className="px-4 py-3">{SITE.address.full}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          ※本サイトはデモサイトのため、実際のフォーム送信・受付機能はありません。
          お問い合わせフォームのバックエンド実装は今後の検討事項です。
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 border-t border-neutral-200 mt-6">
        <h2 className="text-xl font-bold text-neutral-900">
          こういうサイトを作りたい方へ
        </h2>
        <p className="mt-3 text-neutral-700 leading-relaxed">
          このサイトは、LLM（AI）に正しく理解・引用されることを意識して設計した
          「LLMO（LLM最適化）」のデモサイトです。数値や条件を曖昧にせず明記すること、
          FAQ形式やJSON-LDなどの構造化データを適切に組み込むことを意識して制作しています。
          同じような考え方でホームページを作りたい、見直したいという方は、お気軽にご相談ください。
        </p>
      </section>
    </>
  );
}
