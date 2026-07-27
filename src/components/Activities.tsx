import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { weekdayPrograms, extraEvents, activitiesIntro } from "@/data/site";

const dayColor: Record<string, string> = {
  mon: "bg-[#5ba8d9]",
  tue: "bg-[#e8a04a]",
  thu: "bg-[#6db33f]",
};

export default function Activities() {
  return (
    <section id="activity" className="bg-[#f3f9ef] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="ACTIVITIES" title="活動のようす" description={activitiesIntro} />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {weekdayPrograms.map((program, i) => (
            <Reveal key={program.day} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-7 text-left shadow-sm">
                <span
                  className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold text-white ${dayColor[program.tone]}`}
                >
                  {program.day}
                </span>
                <h3 className="mt-3 text-base font-bold text-wood-700">{program.title}</h3>
                <ul className="mt-2.5 space-y-1.5">
                  {program.items.map((item) => (
                    <li key={item} className="relative pl-4 text-sm leading-relaxed text-wood-600">
                      <span className="absolute left-0 text-grass-600">・</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-3.5 sm:grid-cols-3">
          {extraEvents.map((event, i) => (
            <Reveal key={event.title} delay={i * 100}>
              <div className="h-full rounded-xl bg-white p-5 text-center shadow-sm">
                <div className="text-2xl">{event.emoji}</div>
                <h4 className="mt-1.5 text-sm font-bold text-wood-700">{event.title}</h4>
                <p className="mt-1 text-xs text-wood-500">{event.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
