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
          className="svg-75"
        />
      </section>
      <p className="el-28">
        <Image
          src="/assets/pasted-artwork-41.svg"
          alt=""
          width={719}
          height={157}
          className="el-53"
        />
      </p>
      <section className="el-57">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-91"
        />
      </section>
      <p className="box-191">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-76">
        <Image
          src="/assets/pasted-artwork-84.svg"
          alt=""
          width={430}
          height={64}
          className="svg-30"
        />
      </section>
      <section className="el-81">
        <div className="el-82">
          <Image
            src="/assets/pasted-artwork-85.svg"
            alt=""
            width={268}
            height={84}
            className="svg-32"
          />
        </div>
        <Link href="/timetable-14" className="el-83">
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={268}
            height={84}
            className="svg-33"
          />
        </Link>
        <Link href="/timetable-15" className="el-84">
          <Image
            src="/assets/pasted-artwork-87.svg"
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
        <div className="box-194">
          <div id="main" data-toggle-show="flex" className="el-134">
            <Image
              src="/assets/pasted-artwork-177.svg"
              alt=""
              width={306}
              height={113}
              className="svg-135"
            />
            <Image
              src="/assets/pasted-artwork-178.svg"
              alt=""
              width={306}
              height={113}
              className="svg-192"
            />
            <Image
              src="/assets/pasted-artwork-179.svg"
              alt=""
              width={306}
              height={113}
              className="svg-136"
            />
            <Image
              src="/assets/pasted-artwork-180.svg"
              alt=""
              width={306}
              height={113}
              className="svg-137"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-142.svg"
            alt=""
            width={295}
            height={2502}
            className="el-125"
          />
          <Image
            src="/assets/pasted-artwork-296.svg"
            alt=""
            width={1670}
            height={3081}
            className="el-202"
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
