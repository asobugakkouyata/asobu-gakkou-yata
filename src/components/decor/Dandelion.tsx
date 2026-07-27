type DandelionProps = {
  className?: string;
};

// やさしい綿毛のイラスト（パンフレットの黄色い花に合わせた雰囲気）
export default function Dandelion({ className = "" }: DandelionProps) {
  const seeds = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    return {
      cx: 30 + Math.cos(angle) * 15,
      cy: 24 + Math.sin(angle) * 15,
    };
  });

  return (
    <svg viewBox="0 0 60 82" className={className} aria-hidden fill="none">
      <path
        d="M30 36 C 33 52, 33 64, 39 78"
        stroke="var(--color-grass-400)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {seeds.map((seed, i) => (
        <circle key={i} cx={seed.cx} cy={seed.cy} r="3" fill="var(--color-sun-400)" />
      ))}
      <circle cx="30" cy="24" r="4.5" fill="var(--color-sun-500)" />
    </svg>
  );
}
