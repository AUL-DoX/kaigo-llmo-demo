// 主要なLLM／AIクローラーのUser-Agent識別パターン
// 出典：各社の公開ドキュメント（OpenAI, Anthropic, Perplexity, Google, ByteDance, Amazon, Apple, Meta, Common Crawl 等）
export const AI_CRAWLERS: { name: string; pattern: RegExp }[] = [
  { name: "GPTBot", pattern: /GPTBot/i },
  { name: "ChatGPT-User", pattern: /ChatGPT-User/i },
  { name: "OAI-SearchBot", pattern: /OAI-SearchBot/i },
  { name: "ClaudeBot", pattern: /ClaudeBot/i },
  { name: "Claude-Web", pattern: /Claude-Web/i },
  { name: "anthropic-ai", pattern: /anthropic-ai/i },
  { name: "PerplexityBot", pattern: /PerplexityBot/i },
  { name: "Perplexity-User", pattern: /Perplexity-User/i },
  { name: "Google-Extended", pattern: /Google-Extended/i },
  { name: "GoogleOther", pattern: /GoogleOther/i },
  { name: "CCBot", pattern: /CCBot/i },
  { name: "Bytespider", pattern: /Bytespider/i },
  { name: "Amazonbot", pattern: /Amazonbot/i },
  { name: "Applebot-Extended", pattern: /Applebot-Extended/i },
  { name: "Meta-ExternalAgent", pattern: /Meta-ExternalAgent/i },
  { name: "Meta-ExternalFetcher", pattern: /Meta-ExternalFetcher/i },
  { name: "DuckAssistBot", pattern: /DuckAssistBot/i },
  { name: "Diffbot", pattern: /Diffbot/i },
  { name: "cohere-ai", pattern: /cohere-ai/i },
  { name: "MistralAI-User", pattern: /MistralAI-User/i },
];

export function matchAiCrawler(userAgent: string): string | null {
  for (const c of AI_CRAWLERS) {
    if (c.pattern.test(userAgent)) return c.name;
  }
  return null;
}
