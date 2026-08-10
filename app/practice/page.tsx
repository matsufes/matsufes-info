import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 6",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msleaffe1" />
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
      <p className="box-4">
        {"企画さがし"}
      </p>
      <section className="box-5">
        <div className="box-11">
          <Image
            src="/assets/-.png"
            alt=""
            width={167}
            height={298}
            className="image-5"
          />
        </div>
        <div className="box-12">
          <Image
            src="/assets/--2.svg"
            alt=""
            width={371}
            height={328}
            className="image-6"
          />
        </div>
        <div className="box-13">
          <Image
            src="/assets/--2.png"
            alt=""
            width={239}
            height={240}
            className="image-7"
          />
        </div>
      </section>
      <section className="box-7">
        <p className="box-8">
          {"委員会企画"}
        </p>
      </section>
      <Image
        src="/assets/pasted-artwork-2.svg"
        alt=""
        width={671}
        height={42}
        className="svg"
      />
      <section className="box-9" />
    </>
  );
}
