type CloudProps = {
  className?: string;
};

export default function Cloud({ className = "" }: CloudProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      aria-hidden
      fill="none"
    >
      <ellipse cx="60" cy="65" rx="55" ry="30" fill="white" fillOpacity="0.9" />
      <ellipse cx="120" cy="60" rx="65" ry="35" fill="white" fillOpacity="0.9" />
      <ellipse cx="150" cy="70" rx="40" ry="24" fill="white" fillOpacity="0.9" />
      <ellipse cx="85" cy="45" rx="42" ry="28" fill="white" />
      <ellipse cx="130" cy="42" rx="38" ry="26" fill="white" />
    </svg>
  );
}
