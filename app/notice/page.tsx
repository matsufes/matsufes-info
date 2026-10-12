import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6flq18p" />
      <section data-inview className="el-101">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-82"
        />
      </section>
      <p className="box-67">
        <Image
          src="/assets/pasted-artwork-105.svg"
          alt=""
          width={412}
          height={123}
          className="svg-68"
        />
      </p>
      <section className="box-68">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-22"
        />
      </section>
      <section className="el-87">
        <Image
          src="/assets/pasted-artwork-188.svg"
          alt=""
          width={334}
          height={43}
          className="svg-162"
        />
      </section>
      <section className="box-132">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"更新中身\"}]}]"}
          src="/assets/pasted-artwork-189.svg"
          alt=""
          width={1393}
          height={115}
          className="el-148"
        />
        <Image id="更新中身" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"更新中身\"}]}]"} data-toggle-show="block"
          src="/assets/pasted-artwork-190.svg"
          alt=""
          width={1393}
          height={391}
          className="el-149"
        />
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-13"
      />
    </>
  );
}
