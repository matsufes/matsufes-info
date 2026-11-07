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
          className="el-1518"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1519">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-71"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1520">
          <div className="box-587">
            <div className="el-1521">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1522">
                <span
                  className="crisp-svg svg-221"
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
            <div className="container-109">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1523">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1524">
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
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1525">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1526">
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
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1527">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1528">
                <Link href="/attention" id="ご来場の-p-2" className="button-404">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-405">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-406">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-407">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-408">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1529">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1530">
                <Link href="/committee" id="委員会企画-p-2" className="button-409">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-410">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/matsupiyo" id="まつぴよ-p-2" className="button-411">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1531">
          <div className="container-110">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1532">
              <div className="el-1533">
                <div className="box-588">
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
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1534" />
              <div id="div-34" data-toggle-show="flex" className="el-1535">
                <div id="menu1-2" data-inview className="container-111">
                  <Link href="/about" className="el-1536">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1537">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1538">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1539">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1540" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1541">
              <div className="el-1542">
                <div className="box-589">
                  <p className="text-405">
                    {"きかく"}
                  </p>
                  <p className="text-406">
                    {"企画"}
                  </p>
                </div>
                <p className="text-407">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1543" />
              <div id="div-36" data-toggle-show="flex" className="el-1544">
                <div id="menu1-4" data-inview className="container-112">
                  <Link href="/search" className="el-1545">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1546">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1547">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1548">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1549" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1550">
              <div className="el-1551">
                <p className="text-408">
                  {"ご"}
                </p>
                <div className="box-590">
                  <p className="text-409">
                    {"あんない"}
                  </p>
                  <p className="text-410">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1552" />
              <div id="div-39" data-toggle-show="flex" className="el-1553">
                <div id="menu1-6" data-inview className="container-113">
                  <Link href="/attention" className="el-1554">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1555">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1556">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1557">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1558">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1559" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1560">
              <div className="el-1561">
                <div className="box-591">
                  <p className="text-411">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-412">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1562" />
              <div id="div-38" data-toggle-show="flex" className="el-1563">
                <div id="menu1-8" data-inview className="container-114">
                  <Link href="/committee" className="el-1564">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1565">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1566">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1567" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-57">
        <div data-inview className="el-62">
          <Image
            src="/assets/cloud.png"
            alt=""
            width={1000}
            height={683}
            className="svg-56"
          />
        </div>
        <div data-inview className="el-58">
          <Image
            src="/assets/chikyu.png"
            alt="ちきゅ〜くん"
            width={800}
            height={1132}
            className="img-3053-png"
          />
        </div>
        <div className="box-157">
          <div className="el-59">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-60"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-61">
            <span
              className="crisp-svg svg-428"
            >
              <svg aria-hidden="true" width={659} height={329} viewBox="0 0 659 329" />
              <Image
                src="/assets/pasted-artwork-295.svg"
                alt=""
                width={1318}
                height={658}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el">
        <div className="el-63">
          <span
            className="crisp-svg pasted-artwork-svg-24"
          >
            <svg aria-hidden="true" width={674} height={215} viewBox="0 0 674 215" />
            <Image
              src="/assets/pasted-artwork-32.svg"
              alt="企画さがし"
              width={1348}
              height={430}
            />
          </span>
        </div>
      </section>
      <section className="box-512">
        <Link href="/search" className="el-796">
          <Image
            src="/assets/search.png"
            alt=""
            width={186}
            height={164}
            className="svg-199"
          />
          <p className="box-513">
            <span
              className="crisp-svg svg-201"
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-196.svg"
                alt="言葉からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="box-514">
        <a href="/navigation" className="el-797">
          <Image
            src="/assets/map.png"
            alt=""
            width={84}
            height={150}
            className="pasted-artwork-svg-56"
          />
          <p className="box-515">
            <span
              className="crisp-svg svg-202"
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-197.svg"
                alt="地図からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </a>
        <Link href="/schedule/0" className="el-798">
          <Image
            src="/assets/watch.png"
            alt=""
            width={120}
            height={120}
            className="svg-200"
          />
          <p className="box-516">
            <span
              className="crisp-svg svg-363"
            >
              <svg aria-hidden="true" width={202} height={111} viewBox="0 0 202 111" />
              <Image
                src="/assets/pasted-artwork-244.svg"
                alt=""
                width={404}
                height={222}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="el-2">
        <div className="el-64">
          <span
            className="crisp-svg pasted-artwork-svg-25"
          >
            <svg aria-hidden="true" width={674} height={212} viewBox="0 0 674 212" />
            <Image
              src="/assets/pasted-artwork-33.svg"
              alt="ご案内"
              width={1348}
              height={424}
            />
          </span>
        </div>
      </section>
      <section data-inview className="el-126">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          className="crisp-svg el-3008"
        >
          <svg aria-hidden="true" width={990} height={764} viewBox="0 0 990 764" />
          <Image
            src="/assets/pasted-artwork-400.svg"
            alt=""
            width={1980}
            height={1528}
          />
        </span>
      </section>
      <section data-inview className="el-799">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          className="crisp-svg el-3009"
        >
          <svg aria-hidden="true" width={1051} height={732} viewBox="0 0 1051 732" />
          <Image
            src="/assets/pasted-artwork-401.svg"
            alt=""
            width={2102}
            height={1464}
          />
        </span>
      </section>
      <section data-inview className="el-800">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/question\"}]}]"}
          src="/assets/yokuaru.png"
          alt="よくあるご質問"
          width={1000}
          height={692}
          className="el-801"
        />
      </section>
      <section data-inview className="el-802">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          className="crisp-svg el-3010"
        >
          <svg aria-hidden="true" width={999} height={815} viewBox="0 0 999 815" />
          <Image
            src="/assets/pasted-artwork-402.svg"
            alt=""
            width={1998}
            height={1630}
          />
        </span>
      </section>
      <section className="box-121">
        <span
          className="crisp-svg svg-112"
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-131.svg"
            alt=""
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-25">
        <div className="el-65">
          <span
            className="crisp-svg pasted-artwork-svg-26"
          >
            <svg aria-hidden="true" width={674} height={152} viewBox="0 0 674 152" />
            <Image
              src="/assets/pasted-artwork-34.svg"
              alt="メインテーマ"
              width={1348}
              height={304}
            />
          </span>
        </div>
      </section>
      <section className="el-24">
        <div className="box-24">
          <Image data-inview
            src="/assets/image.svg"
            alt=""
            width={738}
            height={565}
            className="svg-57"
          />
        </div>
        <div className="box-25">
          <span data-inview
            className="crisp-svg svg-58"
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
      <section data-inview className="el-803">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-78">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-116"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-117"
          />
        </a>
        <span
          className="crisp-svg svg-203"
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-198.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
      <section data-inview className="footer-16">
        <span
          className="crisp-svg pasted-artwork-svg-89"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1738">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-254"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-19">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-255"
          />
        </a>
      </section>
    </>
  );
}
