import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { philosophyCards, philosophyMessage } from "@/data/site";

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="PHILOSOPHY" title="わたしたちの想い" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {philosophyCards.map((card, i) => (
            <Reveal key={card.num} delay={i * 100}>
              <div className="h-full rounded-2xl border-t-4 border-grass-500 bg-white p-7 shadow-sm">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ed] text-sm font-bold text-[#4a9d6e]">
                  {card.num}
                </span>
                <p className="text-sm leading-relaxed text-[#4a6840] text-pretty">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-9 max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="whitespace-pre-line text-lg font-bold leading-relaxed text-wood-700 text-balance">
              {philosophyMessage.emphasis}
            </p>
            <p className="mt-4 text-sm leading-loose text-[#4a6840] text-pretty">{philosophyMessage.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
