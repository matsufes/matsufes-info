import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf67d6n7n" />
      <section data-inview className="el-104">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-101"
        />
      </section>
      <p className="box-59">
        <Image
          src="/assets/pasted-artwork-123.svg"
          alt=""
          width={735}
          height={130}
          className="svg-76"
        />
      </p>
      <section className="box-60">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-21"
        />
      </section>
      <section className="box-61" />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-10"
      />
      <Image
        src=""
        alt=""
        width={1337}
        height={415}
        className="svg-75"
      />
    </>
  );
}
