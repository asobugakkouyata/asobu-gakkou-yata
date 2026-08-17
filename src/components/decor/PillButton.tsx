import type { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
  className?: string;
};

export default function PillButton({
  href,
  children,
  icon,
  variant = "primary",
  target,
  rel,
  className = "",
}: PillButtonProps) {
  const base =
    "inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-5 py-3.5 text-[15px] font-bold shadow-sm transition-transform hover:scale-105 sm:w-auto sm:px-6 sm:text-base";
  const styles =
    variant === "primary"
      ? "bg-grass-600 text-white hover:bg-grass-700"
      : "border-2 border-wood-300 bg-white text-wood-700 hover:bg-wood-50";

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>
      {icon && (
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${
            variant === "primary" ? "bg-white/25" : "bg-grass-100 text-grass-700"
          }`}
          aria-hidden
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
      <span aria-hidden className="text-sm">
        ›
      </span>
    </a>
  );
}
