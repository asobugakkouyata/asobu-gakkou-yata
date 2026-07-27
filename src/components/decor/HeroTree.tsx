type HeroTreeProps = {
  className?: string;
};

const HEART = "M0,3.4 C-3.6,0.4 -4.6,-2.4 -2.4,-4 C-1,-5 0,-3.6 0,-2.4 C0,-3.6 1,-5 2.4,-4 C4.6,-2.4 3.6,0.4 0,3.4 Z";

const canopyBlobs = [
  { cx: 158, cy: 182, r: 68, fill: "var(--color-grass-300)" },
  { cx: 240, cy: 122, r: 86, fill: "var(--color-grass-400)" },
  { cx: 324, cy: 178, r: 74, fill: "var(--color-grass-300)" },
  { cx: 238, cy: 226, r: 92, fill: "var(--color-grass-500)" },
  { cx: 170, cy: 238, r: 58, fill: "var(--color-grass-400)" },
  { cx: 306, cy: 240, r: 60, fill: "var(--color-grass-400)" },
  { cx: 200, cy: 130, r: 50, fill: "var(--color-grass-200)" },
  { cx: 288, cy: 128, r: 48, fill: "var(--color-grass-200)" },
];

const hearts: { x: number; y: number; s: number; color: string }[] = [
  { x: 172, y: 112, s: 1.5, color: "var(--color-pink-300)" },
  { x: 228, y: 88, s: 1.2, color: "var(--color-sun-400)" },
  { x: 288, y: 104, s: 1.4, color: "var(--color-pink-300)" },
  { x: 332, y: 144, s: 1.05, color: "var(--color-grass-100)" },
  { x: 148, y: 158, s: 1.25, color: "var(--color-sun-400)" },
  { x: 202, y: 150, s: 0.95, color: "var(--color-grass-100)" },
  { x: 262, y: 160, s: 1.15, color: "var(--color-pink-300)" },
  { x: 312, y: 182, s: 1.35, color: "var(--color-sun-400)" },
  { x: 180, y: 202, s: 1.05, color: "var(--color-pink-300)" },
  { x: 240, y: 212, s: 1.25, color: "var(--color-grass-100)" },
  { x: 292, y: 226, s: 0.95, color: "var(--color-sun-400)" },
  { x: 132, y: 132, s: 1.05, color: "var(--color-grass-100)" },
  { x: 352, y: 112, s: 0.9, color: "var(--color-pink-300)" },
  { x: 208, y: 122, s: 0.85, color: "var(--color-pink-300)" },
  { x: 254, y: 138, s: 0.85, color: "var(--color-sky-300)" },
  { x: 158, y: 116, s: 0.85, color: "var(--color-purple-300)" },
  { x: 306, y: 200, s: 0.9, color: "var(--color-purple-300)" },
  { x: 218, y: 182, s: 0.8, color: "var(--color-sky-300)" },
];

const confetti = [
  { x: 190, y: 100, color: "var(--color-teal-300)", rot: 20 },
  { x: 270, y: 172, color: "var(--color-coral-400)", rot: -30 },
  { x: 320, y: 220, color: "var(--color-purple-300)", rot: 10 },
  { x: 160, y: 210, color: "var(--color-teal-300)", rot: -15 },
  { x: 216, y: 96, color: "var(--color-purple-300)", rot: -8 },
  { x: 340, y: 168, color: "var(--color-coral-400)", rot: 25 },
  { x: 140, y: 176, color: "var(--color-sky-300)", rot: -20 },
  { x: 258, y: 214, color: "var(--color-teal-300)", rot: 12 },
];

export default function HeroTree({ className = "" }: HeroTreeProps) {
  return (
    <svg viewBox="0 0 480 560" className={className} aria-hidden fill="none">
      <ellipse cx="240" cy="538" rx="150" ry="16" fill="var(--color-grass-700)" opacity="0.18" />

      <path
        d="M244,560 C244,460 236,400 238,340 C239,310 226,300 214,278 M238,340 C239,300 254,296 268,262"
        stroke="var(--color-wood-600)"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M244,560 C244,460 236,400 238,340"
        stroke="var(--color-wood-500)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {canopyBlobs.map((b, i) => (
        <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.fill} />
      ))}

      {hearts.map((h, i) => (
        <path
          key={i}
          d={HEART}
          fill={h.color}
          transform={`translate(${h.x} ${h.y}) scale(${h.s * 3.6})`}
        />
      ))}

      {confetti.map((c, i) => (
        <path
          key={i}
          d="M0,-6 L6,5 L-6,5 Z"
          fill={c.color}
          transform={`translate(${c.x} ${c.y}) rotate(${c.rot})`}
        />
      ))}

      {/* perched bird */}
      <g transform="translate(298 246)">
        <ellipse cx="0" cy="0" rx="11" ry="8" fill="var(--color-wood-800)" />
        <circle cx="9" cy="-6" r="6" fill="var(--color-wood-800)" />
        <path d="M15,-6 L21,-4 L15,-2 Z" fill="var(--color-sun-500)" />
        <path d="M-8,3 L-11,10 M-2,4 L-3,11" stroke="var(--color-wood-800)" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
