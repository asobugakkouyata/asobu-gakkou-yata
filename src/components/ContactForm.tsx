"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-grass-400 bg-grass-100 p-8 text-center">
        <p className="text-3xl">🌳</p>
        <p className="mt-3 font-bold text-wood-700">
          お問い合わせありがとうございます。
        </p>
        <p className="mt-2 text-sm leading-loose text-wood-600">
          内容を確認のうえ、担当より2〜3営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-wood-700">
          お名前<span className="ml-1 text-xs font-normal text-grass-600">必須</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="やまだ たろう"
          className="w-full rounded-2xl border-2 border-wood-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-grass-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-wood-700">
          メールアドレス<span className="ml-1 text-xs font-normal text-grass-600">必須</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@email.com"
          className="w-full rounded-2xl border-2 border-wood-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-grass-500"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-bold text-wood-700">
          お問い合わせ内容
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-2xl border-2 border-wood-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-grass-500"
        >
          <option>見学・体験について</option>
          <option>入会について</option>
          <option>料金について</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-wood-700">
          メッセージ<span className="ml-1 text-xs font-normal text-grass-600">必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="お問い合わせ内容をご記入ください"
          className="w-full resize-none rounded-2xl border-2 border-wood-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-grass-500"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-grass-600 px-8 py-3.5 text-base font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-grass-700 sm:w-auto"
      >
        送信する
      </button>
    </form>
  );
}
