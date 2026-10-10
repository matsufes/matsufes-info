import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msoti2tux" />
      <section data-inview className="el-105">
        <Image
          src="/assets/svg-7"
          alt=""
          width={1920}
          height={583}
          className="svg-98"
        />
      </section>
      <p className="box-3">
        <Image
          src="/assets/pasted-artwork-42.svg"
          alt=""
          width={605}
          height={157}
          className="svg-6"
        />
      </p>
      <section className="box-4">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-18"
        />
      </section>
      <section className="box-28" />
      <Image data-inview
        src="/assets/svg-6"
        alt=""
        width={1920}
        height={713}
        className="image-2"
      />
    </>
  );
}
