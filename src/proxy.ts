import { NextResponse, type NextRequest } from "next/server";
import { matchAiCrawler } from "@/lib/ai-crawlers";

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const crawlerName = matchAiCrawler(userAgent);

  if (crawlerName) {
    // Vercelの Runtime Logs（Observability > Logs）に構造化ログとして出力される。
    // 「どのLLMクローラーが、いつ、どのページに来たか」を後から検索・集計できる。
    console.log(
      JSON.stringify({
        event: "ai_crawler_hit",
        crawler: crawlerName,
        path: request.nextUrl.pathname,
        userAgent,
        timestamp: new Date().toISOString(),
      })
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 静的アセット（_next/static, _next/image, favicon など）は除外し、
     * ページ本体へのアクセスのみを対象にする。
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
