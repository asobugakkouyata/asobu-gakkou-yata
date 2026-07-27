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
    "inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-base font-bold shadow-sm transition-transform hover:scale-105";
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
