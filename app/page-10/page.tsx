import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msoti2tux" />
      <Image data-inview
        src="/assets/--10.svg"
        alt=""
        width={1920}
        height={583}
        className="image-21"
      />
      <section className="box-33" />
      <p className="box-34">
        <Image
          src="/assets/pasted-artwork-79.svg"
          alt=""
          width={605}
          height={157}
          className="svg-29"
        />
      </p>
      <Image
        src="/assets/pasted-artwork-10.svg"
        alt=""
        width={1240}
        height={34}
        className="pasted-artwork-svg"
      />
      <p className="box-35">
        {"構内の地図を　確認できるよ。\n\n行きたい企画の場所を　ここで探そう。"}
      </p>
      <section className="box-36" />
      <Image data-inview
        src="/assets/--9.svg"
        alt=""
        width={1920}
        height={713}
        className="image-22"
      />
    </>
  );
}
