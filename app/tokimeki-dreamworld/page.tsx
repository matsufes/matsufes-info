import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ときめきドリームワールド",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "ときめきドリームワールド",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mwc8t7wu1mxfng" />
    </>
  );
}
