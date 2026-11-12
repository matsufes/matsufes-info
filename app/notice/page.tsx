import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "松ヶ崎祭に関するお知らせをお届けします。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
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
      <nav className="header-18">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1300"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1301">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-67"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1302">
          <div className="box-550">
            <div className="el-1303">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1304">
                <span
                  className="crisp-svg svg-210"
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
            <div className="container-91">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1305">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1306">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-333">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-334">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-335">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-336">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1307">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1308">
                <Link href="/search" id="言葉-p-2" className="button-337">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-338">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-339">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-340">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1309">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1310">
                <Link href="/attention" id="ご来場の-p-2" className="button-341">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-342">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-343">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-344">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-345">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1311">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1312">
                <Link href="/committee" id="委員会企画-p-2" className="button-346">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-347">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-348">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1313">
          <div className="container-92">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1314">
              <div className="el-1315">
                <div className="box-551">
                  <p className="text-349">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-350">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-351">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1316" />
              <div id="div-34" data-toggle-show="flex" className="el-1317">
                <div id="menu1-2" data-inview className="container-93">
                  <Link href="/about" className="el-1318">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1319">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1320">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1321">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1322" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1323">
              <div className="el-1324">
                <div className="box-552">
                  <p className="text-352">
                    {"きかく"}
                  </p>
                  <p className="text-353">
                    {"企画"}
                  </p>
                </div>
                <p className="text-354">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1325" />
              <div id="div-36" data-toggle-show="flex" className="el-1326">
                <div id="menu1-4" data-inview className="container-94">
                  <Link href="/search" className="el-1327">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1328">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1329">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1330">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1331" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1332">
              <div className="el-1333">
                <p className="text-355">
                  {"ご"}
                </p>
                <div className="box-553">
                  <p className="text-356">
                    {"あんない"}
                  </p>
                  <p className="text-357">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1334" />
              <div id="div-39" data-toggle-show="flex" className="el-1335">
                <div id="menu1-6" data-inview className="container-95">
                  <Link href="/attention" className="el-1336">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1337">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1338">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1339">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1340">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1341" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1342">
              <div className="el-1343">
                <div className="box-554">
                  <p className="text-358">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-359">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1344" />
              <div id="div-38" data-toggle-show="flex" className="el-1345">
                <div id="menu1-8" data-inview className="container-96">
                  <Link href="/committee" className="el-1346">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1347">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-1348">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1349" />
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
        className="el-1350"
      />
      <p className="box-64">
        <span
          className="crisp-svg svg-53"
          style={{ ["--crisp-svg-width"]: "412px", ["--crisp-svg-ratio"]: "412 / 123" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={412} height={123} viewBox="0 0 412 123" />
          <Image
            src="/assets/pasted-artwork-75.svg"
            alt=""
            width={824}
            height={246}
          />
        </span>
      </p>
      <section className="box-65">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-21"
        />
      </section>
      <section className="box-188">
        <p className="box-189">
          {"2026/10/13"}
        </p>
        <div className="box-190">
          <Image
            src="/assets/pasted-artwork-189.svg"
            alt=""
            width={112}
            height={37}
            className="svg-156"
          />
        </div>
      </section>
      <section className="box-187">
        <div id="Q-8" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-8\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-16\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-17\"}]}]"} className="el-2915">
          <p className="text-735">
            {"第56回松ヶ崎祭公式webページが更新されました。"}
          </p>
          <div className="button-763">
            <Image id="img-16" data-toggle-show="block"
              src="/assets/pasted-artwork-263.svg"
              alt=""
              width={44}
              height={28}
              className="el-2916"
            />
            <Image id="img-17" data-toggle-show="block"
              src="/assets/pasted-artwork-263.svg"
              alt=""
              width={44}
              height={28}
              className="el-2917"
            />
          </div>
        </div>
        <p id="A-8" data-toggle-show="flex" className="el-2918">
          {"出展者様情報が公開されました。\n各出展者様のSNS等で松ヶ崎祭の情報を発信していただけます。\n ぜひ一緒に、松ヶ崎祭を盛り上げていただけますと幸いです。\n\n また、システム調整に伴う公開予定日時の変更により、\n出展者の皆さまに多大なるご迷惑をおかけしましたことを、心よりお詫び申し上げます。"}
        </p>
      </section>
      <section className="box-950">
        <p className="box-951">
          {"2026/11/07"}
        </p>
        <div className="box-952">
          <Image
            src="/assets/pasted-artwork-189.svg"
            alt=""
            width={112}
            height={37}
            className="svg-579"
          />
        </div>
      </section>
      <section className="box-953">
        <div id="Q-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-2\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-2\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-3\"}]}]"} className="el-2919">
          <p className="text-736">
            {"第56回松ヶ崎祭公式webページが更新されました。"}
          </p>
          <div className="button-764">
            <Image id="img-2" data-toggle-show="block"
              src="/assets/pasted-artwork-263.svg"
              alt=""
              width={44}
              height={28}
              className="el-2920"
            />
            <Image id="img-3" data-toggle-show="block"
              src="/assets/pasted-artwork-263.svg"
              alt=""
              width={44}
              height={28}
              className="el-2921"
            />
          </div>
        </div>
        <p id="A-2" data-toggle-show="flex" className="el-2922">
          {"追加されたコンテンツは以下の通りです。\n\n・よくあるご質問\n・委員会企画"}
        </p>
      </section>
      <section data-inview className="footer-15">
        <span
          className="crisp-svg pasted-artwork-svg-87"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1669">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-243"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-18">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-244"
          />
        </a>
      </section>
      <section data-inview className="el-1704">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1705">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-290"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-34">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-291"
          />
        </a>
        <span
          className="crisp-svg svg-292"
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
