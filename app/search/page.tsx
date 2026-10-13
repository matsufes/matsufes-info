import type { Metadata } from "next";
import Image from "next/image";
import { exhibitDays, exhibitHref, exhibitSpots, fetchExhibits, normalize, placeText } from "@/lib/exhibits";
import SiteHeader from "./SiteHeader";
import SearchList, { type SearchItem } from "./SearchList";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "出展検索",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    title: "出展検索",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : typeof sp.field === "string" ? sp.field : "";
  const items: SearchItem[] = (await fetchExhibits()).map((e) => ({
    href: exhibitHref(e),
    name: e.name,
    exhibitorName: e.exhibitorName || e.groupName,
    imageUrl: e.imageUrl,
    message: e.customAnswers?.["皆さまへ"] ?? "",
    place: placeText(e),
    voteCategory: (e.categories?.["投票カテゴリ"] ?? []).join("・"),
    middleCategory: e.customAnswers?.["中分類"] ?? "",
    type: e.type,
    days: exhibitDays(e),
    spots: exhibitSpots(e),
    bigCategories: e.categories?.["大分類"] ?? [],
    text: normalize(
      [
        e.name,
        e.exhibitorName,
        e.groupName,
        e.description,
        e.type,
        e.exhibitNo,
        e.venue,
        e.place,
        ...(e.tags ?? []),
        ...Object.values(e.customAnswers ?? {}),
        ...Object.values(e.categories ?? {}).flat(),
      ].join("\n")
    ),
  }));

  return (
    <>
      <span hidden data-page-body="page_msotieex1e" />
      <SiteHeader />
      <p className="el-28">
        <span
          className="crisp-svg svg-5"
        >
          <svg aria-hidden="true" width={603} height={159} viewBox="0 0 603 159" />
          <Image
            src="/assets/pasted-artwork-29.svg"
            alt=""
            width={1206}
            height={318}
          />
        </span>
      </p>
      <section className="el-54">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-12"
        />
      </section>
      <p className="el-170">
        {"松ヶ崎祭には　企画がいっぱい。\n気になる言葉から　きみにぴったりの企画を見つけてね。"}
      </p>
      <SearchList items={items} initialQuery={q} />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-30"
      />
    </>
  );
}
