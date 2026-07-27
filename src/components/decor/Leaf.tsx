type LeafProps = {
  className?: string;
  color?: string;
};

export default function Leaf({ className = "", color = "var(--color-grass-500)" }: LeafProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path
        d="M8,32 C6,18 14,6 32,6 C32,22 22,32 8,32 Z"
        fill={color}
      />
      <path d="M9,31 C16,22 22,16 31,7" stroke="white" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
