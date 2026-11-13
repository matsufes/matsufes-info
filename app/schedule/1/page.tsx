import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "日程表からさがす(11.15)",
  description: "今回の松ヶ崎祭のタイムテーブルです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "日程表からさがす(11.15)",
    description: "今回の松ヶ崎祭のタイムテーブルです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mwey915180yk5u" />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-2464"
      />
      <p className="el-2465">
        <span
          className="crisp-svg svg-667"
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
      <section className="el-2466">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-668"
        />
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-171"
        />
      </section>
      <p className="box-1065">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-2467">
        <span
          className="crisp-svg svg-669"
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
      <section className="el-2471">
        <Link href="/schedule/0" className="el-2472">
          <Image
            src="/assets/pasted-artwork-51.svg"
            alt=""
            width={268}
            height={84}
            className="svg-674"
          />
          <Image
            src="/assets/pasted-artwork-247.svg"
            alt=""
            width={268}
            height={84}
            className="svg-675"
          />
        </Link>
        <Link href="/schedule" className="el-2473">
          <Image
            src="/assets/pasted-artwork-47.svg"
            alt=""
            width={268}
            height={84}
            className="svg-676"
          />
          <Image
            src="/assets/pasted-artwork-251.svg"
            alt=""
            width={268}
            height={84}
            className="svg-677"
          />
        </Link>
        <div className="el-2474">
          <Image
            src="/assets/pasted-artwork-52.svg"
            alt=""
            width={268}
            height={84}
            className="svg-678"
          />
          <Image
            src="/assets/pasted-artwork-250.svg"
            alt=""
            width={268}
            height={84}
            className="svg-679"
          />
        </div>
      </section>
      <section className="select-16">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"},{\"kind\":\"show\",\"target\":\"main15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"},{\"kind\":\"show\",\"target\":\"center15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"},{\"kind\":\"show\",\"target\":\"street15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"show\",\"target\":\"committee15\"}]}]}]"} className="select-15" name="choice" defaultValue="メインステージ">
          <option value="メインステージ">{"メインステージ"}</option>
          <option value="センターホール">{"センターホール"}</option>
          <option value="ストリートパフォーマンス">{"ストリートパフォーマンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-2475">
        <div className="box-1066">
          <div id="main15" data-toggle-show="flex" className="t-7">
            <Image
              src="/assets/pasted-artwork-328.svg"
              alt=""
              width={306}
              height={113}
              className="svg-680"
            />
            <Image
              src="/assets/pasted-artwork-329.svg"
              alt=""
              width={306}
              height={224}
              className="svg-681"
            />
            <Image
              src="/assets/pasted-artwork-322.svg"
              alt=""
              width={306}
              height={113}
              className="svg-682"
            />
            <Image
              src="/assets/pasted-artwork-323.svg"
              alt=""
              width={306}
              height={113}
              className="svg-683"
            />
            <Image
              src="/assets/pasted-artwork-324.svg"
              alt=""
              width={306}
              height={113}
              className="svg-684"
            />
            <Image
              src="/assets/pasted-artwork-325.svg"
              alt=""
              width={306}
              height={113}
              className="svg-685"
            />
            <Image
              src="/assets/pasted-artwork-326.svg"
              alt=""
              width={306}
              height={113}
              className="svg-686"
            />
            <Image
              src="/assets/pasted-artwork-327.svg"
              alt=""
              width={306}
              height={113}
              className="svg-687"
            />
            <Image
              src="/assets/pasted-artwork-330.svg"
              alt=""
              width={175}
              height={63}
              className="svg-688"
            />
            <Image
              src="/assets/pasted-artwork-441.svg"
              alt=""
              width={306}
              height={113}
              className="svg-689"
            />
            <Image
              src="/assets/pasted-artwork-442.svg"
              alt=""
              width={306}
              height={227}
              className="svg-690"
            />
          </div>
          <div id="center15" data-toggle-show="flex" className="t-8">
            <Image
              src="/assets/pasted-artwork-331.svg"
              alt=""
              width={306}
              height={801}
              className="svg-691"
            />
          </div>
          <div id="street15" data-toggle-show="flex" className="t-9">
            <Image
              src="/assets/pasted-artwork-332.svg"
              alt=""
              width={306}
              height={113}
              className="svg-692"
            />
            <Image
              src="/assets/pasted-artwork-333.svg"
              alt=""
              width={306}
              height={113}
              className="svg-693"
            />
            <Image
              src="/assets/pasted-artwork-335.svg"
              alt=""
              width={306}
              height={113}
              className="svg-694"
            />
            <Image
              src="/assets/pasted-artwork-336.svg"
              alt=""
              width={306}
              height={202}
              className="svg-695"
            />
            <Image
              src="/assets/pasted-artwork-334.svg"
              alt=""
              width={306}
              height={113}
              className="svg-696"
            />
          </div>
          <div id="committee15" data-toggle-show="flex" className="t-10">
            <Image
              src="/assets/pasted-artwork-337.svg"
              alt=""
              width={306}
              height={212}
              className="svg-697"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-2476"
          />
          <span
            className="crisp-svg pc-10"
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
      <section data-inview className="el-2469">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2468">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-172"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-81">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-173"
          />
        </a>
        <span
          className="crisp-svg svg-670"
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
      <section data-inview className="footer-40">
        <span
          className="crisp-svg svg-671"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2470">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-672"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-82">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-673"
          />
        </a>
      </section>
    </>
  );
}
