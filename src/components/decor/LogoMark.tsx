type LogoMarkProps = {
  className?: string;
};

export default function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M32,58 C32,46 30,40 31,32" stroke="var(--color-wood-600)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="24" r="12" fill="var(--color-grass-400)" />
      <circle cx="36" cy="18" r="10" fill="var(--color-grass-500)" />
      <circle cx="40" cy="30" r="9" fill="var(--color-grass-300)" />
      <path
        d="M24,20.5 C23,19 21.3,19.3 21,20.9 C20.7,22.5 22.2,23.6 24,25.2 C25.8,23.6 27.3,22.5 27,20.9 C26.7,19.3 25,19 24,20.5 Z"
        fill="var(--color-pink-300)"
      />
      <path
        d="M36,15 C35.2,13.9 33.9,14.1 33.7,15.3 C33.5,16.5 34.6,17.4 36,18.6 C37.4,17.4 38.5,16.5 38.3,15.3 C38.1,14.1 36.8,13.9 36,15 Z"
        fill="var(--color-sun-400)"
      />
    </svg>
  );
}
