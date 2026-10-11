import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6flq18p" />
      <section data-inview className="el-106">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-94"
        />
      </section>
      <p className="box-71">
        <Image
          src="/assets/pasted-artwork-128.svg"
          alt=""
          width={412}
          height={123}
          className="svg-73"
        />
      </p>
      <section className="box-72">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-24"
        />
      </section>
      <section className="el-89">
        <Image
          src="/assets/pasted-artwork-222.svg"
          alt=""
          width={334}
          height={43}
          className="svg-177"
        />
      </section>
      <section className="box-141">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"更新中身\"}]}]"}
          src="/assets/pasted-artwork-227.svg"
          alt=""
          width={1393}
          height={115}
          className="el-153"
        />
        <Image id="更新中身" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"更新中身\"}]}]"} data-toggle-show="block"
          src="/assets/pasted-artwork-228.svg"
          alt=""
          width={1393}
          height={391}
          className="el-154"
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
