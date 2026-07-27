type PaperAirplaneProps = {
  className?: string;
};

export default function PaperAirplane({ className = "" }: PaperAirplaneProps) {
  return (
    <svg viewBox="0 0 140 60" className={className} aria-hidden fill="none">
      <path
        d="M4,30 Q40,26 74,20"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="1 7"
        strokeLinecap="round"
        opacity="0.85"
      />
      <g transform="translate(78 16) rotate(-10)">
        <path d="M0,0 L34,7 L0,14 L8,7 Z" fill="white" opacity="0.95" />
        <path d="M0,0 L18,7 L0,14 Z" fill="white" opacity="0.7" />
      </g>
    </svg>
  );
}
