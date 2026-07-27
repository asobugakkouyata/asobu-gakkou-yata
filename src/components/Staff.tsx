import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { staffMembers } from "@/data/site";

export default function Staff() {
  return (
    <section id="staff" className="bg-[#f3f9ef] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="STAFF" title="スタッフ紹介" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((staff, i) => (
            <Reveal key={staff.name} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white p-7 text-center shadow-sm">
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#e8f5ed] text-3xl">
                  {staff.emoji}
                </div>
                <p className="mt-3 text-base font-bold text-grass-700">{staff.name}</p>
                <p className="mt-0.5 text-xs font-medium text-grass-600">{staff.role}</p>
                <p className="mt-2.5 text-left text-sm leading-relaxed text-wood-600">{staff.message}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
