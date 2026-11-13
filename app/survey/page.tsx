import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ページ 8",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "ページ 8",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf5w3hl70" />
      <Header />
      <section data-inview className="el-57">
        <Image
          src="/assets/pasted-artwork-217.svg"
          alt=""
          width={1440}
          height={489}
          className="pasted-artwork-svg-151"
        />
      </section>
      <p className="box-50">
        <Image
          src="/assets/pasted-artwork-297.svg"
          alt=""
          width={840}
          height={129}
          className="svg-491"
        />
      </p>
      <section className="box-51">
        <Image
          src="/assets/pasted-artwork-282.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-150"
        />
      </section>
      <p className="box-909">
        {"松ヶ崎祭に来てくれて　ほんとーにありがとう。\n松ヶ崎祭は　どうだった？　きみの感想　教えてね。\n来年の松ヶ崎祭も　もっともっと　楽しくするからね。\nまた来年も　会えたらいいな。"}
      </p>
      <section className="box-52">
        <a href="https://docs.google.com/forms/d/1mF7IUTw-hBKqgomKGNHPegECGxmmGigbrLpUeFXWLpU/edit" className="el-55">
          <Image
            src="/assets/pasted-artwork-296.svg"
            alt=""
            width={769}
            height={383}
            className="el-2376"
          />
        </a>
        <Image
          src="/assets/pasted-artwork-295.svg"
          alt=""
          width={1920}
          height={1126}
          className="svg-490"
        />
      </section>
      <p className="box-152">
        {"アンケート回答後、スクリーンショットなどで画面を保存するのを忘れないでね。"}
      </p>
      <section data-inview className="el-2339">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2340">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-123"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-57">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-124"
          />
        </a>
        <span
          className="crisp-svg svg-447"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-278.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-28">
        <span
          className="crisp-svg svg-448"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2341">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="svg-449"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-58">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="svg-450"
          />
        </a>
      </section>
    </>
  );
}
