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
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1529"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1530">
          <span
            className="crisp-svg pasted-artwork-svg-74"
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
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1531">
          <div className="box-589">
            <div className="el-1532">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1533">
                <span
                  className="crisp-svg svg-248"
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
            <div className="container-109">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1534">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1535">
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
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1536">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1537">
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
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1538">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1539">
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
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1540">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1541">
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
        <div className="el-1542">
          <div className="container-110">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1543">
              <div className="el-1544">
                <div className="box-590">
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
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1545" />
              <div id="div-34" data-toggle-show="flex" className="el-1546">
                <div id="menu1-2" data-inview className="container-111">
                  <Link href="/about" className="el-1547">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1548">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1549">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1550">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1551" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1552">
              <div className="el-1553">
                <div className="box-591">
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
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1554" />
              <div id="div-36" data-toggle-show="flex" className="el-1555">
                <div id="menu1-4" data-inview className="container-112">
                  <Link href="/search" className="el-1556">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1557">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1558">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1559">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1560" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1561">
              <div className="el-1562">
                <p className="text-408">
                  {"ご"}
                </p>
                <div className="box-592">
                  <p className="text-409">
                    {"あんない"}
                  </p>
                  <p className="text-410">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1563" />
              <div id="div-39" data-toggle-show="flex" className="el-1564">
                <div id="menu1-6" data-inview className="container-113">
                  <Link href="/attention" className="el-1565">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1566">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1567">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1568">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1569">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1570" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1571">
              <div className="el-1572">
                <div className="box-593">
                  <p className="text-411">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-412">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1573" />
              <div id="div-38" data-toggle-show="flex" className="el-1574">
                <div id="menu1-8" data-inview className="container-114">
                  <Link href="/committee" className="el-1575">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1576">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1577">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1578" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-61">
        <div data-inview className="el-66">
          <Image
            src="/assets/image.svg"
            alt=""
            width={1920}
            height={1312}
            className="svg-66"
          />
        </div>
        <div data-inview className="el-62">
          <Image
            src="/assets/IMG_3053.PNG"
            alt=""
            width={2480}
            height={3508}
            className="img-3053-png"
          />
        </div>
        <div className="box-158">
          <div className="el-63">
            <Image
              src="/assets/56-.svg"
              alt=""
              width={267}
              height={150}
              className="el-64"
            />
          </div>
          <div className="el-65">
            <span
              className="crisp-svg svg-65"
            >
              <svg aria-hidden="true" width={677} height={352} viewBox="0 0 677 352" />
              <Image
                src="/assets/image-4.svg"
                alt=""
                width={1354}
                height={704}
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
              alt=""
              width={1348}
              height={430}
            />
          </span>
        </div>
      </section>
      <section className="box-514">
        <Link href="/search" className="el-804">
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt=""
            width={93}
            height={82}
            className="svg-223"
          />
          <p className="box-515">
            <span
              className="crisp-svg svg-225"
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-251.svg"
                alt=""
                width={328}
                height={238}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="box-516">
        <a href="/navigation" className="el-805">
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={42}
            height={75}
            className="pasted-artwork-svg-59"
          />
          <p className="box-517">
            <span
              className="crisp-svg svg-226"
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-252.svg"
                alt=""
                width={328}
                height={238}
              />
            </span>
          </p>
        </a>
        <Link href="/schedule/0" className="el-806">
          <Image
            src="/assets/pasted-artwork-250.svg"
            alt=""
            width={60}
            height={60}
            className="svg-224"
          />
          <p className="box-518">
            <span
              className="crisp-svg svg-227"
            >
              <svg aria-hidden="true" width={202} height={112} viewBox="0 0 202 112" />
              <Image
                src="/assets/pasted-artwork-253.svg"
                alt=""
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
              alt=""
              width={1348}
              height={424}
            />
          </span>
        </div>
      </section>
      <section data-inview className="el-131">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          className="crisp-svg el-132"
        >
          <svg aria-hidden="true" width={1122} height={862} viewBox="0 0 1122 862" />
          <Image
            src="/assets/pasted-artwork-43.svg"
            alt=""
            width={2244}
            height={1724}
          />
        </span>
      </section>
      <section data-inview className="el-807">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          className="crisp-svg el-808"
        >
          <svg aria-hidden="true" width={1051} height={732} viewBox="0 0 1051 732" />
          <Image
            src="/assets/pasted-artwork-99.svg"
            alt=""
            width={2102}
            height={1464}
          />
        </span>
      </section>
      <section data-inview className="el-809">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          className="crisp-svg el-810"
        >
          <svg aria-hidden="true" width={1112} height={769} viewBox="0 0 1112 769" />
          <Image
            src="/assets/pasted-artwork-100.svg"
            alt=""
            width={2224}
            height={1538}
          />
        </span>
      </section>
      <section data-inview className="el-811">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          className="crisp-svg el-812"
        >
          <svg aria-hidden="true" width={999} height={815} viewBox="0 0 999 815" />
          <Image
            src="/assets/pasted-artwork-44.svg"
            alt=""
            width={1998}
            height={1630}
          />
        </span>
      </section>
      <section className="box-122">
        <span
          className="crisp-svg svg-124"
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-159.svg"
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
              src="/assets/pasted-artwork-45.svg"
              alt=""
              width={1348}
              height={304}
            />
          </span>
        </div>
      </section>
      <section className="el-26">
        <div className="box-24">
          <Image data-inview
            src="/assets/image-2.svg"
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
              src="/assets/image-3.svg"
              alt=""
              width={1858}
              height={876}
            />
          </span>
        </div>
      </section>
      <section data-inview className="footer">
        <span
          className="crisp-svg pasted-artwork-svg-34"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-814">
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={58}
            height={58}
            className="svg-229"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-5">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={54}
            height={49}
            className="svg-230"
          />
        </a>
      </section>
      <section data-inview className="el-813">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-82">
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={58}
            height={58}
            className="svg-128"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={54}
            height={49}
            className="svg-129"
          />
        </a>
        <Image
          src="/assets/pasted-artwork-254.svg"
          alt=""
          width={375}
          height={347}
          className="svg-228"
        />
      </section>
    </>
  );
}
