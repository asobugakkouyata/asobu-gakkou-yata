import type { Metadata, Viewport } from "next";
import { Zen_Maru_Gothic, Yomogi } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const yomogi = Yomogi({
  variable: "--font-yomogi",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://asobu-gakkou-yata.jp";
const siteTitle = "遊ぶ楽校やた｜自然の中で、遊びながら育つ。";
const siteDescription =
  "遊ぶ楽校やたは、北九州市門司区のフリースクールです。ワクワク ドキドキ、子ども時代を思いっきり子どもらしく。見学・体験受付中。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s｜遊ぶ楽校やた",
  },
  description: siteDescription,
  keywords: [
    "遊ぶ楽校やた",
    "フリースクール",
    "北九州市",
    "門司区",
    "不登校",
    "子育て",
    "居場所",
    "体験活動",
  ],
  authors: [{ name: "遊ぶ楽校やた" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "遊ぶ楽校やた",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "遊ぶ楽校やた",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a9744f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaruGothic.variable} ${yomogi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
