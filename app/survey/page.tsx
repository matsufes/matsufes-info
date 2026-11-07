import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "来場者アンケート",
  description: "松ヶ崎祭にご来場の皆さまへのアンケートです。",
  openGraph: {
    title: "来場者アンケート",
    description: "松ヶ崎祭にご来場の皆さまへのアンケートです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv6ai6be3t" />
      <nav className="header-23">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1619"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1620">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-73"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1621">
          <div className="box-597">
            <div className="el-1622">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1623">
                <span
                  className="crisp-svg svg-223"
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
            <div className="container-121">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1624">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1625">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-428">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-429">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-430">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-431">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1626">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1627">
                <Link href="/search" id="言葉-p-2" className="button-432">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-433">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-434">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-435">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1628">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1629">
                <Link href="/attention" id="ご来場の-p-2" className="button-436">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-437">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-438">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-439">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-440">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1630">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1631">
                <Link href="/committee" id="委員会企画-p-2" className="button-441">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-442">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-443">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1632">
          <div className="container-122">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1633">
              <div className="el-1634">
                <div className="box-598">
                  <p className="text-424">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-425">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-426">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1635" />
              <div id="div-34" data-toggle-show="flex" className="el-1636">
                <div id="menu1-2" data-inview className="container-123">
                  <Link href="/about" className="el-1637">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1638">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1639">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1640">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1641" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1642">
              <div className="el-1643">
                <div className="box-599">
                  <p className="text-427">
                    {"きかく"}
                  </p>
                  <p className="text-428">
                    {"企画"}
                  </p>
                </div>
                <p className="text-429">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1644" />
              <div id="div-36" data-toggle-show="flex" className="el-1645">
                <div id="menu1-4" data-inview className="container-124">
                  <Link href="/search" className="el-1646">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1647">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1648">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1649">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1650" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1651">
              <div className="el-1652">
                <p className="text-430">
                  {"ご"}
                </p>
                <div className="box-600">
                  <p className="text-431">
                    {"あんない"}
                  </p>
                  <p className="text-432">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1653" />
              <div id="div-39" data-toggle-show="flex" className="el-1654">
                <div id="menu1-6" data-inview className="container-125">
                  <Link href="/attention" className="el-1655">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1656">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1657">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1658">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1659">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1660" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1661">
              <div className="el-1662">
                <div className="box-601">
                  <p className="text-433">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-434">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1663" />
              <div id="div-38" data-toggle-show="flex" className="el-1664">
                <div id="menu1-8" data-inview className="container-126">
                  <Link href="/committee" className="el-1665">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1666">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1667">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1668" />
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
        className="el-1669"
      />
      <section className="box-204">
        <span
          className="crisp-svg svg-174"
        >
          <svg aria-hidden="true" width={1113} height={135} viewBox="0 0 1113 135" />
          <Image
            src="/assets/pasted-artwork-96.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-202">
          <span
            className="crisp-svg svg-175"
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
        <div className="box-203">
          <span
            className="crisp-svg svg-176"
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
        className="image-10"
      />
    </>
  );
}
