import Link from "next/link";
import { SITE } from "@/lib/site";
import SunflowerMark from "@/components/SunflowerMark";

const NAV = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "サービス紹介" },
  { href: "/careers", label: "採用情報" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="border-b border-amber-100 bg-[#fffaf2]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fffaf2]/80 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <SunflowerMark className="w-9 h-9 shrink-0" />
          <span className="flex flex-col">
            <span className="text-lg font-bold text-stone-900">
              {SITE.shortName}
            </span>
            <span className="text-xs text-stone-500">{SITE.operatorName}</span>
          </span>
        </Link>
        <nav aria-label="サイト内メインナビゲーション">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-stone-700">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
