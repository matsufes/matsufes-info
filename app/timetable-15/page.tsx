import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu98rd4648" />
      <section data-inview className="el-92">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-73"
        />
      </section>
      <p className="el-65">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="svg-26"
        />
      </p>
      <section className="el-66">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-11"
        />
      </section>
      <p className="box-191">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-67">
        <Image
          src="/assets/pasted-artwork-64.svg"
          alt=""
          width={430}
          height={64}
          className="svg-27"
        />
      </section>
      <section className="el-70">
        <Link href="/timetable-13" className="el-71">
          <Image
            src="/assets/pasted-artwork-70.svg"
            alt=""
            width={268}
            height={84}
            className="svg-37"
          />
        </Link>
        <Link href="/timetable-14" className="el-72">
          <Image
            src="/assets/pasted-artwork-66.svg"
            alt=""
            width={268}
            height={84}
            className="svg-28"
          />
        </Link>
        <div className="el-73">
          <Image
            src="/assets/pasted-artwork-71.svg"
            alt=""
            width={268}
            height={84}
            className="svg-38"
          />
        </div>
      </section>
      <section className="select-3">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"}]}]}]"} className="select-4" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-68">
        <div className="box-188">
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-123"
          />
          <Image
            src="/assets/pasted-artwork-243.svg"
            alt=""
            width={1670}
            height={3081}
            className="pc-2"
          />
        </div>
        <div id="main15" data-toggle-show="flex" className="el-127">
          <Image
            src="/assets/pasted-artwork-84.svg"
            alt=""
            width={306}
            height={113}
            className="svg-49"
          />
          <Image
            src="/assets/pasted-artwork-85.svg"
            alt=""
            width={306}
            height={224}
            className="svg-50"
          />
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={306}
            height={299}
            className="svg-51"
          />
          <Image
            src="/assets/pasted-artwork-162.svg"
            alt=""
            width={306}
            height={113}
            className="svg-145"
          />
          <Image
            src="/assets/pasted-artwork-163.svg"
            alt=""
            width={306}
            height={113}
            className="svg-146"
          />
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={306}
            height={113}
            className="svg-147"
          />
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={306}
            height={113}
            className="svg-148"
          />
          <Image
            src="/assets/pasted-artwork-166.svg"
            alt=""
            width={306}
            height={113}
            className="svg-149"
          />
          <Image
            src="/assets/pasted-artwork-167.svg"
            alt=""
            width={306}
            height={113}
            className="svg-150"
          />
          <Image
            src="/assets/pasted-artwork-168.svg"
            alt=""
            width={306}
            height={113}
            className="svg-151"
          />
        </div>
        <div id="center15" data-toggle-show="flex" className="el-128">
          <Image
            src="/assets/pasted-artwork-78.svg"
            alt=""
            width={306}
            height={801}
            className="svg-43"
          />
        </div>
        <div id="street15" data-toggle-show="flex" className="el-129">
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={306}
            height={113}
            className="svg-44"
          />
          <Image
            src="/assets/pasted-artwork-87.svg"
            alt=""
            width={306}
            height={113}
            className="svg-52"
          />
          <Image
            src="/assets/pasted-artwork-80.svg"
            alt=""
            width={306}
            height={113}
            className="svg-45"
          />
          <Image
            src="/assets/pasted-artwork-81.svg"
            alt=""
            width={306}
            height={202}
            className="svg-46"
          />
        </div>
        <div id="committee15" data-toggle-show="flex" className="el-86">
          <Image
            src="/assets/pasted-artwork-88.svg"
            alt=""
            width={306}
            height={212}
            className="image-6"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-69"
      />
    </>
  );
}
