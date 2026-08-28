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
    <header className="border-b border-amber-100/80 bg-[#fffdf8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fffdf8]/85 sticky top-0 z-20 shadow-[0_5px_25px_rgba(77,58,28,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-amber-50 grid place-items-center shadow-sm"><SunflowerMark className="w-8 h-8 shrink-0" /></span>
          <span className="flex flex-col">
            <span className="text-lg font-bold text-stone-900">
              {SITE.shortName}
            </span>
            <span className="text-xs text-stone-500">{SITE.operatorName}</span>
          </span>
        </Link>
        <nav aria-label="サイト内メインナビゲーション">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm font-medium text-stone-700">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`block rounded-full px-3 py-1.5 transition-colors hover:bg-amber-50 hover:text-amber-800 ${item.href === "/contact" ? "bg-[#2f684f] text-white hover:bg-[#214d3b] hover:text-white" : ""}`}>
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
