import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { accessLocations } from "@/data/site";

const dayColor: Record<string, string> = {
  mon: "bg-[#5ba8d9]",
  thu: "bg-[#6db33f]",
};

export default function Access() {
  return (
    <section id="access" className="bg-[#f3f9ef] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="ACCESS" title="アクセス" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {accessLocations.map((location, i) => (
            <Reveal key={location.name} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-6 text-left shadow-sm">
                <span
                  className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold text-white ${dayColor[location.tone]}`}
                >
                  {location.day}
                </span>
                <h3 className="mt-2.5 text-base font-bold text-wood-700">{location.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-wood-600 text-pretty">{location.address}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
