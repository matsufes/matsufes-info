import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf67d6n7n" />
      <section data-inview className="el-97">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-78"
        />
      </section>
      <p className="box-56">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={735}
          height={130}
          className="svg-64"
        />
      </p>
      <section className="box-57">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-18"
        />
      </section>
      <section className="box-58" />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-9"
      />
    </>
  );
}
