import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "第56回松ヶ崎祭 | 夢宙 むちゅー",
  description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅー」 2026年11月13日(きん)〜11月15日(にち)開催",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "第56回松ヶ崎祭 | 夢宙 むちゅー",
    description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅー」 2026年11月13日(きん)〜11月15日(にち)開催",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mvzcltff5ss5c7" />
      <Header />
      <section className="el-1945">
        <div data-inview className="el-2410">
          <Image
            src="/assets/hero.webp"
            alt=""
            width={1131}
            height={1600}
            className="el-2140"
          />
        </div>
        <div data-inview className="el-1941">
          <Image
            src="/assets/cloud.webp"
            alt=""
            width={1230}
            height={1600}
            className="el-1965"
          />
        </div>
        <div className="box-761">
          <div className="el-1943">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-1942"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-1944">
            <span
              className="crisp-svg svg-482"
              style={{ ["--crisp-svg-width"]: "659px", ["--crisp-svg-ratio"]: "659 / 329" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={659} height={329} viewBox="0 0 659 329" />
              <Image
                src="/assets/pasted-artwork-381.svg"
                alt="11.13(きん)17:00-19:10"
                width={1318}
                height={658}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el-1947">
        <div className="el-1946">
          <Image
            src="/assets/pasted-artwork-385.svg"
            alt=""
            width={718}
            height={233}
            className="svg-486"
          />
        </div>
      </section>
      <section className="box-763">
        <Link href="/search" className="el-1949">
          <Image
            src="/assets/image-2.webp"
            alt=""
            width={720}
            height={596}
            className="icon-7"
          />
          <p className="box-762">
            <span
              className="crisp-svg el-1948"
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
      <section className="box-766">
        <a href="/navigation" className="el-1951">
          <Image
            src="/assets/image-3.webp"
            alt=""
            width={655}
            height={1178}
            className="icon-8"
          />
          <p className="box-764">
            <span
              className="crisp-svg el-1950"
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
        <Link href="/schedule" className="el-1952">
          <Image
            src="/assets/image-4.webp"
            alt=""
            width={617}
            height={620}
            className="el-1966"
          />
          <p className="box-765">
            <span
              className="crisp-svg el-1967"
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
      <section className="el-1954">
        <div className="el-1953">
          <Image
            src="/assets/pasted-artwork-386.svg"
            alt=""
            width={718}
            height={230}
            className="svg-487"
          />
        </div>
      </section>
      <section data-inview className="el-1955">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          src="/assets/image-5.webp"
          alt="ご来場の皆さまへ"
          width={1600}
          height={1056}
          className="el-2141"
        />
      </section>
      <section data-inview className="el-1956">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          src="/assets/image-6.webp"
          alt="行き方・会場地図"
          width={1600}
          height={1056}
          className="el-2142"
        />
      </section>
      <section data-inview className="el-1957">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/question\"}]}]"}
          src="/assets/image-7.webp"
          alt="よくあるご質問"
          width={1600}
          height={1103}
          className="el-1968"
        />
      </section>
      <section data-inview className="el-1958">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          src="/assets/image-8.webp"
          alt="来場者アンケート"
          width={1600}
          height={1104}
          className="el-2143"
        />
      </section>
      <section className="box-767">
        <span
          className="crisp-svg svg-363"
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
      <section className="el-2525">
        <div className="el-2526">
          <Image
            src="/assets/pasted-artwork-454.svg"
            alt=""
            width={718}
            height={176}
            className="svg-692"
          />
        </div>
      </section>
      <section className="el-2527">
        <p className="text-704">
          {"第56回松ヶ崎祭オリジナルゲームが新登場！\nきみも まつぴよと 恋に落ちちゃう・・・！？"}
        </p>
        <div className="el-2528">
          <span
            className="crisp-svg svg-691"
            style={{ ["--crisp-svg-width"]: "928px", ["--crisp-svg-ratio"]: "928 / 577" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={928} height={577} viewBox="0 0 928 577" />
            <Image
              src="/assets/pasted-artwork-438.svg"
              alt=""
              width={1856}
              height={1154}
            />
          </span>
        </div>
        <a href="/tokimeki-dreamworld" className="el-2531">
          <Image
            src="/assets/pasted-artwork-458.svg"
            alt=""
            width={556}
            height={236}
            className="svg-695"
          />
        </a>
      </section>
      <section className="el-2529">
        <p className="text-705">
          {"今日　どんな夢をみた？\nきみの夢を　占ってみよう。"}
        </p>
        <div className="box-1067">
          <Image
            src="/assets/pasted-artwork-457.svg"
            alt=""
            width={1262}
            height={1016}
            className="svg-693"
          />
        </div>
        <a href="/yumeuranai" className="el-2530">
          <Image
            src="/assets/pasted-artwork-458.svg"
            alt=""
            width={556}
            height={236}
            className="svg-694"
          />
        </a>
      </section>
      <section className="el-1960">
        <div className="el-1959">
          <Image
            src="/assets/pasted-artwork-387.svg"
            alt=""
            width={718}
            height={176}
            className="svg-488"
          />
        </div>
      </section>
      <section className="el-1961">
        <div data-inview className="box-768">
          <Image
            src="/assets/pasted-artwork-351.svg"
            alt=""
            width={123}
            height={99}
            className="svg-459"
          />
        </div>
        <div className="box-769">
          <Image
            src="/assets/pasted-artwork-273.svg"
            alt=""
            width={925}
            height={438}
            className="svg-364"
          />
        </div>
      </section>
      <section data-inview className="el-1963">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1962">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-96"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-37">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-97"
          />
        </a>
        <span
          className="crisp-svg svg-368"
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
      <section data-inview className="footer-18">
        <span
          className="crisp-svg svg-365"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1964">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-366"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-38">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-367"
          />
        </a>
      </section>
    </>
  );
}
