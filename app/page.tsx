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
      <section className="el-2020">
        <div data-inview className="el-2016">
          <Image
            src="/assets/pasted-artwork-381.svg"
            alt=""
            width={1871}
            height={2646}
            className="svg-574"
          />
        </div>
        <div data-inview className="el-2015">
          <span
            className="crisp-svg pasted-artwork-svg-98"
            style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 2498" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={1920} height={2498} viewBox="0 0 1920 2498" />
            <Image
              src="/assets/pasted-artwork-273.svg"
              alt=""
              width={3840}
              height={4996}
            />
          </span>
        </div>
        <div className="box-766">
          <div className="el-2018">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-2017"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-2019">
            <span
              className="crisp-svg svg-580"
              style={{ ["--crisp-svg-width"]: "659px", ["--crisp-svg-ratio"]: "659 / 329" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={659} height={329} viewBox="0 0 659 329" />
              <Image
                src="/assets/pasted-artwork-392.svg"
                alt=""
                width={1318}
                height={658}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el-2022">
        <div className="el-2021">
          <Image
            src="/assets/pasted-artwork-396.svg"
            alt=""
            width={718}
            height={233}
            className="svg-584"
          />
        </div>
      </section>
      <section className="box-768">
        <Link href="/search" className="el-2023">
          <Image
            src="/assets/pasted-artwork-274.svg"
            alt=""
            width={378}
            height={313}
            className="svg-398"
          />
          <p className="box-767">
            <span
              className="crisp-svg svg-395"
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
        <a href="/navigation" className="el-2024">
          <Image
            src="/assets/pasted-artwork-385.svg"
            alt=""
            width={163}
            height={293}
            className="svg-575"
          />
          <p className="box-769">
            <span
              className="crisp-svg svg-396"
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
        <Link href="/schedule/0" className="el-2025">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={244}
            height={245}
            className="svg-399"
          />
          <p className="box-770">
            <span
              className="crisp-svg svg-400"
              style={{ ["--crisp-svg-width"]: "202px", ["--crisp-svg-ratio"]: "202 / 111" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={202} height={111} viewBox="0 0 202 111" />
              <Image
                src="/assets/pasted-artwork-276.svg"
                alt=""
                width={404}
                height={222}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="el-2027">
        <div className="el-2026">
          <Image
            src="/assets/pasted-artwork-397.svg"
            alt=""
            width={718}
            height={230}
            className="svg-585"
          />
        </div>
      </section>
      <section data-inview className="el-2028">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          src="/assets/pasted-artwork-382.svg"
          alt=""
          width={1327}
          height={876}
          className="el-2476"
        />
      </section>
      <section data-inview className="el-2029">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          src="/assets/pasted-artwork-383.svg"
          alt=""
          width={1291}
          height={852}
          className="el-2477"
        />
      </section>
      <section data-inview className="el-2030">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/question\"}]}]"}
          src="/assets/pasted-artwork-277.svg"
          alt=""
          width={1185}
          height={817}
          className="el-2038"
        />
      </section>
      <section data-inview className="el-2031">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          src="/assets/pasted-artwork-384.svg"
          alt=""
          width={1270}
          height={876}
          className="el-2478"
        />
      </section>
      <section className="box-772">
        <span
          className="crisp-svg svg-397"
          style={{ ["--crisp-svg-width"]: "1248px", ["--crisp-svg-ratio"]: "1248 / 195" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-130.svg"
            alt=""
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-2033">
        <div className="el-2032">
          <Image
            src="/assets/pasted-artwork-398.svg"
            alt=""
            width={718}
            height={176}
            className="svg-586"
          />
        </div>
      </section>
      <section className="el-2034">
        <div data-inview className="box-773">
          <Image
            src="/assets/pasted-artwork-357.svg"
            alt=""
            width={123}
            height={99}
            className="svg-553"
          />
        </div>
        <div className="box-774">
          <Image
            src="/assets/pasted-artwork-278.svg"
            alt=""
            width={925}
            height={438}
            className="svg-401"
          />
        </div>
      </section>
      <section data-inview className="el-2036">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2035">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-99"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-37">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-100"
          />
        </a>
        <span
          className="crisp-svg svg-405"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-282.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-18">
        <span
          className="crisp-svg svg-402"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-279.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2037">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-403"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-38">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-404"
          />
        </a>
      </section>
    </>
  );
}
