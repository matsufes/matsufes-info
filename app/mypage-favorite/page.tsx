import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu3wp199l" />
      <section data-inview className="el-102">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-83"
        />
      </section>
      <p className="box-28">
        <Image
          src="/assets/pasted-artwork-56.svg"
          alt=""
          width={644}
          height={96}
          className="svg-19"
        />
      </p>
      <section className="box-29">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-23"
        />
      </section>
      <p className="box-180">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-31">
        <div className="box-39">
          <Image
            src="/assets/pasted-artwork-60.svg"
            alt=""
            width={306}
            height={236}
            className="svg-23"
          />
        </div>
        <div className="box-40">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage-m-1\"}]}]"}
            src="/assets/pasted-artwork-61.svg"
            alt=""
            width={306}
            height={236}
            className="m-1-2"
          />
        </div>
      </section>
      <section className="box-30">
        <Image
          src="/assets/pasted-artwork-57.svg"
          alt=""
          width={1420}
          height={70}
          className="svg-20"
        />
      </section>
      <section className="box-32" />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-4"
      />
    </>
  );
}
