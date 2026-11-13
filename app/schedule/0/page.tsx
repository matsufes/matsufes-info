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
      <span hidden data-page-body="page_mvou1xir3p353n" />
      <Header />
      <Image data-inview
        src="/assets/pasted-artwork-217.svg"
        alt=""
        width={1440}
        height={489}
        className="el-1906"
      />
      <Image data-inview
        src="/assets/image-4.svg"
        alt=""
        width={1920}
        height={583}
        className="el-1894"
      />
      <p className="el-1895">
        <span
          className="crisp-svg svg-571"
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
      <section className="el-1896">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-353"
        />
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-153"
        />
      </section>
      <p className="box-748">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-1897">
        <span
          className="crisp-svg svg-354"
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
      <section className="el-1901">
        <div className="el-1898">
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={268}
            height={84}
            className="svg-355"
          />
          <Image
            src="/assets/pasted-artwork-246.svg"
            alt=""
            width={268}
            height={84}
            className="svg-358"
          />
        </div>
        <Link href="/schedule" className="el-1899">
          <Image
            src="/assets/pasted-artwork-47.svg"
            alt=""
            width={268}
            height={84}
            className="svg-356"
          />
          <Image
            src="/assets/pasted-artwork-253.svg"
            alt=""
            width={268}
            height={84}
            className="svg-374"
          />
        </Link>
        <Link href="/schedule/2" className="el-1900">
          <Image
            src="/assets/pasted-artwork-48.svg"
            alt=""
            width={268}
            height={84}
            className="svg-357"
          />
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={268}
            height={84}
            className="svg-365"
          />
        </Link>
      </section>
      <section className="select-8">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-7" name="choice">
          <option value="場所を選んでね。">{"場所を選んでね。"}</option>
          <option value="メインステージ">{"メインステージ"}</option>
          <option value="センターホール">{"センターホール"}</option>
          <option value="ストリートパフォーマンス">{"ストリートパフォーマンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-1905">
        <div className="box-749">
          <div id="main" data-toggle-show="flex" className="el-1902">
            <Image
              src="/assets/pasted-artwork-325.svg"
              alt=""
              width={306}
              height={113}
              className="svg-519"
            />
            <Image
              src="/assets/pasted-artwork-326.svg"
              alt=""
              width={306}
              height={113}
              className="svg-520"
            />
            <Image
              src="/assets/pasted-artwork-323.svg"
              alt=""
              width={306}
              height={113}
              className="svg-517"
            />
            <Image
              src="/assets/pasted-artwork-324.svg"
              alt=""
              width={306}
              height={113}
              className="svg-518"
            />
            <Image
              src="/assets/pasted-artwork-322.svg"
              alt=""
              width={175}
              height={63}
              className="svg-516"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-1903">
            <Image
              src="/assets/pasted-artwork-380.svg"
              alt=""
              width={306}
              height={537}
              className="svg-573"
            />
            <Image
              src="/assets/pasted-artwork-460.svg"
              alt=""
              width={306}
              height={594}
              className="svg-627"
            />
            <Image
              src="/assets/pasted-artwork-467.svg"
              alt=""
              width={306}
              height={681}
              className="svg-635"
            />
            <Image
              src="/assets/pasted-artwork-461.svg"
              alt=""
              width={306}
              height={708}
              className="svg-628"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-1904"
          />
          <span
            className="crisp-svg pc-5"
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
      <section data-inview className="el-2307">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2308">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-106"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-39">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-107"
          />
        </a>
        <span
          className="crisp-svg svg-418"
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
      <section data-inview className="footer-19">
        <span
          className="crisp-svg svg-419"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2309">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-420"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-40">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-421"
          />
        </a>
      </section>
    </>
  );
}
