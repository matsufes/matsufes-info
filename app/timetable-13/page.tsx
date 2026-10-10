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
          className="svg-94"
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
          className="svg-110"
        />
      </section>
      <section className="heading-2">
        <Image
          src="/assets/pasted-artwork-72.svg"
          alt=""
          width={1159}
          height={124}
          className="svg-21"
        />
      </section>
      <section className="el-76">
        <Image
          src="/assets/pasted-artwork-84.svg"
          alt=""
          width={430}
          height={64}
          className="svg-39"
        />
      </section>
      <section className="el-81">
        <div className="el-82">
          <Image
            src="/assets/pasted-artwork-85.svg"
            alt=""
            width={268}
            height={84}
            className="svg-41"
          />
        </div>
        <Link href="/timetable-14" className="el-83">
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={268}
            height={84}
            className="svg-42"
          />
        </Link>
        <Link href="/timetable-15" className="el-84">
          <Image
            src="/assets/pasted-artwork-87.svg"
            alt=""
            width={268}
            height={84}
            className="svg-43"
          />
        </Link>
      </section>
      <section className="box-132">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-3" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-29">
        <Image
          src="/assets/pasted-artwork-93.svg"
          alt=""
          width={1701}
          height={3102}
          className="el-86"
        />
        <Image
          src="/assets/pasted-artwork-142.svg"
          alt=""
          width={295}
          height={2502}
          className="pasted-artwork-svg-40"
        />
        <div id="main" data-toggle-show="flex" className="el-137">
          <Image
            src="/assets/pasted-artwork-177.svg"
            alt=""
            width={306}
            height={113}
            className="svg-159"
          />
          <Image
            src="/assets/pasted-artwork-178.svg"
            alt=""
            width={306}
            height={113}
            className="svg-160"
          />
          <Image
            src="/assets/pasted-artwork-179.svg"
            alt=""
            width={306}
            height={113}
            className="svg-161"
          />
          <Image
            src="/assets/pasted-artwork-180.svg"
            alt=""
            width={306}
            height={113}
            className="svg-162"
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
