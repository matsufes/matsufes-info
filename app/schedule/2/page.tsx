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
      <span hidden data-page-body="page_mvouf28p8g9pd9" />
      <Header />
      <Image data-inview
        src="/assets/pasted-artwork-217.svg"
        alt=""
        width={1440}
        height={489}
        className="el-2403"
      />
      <p className="el-1917">
        <span
          className="crisp-svg pasted-artwork-svg-158"
          style={{ ["--crisp-svg-width"]: "707px", ["--crisp-svg-ratio"]: "707 / 136" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={707} height={136} viewBox="0 0 707 136" />
          <Image
            src="/assets/pasted-artwork-374.svg"
            alt=""
            width={1414}
            height={272}
          />
        </span>
      </p>
      <section className="el-1918">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-155"
        />
      </section>
      <p className="box-754">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-1919">
        <span
          className="crisp-svg svg-360"
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
      <section className="el-1923">
        <Link href="/schedule/0" className="el-1920">
          <Image
            src="/assets/pasted-artwork-51.svg"
            alt=""
            width={268}
            height={84}
            className="svg-361"
          />
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt=""
            width={268}
            height={84}
            className="svg-364"
          />
        </Link>
        <Link href="/schedule" className="el-1921">
          <Image
            src="/assets/pasted-artwork-47.svg"
            alt=""
            width={268}
            height={84}
            className="svg-362"
          />
          <Image
            src="/assets/pasted-artwork-252.svg"
            alt=""
            width={268}
            height={84}
            className="svg-373"
          />
        </Link>
        <div className="el-1922">
          <Image
            src="/assets/pasted-artwork-52.svg"
            alt=""
            width={268}
            height={84}
            className="svg-363"
          />
          <Image
            src="/assets/pasted-artwork-251.svg"
            alt=""
            width={268}
            height={84}
            className="svg-372"
          />
        </div>
      </section>
      <section className="select-12">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"}]}]}]"} className="select-11" name="choice">
          <option value="場所を選んでね。">{"場所を選んでね。"}</option>
          <option value="メインステージ">{"メインステージ"}</option>
          <option value="センターホール">{"センターホール"}</option>
          <option value="ストリートパフォーマンス">{"ストリートパフォーマンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-1929">
        <div className="box-755">
          <div id="main15" data-toggle-show="flex" className="el-1924">
            <Image
              src="/assets/pasted-artwork-333.svg"
              alt=""
              width={306}
              height={113}
              className="svg-527"
            />
            <Image
              src="/assets/pasted-artwork-334.svg"
              alt=""
              width={306}
              height={224}
              className="svg-528"
            />
            <Image
              src="/assets/pasted-artwork-327.svg"
              alt=""
              width={306}
              height={113}
              className="svg-521"
            />
            <Image
              src="/assets/pasted-artwork-328.svg"
              alt=""
              width={306}
              height={113}
              className="svg-522"
            />
            <Image
              src="/assets/pasted-artwork-329.svg"
              alt=""
              width={306}
              height={113}
              className="svg-523"
            />
            <Image
              src="/assets/pasted-artwork-330.svg"
              alt=""
              width={306}
              height={113}
              className="svg-524"
            />
            <Image
              src="/assets/pasted-artwork-331.svg"
              alt=""
              width={306}
              height={113}
              className="svg-525"
            />
            <Image
              src="/assets/pasted-artwork-332.svg"
              alt=""
              width={306}
              height={113}
              className="svg-526"
            />
            <Image
              src="/assets/pasted-artwork-336.svg"
              alt=""
              width={175}
              height={63}
              className="svg-529"
            />
            <Image
              src="/assets/pasted-artwork-452.svg"
              alt=""
              width={306}
              height={113}
              className="svg-621"
            />
            <Image
              src="/assets/pasted-artwork-453.svg"
              alt=""
              width={306}
              height={227}
              className="svg-623"
            />
          </div>
          <div id="center15" data-toggle-show="flex" className="el-1925">
            <Image
              src="/assets/pasted-artwork-337.svg"
              alt=""
              width={306}
              height={801}
              className="svg-530"
            />
          </div>
          <div id="street15" data-toggle-show="flex" className="el-1926">
            <Image
              src="/assets/pasted-artwork-338.svg"
              alt=""
              width={306}
              height={113}
              className="svg-531"
            />
            <Image
              src="/assets/pasted-artwork-339.svg"
              alt=""
              width={306}
              height={113}
              className="svg-532"
            />
            <Image
              src="/assets/pasted-artwork-341.svg"
              alt=""
              width={306}
              height={113}
              className="svg-534"
            />
            <Image
              src="/assets/pasted-artwork-342.svg"
              alt=""
              width={306}
              height={202}
              className="svg-535"
            />
            <Image
              src="/assets/pasted-artwork-340.svg"
              alt=""
              width={306}
              height={113}
              className="svg-533"
            />
          </div>
          <div id="committee15" data-toggle-show="flex" className="el-1927">
            <Image
              src="/assets/pasted-artwork-343.svg"
              alt=""
              width={306}
              height={212}
              className="svg-536"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-1928"
          />
          <span
            className="crisp-svg pc-7"
            style={{ ["--crisp-svg-width"]: "1670px", ["--crisp-svg-ratio"]: "1670 / 3081" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-373.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
      </section>
      <section data-inview className="el-2313">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2314">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-110"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-43">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-111"
          />
        </a>
        <span
          className="crisp-svg svg-426"
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
      <section data-inview className="footer-21">
        <span
          className="crisp-svg svg-427"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2315">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-428"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-44">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-429"
          />
        </a>
      </section>
    </>
  );
}
