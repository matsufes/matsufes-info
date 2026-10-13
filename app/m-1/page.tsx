import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "m-1グランプリ",
  description: "松ヶ崎祭の出展投票企画、「m-1グランプリ」のページです。",
  openGraph: {
    title: "m-1グランプリ",
    description: "松ヶ崎祭の出展投票企画、「m-1グランプリ」のページです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv69qjbj1y" />
      <section className="el-883">
        <div className="el-881">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-847">
            <span
              className="crisp-svg pasted-artwork-svg-59"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-247.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-857">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-848">
              <span
                className="crisp-svg svg-270"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-849">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-850">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-851">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-852">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-853">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-286">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-287">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-288">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-289">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-854">
              <Link href="/search" id="言葉-p" className="button-290">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-291">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-292">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-293">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-855">
              <Link href="/attention" id="ご来場の-p" className="button-294">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-295">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-296">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-297">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-856">
              <Link href="/committee" id="委員会企画-p" className="button-298">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-299">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-300">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-858"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-880">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-863">
              <span
                className="crisp-svg svg-271"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-862">
                <Link href="/about" className="el-859">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-20">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-860">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-861">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-869">
              <span
                className="crisp-svg svg-272"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-868">
                <Link href="/search" className="el-864">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-865">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-866">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-867">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-875">
              <span
                className="crisp-svg svg-273"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-874">
                <Link href="/attention" className="el-870">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-871">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-872">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-873">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-879">
              <span
                className="crisp-svg svg-274"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-878">
                <Link href="/committee" className="el-876">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-22">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-877">
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
          className="el-882"
        />
      </section>
      <section className="box-219">
        <span
          className="crisp-svg svg-275"
        >
          <svg aria-hidden="true" width={1113} height={135} viewBox="0 0 1113 135" />
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-217">
          <span
            className="crisp-svg svg-276"
          >
            <svg aria-hidden="true" width={371} height={38} viewBox="0 0 371 38" />
            <Image
              src="/assets/pasted-artwork-136.svg"
              alt=""
              width={742}
              height={76}
            />
          </span>
        </p>
        <div className="box-218">
          <span
            className="crisp-svg svg-277"
          >
            <svg aria-hidden="true" width={400} height={400} viewBox="0 0 400 400" />
            <Image
              src="/assets/pasted-artwork-137.svg"
              alt=""
              width={800}
              height={800}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-18"
      />
    </>
  );
}
