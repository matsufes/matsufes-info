import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ご来場の皆さまへ",
  description: "松ヶ崎祭実行委員会からご来場の皆さまへのお願いです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
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
      <nav className="header-10">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-892"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-893">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-59"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-894">
          <div className="box-510">
            <div className="el-895">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-896">
                <span
                  className="crisp-svg svg-202"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-43">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-897">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-898">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-205">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-206">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-207">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-208">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-899">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-900">
                <Link href="/search" id="言葉-p-2" className="button-209">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-210">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-211">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-212">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-901">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-902">
                <Link href="/attention" id="ご来場の-p-2" className="button-213">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-214">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-215">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-216">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-217">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-903">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-904">
                <Link href="/committee" id="委員会企画-p-2" className="button-218">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-219">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-220">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-905">
          <div className="container-44">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-906">
              <div className="el-907">
                <div className="box-511">
                  <p className="text-261">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-262">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-263">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-908" />
              <div id="div-34" data-toggle-show="flex" className="el-909">
                <div id="menu1-2" data-inview className="container-45">
                  <Link href="/about" className="el-910">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-911">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-912">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-913">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-914" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-915">
              <div className="el-916">
                <div className="box-512">
                  <p className="text-264">
                    {"きかく"}
                  </p>
                  <p className="text-265">
                    {"企画"}
                  </p>
                </div>
                <p className="text-266">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-917" />
              <div id="div-36" data-toggle-show="flex" className="el-918">
                <div id="menu1-4" data-inview className="container-46">
                  <Link href="/search" className="el-919">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-920">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-921">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-922">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-923" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-924">
              <div className="el-925">
                <p className="text-267">
                  {"ご"}
                </p>
                <div className="box-513">
                  <p className="text-268">
                    {"あんない"}
                  </p>
                  <p className="text-269">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-926" />
              <div id="div-39" data-toggle-show="flex" className="el-927">
                <div id="menu1-6" data-inview className="container-47">
                  <Link href="/attention" className="el-928">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-929">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-930">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-931">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-932">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-933" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-934">
              <div className="el-935">
                <div className="box-514">
                  <p className="text-270">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-271">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-936" />
              <div id="div-38" data-toggle-show="flex" className="el-937">
                <div id="menu1-8" data-inview className="container-48">
                  <Link href="/committee" className="el-938">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-939">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-940">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-941" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-4.svg"
        alt=""
        width={1920}
        height={583}
        className="el-942"
      />
      <p className="box-72">
        <span
          className="crisp-svg svg-564"
          style={{ ["--crisp-svg-width"]: "845px", ["--crisp-svg-ratio"]: "845 / 130" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={845} height={130} viewBox="0 0 845 130" />
          <Image
            src="/assets/pasted-artwork-358.svg"
            alt=""
            width={1690}
            height={260}
          />
        </span>
      </p>
      <section className="box-73">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-27"
        />
      </section>
      <section className="box-74">
        <span
          className="crisp-svg svg-567"
          style={{ ["--crisp-svg-width"]: "749px", ["--crisp-svg-ratio"]: "749 / 114" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={749} height={114} viewBox="0 0 749 114" />
          <Image
            src="/assets/pasted-artwork-361.svg"
            alt=""
            width={1498}
            height={228}
          />
        </span>
      </section>
      <section className="box-75">
        <p className="box-76">
          {"◇ ご来場の際は、公共交通機関をご利用ください。\n\n◇ 車・バイクでのご来場はご遠慮ください。\n\n◇ 自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n構内の自転車走行は禁止されています。\n\n◇ ペット(補助犬を除く)の同伴はご遠慮ください。\n\n◇ 酒類の持ち込みおよび飲酒は禁止されています。また、泥酔状態でのご来場もご遠慮ください。\n\n◇ 構内は喫煙所を除き、全面禁煙です。周辺道路での喫煙もご遠慮ください。\n\n◇ 当委員会から認められていない勧誘・宣伝・販売行為は禁止されています。\n\n◇ 企画を実施していない建物や講義室、工事区域内への立ち入りはご遠慮ください。\n\n◇ ゴミの分別にご協力ください。"}
        </p>
      </section>
      <section className="box-77">
        <span
          className="crisp-svg svg-60"
          style={{ ["--crisp-svg-width"]: "438px", ["--crisp-svg-ratio"]: "438 / 114" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={438} height={114} viewBox="0 0 438 114" />
          <Image
            src="/assets/pasted-artwork-80.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-78">
        <p className="box-79">
          {"◇ 落とし物をしたり、発見した場合は本部までお越しください。\n\n◇ 迷子を見つけた場合、お連れの方が迷子になった場合は本部までお越しください。\n\n◇ 急病人を発見した場合は、お近くの実行委員までお知らせください。\n\n◇ 怪我や体調が優れない場合は、本部または保健管理センターまでお越しください。 "}
        </p>
      </section>
      <section data-inview className="footer-7">
        <span
          className="crisp-svg pasted-artwork-svg-79"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1015" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1661">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-227"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-10">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-228"
          />
        </a>
      </section>
      <section data-inview className="el-1688">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1689">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-266"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-26">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-267"
          />
        </a>
        <span
          className="crisp-svg svg-268"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 347" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
