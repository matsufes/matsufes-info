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
      <nav className="header-36">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2549"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2550">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-111"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2561">
          <div className="box-873">
            <div className="el-2552">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2551">
                <span
                  className="crisp-svg svg-419"
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
            <div className="container-199">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2553">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2554">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-681">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-682">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-683">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-684">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2555">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2556">
                <Link href="/search" id="言葉-p-2" className="button-685">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-686">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-687">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-688">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2557">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2558">
                <Link href="/attention" id="ご来場の-p-2" className="button-689">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-690">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-691">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-692">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-693">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2559">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2560">
                <Link href="/committee" id="委員会企画-p-2" className="button-694">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-695">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-696">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2598">
          <div className="container-204">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2570">
              <div className="el-2562">
                <div className="box-874">
                  <p className="text-678">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-679">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-680">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2563" />
              <div id="div-34" data-toggle-show="flex" className="el-2569">
                <div id="menu1-2" data-inview className="container-200">
                  <Link href="/about" className="el-2564">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2565">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2566">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2567">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2568" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2579">
              <div className="el-2571">
                <div className="box-875">
                  <p className="text-681">
                    {"きかく"}
                  </p>
                  <p className="text-682">
                    {"企画"}
                  </p>
                </div>
                <p className="text-683">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2572" />
              <div id="div-36" data-toggle-show="flex" className="el-2578">
                <div id="menu1-4" data-inview className="container-201">
                  <Link href="/search" className="el-2573">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2574">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2575">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2576">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2577" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2589">
              <div className="el-2580">
                <p className="text-684">
                  {"ご"}
                </p>
                <div className="box-876">
                  <p className="text-685">
                    {"あんない"}
                  </p>
                  <p className="text-686">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2581" />
              <div id="div-39" data-toggle-show="flex" className="el-2588">
                <div id="menu1-6" data-inview className="container-202">
                  <Link href="/attention" className="el-2582">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2583">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2584">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2585">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2586">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2587" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2597">
              <div className="el-2590">
                <div className="box-877">
                  <p className="text-687">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-688">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2591" />
              <div id="div-38" data-toggle-show="flex" className="el-2596">
                <div id="menu1-8" data-inview className="container-203">
                  <Link href="/committee" className="el-2592">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2593">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2594">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2595" />
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
        className="el-2813"
      />
      <p className="box-878">
        <span
          className="crisp-svg svg-420"
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
      <section className="box-879">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-153"
        />
      </section>
      <section className="box-880">
        <Image
          src="/assets/pasted-artwork-298.svg"
          alt=""
          width={438}
          height={128}
          className="svg-505"
        />
      </section>
      <section className="box-882">
        <p className="box-881">
          {"松ヶ崎祭は2026年で56回目を迎えたよ。\n\n\n毎年 11 月に松ヶ崎キャンパスで開催されている京都工芸繊維大学の学園祭。\n\n様々な団体が日々の活動成果を発表する場になっているよ。"}
        </p>
      </section>
      <section className="el-2599">
        <Image
          src="/assets/pasted-artwork-345.svg"
          alt=""
          width={438}
          height={128}
          className="svg-547"
        />
      </section>
      <section className="el-2600">
        <p className="box-883">
          {"本日は第56回松ヶ崎祭にご来場いただきありがとうございます。 \n松ヶ崎祭実行委員会を代表しまして心より歓迎申し上げます。  \nまた、松ヶ崎祭の開催にあたり、日頃より多大なるご支援・ご協力を賜りました、  \nすべての関係者の皆さまに、深く御礼申し上げます。\n\n今年度の松ヶ崎祭開催に向けて、出展者さまが安心して当日を迎えられるよう、\nそして松ヶ崎祭が無事に開催できるよう、準備に注力してきました。  \n私たちが準備してきた過程は注目されにくいものがほとんどです。\nしかし、その成果として、構内の至る所に、私たちが無我夢中で創り上げた景色が広がっています。\n\n今年度の松ヶ崎祭のテーマは「夢宙」です。\n私たち松ヶ崎祭実行委員会は「松ヶ崎祭という無限の夢が宙がる空間での時間に思わず熱中してしまうような最高の体験を、出展者の皆さま、そして来場される皆さまに届けたい」という一心で、\n松ヶ崎祭が終わる最後の時まで駆け抜けます。"}
        </p>
      </section>
      <section className="el-2603">
        <div className="box-884">
          <Image
            src="/assets/pasted-artwork-346.svg"
            alt=""
            width={1087}
            height={856}
            className="svg-548"
          />
          <a href="https://mf55.matsufes.info/" className="el-2601">
            {"第55回松ヶ崎祭　「カイカセンゲン」"}
          </a>
          <a href="https://mf54.matsufes.info/" className="el-2602">
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
      <section data-inview className="el-2790">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2791">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-137"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-61">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-138"
          />
        </a>
        <span
          className="crisp-svg svg-471"
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
          className="crisp-svg svg-472"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2792">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-473"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-62">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-474"
          />
        </a>
      </section>
    </>
  );
}
