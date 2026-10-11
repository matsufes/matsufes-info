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
      <section data-inview className="el-96">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-77"
        />
      </section>
      <p className="el-66">
        <Image
          src="/assets/pasted-artwork-41.svg"
          alt=""
          width={719}
          height={157}
          className="svg-26"
        />
      </p>
      <section className="el-67">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-11"
        />
      </section>
      <p className="box-193">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-68">
        <Image
          src="/assets/pasted-artwork-84.svg"
          alt=""
          width={430}
          height={64}
          className="svg-27"
        />
      </section>
      <section className="el-71">
        <Link href="/timetable-13" className="el-72">
          <Image
            src="/assets/pasted-artwork-90.svg"
            alt=""
            width={268}
            height={84}
            className="svg-37"
          />
        </Link>
        <Link href="/timetable-14" className="el-73">
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={268}
            height={84}
            className="svg-28"
          />
        </Link>
        <div className="el-74">
          <Image
            src="/assets/pasted-artwork-91.svg"
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
      <section className="el-69">
        <div className="box-190">
          <Image
            src="/assets/pasted-artwork-142.svg"
            alt=""
            width={295}
            height={2502}
            className="el-127"
          />
          <Image
            src="/assets/pasted-artwork-296.svg"
            alt=""
            width={1670}
            height={3081}
            className="pc-2"
          />
        </div>
        <div id="main15" data-toggle-show="flex" className="el-131">
          <Image
            src="/assets/pasted-artwork-106.svg"
            alt=""
            width={306}
            height={113}
            className="svg-49"
          />
          <Image
            src="/assets/pasted-artwork-107.svg"
            alt=""
            width={306}
            height={224}
            className="svg-50"
          />
          <Image
            src="/assets/pasted-artwork-108.svg"
            alt=""
            width={306}
            height={299}
            className="svg-51"
          />
          <Image
            src="/assets/pasted-artwork-192.svg"
            alt=""
            width={306}
            height={113}
            className="svg-149"
          />
          <Image
            src="/assets/pasted-artwork-193.svg"
            alt=""
            width={306}
            height={113}
            className="svg-150"
          />
          <Image
            src="/assets/pasted-artwork-194.svg"
            alt=""
            width={306}
            height={113}
            className="svg-151"
          />
          <Image
            src="/assets/pasted-artwork-195.svg"
            alt=""
            width={306}
            height={113}
            className="svg-152"
          />
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={306}
            height={113}
            className="svg-153"
          />
          <Image
            src="/assets/pasted-artwork-197.svg"
            alt=""
            width={306}
            height={113}
            className="svg-154"
          />
          <Image
            src="/assets/pasted-artwork-198.svg"
            alt=""
            width={306}
            height={113}
            className="svg-155"
          />
        </div>
        <div id="center15" data-toggle-show="flex" className="el-132">
          <Image
            src="/assets/pasted-artwork-99.svg"
            alt=""
            width={306}
            height={801}
            className="svg-43"
          />
        </div>
        <div id="street15" data-toggle-show="flex" className="el-133">
          <Image
            src="/assets/pasted-artwork-100.svg"
            alt=""
            width={306}
            height={113}
            className="svg-44"
          />
          <Image
            src="/assets/pasted-artwork-109.svg"
            alt=""
            width={306}
            height={113}
            className="svg-52"
          />
          <Image
            src="/assets/pasted-artwork-101.svg"
            alt=""
            width={306}
            height={113}
            className="svg-45"
          />
          <Image
            src="/assets/pasted-artwork-102.svg"
            alt=""
            width={306}
            height={202}
            className="svg-46"
          />
        </div>
        <div id="committee15" data-toggle-show="flex" className="el-87">
          <Image
            src="/assets/pasted-artwork-110.svg"
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
        className="el-70"
      />
    </>
  );
}
