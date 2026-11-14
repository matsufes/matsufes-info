import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "行き方・会場地図",
  description: "松ヶ崎祭が開催される京都工芸繊維大学への行き方・会場地図のページです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "行き方・会場地図",
    description: "松ヶ崎祭が開催される京都工芸繊維大学への行き方・会場地図のページです。",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g5ayccl4poy" />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-2479"
      />
      <p className="box-793">
        <Image
          src="/assets/pasted-artwork-299.svg"
          alt=""
          width={846}
          height={125}
          className="svg-442"
        />
      </p>
      <section className="box-794">
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-129"
        />
      </section>
      <section className="box-795">
        <Image
          src="/assets/pasted-artwork-290.svg"
          alt=""
          width={545}
          height={128}
          className="svg-435"
        />
      </section>
      <section className="box-797">
        <p className="box-796">
          {"・地下鉄烏丸線　松ヶ崎駅　徒歩 8分\n\n・叡山電車　一乗寺駅　徒歩 11分\n\n・叡山電車　修学院駅　徒歩 14分"}
        </p>
      </section>
      <section className="box-798">
        <Image
          src="/assets/pasted-artwork-291.svg"
          alt=""
          width={545}
          height={128}
          className="svg-436"
        />
      </section>
      <section className="box-800">
        <p className="box-799">
          {"・市バス65号系統など　左京区総合庁舎・京都工芸繊維大学前　徒歩 1分\n\n\n・京都バス17・43号系統など　高野泉町　徒歩 4分\n\n\n・市バス松ヶ崎4号系統など　左京区総合庁舎前　徒歩 5分\n\n\n・市バス北8・65号系統など　松ヶ崎海尻町　徒歩 7分\n\n\n・市バス206・204号系統など　高木町　徒歩 8分"}
        </p>
      </section>
      <section className="box-801">
        <Image
          src="/assets/pasted-artwork-292.svg"
          alt=""
          width={332}
          height={128}
          className="svg-437"
        />
      </section>
      <section className="box-803">
        <p className="box-802">
          {"ご来場の際は、公共交通機関をご利用ください。 \n\n\n自家用車・タクシー・バイク・自転車・キックボードなどでの入構はご遠慮いただいております。\n\n\n自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n\n構内の自転車走行は禁止されています。"}
        </p>
      </section>
      <section className="box-804">
        <Image
          src="/assets/pasted-artwork-384.svg"
          alt=""
          width={1069}
          height={677}
          className="svg-485"
        />
      </section>
      <section className="box-805" />
      <section data-inview className="el-2003">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2004">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-108"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-49">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-109"
          />
        </a>
        <span
          className="crisp-svg svg-392"
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
      <section data-inview className="footer-24">
        <span
          className="crisp-svg svg-701"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2005">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-393"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-50">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-394"
          />
        </a>
      </section>
    </>
  );
}
