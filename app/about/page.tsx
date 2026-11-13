import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "松ヶ崎祭について",
  description: "松ヶ崎祭とは？ 松ヶ崎祭についてご紹介します。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "松ヶ崎祭について",
    description: "松ヶ崎祭とは？ 松ヶ崎祭についてご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g8gqopggras" />
      <nav className="header-27">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2099"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2100">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-102"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2111">
          <div className="box-828">
            <div className="el-2102">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2101">
                <span
                  className="crisp-svg svg-410"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-145">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2103">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2104">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-537">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-538">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-539">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-540">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2105">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2106">
                <Link href="/search" id="言葉-p-2" className="button-541">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-542">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-543">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-544">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2107">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2108">
                <Link href="/attention" id="ご来場の-p-2" className="button-545">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-546">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-547">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-548">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-549">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2109">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2110">
                <Link href="/committee" id="委員会企画-p-2" className="button-550">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-551">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-552">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2148">
          <div className="container-150">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2120">
              <div className="el-2112">
                <div className="box-829">
                  <p className="text-579">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-580">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-581">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2113" />
              <div id="div-34" data-toggle-show="flex" className="el-2119">
                <div id="menu1-2" data-inview className="container-146">
                  <Link href="/about" className="el-2114">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2115">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2116">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2117">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2118" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2129">
              <div className="el-2121">
                <div className="box-830">
                  <p className="text-582">
                    {"きかく"}
                  </p>
                  <p className="text-583">
                    {"企画"}
                  </p>
                </div>
                <p className="text-584">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2122" />
              <div id="div-36" data-toggle-show="flex" className="el-2128">
                <div id="menu1-4" data-inview className="container-147">
                  <Link href="/search" className="el-2123">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2124">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2125">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2126">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2127" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2139">
              <div className="el-2130">
                <p className="text-585">
                  {"ご"}
                </p>
                <div className="box-831">
                  <p className="text-586">
                    {"あんない"}
                  </p>
                  <p className="text-587">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2131" />
              <div id="div-39" data-toggle-show="flex" className="el-2138">
                <div id="menu1-6" data-inview className="container-148">
                  <Link href="/attention" className="el-2132">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2133">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2134">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2135">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2136">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2137" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2147">
              <div className="el-2140">
                <div className="box-832">
                  <p className="text-588">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-589">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2141" />
              <div id="div-38" data-toggle-show="flex" className="el-2146">
                <div id="menu1-8" data-inview className="container-149">
                  <Link href="/committee" className="el-2142">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2143">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2144">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2145" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/pasted-artwork-217.svg"
        alt=""
        width={1440}
        height={489}
        className="el-2363"
      />
      <p className="box-833">
        <span
          className="crisp-svg svg-411"
          style={{ ["--crisp-svg-width"]: "636px", ["--crisp-svg-ratio"]: "636 / 130" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={636} height={130} viewBox="0 0 636 130" />
          <Image
            src="/assets/pasted-artwork-190.svg"
            alt=""
            width={1272}
            height={260}
          />
        </span>
      </p>
      <section className="box-834">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-144"
        />
      </section>
      <section className="box-835">
        <Image
          src="/assets/pasted-artwork-298.svg"
          alt=""
          width={438}
          height={128}
          className="svg-496"
        />
      </section>
      <section className="box-837">
        <p className="box-836">
          {"松ヶ崎祭は2026年で56回目を迎えたよ。\n\n\n毎年 11 月に松ヶ崎キャンパスで開催されている京都工芸繊維大学の学園祭。\n\n様々な団体が日々の活動成果を発表する場になっているよ。"}
        </p>
      </section>
      <section className="el-2149">
        <Image
          src="/assets/pasted-artwork-345.svg"
          alt=""
          width={438}
          height={128}
          className="svg-538"
        />
      </section>
      <section className="el-2150">
        <p className="box-838">
          {"本日は第56回松ヶ崎祭にご来場いただきありがとうございます。 \n松ヶ崎祭実行委員会を代表しまして心より歓迎申し上げます。  \nまた、松ヶ崎祭の開催にあたり、日頃より多大なるご支援・ご協力を賜りました、  \nすべての関係者の皆さまに、深く御礼申し上げます。\n\n今年度の松ヶ崎祭開催に向けて、出展者さまが安心して当日を迎えられるよう、\nそして松ヶ崎祭が無事に開催できるよう、準備に注力してきました。  \n私たちが準備してきた過程は注目されにくいものがほとんどです。\nしかし、その成果として、構内の至る所に、私たちが無我夢中で創り上げた景色が広がっています。\n\n今年度の松ヶ崎祭のテーマは「夢宙」です。\n私たち松ヶ崎祭実行委員会は「松ヶ崎祭という無限の夢が宙がる空間での時間に思わず熱中してしまうような最高の体験を、出展者の皆さま、そして来場される皆さまに届けたい」という一心で、\n松ヶ崎祭が終わる最後の時まで駆け抜けます。"}
        </p>
      </section>
      <section className="el-2153">
        <div className="box-839">
          <Image
            src="/assets/pasted-artwork-346.svg"
            alt=""
            width={1087}
            height={856}
            className="svg-539"
          />
          <a href="https://mf55.matsufes.info/" className="el-2151">
            {"第55回松ヶ崎祭　「カイカセンゲン」"}
          </a>
          <a href="https://mf54.matsufes.info/" className="el-2152">
            {"第54回松ヶ崎祭　「みちみち」"}
          </a>
          <a href="https://mf53.matsufes.info/" className="hello-world-2">
            {"第53回松ヶ崎祭　「Hello, world.」"}
          </a>
          <a href="https://mf52.matsufes.info/" className="re-kit-2">
            {"第52回松ヶ崎祭　「Re:kit」"}
          </a>
        </div>
      </section>
      <section data-inview className="el-2340">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2341">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-128"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-61">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-129"
          />
        </a>
        <span
          className="crisp-svg svg-462"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-282.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-30">
        <span
          className="crisp-svg svg-463"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-279.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2342">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-464"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-62">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-465"
          />
        </a>
      </section>
    </>
  );
}
