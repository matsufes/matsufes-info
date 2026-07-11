import type { Metadata } from "next";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://homepage-gray-psi.vercel.app/"),
  title: {
    default: "第56回松ヶ崎祭",
    template: "%s | 第56回松ヶ崎祭",
  },
  icons: { icon: "/assets/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
