import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 6",
};

export default function Page() {
  return (
    <>
      <section className="box">
        <div className="box-2">
          <a href="#" className="button-7">
            {"ボタン"}
          </a>
        </div>
        <div className="box-3">
          <a href="#" className="button-3">
            {"ボタン"}
          </a>
          <a href="#" className="button-6">
            {"ボタン"}
          </a>
          <a href="#" className="button-5">
            {"ボタン"}
          </a>
          <a href="#" className="button-4">
            {"ボタン"}
          </a>
          <a href="#" className="button-8">
            {"ボタン"}
          </a>
        </div>
      </section>
      <Image
        src="/assets/IMG_3053.PNG"
        alt=""
        width={2480}
        height={3508}
        className="image"
      />
      <Image
        src="/assets/-56-.svg"
        alt=""
        width={267}
        height={150}
        className="image-2"
      />
      <Image
        src="/assets/-.svg"
        alt=""
        width={1920}
        height={1312}
        className="image-3"
      />
    </>
  );
}
