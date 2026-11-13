import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
  description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
    description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mvzcltff5ss5c7" />
      <Header />
      <section className="el-2019">
        <div data-inview className="el-2753">
          <Image
            src="/assets/hero.webp"
            alt=""
            width={1131}
            height={1600}
            className="el-2481"
          />
        </div>
        <div data-inview className="el-2015">
          <Image
            src="/assets/cloud.webp"
            alt=""
            width={1230}
            height={1600}
            className="el-2039"
          />
        </div>
        <div className="box-766">
          <div className="el-2017">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-2016"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-2018">
            <span
              className="crisp-svg svg-571"
              style={{ ["--crisp-svg-width"]: "659px", ["--crisp-svg-ratio"]: "659 / 329" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={659} height={329} viewBox="0 0 659 329" />
              <Image
                src="/assets/pasted-artwork-385.svg"
                alt="11.13(きん)17:00-19:10"
                width={1318}
                height={658}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el-2021">
        <div className="el-2020">
          <Image
            src="/assets/pasted-artwork-389.svg"
            alt=""
            width={718}
            height={233}
            className="svg-575"
          />
        </div>
      </section>
      <section className="box-768">
        <Link href="/search" className="el-2023">
          <Image
            src="/assets/image-2.webp"
            alt=""
            width={720}
            height={596}
            className="icon-7"
          />
          <p className="box-767">
            <span
              className="crisp-svg el-2022"
              style={{ ["--crisp-svg-width"]: "164px", ["--crisp-svg-ratio"]: "164 / 119" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-194.svg"
                alt="言葉からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="box-771">
        <a href="/navigation" className="el-2025">
          <Image
            src="/assets/image-3.webp"
            alt=""
            width={655}
            height={1178}
            className="icon-8"
          />
          <p className="box-769">
            <span
              className="crisp-svg el-2024"
              style={{ ["--crisp-svg-width"]: "164px", ["--crisp-svg-ratio"]: "164 / 119" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-195.svg"
                alt="地図からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </a>
        <Link href="/schedule/0" className="el-2026">
          <Image
            src="/assets/image-4.webp"
            alt=""
            width={617}
            height={620}
            className="el-2040"
          />
          <p className="box-770">
            <span
              className="crisp-svg el-2041"
              style={{ ["--crisp-svg-width"]: "202px", ["--crisp-svg-ratio"]: "202 / 111" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={202} height={111} viewBox="0 0 202 111" />
              <Image
                src="/assets/pasted-artwork-272.svg"
                alt="日程表からさがす"
                width={404}
                height={222}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="el-2028">
        <div className="el-2027">
          <Image
            src="/assets/pasted-artwork-390.svg"
            alt=""
            width={718}
            height={230}
            className="svg-576"
          />
        </div>
      </section>
      <section data-inview className="el-2029">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          src="/assets/image-5.webp"
          alt="ご来場の皆さまへ"
          width={1600}
          height={1056}
          className="el-2482"
        />
      </section>
      <section data-inview className="el-2030">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          src="/assets/image-6.webp"
          alt="行き方・会場地図"
          width={1600}
          height={1056}
          className="el-2483"
        />
      </section>
      <section data-inview className="el-2031">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/question\"}]}]"}
          src="/assets/image-7.webp"
          alt="よくあるご質問"
          width={1600}
          height={1103}
          className="el-2042"
        />
      </section>
      <section data-inview className="el-2032">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          src="/assets/image-8.webp"
          alt="来場者アンケート"
          width={1600}
          height={1104}
          className="el-2484"
        />
      </section>
      <section className="box-772">
        <span
          className="crisp-svg svg-394"
          style={{ ["--crisp-svg-width"]: "1248px", ["--crisp-svg-ratio"]: "1248 / 195" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-130.svg"
            alt="今年から松ヶ崎祭実行委員会オリジナルゲームが登場するよ。公開をお楽しみに"
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-2034">
        <div className="el-2033">
          <Image
            src="/assets/pasted-artwork-391.svg"
            alt=""
            width={718}
            height={176}
            className="svg-577"
          />
        </div>
      </section>
      <section className="el-2035">
        <div data-inview className="box-773">
          <Image
            src="/assets/pasted-artwork-352.svg"
            alt=""
            width={123}
            height={99}
            className="svg-546"
          />
        </div>
        <div className="box-774">
          <Image
            src="/assets/pasted-artwork-274.svg"
            alt=""
            width={925}
            height={438}
            className="svg-395"
          />
        </div>
      </section>
      <section data-inview className="el-2037">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2036">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-98"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-37">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-99"
          />
        </a>
        <span
          className="crisp-svg svg-399"
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
      <section data-inview className="footer-18">
        <span
          className="crisp-svg svg-396"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2038">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="svg-397"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-38">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="svg-398"
          />
        </a>
      </section>
    </>
  );
}
