import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msmxmtrg5" />
      <section data-inview className="el-27">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-71"
        />
      </section>
      <p className="el-28">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="el-53"
        />
      </p>
      <section className="el-56">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-87"
        />
      </section>
      <p className="box-190">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-75">
        <Image
          src="/assets/pasted-artwork-64.svg"
          alt=""
          width={430}
          height={64}
          className="svg-30"
        />
      </section>
      <section className="el-80">
        <div className="el-81">
          <Image
            src="/assets/pasted-artwork-65.svg"
            alt=""
            width={268}
            height={84}
            className="svg-32"
          />
        </div>
        <Link href="/timetable-14" className="el-82">
          <Image
            src="/assets/pasted-artwork-66.svg"
            alt=""
            width={268}
            height={84}
            className="svg-33"
          />
        </Link>
        <Link href="/timetable-15" className="el-83">
          <Image
            src="/assets/pasted-artwork-67.svg"
            alt=""
            width={268}
            height={84}
            className="svg-34"
          />
        </Link>
      </section>
      <section className="select-5">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-6" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-29">
        <div className="box-193">
          <div id="main" data-toggle-show="flex" className="el-130">
            <Image
              src="/assets/pasted-artwork-147.svg"
              alt=""
              width={306}
              height={113}
              className="svg-131"
            />
            <Image
              src="/assets/pasted-artwork-148.svg"
              alt=""
              width={306}
              height={113}
              className="svg-188"
            />
            <Image
              src="/assets/pasted-artwork-149.svg"
              alt=""
              width={306}
              height={113}
              className="svg-132"
            />
            <Image
              src="/assets/pasted-artwork-150.svg"
              alt=""
              width={306}
              height={113}
              className="svg-133"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-121"
          />
          <Image
            src="/assets/pasted-artwork-243.svg"
            alt=""
            width={1670}
            height={3081}
            className="el-197"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-30"
      />
    </>
  );
}
