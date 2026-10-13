import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msoti2tux" />
      <section className="el-372">
        <div className="el-373">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-374">
            <span
              className="crisp-svg pasted-artwork-svg-46"
              style={{ aspectRatio: "230 / 142" }}
            >
              <Image
                src="/assets/pasted-artwork-248.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-375">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-376">
              <span
                className="crisp-svg svg-197"
                style={{ aspectRatio: "43 / 31" }}
              >
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-377">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-378">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-379">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-380">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-381">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-92">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-93">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-94">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-95">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-382">
              <Link href="/keyword" id="言葉-p" className="button-96">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-97">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-98">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-99">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-383">
              <Link href="/attention" id="ご来場の-p" className="button-100">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-101">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-102">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-103">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-384">
              <Link href="/committee" id="委員会企画-p" className="button-104">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-105">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-106">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-385"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-386">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-387">
              <span
                className="crisp-svg svg-198"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-388">
                <Link href="/about" className="el-389">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-7">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-390">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-391">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-392">
              <span
                className="crisp-svg svg-199"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-393">
                <Link href="/keyword" className="el-394">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-395">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-396">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-397">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-398">
              <span
                className="crisp-svg svg-200"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-399">
                <Link href="/attention" className="el-400">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-401">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-402">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-403">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-404">
              <span
                className="crisp-svg svg-201"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-405">
                <Link href="/committee" className="el-406">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-9">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-407">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-408"
        />
      </section>
      <p className="box-2">
        <span
          className="crisp-svg svg-6"
          style={{ aspectRatio: "605 / 157" }}
        >
          <Image
            src="/assets/pasted-artwork-31.svg"
            alt=""
            width={1210}
            height={314}
          />
        </span>
      </p>
      <section className="box-3">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-13"
        />
      </section>
      <section className="box-26" />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image"
      />
    </>
  );
}
