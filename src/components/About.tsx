import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import IconBadge from "@/components/decor/IconBadge";
import Bird from "@/components/decor/Bird";
import Leaf from "@/components/decor/Leaf";
import Dandelion from "@/components/decor/Dandelion";
import { pillars, aboutDescription, yataMessage } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="ABOUT" title="遊ぶ楽校やたについて" description={aboutDescription} />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90} className="flex flex-col items-center text-center">
              <IconBadge icon={pillar.icon} tone={pillar.tone} />
              <h3 className="mt-4 text-sm font-bold text-wood-700 sm:text-base">{pillar.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-wood-600 sm:text-sm">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* スタッフ写真（角丸・白い余白・柔らかい影で世界観に馴染ませる） */}
        <Reveal delay={60}>
          <figure className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="rounded-[1.8rem] bg-white p-2.5 shadow-[0_18px_45px_-20px_rgba(107,66,38,0.4)]">
              <Image
                src="/staff/team-photo.jpg"
                alt="遊ぶ楽校やたのスタッフ集合写真"
                width={893}
                height={876}
                className="h-auto w-full rounded-[1.4rem] object-cover"
                sizes="(max-width: 640px) 100vw, 36rem"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-wood-500">
              遊ぶ楽校やたのスタッフです
            </figcaption>
          </figure>
        </Reveal>

        {/* パンフレットのメッセージ（手書き風・温かみのある囲み枠・やさしいイラスト） */}
        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
            <div className="rounded-[2rem] bg-white p-3 shadow-[0_20px_55px_-26px_rgba(107,66,38,0.4)] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.6rem] border-2 border-dashed border-grass-300 bg-cream px-7 py-12 sm:px-14 sm:py-16">
                <Bird
                  color="var(--color-sky-400)"
                  className="pointer-events-none absolute left-5 top-6 w-9 opacity-80 sm:left-9 sm:w-11"
                />
                <Leaf className="pointer-events-none absolute right-6 top-7 w-6 rotate-12 opacity-70 sm:w-7" />
                <Dandelion className="pointer-events-none absolute bottom-5 right-5 w-12 opacity-90 sm:right-9 sm:w-16" />

                <p className="text-center font-hand text-2xl font-bold tracking-wide text-grass-600 sm:text-3xl">
                  {yataMessage.heading}
                </p>
                <div className="mt-8 space-y-6 text-center font-hand text-lg leading-relaxed text-wood-700 sm:mt-10 sm:text-xl">
                  {yataMessage.stanzas.map((lines, i) => (
                    <p key={i}>
                      {lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
