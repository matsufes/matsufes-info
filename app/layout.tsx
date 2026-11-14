import type { Metadata } from "next";
import { Inter, Zen_Maru_Gothic, Zen_Kaku_Gothic_New } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matsufes.info"),
  title: {
    default: "第56回松ヶ崎祭",
    template: "%s | 第56回松ヶ崎祭",
  },
  icons: { icon: "/assets/favicon-2.ico", apple: "/assets/apple-touch-icon-2.png" },
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const zenmarugothic = Zen_Maru_Gothic({ subsets: ["latin"], variable: "--font-zen-maru-gothic", weight: ["400","500","700"] });
const zenkakugothicnew = Zen_Kaku_Gothic_New({ subsets: ["latin"], variable: "--font-zen-kaku-gothic-new", weight: ["400","500","700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-75BCG9JTXY" />
        <script
          dangerouslySetInnerHTML={{ __html: "\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-75BCG9JTXY');\n" }}
        />
      </head>
      <body className={`${inter.variable} ${zenmarugothic.variable} ${zenkakugothicnew.variable}`}>
        {children}
        <Script src="/inview.js?v=16qqctc" strategy="afterInteractive" />
        <Script src="/scripts.js?v=93hbok" strategy="afterInteractive" />
      </body>
    </html>
  );
}
