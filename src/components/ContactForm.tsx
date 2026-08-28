"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        入力内容を確認しました。本サイトはデモサイトのため、実際には送信されていません。
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div>
        <label htmlFor="name" className="block font-semibold text-stone-800">氏名 <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">必須</span></label>
        <input id="name" name="name" type="text" autoComplete="name" required className="field mt-2" />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold text-stone-800">メールアドレス <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">必須</span></label>
        <input id="email" name="email" type="email" autoComplete="email" required className="field mt-2" />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold text-stone-800">お問い合わせ内容 <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">必須</span></label>
        <textarea id="message" name="message" rows={7} required className="field mt-2 resize-y" />
      </div>
      <button type="submit" className="sun-button w-full sm:w-auto">入力内容を送信する</button>
    </form>
  );
}
