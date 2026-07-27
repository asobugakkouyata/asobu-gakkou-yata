"use client";

import { useState } from "react";
import LogoMark from "@/components/decor/LogoMark";
import { navLinks, headerNavLinks, siteInfo } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-wood-200/60 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <LogoMark className="h-11 w-11 sm:h-12 sm:w-12" />
          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap font-hand text-lg text-wood-700 sm:text-xl">
              {siteInfo.name}
            </span>
            <span className="whitespace-nowrap text-[11px] font-bold text-grass-600 sm:text-xs">
              {siteInfo.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden xl:block">
          <ul className="flex flex-nowrap items-center gap-x-3.5 whitespace-nowrap text-[13px] font-bold text-wood-700 2xl:gap-x-5 2xl:text-sm">
            {headerNavLinks.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-grass-600" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-grass-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 hover:bg-grass-700 xl:inline-flex"
        >
          <span aria-hidden>✉️</span>
          お問い合わせ
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-wood-300 xl:hidden"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 rounded bg-wood-700 transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded bg-wood-700 transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded bg-wood-700 transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-wood-200/60 bg-cream xl:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-base font-bold text-wood-700 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block rounded-lg px-2 py-2.5 transition-colors hover:bg-grass-100 hover:text-grass-700"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
