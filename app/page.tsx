import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
  description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
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
          className="el-1453"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1454">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-70"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1455">
          <div className="box-565">
            <div className="el-1456">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1457">
                <span
                  className="crisp-svg svg-214"
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
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1458">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1459">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-381">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-382">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-383">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-384">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1460">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1461">
                <Link href="/search" id="言葉-p-2" className="button-385">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-386">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-387">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-388">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1462">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1463">
                <Link href="/attention" id="ご来場の-p-2" className="button-389">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-390">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-391">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-392">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-393">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1464">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1465">
                <Link href="/committee" id="委員会企画-p-2" className="button-394">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-395">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/matsupiyo" id="まつぴよ-p-2" className="button-396">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1466">
          <div className="container-110">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1467">
              <div className="el-1468">
                <div className="box-566">
                  <p className="text-382">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-383">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-384">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1469" />
              <div id="div-34" data-toggle-show="flex" className="el-1470">
                <div id="menu1-2" data-inview className="container-111">
                  <Link href="/about" className="el-1471">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1472">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1473">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1474">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1475" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1476">
              <div className="el-1477">
                <div className="box-567">
                  <p className="text-385">
                    {"きかく"}
                  </p>
                  <p className="text-386">
                    {"企画"}
                  </p>
                </div>
                <p className="text-387">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1478" />
              <div id="div-36" data-toggle-show="flex" className="el-1479">
                <div id="menu1-4" data-inview className="container-112">
                  <Link href="/search" className="el-1480">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1481">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1482">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1483">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1484" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1485">
              <div className="el-1486">
                <p className="text-388">
                  {"ご"}
                </p>
                <div className="box-568">
                  <p className="text-389">
                    {"あんない"}
                  </p>
                  <p className="text-390">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1487" />
              <div id="div-39" data-toggle-show="flex" className="el-1488">
                <div id="menu1-6" data-inview className="container-113">
                  <Link href="/attention" className="el-1489">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1490">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1491">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1492">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1493">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1494" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1495">
              <div className="el-1496">
                <div className="box-569">
                  <p className="text-391">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-392">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1497" />
              <div id="div-38" data-toggle-show="flex" className="el-1498">
                <div id="menu1-8" data-inview className="container-114">
                  <Link href="/committee" className="el-1499">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1500">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1501">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1502" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-59">
        <div data-inview className="el-64">
          <Image
            src="/assets/cloud.png"
            alt=""
            width={1000}
            height={683}
            className="svg-56"
          />
        </div>
        <div data-inview className="el-60">
          <Image
            src="/assets/chikyu.png"
            alt="ちきゅ〜くん"
            width={800}
            height={1132}
            className="img-3053-png"
          />
        </div>
        <div className="box-154">
          <div className="el-61">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-62"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-63">
            <span
              className="crisp-svg svg-416"
            >
              <svg aria-hidden="true" width={659} height={329} viewBox="0 0 659 329" />
              <Image
                src="/assets/pasted-artwork-293.svg"
                alt=""
                width={1318}
                height={658}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el">
        <div className="el-65">
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
      <section className="box-490">
        <Link href="/search" className="el-731">
          <Image
            src="/assets/search.png"
            alt=""
            width={186}
            height={164}
            className="svg-192"
          />
          <p className="box-491">
            <span
              className="crisp-svg svg-194"
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
      <section className="box-492">
        <a href="/navigation" className="el-732">
          <Image
            src="/assets/map.png"
            alt=""
            width={84}
            height={150}
            className="pasted-artwork-svg-55"
          />
          <p className="box-493">
            <span
              className="crisp-svg svg-195"
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
        <Link href="/schedule/0" className="el-733">
          <Image
            src="/assets/watch.png"
            alt=""
            width={120}
            height={120}
            className="svg-193"
          />
          <p className="box-494">
            <span
              className="crisp-svg svg-356"
            >
              <svg aria-hidden="true" width={202} height={111} viewBox="0 0 202 111" />
              <Image
                src="/assets/pasted-artwork-242.svg"
                alt=""
                width={404}
                height={222}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="el-2">
        <div className="el-66">
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
      <section data-inview className="el-129">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          className="crisp-svg el-2927"
        >
          <svg aria-hidden="true" width={990} height={764} viewBox="0 0 990 764" />
          <Image
            src="/assets/pasted-artwork-388.svg"
            alt=""
            width={1980}
            height={1528}
          />
        </span>
      </section>
      <section data-inview className="el-734">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          className="crisp-svg el-2928"
        >
          <svg aria-hidden="true" width={1051} height={732} viewBox="0 0 1051 732" />
          <Image
            src="/assets/pasted-artwork-389.svg"
            alt=""
            width={2102}
            height={1464}
          />
        </span>
      </section>
      <section data-inview className="el-735">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/question\"}]}]"}
          src="/assets/yokuaru.png"
          alt="よくあるご質問"
          width={1000}
          height={692}
          className="el-736"
        />
      </section>
      <section data-inview className="el-737">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          className="crisp-svg el-2929"
        >
          <svg aria-hidden="true" width={999} height={815} viewBox="0 0 999 815" />
          <Image
            src="/assets/pasted-artwork-390.svg"
            alt=""
            width={1998}
            height={1630}
          />
        </span>
      </section>
      <section className="el-79">
        <span
          className="crisp-svg svg-111"
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
      <section className="el-26">
        <div className="el-67">
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
      <section className="el-25">
        <div className="box-23">
          <Image data-inview
            src="/assets/image.svg"
            alt=""
            width={738}
            height={565}
            className="svg-57"
          />
        </div>
        <div className="box-24">
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
      <section data-inview className="el-738">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-81">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-114"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-115"
          />
        </a>
        <span
          className="crisp-svg svg-196"
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
          className="crisp-svg pasted-artwork-svg-88"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1673">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-247"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-19">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-248"
          />
        </a>
      </section>
    </>
  );
}
