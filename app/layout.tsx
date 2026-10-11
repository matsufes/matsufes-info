import type { Metadata } from "next";
import { Zen_Maru_Gothic, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matsufes.info"),
  title: {
    default: "第56回松ヶ崎祭",
    template: "%s | 第56回松ヶ崎祭",
  },
};

const zenmarugothic = Zen_Maru_Gothic({ subsets: ["latin"], variable: "--font-zen-maru-gothic", weight: ["400","500","700"] });
const zenkakugothicnew = Zen_Kaku_Gothic_New({ subsets: ["latin"], variable: "--font-zen-kaku-gothic-new", weight: ["400","500","700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${zenmarugothic.variable} ${zenkakugothicnew.variable}`}>
        {children}
        <div
          dangerouslySetInnerHTML={{ __html: "<script src=\"/inview.js?v=16qqctc\" defer></script>\n<script src=\"/scripts.js?v=6kf54h\" defer></script>" }}
        />
      </body>
    </html>
  );
}
