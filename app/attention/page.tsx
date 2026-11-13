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
      <span hidden data-page-body="page_mw0g55mu5emi6z" />
      <nav className="header-31">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2290"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2291">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-106"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2302">
          <div className="box-800">
            <div className="el-2293">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2292">
                <span
                  className="crisp-svg svg-412"
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
            <div className="container-169">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2294">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2295">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-586">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-587">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-588">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-589">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2296">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2297">
                <Link href="/search" id="言葉-p-2" className="button-590">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-591">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-592">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-593">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2298">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2299">
                <Link href="/attention" id="ご来場の-p-2" className="button-594">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-595">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-596">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-597">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-598">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2300">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2301">
                <Link href="/committee" id="委員会企画-p-2" className="button-599">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-600">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-601">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2339">
          <div className="container-174">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2311">
              <div className="el-2303">
                <div className="box-801">
                  <p className="text-608">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-609">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-610">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2304" />
              <div id="div-34" data-toggle-show="flex" className="el-2310">
                <div id="menu1-2" data-inview className="container-170">
                  <Link href="/about" className="el-2305">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2306">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2307">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2308">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2309" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2320">
              <div className="el-2312">
                <div className="box-802">
                  <p className="text-611">
                    {"きかく"}
                  </p>
                  <p className="text-612">
                    {"企画"}
                  </p>
                </div>
                <p className="text-613">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2313" />
              <div id="div-36" data-toggle-show="flex" className="el-2319">
                <div id="menu1-4" data-inview className="container-171">
                  <Link href="/search" className="el-2314">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2315">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2316">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2317">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2318" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2330">
              <div className="el-2321">
                <p className="text-614">
                  {"ご"}
                </p>
                <div className="box-803">
                  <p className="text-615">
                    {"あんない"}
                  </p>
                  <p className="text-616">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2322" />
              <div id="div-39" data-toggle-show="flex" className="el-2329">
                <div id="menu1-6" data-inview className="container-172">
                  <Link href="/attention" className="el-2323">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2324">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2325">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2326">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2327">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2328" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2338">
              <div className="el-2331">
                <div className="box-804">
                  <p className="text-617">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-618">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2332" />
              <div id="div-38" data-toggle-show="flex" className="el-2337">
                <div id="menu1-8" data-inview className="container-173">
                  <Link href="/committee" className="el-2333">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2334">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2335">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2336" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/pasted-artwork-217.svg"
        alt=""
        width={1440}
        height={489}
        className="el-2808"
      />
      <p className="box-945">
        <Image
          src="/assets/pasted-artwork-302.svg"
          alt=""
          width={837}
          height={125}
          className="svg-563"
        />
      </p>
      <section className="box-805">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="svg-495"
        />
      </section>
      <section className="box-806">
        <Image
          src="/assets/pasted-artwork-287.svg"
          alt=""
          width={750}
          height={128}
          className="svg-496"
        />
      </section>
      <section className="box-808">
        <p className="box-807">
          {"◇ ご来場の際は、公共交通機関をご利用ください。\n\n◇ 車・バイクでのご来場はご遠慮ください。\n\n◇ 自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n構内の自転車走行は禁止されています。\n\n◇ ペット(補助犬を除く)の同伴はご遠慮ください。\n\n◇ 酒類の持ち込みおよび飲酒は禁止されています。また、泥酔状態でのご来場もご遠慮ください。\n\n◇ 構内は喫煙所を除き、全面禁煙です。周辺道路での喫煙もご遠慮ください。\n\n◇ 当委員会から認められていない勧誘・宣伝・販売行為は禁止されています。\n\n◇ 企画を実施していない建物や講義室、工事区域内への立ち入りはご遠慮ください。\n\n◇ ゴミの分別にご協力ください。"}
        </p>
      </section>
      <section className="box-809">
        <Image
          src="/assets/pasted-artwork-288.svg"
          alt=""
          width={438}
          height={128}
          className="svg-497"
        />
      </section>
      <section className="box-811">
        <p className="box-810">
          {"◇ 落とし物をしたり、発見した場合は本部までお越しください。\n\n◇ 迷子を見つけた場合、お連れの方が迷子になった場合は本部までお越しください。\n\n◇ 急病人を発見した場合は、お近くの実行委員までお知らせください。\n\n◇ 怪我や体調が優れない場合は、本部または保健管理センターまでお越しください。 "}
        </p>
      </section>
      <section data-inview className="el-2772">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2773">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-125"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-49">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-126"
          />
        </a>
        <span
          className="crisp-svg svg-447"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-282.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-24">
        <span
          className="crisp-svg svg-448"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-279.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2774">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-449"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-50">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-450"
          />
        </a>
      </section>
    </>
  );
}
