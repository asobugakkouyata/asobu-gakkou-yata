type WaveCapProps = {
  fill: string;
  className?: string;
  flip?: boolean;
};

export default function WaveCap({ fill, className = "", flip = false }: WaveCapProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full translate-y-1/2 sm:h-20 ${
        flip ? "-scale-y-100" : ""
      } ${className}`}
      aria-hidden
    >
      <path
        d="M0,40 C180,8 360,72 540,40 C720,8 900,72 1080,40 C1260,8 1350,28 1440,38 L1440,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  );
}
