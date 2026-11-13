import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "タイムテーブル",
  description: "今回の松ヶ崎祭のタイムテーブルです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "タイムテーブル",
    description: "今回の松ヶ崎祭のタイムテーブルです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mvouejle4bq4wf" />
      <Header />
      <Image data-inview
        src="/assets/image-4.svg"
        alt=""
        width={1920}
        height={583}
        className="el-1907"
      />
      <Image data-inview
        src="/assets/pasted-artwork-217.svg"
        alt=""
        width={1440}
        height={489}
        className="el-2407"
      />
      <p className="el-1908">
        <span
          className="crisp-svg pasted-artwork-svg-156"
          style={{ ["--crisp-svg-width"]: "707px", ["--crisp-svg-ratio"]: "707 / 136" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={707} height={136} viewBox="0 0 707 136" />
          <Image
            src="/assets/pasted-artwork-369.svg"
            alt=""
            width={1414}
            height={272}
          />
        </span>
      </p>
      <section className="el-1909">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-96"
        />
        <Image
          src="/assets/pasted-artwork-282.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-153"
        />
      </section>
      <p className="box-752">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-1910">
        <span
          className="crisp-svg svg-359"
          style={{ ["--crisp-svg-width"]: "430px", ["--crisp-svg-ratio"]: "430 / 64" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={430} height={64} viewBox="0 0 430 64" />
          <Image
            src="/assets/pasted-artwork-45.svg"
            alt=""
            width={860}
            height={128}
          />
        </span>
      </section>
      <section className="el-1933">
        <Link href="/schedule/0" className="el-1930">
          <Image
            src="/assets/pasted-artwork-50.svg"
            alt=""
            width={268}
            height={84}
            className="svg-366"
          />
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={268}
            height={84}
            className="svg-371"
          />
        </Link>
        <div className="el-1931">
          <Image
            src="/assets/pasted-artwork-49.svg"
            alt=""
            width={268}
            height={84}
            className="svg-367"
          />
          <Image
            src="/assets/pasted-artwork-246.svg"
            alt=""
            width={268}
            height={84}
            className="svg-369"
          />
        </div>
        <Link href="/schedule/2" className="el-1932">
          <Image
            src="/assets/pasted-artwork-48.svg"
            alt=""
            width={268}
            height={84}
            className="svg-368"
          />
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt=""
            width={268}
            height={84}
            className="svg-370"
          />
        </Link>
      </section>
      <section className="select-10">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"}]}]}]"} className="select-9" name="choice">
          <option value="場所を選んでね。">{"場所を選んでね。"}</option>
          <option value="メインステージ">{"メインステージ"}</option>
          <option value="センターホール">{"センターホール"}</option>
          <option value="ストリートパフォーマンス">{"ストリートパフォーマンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-1916">
        <div className="box-753">
          <div id="main14" data-toggle-show="flex" className="el-1911">
            <Image
              src="/assets/pasted-artwork-304.svg"
              alt=""
              width={306}
              height={113}
              className="svg-496"
            />
            <Image
              src="/assets/pasted-artwork-305.svg"
              alt=""
              width={306}
              height={504}
              className="svg-497"
            />
            <Image
              src="/assets/pasted-artwork-448.svg"
              alt=""
              width={306}
              height={556}
              className="svg-616"
            />
            <Image
              src="/assets/pasted-artwork-449.svg"
              alt=""
              width={306}
              height={601}
              className="svg-617"
            />
            <Image
              src="/assets/pasted-artwork-253.svg"
              alt=""
              width={306}
              height={113}
              className="svg-375"
            />
            <Image
              src="/assets/pasted-artwork-254.svg"
              alt=""
              width={306}
              height={113}
              className="svg-376"
            />
            <Image
              src="/assets/pasted-artwork-255.svg"
              alt=""
              width={306}
              height={113}
              className="svg-377"
            />
            <Image
              src="/assets/pasted-artwork-256.svg"
              alt=""
              width={306}
              height={113}
              className="svg-378"
            />
            <Image
              src="/assets/pasted-artwork-257.svg"
              alt=""
              width={306}
              height={113}
              className="svg-379"
            />
            <Image
              src="/assets/pasted-artwork-258.svg"
              alt=""
              width={306}
              height={113}
              className="svg-380"
            />
            <Image
              src="/assets/pasted-artwork-261.svg"
              alt=""
              width={306}
              height={113}
              className="svg-383"
            />
            <Image
              src="/assets/pasted-artwork-302.svg"
              alt=""
              width={306}
              height={113}
              className="svg-494"
            />
            <Image
              src="/assets/pasted-artwork-303.svg"
              alt=""
              width={306}
              height={113}
              className="svg-495"
            />
            <Image
              src="/assets/pasted-artwork-260.svg"
              alt=""
              width={306}
              height={113}
              className="svg-382"
            />
            <Image
              src="/assets/pasted-artwork-259.svg"
              alt=""
              width={306}
              height={113}
              className="svg-381"
            />
          </div>
          <div id="center14" data-toggle-show="flex" className="el-2594">
            <Image
              src="/assets/pasted-artwork-306.svg"
              alt=""
              width={306}
              height={153}
              className="svg-613"
            />
            <Image
              src="/assets/pasted-artwork-453.svg"
              alt=""
              width={306}
              height={178}
              className="svg-620"
            />
          </div>
          <div id="street14" data-toggle-show="flex" className="el-1912">
            <Image
              src="/assets/pasted-artwork-307.svg"
              alt=""
              width={306}
              height={113}
              className="svg-498"
            />
            <Image
              src="/assets/pasted-artwork-309.svg"
              alt=""
              width={306}
              height={113}
              className="svg-500"
            />
            <Image
              src="/assets/pasted-artwork-310.svg"
              alt=""
              width={306}
              height={113}
              className="svg-501"
            />
            <Image
              src="/assets/pasted-artwork-308.svg"
              alt=""
              width={306}
              height={113}
              className="svg-499"
            />
            <Image
              src="/assets/pasted-artwork-311.svg"
              alt=""
              width={306}
              height={113}
              className="svg-502"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-1913">
            <Image
              src="/assets/pasted-artwork-312.svg"
              alt=""
              width={306}
              height={212}
              className="svg-503"
            />
            <Image
              src="/assets/pasted-artwork-454.svg"
              alt=""
              width={306}
              height={235}
              className="svg-621"
            />
            <Image
              src="/assets/pasted-artwork-315.svg"
              alt=""
              width={153}
              height={212}
              className="svg-506"
            />
            <Image
              src="/assets/pasted-artwork-314.svg"
              alt=""
              width={153}
              height={212}
              className="svg-505"
            />
            <Image
              src="/assets/pasted-artwork-313.svg"
              alt=""
              width={306}
              height={212}
              className="svg-504"
            />
            <Image
              src="/assets/pasted-artwork-455.svg"
              alt=""
              width={306}
              height={235}
              className="svg-623"
            />
            <Image
              src="/assets/pasted-artwork-316.svg"
              alt=""
              width={153}
              height={594}
              className="svg-507"
            />
            <Image
              src="/assets/pasted-artwork-456.svg"
              alt=""
              width={153}
              height={678}
              className="svg-624"
            />
            <span
              className="crisp-svg svg-508"
              style={{ ["--crisp-svg-width"]: "236px", ["--crisp-svg-ratio"]: "236 / 181" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={236} height={181} viewBox="0 0 236 181" />
              <Image
                src="/assets/pasted-artwork-317.svg"
                alt=""
                width={472}
                height={362}
              />
            </span>
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-1914"
          />
          <span
            className="crisp-svg pc-7"
            style={{ ["--crisp-svg-width"]: "1670px", ["--crisp-svg-ratio"]: "1670 / 3081" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-368.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
        <Image
          src=""
          alt=""
          width={1701}
          height={3102}
          className="el-1915"
        />
      </section>
      <section data-inview className="el-2315">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2316">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-107"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-41">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-108"
          />
        </a>
        <span
          className="crisp-svg svg-415"
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
      <section data-inview className="footer-20">
        <span
          className="crisp-svg svg-416"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2317">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="svg-417"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-42">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="svg-418"
          />
        </a>
      </section>
    </>
  );
}
