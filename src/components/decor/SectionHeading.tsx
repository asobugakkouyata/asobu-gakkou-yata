type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <span className="text-sm font-bold tracking-wide text-grass-600">{eyebrow}</span>
      )}
      <h2
        className={`mt-1 flex items-center gap-2 text-2xl font-black text-wood-700 sm:text-3xl ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span aria-hidden className="text-xl sm:text-2xl">
          🌿
        </span>
        {title}
        <span aria-hidden className="text-xl sm:text-2xl">
          🌿
        </span>
      </h2>
      <div
        className={`dotted-divider mt-4 w-28 ${isCenter ? "mx-auto" : ""}`}
        aria-hidden
      />
      {description && (
        <p
          className={`mt-5 leading-loose text-wood-600 ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
