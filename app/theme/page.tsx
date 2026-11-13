import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "メインテーマ",
  description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "メインテーマ",
    description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g8i67sxpweq" />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-2523"
      />
      <p className="box-829">
        <Image
          src="/assets/pasted-artwork-345.svg"
          alt=""
          width={909}
          height={79}
          className="svg-527"
        />
      </p>
      <section className="box-830">
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-139"
        />
      </section>
      <section className="box-831">
        <Image
          src="/assets/pasted-artwork-338.svg"
          alt=""
          width={1096}
          height={67}
          className="svg-520"
        />
      </section>
      <section className="box-832">
        <Image
          src="/assets/pasted-artwork-341.svg"
          alt=""
          width={544}
          height={128}
          className="svg-523"
        />
      </section>
      <section className="box-835">
        <div className="box-833">
          <Image
            src="/assets/pasted-artwork-351.svg"
            alt=""
            width={123}
            height={99}
            className="pasted-artwork-svg-144"
          />
        </div>
        <p className="box-834">
          {"夢宙　むちゅー "}
        </p>
      </section>
      <section className="box-838">
        <div className="box-836">
          <Image
            src="/assets/pasted-artwork-342.svg"
            alt=""
            width={1040}
            height={859}
            className="svg-524"
          />
        </div>
        <div className="box-837">
          <Image
            src="/assets/pasted-artwork-343.svg"
            alt=""
            width={1061}
            height={1076}
            className="svg-525"
          />
        </div>
      </section>
      <section className="box-839">
        <span
          className="crisp-svg svg-526"
          style={{ ["--crisp-svg-width"]: "123px", ["--crisp-svg-ratio"]: "123 / 361" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={123} height={361} viewBox="0 0 123 361" />
          <Image
            src="/assets/pasted-artwork-344.svg"
            alt=""
            width={246}
            height={722}
          />
        </span>
      </section>
      <section data-inview className="el-2090">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2091">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-124"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-63">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-125"
          />
        </a>
        <span
          className="crisp-svg svg-454"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-31">
        <span
          className="crisp-svg svg-455"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-274.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2092">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-456"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-64">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-457"
          />
        </a>
      </section>
    </>
  );
}
