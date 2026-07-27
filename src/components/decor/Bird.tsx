type BirdProps = {
  className?: string;
  color?: string;
};

export default function Bird({ className = "", color = "currentColor" }: BirdProps) {
  return (
    <svg viewBox="0 0 32 20" className={className} aria-hidden fill="none">
      <path
        d="M1 13 C 6 4, 11 4, 16 11 C 21 4, 26 4, 31 13"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
