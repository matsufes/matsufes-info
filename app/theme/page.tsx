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
    images: ["/assets/ogp-2.png"],
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
        className="el-2482"
      />
      <p className="box-824">
        <Image
          src="/assets/pasted-artwork-345.svg"
          alt=""
          width={909}
          height={79}
          className="svg-450"
        />
      </p>
      <section className="box-825">
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-133"
        />
      </section>
      <section className="box-826">
        <Image
          src="/assets/pasted-artwork-338.svg"
          alt=""
          width={1096}
          height={67}
          className="svg-443"
        />
      </section>
      <section className="box-827">
        <Image
          src="/assets/pasted-artwork-341.svg"
          alt=""
          width={544}
          height={128}
          className="svg-446"
        />
      </section>
      <section className="box-830">
        <div className="box-828">
          <Image
            src="/assets/pasted-artwork-351.svg"
            alt=""
            width={123}
            height={99}
            className="pasted-artwork-svg-138"
          />
        </div>
        <p className="box-829">
          {"夢宙　むちゅー "}
        </p>
      </section>
      <section className="box-833">
        <div className="box-831">
          <Image
            src="/assets/pasted-artwork-342.svg"
            alt=""
            width={1040}
            height={859}
            className="svg-447"
          />
        </div>
        <div className="box-832">
          <Image
            src="/assets/pasted-artwork-343.svg"
            alt=""
            width={1061}
            height={1076}
            className="svg-448"
          />
        </div>
      </section>
      <section className="box-834">
        <span
          className="crisp-svg svg-449"
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
      <section data-inview className="el-2016">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2017">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-118"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-59">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-119"
          />
        </a>
        <span
          className="crisp-svg svg-408"
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
      <section data-inview className="footer-29">
        <span
          className="crisp-svg svg-409"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2018">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-410"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-60">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-411"
          />
        </a>
      </section>
    </>
  );
}
