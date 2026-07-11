import type { Metadata } from "next";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  title: {
    default: "matsufes.info",
    template: "%s | matsufes.info",
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
