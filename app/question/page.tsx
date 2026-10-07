import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf67d6n7n" />
      <section data-inview className="el-111">
        <Image
          src="/assets/svg-7"
          alt=""
          width={1920}
          height={583}
          className="svg-103"
        />
      </section>
      <p className="box-61">
        <Image
          src="/assets/pasted-artwork-123.svg"
          alt=""
          width={735}
          height={130}
          className="svg-76"
        />
      </p>
      <section className="box-62">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-23"
        />
      </section>
      <section className="box-63" />
      <Image data-inview
        src="/assets/svg-6"
        alt=""
        width={1920}
        height={713}
        className="image-11"
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
