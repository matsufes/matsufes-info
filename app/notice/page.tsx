import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6flq18p" />
      <section data-inview className="el-115">
        <Image
          src="/assets/svg-7"
          alt=""
          width={1920}
          height={583}
          className="svg-107"
        />
      </section>
      <p className="box-73">
        <Image
          src="/assets/pasted-artwork-128.svg"
          alt=""
          width={412}
          height={123}
          className="svg-84"
        />
      </p>
      <section className="box-74">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-27"
        />
      </section>
      <section className="el-94">
        <Image
          src="/assets/pasted-artwork-222.svg"
          alt=""
          width={334}
          height={43}
          className="svg-195"
        />
      </section>
      <section className="box-144">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"更新中身\"}]}]"}
          src="/assets/pasted-artwork-227.svg"
          alt=""
          width={1393}
          height={115}
          className="el-161"
        />
        <Image id="更新中身" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"更新中身\"}]}]"} data-toggle-show="block"
          src="/assets/pasted-artwork-228.svg"
          alt=""
          width={1393}
          height={391}
          className="el-162"
        />
      </section>
      <Image data-inview
        src="/assets/svg-6"
        alt=""
        width={1920}
        height={713}
        className="image-15"
      />
      <Image
        src=""
        alt=""
        width={1337}
        height={415}
        className="svg-80"
      />
    </>
  );
}
