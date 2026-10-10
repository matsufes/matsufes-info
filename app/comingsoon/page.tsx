import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muhpllld2i" />
      <section data-inview className="el-130">
        <Image
          src="/assets/svg-7"
          alt=""
          width={1920}
          height={583}
          className="svg-120"
        />
      </section>
      <section className="box-80">
        <Image
          src="/assets/pasted-artwork-164.svg"
          alt=""
          width={1113}
          height={135}
          className="svg-145"
        />
        <p className="box-113">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={371}
            height={38}
            className="svg-146"
          />
        </p>
        <div className="box-114">
          <Image
            src="/assets/pasted-artwork-166.svg"
            alt=""
            width={400}
            height={400}
            className="svg-147"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/svg-6"
        alt=""
        width={1920}
        height={713}
        className="image-17"
      />
      <Image
        src=""
        alt=""
        width={1337}
        height={415}
        className="svg-121"
      />
    </>
  );
}
