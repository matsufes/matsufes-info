import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "メインテーマ",
  description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
  openGraph: {
    title: "メインテーマ",
    description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6el0a87" />
      <section className="el-866">
        <div className="el-867">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-868">
            <span
              className="crisp-svg pasted-artwork-svg-64"
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
          <div id="memu-p" data-toggle-show="flex" className="el-869">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-870">
              <span
                className="crisp-svg svg-280"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-871">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-872">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-873">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-874">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-875">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-300">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-301">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-302">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-303">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-876">
              <Link href="/search" id="言葉-p" className="button-304">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-305">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-306">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-307">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-877">
              <Link href="/attention" id="ご来場の-p" className="button-308">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-309">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-310">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-311">
                {"よくあるご質問"}
              </Link>
              <Link href="/link" id="相互リンク-p" className="button-312">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-878">
              <Link href="/committee" id="委員会企画-p" className="button-313">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-314">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-315">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-879"
          />
          <div className="el-880">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-881">
              <span
                className="crisp-svg svg-281"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-882">
                <Link href="/about" className="el-883">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-20">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-884">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-885">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-886">
              <span
                className="crisp-svg svg-282"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-887">
                <Link href="/search" className="el-888">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-889">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-890">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-891">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-892">
              <span
                className="crisp-svg svg-283"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-893">
                <Link href="/attention" className="el-894">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-895">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-896">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-897">
                  {"よくあるご質問"}
                </Link>
                <Link href="/link" className="el-898">
                  {"相互リンク"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-899">
              <span
                className="crisp-svg svg-284"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-900">
                <Link href="/committee" className="el-901">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-23">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-902">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
        <Image
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-903"
        />
      </section>
      <p className="box-62">
        <span
          className="crisp-svg svg-65"
        >
          <svg aria-hidden="true" width={917} height={87} viewBox="0 0 917 87" />
          <Image
            src="/assets/pasted-artwork-94.svg"
            alt=""
            width={1834}
            height={174}
          />
        </span>
      </p>
      <section className="box-63">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-20"
        />
      </section>
      <section className="box-64">
        <Image
          src="/assets/pasted-artwork-96.svg"
          alt=""
          width={1383}
          height={304}
          className="svg-67"
        />
      </section>
      <section className="box-69">
        <span
          className="crisp-svg svg-93"
        >
          <svg aria-hidden="true" width={541} height={114} viewBox="0 0 541 114" />
          <Image
            src="/assets/pasted-artwork-121.svg"
            alt=""
            width={1082}
            height={228}
          />
        </span>
      </section>
      <section className="box-70">
        <div className="box-101">
          <Image
            src="/assets/image-2.svg"
            alt=""
            width={738}
            height={565}
            className="svg-94"
          />
        </div>
        <div className="box-102">
          <Image
            src="/assets/pasted-artwork-122.svg"
            alt=""
            width={523}
            height={66}
            className="svg-95"
          />
        </div>
      </section>
      <section className="box-103">
        <div className="box-104">
          <span
            className="crisp-svg svg-214"
          >
            <svg aria-hidden="true" width={985} height={748} viewBox="0 0 985 748" />
            <Image
              src="/assets/pasted-artwork-238.svg"
              alt=""
              width={1970}
              height={1496}
            />
          </span>
        </div>
        <div className="box-105">
          <span
            className="crisp-svg svg-96"
          >
            <svg aria-hidden="true" width={944} height={816} viewBox="0 0 944 816" />
            <Image
              src="/assets/pasted-artwork-123.svg"
              alt=""
              width={1888}
              height={1632}
            />
          </span>
        </div>
      </section>
      <section className="box-71">
        <Image
          src="/assets/pasted-artwork-97.svg"
          alt=""
          width={103}
          height={313}
          className="svg-68"
        />
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-11"
      />
    </>
  );
}
