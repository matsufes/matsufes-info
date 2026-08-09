import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  title: {
    default: "My Site",
    template: "%s | My Site",
  },
};

const zenkakugothicnew = Zen_Kaku_Gothic_New({ subsets: ["latin"], variable: "--font-zen-kaku-gothic-new", weight: ["400","500","700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${zenkakugothicnew.variable}`}>
        {children}
        <div
          dangerouslySetInnerHTML={{ __html: "<script src=\"/toggle.js\" defer></script>" }}
        />
      </body>
    </html>
  );
}
