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
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mwey62ss3u3er3" />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-2449"
      />
      <p className="el-2450">
        <span
          className="crisp-svg svg-612"
          style={{ ["--crisp-svg-width"]: "707px", ["--crisp-svg-ratio"]: "707 / 136" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={707} height={136} viewBox="0 0 707 136" />
          <Image
            src="/assets/pasted-artwork-368.svg"
            alt="日程表からさがす"
            width={1414}
            height={272}
          />
        </span>
      </p>
      <section className="el-2451">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-613"
        />
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-168"
        />
      </section>
      <p className="box-1063">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-2452">
        <span
          className="crisp-svg svg-614"
          style={{ ["--crisp-svg-width"]: "430px", ["--crisp-svg-ratio"]: "430 / 64" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={430} height={64} viewBox="0 0 430 64" />
          <Image
            src="/assets/pasted-artwork-45.svg"
            alt="日にち"
            width={860}
            height={128}
          />
        </span>
      </section>
      <section className="el-2456">
        <Link href="/schedule/0" className="el-2457">
          <Image
            src="/assets/pasted-artwork-50.svg"
            alt=""
            width={268}
            height={84}
            className="svg-619"
          />
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={268}
            height={84}
            className="svg-620"
          />
        </Link>
        <Link href="/schedule" className="el-2458">
          <Image
            src="/assets/pasted-artwork-49.svg"
            alt=""
            width={268}
            height={84}
            className="svg-621"
          />
          <Image
            src="/assets/pasted-artwork-246.svg"
            alt=""
            width={268}
            height={84}
            className="svg-622"
          />
        </Link>
        <Link href="/schedule/1" className="el-2459">
          <Image
            src="/assets/pasted-artwork-48.svg"
            alt=""
            width={268}
            height={84}
            className="svg-623"
          />
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt=""
            width={268}
            height={84}
            className="svg-624"
          />
        </Link>
      </section>
      <section className="select-14">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"committee14\"},{\"kind\":\"show\",\"target\":\"main14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"committee14\"},{\"kind\":\"show\",\"target\":\"center14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"},{\"kind\":\"show\",\"target\":\"street14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"show\",\"target\":\"committee14\"}]}]}]"} className="select-13" name="choice" defaultValue="メインステージ">
          <option value="メインステージ">{"メインステージ"}</option>
          <option value="センターホール">{"センターホール"}</option>
          <option value="ストリートパフォーマンス">{"ストリートパフォーマンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-2460">
        <div className="box-1064">
          <div id="main14" data-toggle-show="flex" className="t-3">
            <Image
              src="/assets/pasted-artwork-303.svg"
              alt=""
              width={306}
              height={113}
              className="svg-625"
            />
            <Image
              src="/assets/pasted-artwork-304.svg"
              alt=""
              width={306}
              height={504}
              className="svg-626"
            />
            <Image
              src="/assets/pasted-artwork-444.svg"
              alt=""
              width={306}
              height={556}
              className="svg-627"
            />
            <Image
              src="/assets/pasted-artwork-445.svg"
              alt=""
              width={306}
              height={601}
              className="svg-628"
            />
            <Image
              src="/assets/pasted-artwork-253.svg"
              alt=""
              width={306}
              height={113}
              className="svg-629"
            />
            <Image
              src="/assets/pasted-artwork-254.svg"
              alt=""
              width={306}
              height={113}
              className="svg-630"
            />
            <Image
              src="/assets/pasted-artwork-255.svg"
              alt=""
              width={306}
              height={113}
              className="svg-631"
            />
            <Image
              src="/assets/pasted-artwork-256.svg"
              alt=""
              width={306}
              height={113}
              className="svg-632"
            />
            <Image
              src="/assets/pasted-artwork-257.svg"
              alt=""
              width={306}
              height={113}
              className="svg-633"
            />
            <Image
              src="/assets/pasted-artwork-258.svg"
              alt=""
              width={306}
              height={113}
              className="svg-634"
            />
            <Image
              src="/assets/pasted-artwork-261.svg"
              alt=""
              width={306}
              height={113}
              className="svg-635"
            />
            <Image
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={306}
              height={113}
              className="svg-636"
            />
            <Image
              src="/assets/pasted-artwork-302.svg"
              alt=""
              width={306}
              height={113}
              className="svg-637"
            />
            <Image
              src="/assets/pasted-artwork-260.svg"
              alt=""
              width={306}
              height={113}
              className="svg-638"
            />
            <Image
              src="/assets/pasted-artwork-259.svg"
              alt=""
              width={306}
              height={113}
              className="svg-639"
            />
          </div>
          <div id="center14" data-toggle-show="flex" className="t-4">
            <Image
              src="/assets/pasted-artwork-305.svg"
              alt=""
              width={306}
              height={153}
              className="svg-640"
            />
            <Image
              src="/assets/pasted-artwork-449.svg"
              alt=""
              width={306}
              height={178}
              className="svg-641"
            />
          </div>
          <div id="street14" data-toggle-show="flex" className="t-5">
            <Image
              src="/assets/pasted-artwork-306.svg"
              alt=""
              width={306}
              height={113}
              className="svg-642"
            />
            <Image
              src="/assets/pasted-artwork-308.svg"
              alt=""
              width={306}
              height={113}
              className="svg-643"
            />
            <Image
              src="/assets/pasted-artwork-309.svg"
              alt=""
              width={306}
              height={113}
              className="svg-644"
            />
            <Image
              src="/assets/pasted-artwork-307.svg"
              alt=""
              width={306}
              height={113}
              className="svg-645"
            />
            <Image
              src="/assets/pasted-artwork-310.svg"
              alt=""
              width={306}
              height={113}
              className="svg-646"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="t-6">
            <Image
              src="/assets/pasted-artwork-311.svg"
              alt=""
              width={306}
              height={212}
              className="svg-647"
            />
            <Image
              src="/assets/pasted-artwork-450.svg"
              alt=""
              width={306}
              height={235}
              className="svg-648"
            />
            <Image
              src="/assets/pasted-artwork-314.svg"
              alt=""
              width={153}
              height={212}
              className="svg-649"
            />
            <Image
              src="/assets/pasted-artwork-313.svg"
              alt=""
              width={153}
              height={212}
              className="svg-650"
            />
            <Image
              src="/assets/pasted-artwork-312.svg"
              alt=""
              width={306}
              height={212}
              className="svg-651"
            />
            <Image
              src="/assets/pasted-artwork-451.svg"
              alt=""
              width={306}
              height={235}
              className="svg-652"
            />
            <Image
              src="/assets/pasted-artwork-315.svg"
              alt=""
              width={153}
              height={594}
              className="svg-653"
            />
            <Image
              src="/assets/pasted-artwork-452.svg"
              alt=""
              width={153}
              height={678}
              className="svg-654"
            />
            <span
              className="crisp-svg svg-655"
              style={{ ["--crisp-svg-width"]: "236px", ["--crisp-svg-ratio"]: "236 / 181" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={236} height={181} viewBox="0 0 236 181" />
              <Image
                src="/assets/pasted-artwork-316.svg"
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
            className="el-2461"
          />
          <span
            className="crisp-svg pc-9"
            style={{ ["--crisp-svg-width"]: "1670px", ["--crisp-svg-ratio"]: "1670 / 3081" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-367.svg"
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
          className="el-2462"
        />
      </section>
      <section data-inview className="el-2454">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2453">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-169"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-79">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-170"
          />
        </a>
        <span
          className="crisp-svg svg-615"
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
      <section data-inview className="footer-39">
        <span
          className="crisp-svg svg-616"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2455">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-617"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-80">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-618"
          />
        </a>
      </section>
    </>
  );
}
