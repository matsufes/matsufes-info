import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "準備中",
  openGraph: {
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
          className="el-1467"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1468">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-70"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1469">
          <div className="box-582">
            <div className="el-1470">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1471">
                <span
                  className="crisp-svg svg-218"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-132.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-103">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1472">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1473">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-380">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-381">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-382">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-383">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1474">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1475">
                <Link href="/search" id="言葉-p-2" className="button-384">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-385">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-386">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-387">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1476">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1477">
                <Link href="/attention" id="ご来場の-p-2" className="button-388">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-389">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-390">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-391">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-392">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1478">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1479">
                <Link href="/committee" id="委員会企画-p-2" className="button-393">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-394">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-395">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1480">
          <div className="container-104">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1481">
              <div className="el-1482">
                <div className="box-583">
                  <p className="text-391">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-392">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-393">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1483" />
              <div id="div-34" data-toggle-show="flex" className="el-1484">
                <div id="menu1-2" data-inview className="container-105">
                  <Link href="/about" className="el-1485">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1486">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1487">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1488">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1489" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1490">
              <div className="el-1491">
                <div className="box-584">
                  <p className="text-394">
                    {"きかく"}
                  </p>
                  <p className="text-395">
                    {"企画"}
                  </p>
                </div>
                <p className="text-396">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1492" />
              <div id="div-36" data-toggle-show="flex" className="el-1493">
                <div id="menu1-4" data-inview className="container-106">
                  <Link href="/search" className="el-1494">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1495">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1496">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1497">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1498" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1499">
              <div className="el-1500">
                <p className="text-397">
                  {"ご"}
                </p>
                <div className="box-585">
                  <p className="text-398">
                    {"あんない"}
                  </p>
                  <p className="text-399">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1501" />
              <div id="div-39" data-toggle-show="flex" className="el-1502">
                <div id="menu1-6" data-inview className="container-107">
                  <Link href="/attention" className="el-1503">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1504">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1505">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1506">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1507">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1508" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1509">
              <div className="el-1510">
                <div className="box-586">
                  <p className="text-400">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-401">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1511" />
              <div id="div-38" data-toggle-show="flex" className="el-1512">
                <div id="menu1-8" data-inview className="container-108">
                  <Link href="/committee" className="el-1513">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1514">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1515">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1516" />
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
        className="el-1517"
      />
      <section className="box-73">
        <span
          className="crisp-svg svg-76"
        >
          <svg aria-hidden="true" width={1113} height={135} viewBox="0 0 1113 135" />
          <Image
            src="/assets/pasted-artwork-96.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-104">
          <span
            className="crisp-svg svg-77"
          >
            <svg aria-hidden="true" width={371} height={38} viewBox="0 0 371 38" />
            <Image
              src="/assets/pasted-artwork-97.svg"
              alt=""
              width={742}
              height={76}
            />
          </span>
        </p>
        <div className="box-105">
          <span
            className="crisp-svg svg-78"
          >
            <svg aria-hidden="true" width={400} height={400} viewBox="0 0 400 400" />
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
