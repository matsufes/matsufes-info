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
      <span hidden data-page-body="page_mvou1xir3p353n" />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-1859"
      />
      <p className="el-1852">
        <span
          className="crisp-svg svg-477"
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
      <section className="el-1853">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-345"
        />
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-140"
        />
      </section>
      <p className="box-748">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-1854">
        <span
          className="crisp-svg svg-346"
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
      <section className="el-1858">
        <Link href="/schedule/0" className="el-1855">
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt="11.13（きん）"
            width={268}
            height={84}
            className="svg-347"
          />
          <Image
            src="/assets/pasted-artwork-245.svg"
            alt="11.13（きん）"
            width={268}
            height={84}
            className="svg-350"
          />
        </Link>
        <Link href="/schedule" className="el-1856">
          <Image
            src="/assets/pasted-artwork-47.svg"
            alt="11.14（ど）"
            width={268}
            height={84}
            className="svg-348"
          />
          <Image
            src="/assets/pasted-artwork-252.svg"
            alt="11.14（ど）"
            width={268}
            height={84}
            className="svg-352"
          />
        </Link>
        <Link href="/schedule/1" className="el-1857">
          <Image
            src="/assets/pasted-artwork-48.svg"
            alt="11.15（にち）"
            width={268}
            height={84}
            className="svg-349"
          />
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt="11.15（にち）"
            width={268}
            height={84}
            className="svg-351"
          />
        </Link>
      </section>
      <section className="select-8">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"hide\",\"target\":\"committee14-2\"},{\"kind\":\"show\",\"target\":\"main-2\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main-2\"},{\"kind\":\"hide\",\"target\":\"committee14-2\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main-2\"},{\"kind\":\"hide\",\"target\":\"committee14-2\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main-2\"},{\"kind\":\"show\",\"target\":\"committee14-2\"}]}]}]"} className="select-7" name="choice" defaultValue="メインステージ">
          <option value="メインステージ">{"メインステージ"}</option>
          <option value="センターホール">{"センターホール"}</option>
          <option value="ストリートパフォーマンス">{"ストリートパフォーマンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-2412">
        <div className="box-1058">
          <div id="main-2" data-toggle-show="flex" className="t">
            <Image
              src="/assets/pasted-artwork-320.svg"
              alt=""
              width={306}
              height={113}
              className="svg-531"
            />
            <Image
              src="/assets/pasted-artwork-321.svg"
              alt=""
              width={306}
              height={113}
              className="svg-532"
            />
            <Image
              src="/assets/pasted-artwork-318.svg"
              alt=""
              width={306}
              height={113}
              className="svg-533"
            />
            <Image
              src="/assets/pasted-artwork-319.svg"
              alt=""
              width={306}
              height={113}
              className="svg-534"
            />
            <Image
              src="/assets/pasted-artwork-317.svg"
              alt=""
              width={175}
              height={63}
              className="svg-535"
            />
          </div>
          <div id="committee14-2" data-toggle-show="flex" className="t-2">
            <Image
              src="/assets/pasted-artwork-374.svg"
              alt=""
              width={306}
              height={537}
              className="svg-536"
            />
            <Image
              src="/assets/pasted-artwork-447.svg"
              alt=""
              width={306}
              height={594}
              className="svg-537"
            />
            <Image
              src="/assets/pasted-artwork-453.svg"
              alt=""
              width={306}
              height={681}
              className="svg-538"
            />
            <Image
              src="/assets/pasted-artwork-448.svg"
              alt=""
              width={306}
              height={708}
              className="svg-539"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-2411"
          />
          <span
            className="crisp-svg pc-6"
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
      </section>
      <section data-inview className="el-1988">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1989">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-98"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-39">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-99"
          />
        </a>
        <span
          className="crisp-svg svg-375"
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
      <section data-inview className="footer-19">
        <span
          className="crisp-svg svg-376"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1990">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-377"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-40">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-378"
          />
        </a>
      </section>
    </>
  );
}
