import { siteInfo } from "@/data/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={siteInfo.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagramをフォローする"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-sun-500 via-[#d6249f] to-[#6228d7] text-white shadow-lg transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
          <path d="M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.2.37a4.4 4.4 0 0 1 1.6 1.05c.48.47.8 1 1.05 1.6.15.4.32 1.1.37 2.2.06 1.24.06 1.6.06 4.52s0 3.28-.06 4.52c-.05 1.1-.22 1.8-.37 2.2a4.4 4.4 0 0 1-1.05 1.6 4.4 4.4 0 0 1-1.6 1.05c-.4.15-1.1.32-2.2.37-1.24.06-1.6.06-4.1.06s-2.86 0-4.1-.06c-1.1-.05-1.8-.22-2.2-.37a4.4 4.4 0 0 1-1.6-1.05 4.4 4.4 0 0 1-1.05-1.6c-.15-.4-.32-1.1-.37-2.2C2 15.28 2 14.92 2 12s0-3.28.06-4.52c.05-1.1.22-1.8.37-2.2a4.4 4.4 0 0 1 1.05-1.6 4.4 4.4 0 0 1 1.6-1.05c.4-.15 1.1-.32 2.2-.37C9.14 2.2 9.5 2.2 12 2.2Zm0 1.8c-2.66 0-2.97 0-4.02.06-.9.04-1.4.19-1.72.31-.43.17-.74.37-1.06.7-.32.32-.52.63-.7 1.06-.12.32-.27.81-.31 1.72C4.13 8.9 4.13 9.2 4.13 12s0 3.1.06 4.15c.04.9.19 1.4.31 1.72.17.43.37.74.7 1.06.32.32.63.52 1.06.7.32.12.81.27 1.72.31 1.05.06 1.36.06 4.02.06s2.97 0 4.02-.06c.9-.04 1.4-.19 1.72-.31.43-.17.74-.37 1.06-.7.32-.32.52-.63.7-1.06.12-.32.27-.81.31-1.72.06-1.05.06-1.36.06-4.15s0-3.1-.06-4.15c-.04-.9-.19-1.4-.31-1.72a2.8 2.8 0 0 0-.7-1.06 2.8 2.8 0 0 0-1.06-.7c-.32-.12-.81-.27-1.72-.31C14.97 4 14.66 4 12 4Zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5-2a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0Z" />
        </svg>
      </a>
      <a
        href={siteInfo.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="公式LINEで友だち追加"
        className="flex h-14 items-center gap-2 rounded-full bg-[#06C755] px-5 text-white shadow-lg transition-transform hover:scale-105 sm:h-16 sm:px-6"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.48 2 2 5.69 2 10.2c0 4.02 3.51 7.39 8.26 8.03.32.07.76.21.87.49.1.25.06.65.03.9l-.14.86c-.04.25-.2.99.86.54s5.71-3.36 7.79-5.76C21.19 13.5 22 11.94 22 10.2 22 5.69 17.52 2 12 2z" />
        </svg>
        <span className="text-sm font-bold leading-tight sm:text-base">
          公式LINE
          <br className="hidden sm:block" />
          友だち追加
        </span>
      </a>
    </div>
  );
}
