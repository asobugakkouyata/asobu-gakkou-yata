import Image from "next/image";
import Cloud from "@/components/decor/Cloud";
import Bird from "@/components/decor/Bird";
import Leaf from "@/components/decor/Leaf";
import GrassHill from "@/components/decor/GrassHill";
import PillButton from "@/components/decor/PillButton";
import PaperAirplane from "@/components/decor/PaperAirplane";
import { heroCopy } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-x-clip bg-gradient-to-b from-sky-400 via-sky-200 to-sky-100">
      {/* sky decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Cloud className="absolute left-[-4%] top-8 w-40 animate-drift sm:w-56" />
        <Cloud className="absolute left-[20%] top-2 w-28 animate-drift-slow opacity-90 sm:w-36" />
        <Cloud className="absolute left-[55%] top-12 w-36 animate-drift sm:w-48" />
        <Cloud className="absolute left-[75%] -top-2 w-24 animate-drift-slow sm:w-32" />
        <Cloud className="absolute left-[38%] top-28 w-16 opacity-80 animate-drift sm:w-24" />

        <Bird color="white" className="absolute left-[8%] top-20 w-8 animate-float-y sm:w-10" />

        <PaperAirplane className="absolute right-[10%] top-8 w-24 opacity-90 sm:w-32" />

        <Leaf className="absolute left-[6%] bottom-24 w-8 rotate-[15deg] opacity-80 animate-float-y-slow sm:w-10" />
        <Leaf
          color="var(--color-sun-400)"
          className="absolute right-[6%] bottom-32 w-7 -rotate-12 opacity-80 animate-float-y sm:w-9"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 pb-0 pt-14 sm:px-6 sm:pt-16 md:grid-cols-2 md:items-center md:gap-4">
        <div className="text-center md:text-left">
          <h1 className="font-hand text-4xl leading-tight text-wood-700 drop-shadow-sm sm:text-5xl">
            {heroCopy.catchphrase}
          </h1>
          <p className="mt-3 text-lg font-bold text-wood-700 sm:text-xl">{heroCopy.subcopy}</p>
          <div className="dotted-divider mx-auto mt-5 w-32 md:mx-0" aria-hidden />
          <p className="mt-6 leading-loose text-wood-700">{heroCopy.description}</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <PillButton href="#about" icon="🌱">
              遊ぶ楽校やたについて
            </PillButton>
            <PillButton href="#trial" icon="✉️" variant="secondary">
              見学・体験について
            </PillButton>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 sm:gap-6">
          <div className="relative h-[260px] w-full max-w-sm sm:h-[300px] md:h-[340px]">
            <Image
              src="/hero-tree.png"
              alt="遊ぶ楽校やたの木"
              fill
              className="object-contain object-bottom animate-sway"
              priority
            />
          </div>
          <figure className="w-full max-w-md">
            <Image
              src="/staff/team-photo.jpg"
              alt="遊ぶ楽校やたのなかまたち"
              width={893}
              height={876}
              className="h-auto w-full rounded-[2rem] object-cover shadow-[0_22px_50px_-20px_rgba(107,66,38,0.45)] ring-4 ring-white sm:rounded-[2.75rem]"
              sizes="(max-width: 768px) 100vw, 28rem"
              priority
            />
          </figure>
        </div>
      </div>

      <div className="relative mt-4 h-32 sm:h-44">
        <GrassHill className="absolute bottom-0 h-full w-full" />
      </div>
    </section>
  );
}
