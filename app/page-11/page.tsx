import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mspzphfx5v" />
      <Image data-inview
        src="/assets/--10.svg"
        alt=""
        width={1920}
        height={583}
        className="image-27"
      />
      <section className="box-58" />
      <p className="box-59">
        {"きみのしおり"}
      </p>
      <Image
        src="/assets/pasted-artwork-10.svg"
        alt=""
        width={1240}
        height={34}
        className="pasted-artwork-svg-3"
      />
      <p className="box-60">
        {"きみ専用の　ぺーじだよ。\n\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-62">
        <div className="box-63">
          <Image
            src="/assets/pasted-artwork-45.svg"
            alt=""
            width={301}
            height={178}
            className="svg-2"
          />
        </div>
        <Link href="/page-12" className="box-64">
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={301}
            height={178}
            className="svg-3"
          />
        </Link>
      </section>
      <Image
        src="/assets/pasted-artwork-44.svg"
        alt=""
        width={1420}
        height={45}
        className="svg"
      />
      <section className="box-61" />
      <Image data-inview
        src="/assets/--9.svg"
        alt=""
        width={1920}
        height={713}
        className="image-28"
      />
    </>
  );
}
