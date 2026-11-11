import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "まつぴよ",
  description: "松ヶ崎祭のキャラクター「まつぴよ」のページです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "まつぴよ",
    description: "松ヶ崎祭のキャラクター「まつぴよ」のページです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv8igc0g21" />
      <nav className="header-24">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1605"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1606">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-73"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1607">
          <div className="box-580">
            <div className="el-1608">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1609">
                <span
                  className="crisp-svg svg-216"
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
            <div className="container-127">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1610">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1611">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-429">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-430">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-431">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-432">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1612">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1613">
                <Link href="/search" id="言葉-p-2" className="button-433">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-434">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-435">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-436">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1614">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1615">
                <Link href="/attention" id="ご来場の-p-2" className="button-437">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-438">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-439">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-440">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-441">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1616">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1617">
                <Link href="/committee" id="委員会企画-p-2" className="button-442">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-443">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-444">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1618">
          <div className="container-128">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1619">
              <div className="el-1620">
                <div className="box-581">
                  <p className="text-415">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-416">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-417">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1621" />
              <div id="div-34" data-toggle-show="flex" className="el-1622">
                <div id="menu1-2" data-inview className="container-129">
                  <Link href="/about" className="el-1623">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1624">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1625">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1626">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1627" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1628">
              <div className="el-1629">
                <div className="box-582">
                  <p className="text-418">
                    {"きかく"}
                  </p>
                  <p className="text-419">
                    {"企画"}
                  </p>
                </div>
                <p className="text-420">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1630" />
              <div id="div-36" data-toggle-show="flex" className="el-1631">
                <div id="menu1-4" data-inview className="container-130">
                  <Link href="/search" className="el-1632">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1633">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1634">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1635">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1636" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1637">
              <div className="el-1638">
                <p className="text-421">
                  {"ご"}
                </p>
                <div className="box-583">
                  <p className="text-422">
                    {"あんない"}
                  </p>
                  <p className="text-423">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1639" />
              <div id="div-39" data-toggle-show="flex" className="el-1640">
                <div id="menu1-6" data-inview className="container-131">
                  <Link href="/attention" className="el-1641">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1642">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1643">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1644">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1645">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1646" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1647">
              <div className="el-1648">
                <div className="box-584">
                  <p className="text-424">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-425">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1649" />
              <div id="div-38" data-toggle-show="flex" className="el-1650">
                <div id="menu1-8" data-inview className="container-132">
                  <Link href="/committee" className="el-1651">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1652">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1653">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1654" />
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
        className="el-1655"
      />
      <section className="box-344">
        <span
          className="crisp-svg svg-183"
        >
          <svg aria-hidden="true" width={1113} height={135} viewBox="0 0 1113 135" />
          <Image
            src="/assets/pasted-artwork-96.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-342">
          <span
            className="crisp-svg svg-184"
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
        <div className="box-343">
          <span
            className="crisp-svg svg-185"
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
        className="image-13"
      />
    </>
  );
}
