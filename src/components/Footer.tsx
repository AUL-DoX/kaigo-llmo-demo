import Link from "next/link";
import { SITE } from "@/lib/site";
import SunflowerMark from "@/components/SunflowerMark";

export default function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-[#fff3df] mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 text-sm text-stone-600 space-y-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <SunflowerMark className="w-6 h-6 shrink-0" />
              <p className="font-semibold text-stone-900">{SITE.shortName}</p>
            </div>
            <p className="mt-2">{SITE.operatorName}</p>
            <p className="mt-1">{SITE.address.full}</p>
            <p className="mt-1">TEL: {SITE.telephone}</p>
          </div>
          <div>
            <p className="font-semibold text-stone-900">サイト内リンク</p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/services" className="hover:text-amber-700">
                  サービス紹介
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-amber-700">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-700">
                  ご利用案内・FAQ
                </Link>
              </li>
              <li>
                <Link href="/access" className="hover:text-amber-700">
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-900">
              こういうサイトを作りたい方へ
            </p>
            <p className="mt-2">
              本サイトはLLMO設計の実例として制作したデモサイトです。
              同様の考え方でホームページを作りたい方は
              <Link href="/contact" className="text-amber-700 underline">
                お問い合わせページ
              </Link>
              よりご連絡ください。
            </p>
          </div>
        </div>
        <p className="text-xs text-stone-400 border-t border-amber-200 pt-4">
          ※本サイトはLLMO（LLM最適化）のデモサイトです。掲載されている施設名・法人名・住所・料金・求人内容などはすべて架空のものであり、実在の施設・団体とは一切関係ありません。
        </p>
      </div>
    </footer>
  );
}
