import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "マイページ",
  description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
  openGraph: {
    title: "マイページ",
    description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv6alv245p" />
      <section className="el-975">
        <div className="el-976">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-977">
            <span
              className="crisp-svg pasted-artwork-svg-67"
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
          <div id="memu-p" data-toggle-show="flex" className="el-978">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-979">
              <span
                className="crisp-svg svg-289"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-980">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-981">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-982">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-983">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-984">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-348">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-349">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-350">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-351">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-985">
              <Link href="/search" id="言葉-p" className="button-352">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-353">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-354">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-355">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-986">
              <Link href="/attention" id="ご来場の-p" className="button-356">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-357">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-358">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-359">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-360">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-987">
              <Link href="/committee" id="委員会企画-p" className="button-361">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-362">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-363">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-988"
          />
          <div className="el-989">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-990" data-p="">
              <span
                className="crisp-svg svg-290"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-991">
                <Link href="/about" className="el-992">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-23">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-993">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-994">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-995" data-p="">
              <span
                className="crisp-svg svg-291"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-996">
                <Link href="/search" className="el-997">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-998">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-999">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-1000">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-1001" data-p="">
              <span
                className="crisp-svg svg-292"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-1002">
                <Link href="/attention" className="el-1003">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-1004">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-1005">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-1006">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-1007">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-1008" data-p="">
              <span
                className="crisp-svg svg-293"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-1009">
                <Link href="/committee" className="el-1010">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-26">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-1011">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-1012"
        />
      </section>
      <section className="box-208">
        <span
          className="crisp-svg svg-205"
        >
          <svg aria-hidden="true" width={1113} height={135} viewBox="0 0 1113 135" />
          <Image
            src="/assets/pasted-artwork-124.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-206">
          <span
            className="crisp-svg svg-206"
          >
            <svg aria-hidden="true" width={371} height={38} viewBox="0 0 371 38" />
            <Image
              src="/assets/pasted-artwork-125.svg"
              alt=""
              width={742}
              height={76}
            />
          </span>
        </p>
        <div className="box-207">
          <span
            className="crisp-svg svg-207"
          >
            <svg aria-hidden="true" width={400} height={400} viewBox="0 0 400 400" />
            <Image
              src="/assets/pasted-artwork-126.svg"
              alt=""
              width={800}
              height={800}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-21"
      />
    </>
  );
}
