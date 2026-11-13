import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

// Load Plus Jakarta Sans as a variable font (supports weights 200 through 800 dynamically)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fascinateInline = localFont({
  src: "../public/Fascinate_Inline/FascinateInline-Regular.ttf",
  variable: "--font-fascinate-inline",
  display: "swap",
});

const balsamiqSans = localFont({
  src: [
    {
      path: "../public/Balsamiq_Sans/BalsamiqSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Balsamiq_Sans/BalsamiqSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Balsamiq_Sans/BalsamiqSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Balsamiq_Sans/BalsamiqSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-balsamiq-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Draw The Dreams",
    "art teacher",
    "artist portfolio",
    "art classes",
    "creative studio",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fascinateInline.variable} ${balsamiqSans.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col font-jakarta">
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}