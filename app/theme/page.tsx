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
      <nav className="header-16">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1278"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1279">
          <span
            className="crisp-svg pasted-artwork-svg-69"
          >
            <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
            <Image
              src="/assets/pasted-artwork-223.svg"
              alt="メニューを開く"
              width={460}
              height={284}
            />
          </span>
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1280">
          <div className="box-564">
            <div className="el-1281">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1282">
                <span
                  className="crisp-svg svg-243"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-160.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-79">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1283">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1284">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-316">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-317">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-318">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-319">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1285">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1286">
                <Link href="/search" id="言葉-p-2" className="button-320">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-321">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-322">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-323">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1287">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1288">
                <Link href="/attention" id="ご来場の-p-2" className="button-324">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-325">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-326">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-327">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-328">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1289">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1290">
                <Link href="/committee" id="委員会企画-p-2" className="button-329">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-330">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-331">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1291">
          <div className="container-80">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1292">
              <div className="el-1293">
                <div className="box-565">
                  <p className="text-347">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-348">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-349">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1294" />
              <div id="div-34" data-toggle-show="flex" className="el-1295">
                <div id="menu1-2" data-inview className="container-81">
                  <Link href="/about" className="el-1296">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1297">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1298">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1299">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1300" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1301">
              <div className="el-1302">
                <div className="box-566">
                  <p className="text-350">
                    {"さがし"}
                  </p>
                  <p className="text-351">
                    {"企画"}
                  </p>
                </div>
                <p className="text-352">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1303" />
              <div id="div-36" data-toggle-show="flex" className="el-1304">
                <div id="menu1-4" data-inview className="container-82">
                  <Link href="/search" className="el-1305">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1306">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1307">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1308">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1309" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1310">
              <div className="el-1311">
                <p className="text-353">
                  {"ご"}
                </p>
                <div className="box-567">
                  <p className="text-354">
                    {"あんない"}
                  </p>
                  <p className="text-355">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1312" />
              <div id="div-39" data-toggle-show="flex" className="el-1313">
                <div id="menu1-6" data-inview className="container-83">
                  <Link href="/attention" className="el-1314">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1315">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1316">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1317">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1318">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1319" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1320">
              <div className="el-1321">
                <div className="box-568">
                  <p className="text-356">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-357">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1322" />
              <div id="div-38" data-toggle-show="flex" className="el-1323">
                <div id="menu1-8" data-inview className="container-84">
                  <Link href="/committee" className="el-1324">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1325">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1326">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1327" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={583}
        className="el-1328"
      />
      <p className="box-62">
        <Image
          src="/assets/pasted-artwork-94.svg"
          alt=""
          width={917}
          height={87}
          className="svg-60"
        />
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
          src="/assets/pasted-artwork-256.svg"
          alt=""
          width={1383}
          height={304}
          className="svg-232"
        />
      </section>
      <section className="box-69">
        <Image
          src="/assets/pasted-artwork-121.svg"
          alt=""
          width={541}
          height={114}
          className="svg-84"
        />
      </section>
      <section className="box-70">
        <div className="box-100">
          <Image
            src="/assets/image-2.svg"
            alt=""
            width={738}
            height={565}
            className="svg-85"
          />
        </div>
        <div className="box-101">
          <Image
            src="/assets/pasted-artwork-122.svg"
            alt=""
            width={523}
            height={66}
            className="svg-86"
          />
        </div>
      </section>
      <section className="box-102">
        <div className="box-103">
          <span
            className="crisp-svg svg-231"
          >
            <svg aria-hidden="true" width={985} height={748} viewBox="0 0 985 748" />
            <Image
              src="/assets/pasted-artwork-255.svg"
              alt=""
              width={1970}
              height={1496}
            />
          </span>
        </div>
        <div className="box-104">
          <span
            className="crisp-svg svg-87"
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
          className="svg-62"
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
