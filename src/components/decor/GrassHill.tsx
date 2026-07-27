type GrassHillProps = {
  className?: string;
};

const flowerSpots = [
  { x: 60, y: 46 },
  { x: 180, y: 30 },
  { x: 340, y: 52 },
  { x: 520, y: 26 },
  { x: 700, y: 48 },
  { x: 880, y: 32 },
  { x: 1040, y: 50 },
  { x: 1180, y: 28 },
  { x: 1320, y: 46 },
];

export default function GrassHill({ className = "" }: GrassHillProps) {
  return (
    <svg
      viewBox="0 0 1400 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d="M0,70 C 150,10 300,90 480,50 C 660,10 800,80 980,45 C 1160,10 1280,70 1400,40 L1400,220 L0,220 Z"
        fill="var(--color-grass-400)"
      />
      <path
        d="M0,110 C 180,60 320,120 500,90 C 700,55 860,120 1040,90 C 1200,65 1300,105 1400,85 L1400,220 L0,220 Z"
        fill="var(--color-grass-600)"
      />
      {flowerSpots.map((spot, i) => (
        <g key={i} transform={`translate(${spot.x} ${spot.y})`}>
          <circle cx="-6" cy="0" r="3.4" fill="white" />
          <circle cx="6" cy="0" r="3.4" fill="white" />
          <circle cx="0" cy="-6" r="3.4" fill="white" />
          <circle cx="0" cy="6" r="3.4" fill="white" />
          <circle cx="0" cy="0" r="3.6" fill="var(--color-sun-400)" />
        </g>
      ))}
    </svg>
  );
}
