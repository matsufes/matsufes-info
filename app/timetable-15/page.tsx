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
      <section data-inview className="el-95">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-83"
        />
      </section>
      <p className="el-66">
        <Image
          src="/assets/pasted-artwork-41.svg"
          alt=""
          width={719}
          height={157}
          className="svg-30"
        />
      </p>
      <section className="el-67">
        <Image
          src="/assets/pasted-artwork-138.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-13"
        />
      </section>
      <section className="heading-4">
        <Image
          src="/assets/pasted-artwork-72.svg"
          alt=""
          width={1159}
          height={124}
          className="svg-31"
        />
      </section>
      <section className="el-68">
        <Image
          src="/assets/pasted-artwork-84.svg"
          alt=""
          width={430}
          height={64}
          className="svg-32"
        />
      </section>
      <section className="el-71">
        <Link href="/timetable-13" className="el-72">
          <Image
            src="/assets/pasted-artwork-90.svg"
            alt=""
            width={268}
            height={84}
            className="svg-42"
          />
        </Link>
        <Link href="/timetable-14" className="el-73">
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={268}
            height={84}
            className="svg-33"
          />
        </Link>
        <div className="el-74">
          <Image
            src="/assets/pasted-artwork-91.svg"
            alt=""
            width={268}
            height={84}
            className="svg-43"
          />
        </div>
      </section>
      <section className="box-128">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"}]}]}]"} className="select-2" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-69">
        <Image
          src="/assets/pasted-artwork-296.svg"
          alt=""
          width={1670}
          height={3081}
          className="el-200"
        />
        <div id="main15" data-toggle-show="flex" className="el-130">
          <Image
            src="/assets/pasted-artwork-106.svg"
            alt=""
            width={306}
            height={113}
            className="svg-54"
          />
          <Image
            src="/assets/pasted-artwork-107.svg"
            alt=""
            width={306}
            height={224}
            className="svg-55"
          />
          <Image
            src="/assets/pasted-artwork-108.svg"
            alt=""
            width={306}
            height={299}
            className="svg-56"
          />
          <Image
            src="/assets/pasted-artwork-192.svg"
            alt=""
            width={306}
            height={113}
            className="svg-158"
          />
          <Image
            src="/assets/pasted-artwork-193.svg"
            alt=""
            width={306}
            height={113}
            className="svg-159"
          />
          <Image
            src="/assets/pasted-artwork-194.svg"
            alt=""
            width={306}
            height={113}
            className="svg-160"
          />
          <Image
            src="/assets/pasted-artwork-195.svg"
            alt=""
            width={306}
            height={113}
            className="svg-161"
          />
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={306}
            height={113}
            className="svg-162"
          />
          <Image
            src="/assets/pasted-artwork-197.svg"
            alt=""
            width={306}
            height={113}
            className="svg-163"
          />
          <Image
            src="/assets/pasted-artwork-198.svg"
            alt=""
            width={306}
            height={113}
            className="svg-164"
          />
        </div>
        <Image
          src="/assets/pasted-artwork-142.svg"
          alt=""
          width={295}
          height={2502}
          className="el-126"
        />
        <div id="center15" data-toggle-show="flex" className="el-131">
          <Image
            src="/assets/pasted-artwork-99.svg"
            alt=""
            width={306}
            height={801}
            className="svg-48"
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
        <div id="street15" data-toggle-show="flex" className="el-132">
          <Image
            src="/assets/pasted-artwork-100.svg"
            alt=""
            width={306}
            height={113}
            className="svg-49"
          />
          <Image
            src="/assets/pasted-artwork-109.svg"
            alt=""
            width={306}
            height={113}
            className="svg-57"
          />
          <Image
            src="/assets/pasted-artwork-101.svg"
            alt=""
            width={306}
            height={113}
            className="svg-50"
          />
          <Image
            src="/assets/pasted-artwork-102.svg"
            alt=""
            width={306}
            height={202}
            className="svg-51"
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
