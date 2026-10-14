import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "松ヶ崎祭に関するお知らせをお届けします。",
  openGraph: {
    title: "お知らせ",
    description: "松ヶ崎祭に関するお知らせをお届けします。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6flq18p" />
      <section className="el-942">
        <div className="el-943">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-944">
            <span
              className="crisp-svg pasted-artwork-svg-66"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-223.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-945">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-946">
              <span
                className="crisp-svg svg-290"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-160.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-947">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-948">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-949">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-950">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-951">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-332">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-333">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-334">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-335">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-952">
              <Link href="/search" id="言葉-p" className="button-336">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-337">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-338">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-339">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-953">
              <Link href="/attention" id="ご来場の-p" className="button-340">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-341">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-342">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-343">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-344">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-954">
              <Link href="/committee" id="委員会企画-p" className="button-345">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-346">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-347">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-955"
          />
          <div className="el-956">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-957" data-p="">
              <span
                className="crisp-svg svg-291"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-958">
                <Link href="/about" className="el-959">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-22">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-960">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-961">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-962" data-p="">
              <span
                className="crisp-svg svg-292"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-963">
                <Link href="/search" className="el-964">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-965">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-966">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-967">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-968" data-p="">
              <span
                className="crisp-svg svg-293"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-969">
                <Link href="/attention" className="el-970">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-971">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-972">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-973">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-974">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-975" data-p="">
              <span
                className="crisp-svg svg-294"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-976">
                <Link href="/committee" className="el-977">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-25">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-978">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-979"
        />
      </section>
      <p className="box-67">
        <span
          className="crisp-svg svg-66"
        >
          <svg aria-hidden="true" width={412} height={123} viewBox="0 0 412 123" />
          <Image
            src="/assets/pasted-artwork-95.svg"
            alt=""
            width={824}
            height={246}
          />
        </span>
      </p>
      <section className="box-68">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-22"
        />
      </section>
      <section className="box-195">
        <p className="box-196">
          {"2026/10/13"}
        </p>
        <div className="box-197">
          <Image
            src="/assets/pasted-artwork-236.svg"
            alt=""
            width={112}
            height={37}
            className="svg-197"
          />
        </div>
      </section>
      <section className="box-194">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"10/13中身\"}]}]"}
          className="crisp-svg el-362"
        >
          <svg aria-hidden="true" width={1393} height={115} viewBox="0 0 1393 115" />
          <Image
            src="/assets/pasted-artwork-174.svg"
            alt=""
            width={2786}
            height={230}
          />
        </span>
        <span id="10/13中身" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"10/13中身\"}]}]"} data-toggle-show="block"
          className="crisp-svg el-363"
        >
          <svg aria-hidden="true" width={1393} height={451} viewBox="0 0 1393 451" />
          <Image
            src="/assets/pasted-artwork-235.svg"
            alt=""
            width={2786}
            height={902}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-13"
      />
    </>
  );
}
