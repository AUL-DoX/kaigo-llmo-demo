import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "サービス紹介" },
  { href: "/careers", label: "採用情報" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold text-neutral-900">
            {SITE.shortName}
          </span>
          <span className="text-xs text-neutral-500">{SITE.operatorName}</span>
        </Link>
        <nav aria-label="サイト内メインナビゲーション">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-700">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-emerald-700">
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
