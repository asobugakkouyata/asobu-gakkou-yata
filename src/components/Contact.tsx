import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/decor/SectionHeading";
import { siteInfo } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#e8f8f0] to-[#fef9e0] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          <SectionHeading
            eyebrow="CONTACT"
            title="お問い合わせ"
            description="見学・体験のお申し込みやご質問など、お気軽にご連絡ください。"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${siteInfo.email}`}
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition-transform hover:scale-105"
            >
              <div className="text-3xl">✉️</div>
              <p className="mt-2 text-sm font-bold text-wood-700">メール</p>
              <p className="mt-1.5 break-all text-sm font-bold text-grass-600">{siteInfo.email}</p>
            </a>
            <a
              href={siteInfo.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition-transform hover:scale-105"
            >
              <div className="text-3xl">💬</div>
              <p className="mt-2 text-sm font-bold text-wood-700">公式LINE</p>
              <p className="mt-1.5 text-sm font-bold text-grass-600">LINEでお問い合わせ</p>
            </a>
            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition-transform hover:scale-105"
            >
              <div className="text-3xl">📷</div>
              <p className="mt-2 text-sm font-bold text-wood-700">Instagram</p>
              <p className="mt-1.5 text-sm font-bold text-grass-600">{siteInfo.instagramHandle}</p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
