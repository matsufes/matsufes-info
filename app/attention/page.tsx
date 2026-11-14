import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ご来場の皆さまへ",
  description: "松ヶ崎祭実行委員会からご来場の皆さまへのお願いです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "ご来場の皆さまへ",
    description: "松ヶ崎祭実行委員会からご来場の皆さまへのお願いです。",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g55mu5emi6z" />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-2476"
      />
      <p className="box-870">
        <Image
          src="/assets/pasted-artwork-297.svg"
          alt=""
          width={837}
          height={125}
          className="svg-460"
        />
      </p>
      <section className="box-770">
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="svg-428"
        />
      </section>
      <section className="box-771">
        <Image
          src="/assets/pasted-artwork-282.svg"
          alt=""
          width={750}
          height={128}
          className="svg-429"
        />
      </section>
      <section className="box-773">
        <p className="box-772">
          {"◇ ご来場の際は、公共交通機関をご利用ください。\n\n◇ 車・バイクでのご来場はご遠慮ください。\n\n◇ 自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n構内の自転車走行は禁止されています。\n\n◇ ペット(補助犬を除く)の同伴はご遠慮ください。\n\n◇ 酒類の持ち込みおよび飲酒は禁止されています。また、泥酔状態でのご来場もご遠慮ください。\n\n◇ 構内は喫煙所を除き、全面禁煙です。周辺道路での喫煙もご遠慮ください。\n\n◇ 当委員会から認められていない勧誘・宣伝・販売行為は禁止されています。\n\n◇ 企画を実施していない建物や講義室、工事区域内への立ち入りはご遠慮ください。\n\n◇ ゴミの分別にご協力ください。"}
        </p>
      </section>
      <section className="box-774">
        <Image
          src="/assets/pasted-artwork-283.svg"
          alt=""
          width={438}
          height={128}
          className="svg-430"
        />
      </section>
      <section className="box-776">
        <p className="box-775">
          {"◇ 落とし物をしたり、発見した場合は本部までお越しください。\n\n◇ 迷子を見つけた場合、お連れの方が迷子になった場合は本部までお越しください。\n\n◇ 急病人を発見した場合は、お近くの実行委員までお知らせください。\n\n◇ 怪我や体調が優れない場合は、本部または保健管理センターまでお越しください。 "}
        </p>
      </section>
      <section data-inview className="el-1996">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1997">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-104"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-45">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-105"
          />
        </a>
        <span
          className="crisp-svg svg-386"
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
      <section data-inview className="footer-22">
        <span
          className="crisp-svg svg-699"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1998">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-387"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-46">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-388"
          />
        </a>
      </section>
    </>
  );
}
