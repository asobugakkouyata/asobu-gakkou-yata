import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { guideItems, priceCards } from "@/data/site";

export default function Guide() {
  return (
    <section id="guide" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="GUIDE" title="利用案内" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm">
            <table className="w-full border-collapse text-left">
              <tbody>
                {guideItems.map((item) => (
                  <tr key={item.label} className="border-b border-[#e8e4d8] last:border-b-0">
                    <th className="w-28 whitespace-nowrap bg-[#f8f6ee] px-4 py-3.5 align-top text-sm font-bold text-grass-700 sm:w-32 sm:px-6">
                      {item.label}
                    </th>
                    <td className="whitespace-pre-line px-4 py-3.5 text-sm leading-relaxed text-wood-600 sm:px-6">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h3 id="trial" className="mt-10 scroll-mt-24 text-center text-lg font-bold text-grass-700">
            利用料金
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {priceCards.map((card) => (
              <div key={card.plan} className="rounded-xl bg-white p-5 text-center shadow-sm">
                <p className="text-sm font-bold text-wood-700">{card.plan}</p>
                <p className="mt-1 text-lg font-bold text-grass-600">
                  {card.price}
                  {card.unit && <span className="text-xs font-normal text-wood-400">{card.unit}</span>}
                </p>
                {card.note && <p className="mt-0.5 text-xs text-wood-400">{card.note}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
