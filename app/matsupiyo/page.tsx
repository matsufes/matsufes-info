import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "まつぴよ",
  description: "松ヶ崎祭のキャラクター「まつぴよ」のページです。",
  openGraph: {
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
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1685"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1686">
          <span
            className="crisp-svg pasted-artwork-svg-77"
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
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1687">
          <div className="box-604">
            <div className="el-1688">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1689">
                <span
                  className="crisp-svg svg-251"
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
            <div className="container-127">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1690">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1691">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-444">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-445">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-446">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-447">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1692">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1693">
                <Link href="/search" id="言葉-p-2" className="button-448">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-449">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-450">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-451">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1694">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1695">
                <Link href="/attention" id="ご来場の-p-2" className="button-452">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-453">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-454">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-455">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-456">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1696">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1697">
                <Link href="/committee" id="委員会企画-p-2" className="button-457">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-458">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-459">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1698">
          <div className="container-128">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1699">
              <div className="el-1700">
                <div className="box-605">
                  <p className="text-435">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-436">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-437">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1701" />
              <div id="div-34" data-toggle-show="flex" className="el-1702">
                <div id="menu1-2" data-inview className="container-129">
                  <Link href="/about" className="el-1703">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1704">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1705">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1706">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1707" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1708">
              <div className="el-1709">
                <div className="box-606">
                  <p className="text-438">
                    {"さがし"}
                  </p>
                  <p className="text-439">
                    {"企画"}
                  </p>
                </div>
                <p className="text-440">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1710" />
              <div id="div-36" data-toggle-show="flex" className="el-1711">
                <div id="menu1-4" data-inview className="container-130">
                  <Link href="/search" className="el-1712">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1713">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1714">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1715">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1716" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1717">
              <div className="el-1718">
                <p className="text-441">
                  {"ご"}
                </p>
                <div className="box-607">
                  <p className="text-442">
                    {"あんない"}
                  </p>
                  <p className="text-443">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1719" />
              <div id="div-39" data-toggle-show="flex" className="el-1720">
                <div id="menu1-6" data-inview className="container-131">
                  <Link href="/attention" className="el-1721">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1722">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1723">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1724">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1725">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1726" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1727">
              <div className="el-1728">
                <div className="box-608">
                  <p className="text-444">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-445">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1729" />
              <div id="div-38" data-toggle-show="flex" className="el-1730">
                <div id="menu1-8" data-inview className="container-132">
                  <Link href="/committee" className="el-1731">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1732">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1733">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1734" />
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
        className="el-1735"
      />
      <section className="box-368">
        <Image
          src="/assets/pasted-artwork-124.svg"
          alt=""
          width={1113}
          height={135}
          className="svg-215"
        />
        <p className="box-366">
          <Image
            src="/assets/pasted-artwork-125.svg"
            alt=""
            width={371}
            height={38}
            className="svg-216"
          />
        </p>
        <div className="box-367">
          <Image
            src="/assets/pasted-artwork-126.svg"
            alt=""
            width={400}
            height={400}
            className="svg-217"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-25"
      />
    </>
  );
}
