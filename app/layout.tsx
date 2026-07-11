import type { Metadata } from "next";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  title: {
    default: "My Site",
    template: "%s | My Site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
