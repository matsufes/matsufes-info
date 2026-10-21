import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
  description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
  openGraph: {
    title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
    description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msleaffe1" />
      <nav className="header-21">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1528"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1529">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-73"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1530">
          <div className="box-588">
            <div className="el-1531">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1532">
                <span
                  className="crisp-svg svg-246"
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
            <div className="container-109">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1533">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1534">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-396">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-397">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-398">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-399">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1535">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1536">
                <Link href="/search" id="言葉-p-2" className="button-400">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-401">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-402">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-403">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1537">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1538">
                <Link href="/attention" id="ご来場の-p-2" className="button-404">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-405">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-406">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-407">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-408">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1539">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1540">
                <Link href="/committee" id="委員会企画-p-2" className="button-409">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-410">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-411">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1541">
          <div className="container-110">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1542">
              <div className="el-1543">
                <div className="box-589">
                  <p className="text-402">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-403">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-404">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1544" />
              <div id="div-34" data-toggle-show="flex" className="el-1545">
                <div id="menu1-2" data-inview className="container-111">
                  <Link href="/about" className="el-1546">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1547">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1548">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1549">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1550" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1551">
              <div className="el-1552">
                <div className="box-590">
                  <p className="text-405">
                    {"さがし"}
                  </p>
                  <p className="text-406">
                    {"企画"}
                  </p>
                </div>
                <p className="text-407">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1553" />
              <div id="div-36" data-toggle-show="flex" className="el-1554">
                <div id="menu1-4" data-inview className="container-112">
                  <Link href="/search" className="el-1555">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1556">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1557">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1558">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1559" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1560">
              <div className="el-1561">
                <p className="text-408">
                  {"ご"}
                </p>
                <div className="box-591">
                  <p className="text-409">
                    {"あんない"}
                  </p>
                  <p className="text-410">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1562" />
              <div id="div-39" data-toggle-show="flex" className="el-1563">
                <div id="menu1-6" data-inview className="container-113">
                  <Link href="/attention" className="el-1564">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1565">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1566">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1567">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1568">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1569" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1570">
              <div className="el-1571">
                <div className="box-592">
                  <p className="text-411">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-412">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1572" />
              <div id="div-38" data-toggle-show="flex" className="el-1573">
                <div id="menu1-8" data-inview className="container-114">
                  <Link href="/committee" className="el-1574">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1575">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1576">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1577" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-61">
        <div data-inview className="el-66">
          <Image
            src="/assets/cloud.png"
            alt=""
            width={1000}
            height={683}
            className="svg-66"
          />
        </div>
        <div data-inview className="el-62">
          <Image
            src="/assets/chikyu.png"
            alt="ちきゅ〜くん"
            width={800}
            height={1132}
            className="img-3053-png"
          />
        </div>
        <div className="box-158">
          <div className="el-63">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-64"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-65">
            <span
              className="crisp-svg svg-65"
            >
              <svg aria-hidden="true" width={677} height={352} viewBox="0 0 677 352" />
              <Image
                src="/assets/image-3.svg"
                alt="11/13(きん)17:00-19:10、11/14(ど)10:00-20:00、11/15(にち)10:00-17:00"
                width={1354}
                height={704}
                preload
                fetchPriority="high"
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el">
        <div className="el-67">
          <span
            className="crisp-svg pasted-artwork-svg-25"
          >
            <svg aria-hidden="true" width={674} height={215} viewBox="0 0 674 215" />
            <Image
              src="/assets/pasted-artwork-41.svg"
              alt="企画さがし"
              width={1348}
              height={430}
            />
          </span>
        </div>
      </section>
      <section className="box-513">
        <Link href="/search" className="el-804">
          <Image
            src="/assets/search.png"
            alt=""
            width={186}
            height={164}
            className="svg-223"
          />
          <p className="box-514">
            <span
              className="crisp-svg svg-225"
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-233.svg"
                alt="言葉からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="box-515">
        <a href="/navigation" className="el-805">
          <Image
            src="/assets/map.png"
            alt=""
            width={84}
            height={150}
            className="pasted-artwork-svg-58"
          />
          <p className="box-516">
            <span
              className="crisp-svg svg-226"
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-234.svg"
                alt="地図からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </a>
        <Link href="/schedule/0" className="el-806">
          <Image
            src="/assets/watch.png"
            alt=""
            width={120}
            height={120}
            className="svg-224"
          />
          <p className="box-517">
            <span
              className="crisp-svg svg-227"
            >
              <svg aria-hidden="true" width={202} height={112} viewBox="0 0 202 112" />
              <Image
                src="/assets/pasted-artwork-235.svg"
                alt="日程表からさがす"
                width={404}
                height={224}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="el-2">
        <div className="el-68">
          <span
            className="crisp-svg pasted-artwork-svg-26"
          >
            <svg aria-hidden="true" width={674} height={212} viewBox="0 0 674 212" />
            <Image
              src="/assets/pasted-artwork-42.svg"
              alt="ご案内"
              width={1348}
              height={424}
            />
          </span>
        </div>
      </section>
      <section data-inview className="el-131">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          src="/assets/minasama.png"
          alt="ご来場の皆さまへ"
          width={1000}
          height={768}
          className="el-132"
        />
      </section>
      <section data-inview className="el-807">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          src="/assets/ikikata.png"
          alt="行き方・会場地図"
          width={1000}
          height={696}
          className="el-808"
        />
      </section>
      <section data-inview className="el-809">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          src="/assets/yokuaru.png"
          alt="よくあるご質問"
          width={1000}
          height={692}
          className="el-810"
        />
      </section>
      <section data-inview className="el-811">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          src="/assets/image-6.png"
          alt="来場者アンケート"
          width={1000}
          height={816}
          className="el-812"
        />
      </section>
      <section className="box-122">
        <span
          className="crisp-svg svg-124"
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-150.svg"
            alt=""
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-27">
        <div className="el-69">
          <span
            className="crisp-svg pasted-artwork-svg-27"
          >
            <svg aria-hidden="true" width={674} height={152} viewBox="0 0 674 152" />
            <Image
              src="/assets/pasted-artwork-43.svg"
              alt="メインテーマ"
              width={1348}
              height={304}
            />
          </span>
        </div>
      </section>
      <section className="el-26">
        <div className="box-24">
          <Image data-inview
            src="/assets/image.svg"
            alt=""
            width={738}
            height={565}
            className="svg-67"
          />
        </div>
        <div className="box-25">
          <span
            className="crisp-svg svg-68"
          >
            <svg aria-hidden="true" width={929} height={438} viewBox="0 0 929 438" />
            <Image
              src="/assets/image-2.svg"
              alt=""
              width={1858}
              height={876}
            />
          </span>
        </div>
      </section>
      <section data-inview className="el-813">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-82">
          <Image
            src="/assets/pasted-artwork-155.svg"
            alt=""
            width={58}
            height={58}
            className="svg-128"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-156.svg"
            alt=""
            width={54}
            height={49}
            className="svg-129"
          />
        </a>
        <Image
          src="/assets/pasted-artwork-236.svg"
          alt=""
          width={375}
          height={347}
          className="svg-228"
        />
      </section>
      <section data-inview className="footer-16">
        <span
          className="crisp-svg pasted-artwork-svg-92"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-44.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1801">
          <Image
            src="/assets/pasted-artwork-155.svg"
            alt=""
            width={58}
            height={58}
            className="svg-283"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-19">
          <Image
            src="/assets/pasted-artwork-156.svg"
            alt=""
            width={54}
            height={49}
            className="svg-284"
          />
        </a>
      </section>
    </>
  );
}
