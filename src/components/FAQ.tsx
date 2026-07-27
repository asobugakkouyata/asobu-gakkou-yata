import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { faqItems } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="よくある質問" />
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="group rounded-2xl bg-white px-5 py-2 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center gap-2.5 py-2.5 font-bold text-grass-700 marker:content-none">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-grass-600 text-xs font-bold text-white">
                    Q
                  </span>
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <span className="ml-auto shrink-0 text-lg text-wood-300 transition-transform group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="py-0 pb-4 pl-[38px] text-sm leading-loose text-wood-500">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
