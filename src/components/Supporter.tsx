import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { supporterMessage, supporterPlans } from "@/data/site";

export default function Supporter() {
  return (
    <section id="supporter" className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="SUPPORTER" title="サポーターさん募集" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 rounded-2xl bg-white p-8 text-left shadow-sm">
            <p className="text-lg font-bold leading-relaxed text-wood-700">{supporterMessage.emphasis}</p>
            <div className="mt-4 space-y-3 text-sm leading-loose text-wood-600">
              {supporterMessage.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 text-sm leading-loose text-wood-600">
              <span className="font-bold text-wood-700">{supporterMessage.closingEmphasis}</span>
              <br />
              {supporterMessage.closingBody}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {supporterPlans.map((plan) => (
              <div key={plan.title} className="rounded-2xl border-t-4 border-grass-500 bg-white p-6 text-center shadow-sm">
                <h3 className="text-sm font-bold text-wood-700">{plan.title}</h3>
                <p className="mt-2.5 text-lg font-bold text-grass-600">{plan.price}</p>
                <p className="mt-1 text-xs text-wood-400">{plan.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
