import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchExhibit, formatHours, mapHref, placeText } from "@/lib/exhibits";
import SiteHeader from "../SiteHeader";
import BookmarkButton from "./BookmarkButton";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = await fetchExhibit((await params).slug);
  if (!e) return { title: "出展検索" };
  const description = e.description || "松ヶ崎祭の全出展を検索いただけます。";
  return {
    title: e.name,
    description,
    openGraph: { title: e.name, description, images: [e.imageUrl || "/assets/ogp-2.png"] },
    twitter: { card: "summary_large_image" },
  };
}

function Crisp({ src, w, h, className }: { src: string; w: number; h: number; className: string }) {
  return (
    <span className={`crisp-svg ${className}`}>
      <svg aria-hidden="true" width={w} height={h} viewBox={`0 0 ${w} ${h}`} />
      <Image src={src} alt="" width={w * 2} height={h * 2} />
    </span>
  );
}

export default async function Page({ params }: Props) {
  const e = await fetchExhibit((await params).slug);
  if (!e) notFound();

  const hours = formatHours(e.businessHours);
  const place = placeText(e);
  const voteCategory = (e.categories?.["投票カテゴリ"] ?? []).join("・");
  const message = e.customAnswers?.["皆さまへ"] ?? "";
  const sns = [
    { href: e.snsX, label: "X", src: "/assets/pasted-artwork-235.svg", w: 40, h: 37, className: "x-2" },
    { href: e.snsInstagram, label: "Instagram", src: "/assets/pasted-artwork-234.svg", w: 44, h: 44, className: "el-166" },
    { href: e.snsWeb, label: "Webサイト", src: "/assets/pasted-artwork-233.svg", w: 50, h: 51, className: "el-165" },
  ].filter((s) => /^https?:\/\//.test(s.href));

  return (
    <>
      <span hidden data-page-body="page_muzoss702k" />
      <SiteHeader />
      <h1 className="el-152">{e.name}</h1>
      <section className="el-153">
        <Image src="/assets/pasted-artwork-111.svg" alt="" width={1246} height={34} className="pasted-artwork-svg-36" />
      </section>
      <p className="el-154">{e.exhibitorName}</p>
      <section className="box-162">
        {message && (
          <div className="el-158">
            <Crisp src="/assets/pasted-artwork-229.svg" w={439} h={96} className="pasted-artwork-svg-37" />
            <p className="box-163">{message}</p>
          </div>
        )}
        <div className="icon-2">
          <Crisp src="/assets/pasted-artwork-228.svg" w={351} h={351} className="pasted-artwork-svg-38" />
          {e.imageUrl && <Image src={e.imageUrl} alt={e.name} width={278} height={278} className="svg-158" />}
        </div>
        <div className="el-159" />
        <Image src="/assets/pasted-artwork-2.svg" alt="いつ" width={150} height={150} className="el-155" />
        <Image src="/assets/pasted-artwork-3.svg" alt="どこで" width={158} height={150} className="el-156" />
        <p className="el-160">{hours.join("　") || "ー"}</p>
        <p className="el-161">{place || "ー"}</p>
        <a href={mapHref(e)} className="crisp-svg el-162">
          <svg aria-hidden="true" width={198} height={54} viewBox="0 0 198 54" />
          <Image src="/assets/pasted-artwork-231.svg" alt="地図を開く" width={396} height={108} />
        </a>
        {voteCategory && <p className="m-1-3">{voteCategory}</p>}
        <p className="el-163">{(e.categories?.["大分類"] ?? []).join("・")}</p>
        <p className="el-164">{e.customAnswers?.["中分類"] ?? ""}</p>
      </section>
      <section className="el-998">
        <Crisp src="/assets/pasted-artwork-2.svg" w={150} h={150} className="pasted-artwork-svg-65" />
        <Crisp src="/assets/pasted-artwork-3.svg" w={158} h={150} className="pasted-artwork-svg-66" />
        <p className="box-230">{hours.join("\n") || "ー"}</p>
        <p className="box-231">{place || "ー"}</p>
      </section>
      <section className="el-168">
        <div className="box-170" />
        <p className="box-171">{e.description}</p>
      </section>
      <section className="box-222">
        <BookmarkButton publicId={e.publicId} />
        <Link href="/m-1" className="m-1-25">
          <Image src="/assets/pasted-artwork-236.svg" alt="" width={162} height={237} className="svg-159" />
          <p className="box-168">{"m-1グランプリに\n投票する"}</p>
        </Link>
        <div className="pc-3">
          <Crisp src="/assets/pasted-artwork-230.svg" w={726} h={181} className="pasted-artwork-svg-64" />
          <p className="box-229">{e.description}</p>
        </div>
      </section>
      {sns.length > 0 && (
        <section className="box-172">
          {sns.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={s.className}>
              <Image src={s.src} alt={s.label} width={s.w} height={s.h} style={{ width: "100%", height: "auto" }} />
            </a>
          ))}
        </section>
      )}
      <section className="box-169">
        <Link href="/search" className="crisp-svg el-167">
          <svg aria-hidden="true" width={198} height={54} viewBox="0 0 198 54" />
          <Image src="/assets/pasted-artwork-238.svg" alt="一覧にもどる" width={396} height={108} />
        </Link>
      </section>
      <Image data-inview src="/assets/image-6.svg" alt="" width={1920} height={713} className="el-157" />
    </>
  );
}
