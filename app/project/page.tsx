import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muw9ig2y3n" />
      <section data-inview className="el-163">
        <Image
          src="/assets/svg-7"
          alt=""
          width={1920}
          height={583}
          className="svg-197"
        />
      </section>
      <p className="box-149">
        <Image
          src="/assets/pasted-artwork-42.svg"
          alt=""
          width={605}
          height={157}
          className="svg-198"
        />
      </p>
      <section className="box-150">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-43"
        />
      </section>
      <section className="box-151" />
      <Image data-inview
        src="/assets/svg-6"
        alt=""
        width={1920}
        height={713}
        className="image-19"
      />
    </>
  );
}
