import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ご来場の皆さまへ",
  description: "松ヶ崎祭実行委員会からご来場の皆さまへのお願いです。",
  openGraph: {
    title: "ご来場の皆さまへ",
    description: "松ヶ崎祭実行委員会からご来場の皆さまへのお願いです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muiixvz340" />
      <section className="el-600">
        <div className="el-601">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-602">
            <span
              className="crisp-svg pasted-artwork-svg-57"
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
          <div id="memu-p" data-toggle-show="flex" className="el-603">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-604">
              <span
                className="crisp-svg svg-244"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-605">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-606">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-607">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-608">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-609">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-188">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-189">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-190">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-191">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-610">
              <Link href="/search" id="言葉-p" className="button-192">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-193">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-194">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-195">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-611">
              <Link href="/attention" id="ご来場の-p" className="button-196">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-197">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-198">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-199">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-200">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-612">
              <Link href="/committee" id="委員会企画-p" className="button-201">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-202">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-203">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-613"
          />
          <div className="el-614">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-615" data-p="">
              <span
                className="crisp-svg svg-245"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-616">
                <Link href="/about" className="el-617">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-13">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-618">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-619">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-620" data-p="">
              <span
                className="crisp-svg svg-246"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-621">
                <Link href="/search" className="el-622">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-623">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-624">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-625">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-626" data-p="">
              <span
                className="crisp-svg svg-247"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-627">
                <Link href="/attention" className="el-628">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-629">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-630">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-631">
                  {"よくあるご案内"}
                </Link>
                <Link href="/links" className="el-632">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-633" data-p="">
              <span
                className="crisp-svg svg-248"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-634">
                <Link href="/committee" className="el-635">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-16">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-636">
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
          className="el-637"
        />
      </section>
      <p className="box-76">
        <span
          className="crisp-svg pasted-artwork-svg-28"
        >
          <svg aria-hidden="true" width={845} height={130} viewBox="0 0 845 130" />
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={1690}
            height={260}
          />
        </span>
      </p>
      <section className="box-77">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-29"
        />
      </section>
      <section className="box-78">
        <span
          className="crisp-svg svg-78"
        >
          <svg aria-hidden="true" width={749} height={114} viewBox="0 0 749 114" />
          <Image
            src="/assets/pasted-artwork-106.svg"
            alt=""
            width={1498}
            height={228}
          />
        </span>
      </section>
      <section className="box-79">
        <p className="box-80">
          {"◇ ご来場の際は、公共交通機関をご利用ください。\n\n◇ 車・バイクでのご来場はご遠慮ください。\n\n◇ 自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n構内の自転車走行は禁止されています。\n\n◇ ペット(補助犬を除く)の同伴はご遠慮ください。\n\n◇ 酒類の持ち込みおよび飲酒は禁止されています。また、泥酔状態でのご来場もご遠慮ください。\n\n◇ 構内は喫煙所を除き、全面禁煙です。周辺道路での喫煙もご遠慮ください。\n\n◇ 当委員会から認められていない勧誘・宣伝・販売行為は禁止されています。\n\n◇ 企画を実施していない建物や講義室、工事区域内への立ち入りはご遠慮ください。\n\n◇ ゴミの分別にご協力ください。"}
        </p>
      </section>
      <section className="box-81">
        <span
          className="crisp-svg svg-79"
        >
          <svg aria-hidden="true" width={438} height={114} viewBox="0 0 438 114" />
          <Image
            src="/assets/pasted-artwork-107.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-82">
        <p className="box-83">
          {"◇ 落とし物をしたり、発見した場合は本部までお越しください。\n\n◇ 迷子を見つけた場合、お連れの方が迷子になった場合は本部までお越しください。\n\n◇ 急病人を発見した場合は、お近くの実行委員までお知らせください。\n\n◇ 怪我や体調が優れない場合は、本部または保健管理センターまでお越しください。 "}
        </p>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-16"
      />
    </>
  );
}
