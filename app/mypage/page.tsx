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
      <nav className="header-19">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home-2.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1426"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1427">
          <Image
            src="/assets/menu-2.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-71"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1428">
          <div className="box-578">
            <div className="el-1429">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1430">
                <span
                  className="crisp-svg svg-244"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-151.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-97">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1431">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1432">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-364">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-365">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-366">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-367">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1433">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1434">
                <Link href="/search" id="言葉-p-2" className="button-368">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-369">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-370">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-371">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1435">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1436">
                <Link href="/attention" id="ご来場の-p-2" className="button-372">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-373">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-374">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-375">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-376">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1437">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1438">
                <Link href="/committee" id="委員会企画-p-2" className="button-377">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-378">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-379">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1439">
          <div className="container-98">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1440">
              <div className="el-1441">
                <div className="box-579">
                  <p className="text-380">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-381">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-382">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1442" />
              <div id="div-34" data-toggle-show="flex" className="el-1443">
                <div id="menu1-2" data-inview className="container-99">
                  <Link href="/about" className="el-1444">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1445">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1446">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1447">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1448" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1449">
              <div className="el-1450">
                <div className="box-580">
                  <p className="text-383">
                    {"さがし"}
                  </p>
                  <p className="text-384">
                    {"企画"}
                  </p>
                </div>
                <p className="text-385">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1451" />
              <div id="div-36" data-toggle-show="flex" className="el-1452">
                <div id="menu1-4" data-inview className="container-100">
                  <Link href="/search" className="el-1453">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1454">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1455">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1456">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1457" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1458">
              <div className="el-1459">
                <p className="text-386">
                  {"ご"}
                </p>
                <div className="box-581">
                  <p className="text-387">
                    {"あんない"}
                  </p>
                  <p className="text-388">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1460" />
              <div id="div-39" data-toggle-show="flex" className="el-1461">
                <div id="menu1-6" data-inview className="container-101">
                  <Link href="/attention" className="el-1462">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1463">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1464">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1465">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1466">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1467" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1468">
              <div className="el-1469">
                <div className="box-582">
                  <p className="text-389">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-390">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1470" />
              <div id="div-38" data-toggle-show="flex" className="el-1471">
                <div id="menu1-8" data-inview className="container-102">
                  <Link href="/committee" className="el-1472">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1473">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1474">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1475" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={583}
        className="el-1476"
      />
      <section className="box-208">
        <Image
          src="/assets/pasted-artwork-115.svg"
          alt=""
          width={1113}
          height={135}
          className="svg-200"
        />
        <p className="box-206">
          <Image
            src="/assets/pasted-artwork-116.svg"
            alt=""
            width={371}
            height={38}
            className="svg-201"
          />
        </p>
        <div className="box-207">
          <Image
            src="/assets/pasted-artwork-117.svg"
            alt=""
            width={400}
            height={400}
            className="svg-202"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-4.svg"
        alt=""
        width={1920}
        height={713}
        className="image-12"
      />
    </>
  );
}
