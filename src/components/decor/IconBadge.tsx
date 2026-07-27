import type { ReactNode } from "react";

type IconBadgeProps = {
  icon: ReactNode;
  tone?: "grass" | "sky" | "pink" | "sun" | "wood" | "orange";
  size?: "md" | "lg";
};

const tones: Record<NonNullable<IconBadgeProps["tone"]>, string> = {
  grass: "bg-[#e0f2e5]",
  sky: "bg-[#dff0fa]",
  pink: "bg-[#fce4ec]",
  sun: "bg-[#fef3d5]",
  orange: "bg-[#fde8d0]",
  wood: "bg-wood-50",
};

export default function IconBadge({ icon, tone = "grass", size = "md" }: IconBadgeProps) {
  const dimension = size === "lg" ? "h-20 w-20 text-3xl" : "h-[60px] w-[60px] text-2xl";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full ${dimension} ${tones[tone]}`}
      aria-hidden
    >
      {icon}
    </div>
  );
}
