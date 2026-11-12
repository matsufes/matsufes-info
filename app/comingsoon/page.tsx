import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "準備中",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "準備中",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muhpllld2i" />
      <nav className="header-20">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1402"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1403">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-69"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1404">
          <div className="box-560">
            <div className="el-1405">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1406">
                <span
                  className="crisp-svg svg-212"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
                >
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-103">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1407">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1408">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-365">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-366">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-367">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-368">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1409">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1410">
                <Link href="/search" id="言葉-p-2" className="button-369">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-370">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-371">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-372">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1411">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1412">
                <Link href="/attention" id="ご来場の-p-2" className="button-373">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-374">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-375">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-376">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-377">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1413">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1414">
                <Link href="/committee" id="委員会企画-p-2" className="button-378">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-379">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-380">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1415">
          <div className="container-104">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1416">
              <div className="el-1417">
                <div className="box-561">
                  <p className="text-371">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-372">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-373">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1418" />
              <div id="div-34" data-toggle-show="flex" className="el-1419">
                <div id="menu1-2" data-inview className="container-105">
                  <Link href="/about" className="el-1420">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1421">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1422">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1423">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1424" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1425">
              <div className="el-1426">
                <div className="box-562">
                  <p className="text-374">
                    {"きかく"}
                  </p>
                  <p className="text-375">
                    {"企画"}
                  </p>
                </div>
                <p className="text-376">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1427" />
              <div id="div-36" data-toggle-show="flex" className="el-1428">
                <div id="menu1-4" data-inview className="container-106">
                  <Link href="/search" className="el-1429">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1430">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1431">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1432">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1433" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1434">
              <div className="el-1435">
                <p className="text-377">
                  {"ご"}
                </p>
                <div className="box-563">
                  <p className="text-378">
                    {"あんない"}
                  </p>
                  <p className="text-379">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1436" />
              <div id="div-39" data-toggle-show="flex" className="el-1437">
                <div id="menu1-6" data-inview className="container-107">
                  <Link href="/attention" className="el-1438">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1439">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1440">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1441">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1442">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1443" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1444">
              <div className="el-1445">
                <div className="box-564">
                  <p className="text-380">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-381">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1446" />
              <div id="div-38" data-toggle-show="flex" className="el-1447">
                <div id="menu1-8" data-inview className="container-108">
                  <Link href="/committee" className="el-1448">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1449">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1450">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1451" />
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
        className="el-1452"
      />
      <section className="box-71">
        <span
          className="crisp-svg svg-76"
          style={{ ["--crisp-svg-width"]: "1113px", ["--crisp-svg-ratio"]: "1113 / 135" } as import("react").CSSProperties}
        >
          <Image
            src="/assets/pasted-artwork-96.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-102">
          <span
            className="crisp-svg svg-77"
            style={{ ["--crisp-svg-width"]: "371px", ["--crisp-svg-ratio"]: "371 / 38" } as import("react").CSSProperties}
          >
            <Image
              src="/assets/pasted-artwork-97.svg"
              alt=""
              width={742}
              height={76}
            />
          </span>
        </p>
        <div className="box-103">
          <span
            className="crisp-svg svg-78"
            style={{ ["--crisp-svg-width"]: "400px", ["--crisp-svg-ratio"]: "400 / 400" } as import("react").CSSProperties}
          >
            <Image
              src="/assets/pasted-artwork-98.svg"
              alt=""
              width={800}
              height={800}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-3.svg"
        alt=""
        width={1920}
        height={713}
        className="image-7"
      />
    </>
  );
}
