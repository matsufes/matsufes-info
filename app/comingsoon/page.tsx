import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muhpllld2i" />
      <section data-inview className="el-118">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-95"
        />
      </section>
      <section className="box-75">
        <Image
          src="/assets/pasted-artwork-135.svg"
          alt=""
          width={1113}
          height={135}
          className="svg-116"
        />
        <p className="box-106">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={371}
            height={38}
            className="svg-117"
          />
        </p>
        <div className="box-107">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={400}
            height={400}
            className="svg-118"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-15"
      />
    </>
  );
}
