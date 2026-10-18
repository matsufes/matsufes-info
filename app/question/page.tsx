import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description: "松ヶ崎祭に関するよくあるご質問をご紹介します。",
  openGraph: {
    title: "よくあるご質問",
    description: "松ヶ崎祭に関するよくあるご質問をご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf67d6n7n" />
      <section className="el-785">
        <div className="el-786">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-787">
            <span
              className="crisp-svg pasted-artwork-svg-62"
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
          <div id="memu-p" data-toggle-show="flex" className="el-788">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-789">
              <span
                className="crisp-svg svg-264"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-790">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-791">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-792">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-793">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-794">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-268">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-269">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-270">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-271">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-795">
              <Link href="/search" id="言葉-p" className="button-272">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-273">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-274">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-275">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-796">
              <Link href="/attention" id="ご来場の-p" className="button-276">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-277">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-278">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-279">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-280">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-797">
              <Link href="/committee" id="委員会企画-p" className="button-281">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-282">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-283">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-798"
          />
          <div className="el-799">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-800" data-p="">
              <span
                className="crisp-svg svg-265"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-801">
                <Link href="/about" className="el-802">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-18">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-803">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-804">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-805" data-p="">
              <span
                className="crisp-svg svg-266"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-806">
                <Link href="/search" className="el-807">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-808">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-809">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-810">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-811" data-p="">
              <span
                className="crisp-svg svg-267"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-812">
                <Link href="/attention" className="el-813">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-814">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-815">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-816">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-817">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-818" data-p="">
              <span
                className="crisp-svg svg-268"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-819">
                <Link href="/committee" className="el-820">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-21">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-821">
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
          className="el-822"
        />
      </section>
      <p className="box-56">
        <span
          className="crisp-svg svg-63"
        >
          <svg aria-hidden="true" width={735} height={130} viewBox="0 0 735 130" />
          <Image
            src="/assets/pasted-artwork-93.svg"
            alt=""
            width={1470}
            height={260}
          />
        </span>
      </p>
      <section className="box-57">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-18"
        />
      </section>
      <section className="box-58" />
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-9"
      />
    </>
  );
}
