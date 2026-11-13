import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "メインテーマ",
  description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "メインテーマ",
    description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g8i67sxpweq" />
      <nav className="header-37">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2604"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2605">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-112"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2616">
          <div className="box-885">
            <div className="el-2607">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2606">
                <span
                  className="crisp-svg svg-421"
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
            <div className="container-205">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2608">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2609">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-697">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-698">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-699">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-700">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2610">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2611">
                <Link href="/search" id="言葉-p-2" className="button-701">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-702">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-703">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-704">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2612">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2613">
                <Link href="/attention" id="ご来場の-p-2" className="button-705">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-706">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-707">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-708">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-709">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2614">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2615">
                <Link href="/committee" id="委員会企画-p-2" className="button-710">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-711">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-712">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2653">
          <div className="container-210">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2625">
              <div className="el-2617">
                <div className="box-886">
                  <p className="text-689">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-690">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-691">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2618" />
              <div id="div-34" data-toggle-show="flex" className="el-2624">
                <div id="menu1-2" data-inview className="container-206">
                  <Link href="/about" className="el-2619">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2620">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2621">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2622">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2623" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2634">
              <div className="el-2626">
                <div className="box-887">
                  <p className="text-692">
                    {"きかく"}
                  </p>
                  <p className="text-693">
                    {"企画"}
                  </p>
                </div>
                <p className="text-694">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2627" />
              <div id="div-36" data-toggle-show="flex" className="el-2633">
                <div id="menu1-4" data-inview className="container-207">
                  <Link href="/search" className="el-2628">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2629">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2630">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2631">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2632" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2644">
              <div className="el-2635">
                <p className="text-695">
                  {"ご"}
                </p>
                <div className="box-888">
                  <p className="text-696">
                    {"あんない"}
                  </p>
                  <p className="text-697">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2636" />
              <div id="div-39" data-toggle-show="flex" className="el-2643">
                <div id="menu1-6" data-inview className="container-208">
                  <Link href="/attention" className="el-2637">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2638">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2639">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2640">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2641">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2642" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2652">
              <div className="el-2645">
                <div className="box-889">
                  <p className="text-698">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-699">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2646" />
              <div id="div-38" data-toggle-show="flex" className="el-2651">
                <div id="menu1-8" data-inview className="container-209">
                  <Link href="/committee" className="el-2647">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2648">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2649">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2650" />
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
        className="el-2814"
      />
      <p className="box-890">
        <Image
          src="/assets/pasted-artwork-351.svg"
          alt=""
          width={909}
          height={79}
          className="svg-553"
        />
      </p>
      <section className="box-891">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-154"
        />
      </section>
      <section className="box-892">
        <Image
          src="/assets/pasted-artwork-344.svg"
          alt=""
          width={1096}
          height={67}
          className="svg-546"
        />
      </section>
      <section className="box-893">
        <Image
          src="/assets/pasted-artwork-347.svg"
          alt=""
          width={544}
          height={128}
          className="svg-549"
        />
      </section>
      <section className="box-896">
        <div className="box-894">
          <Image
            src="/assets/pasted-artwork-357.svg"
            alt=""
            width={123}
            height={99}
            className="pasted-artwork-svg-159"
          />
        </div>
        <p className="box-895">
          {"夢宙　むちゅー "}
        </p>
      </section>
      <section className="box-899">
        <div className="box-897">
          <Image
            src="/assets/pasted-artwork-348.svg"
            alt=""
            width={1040}
            height={859}
            className="svg-550"
          />
        </div>
        <div className="box-898">
          <Image
            src="/assets/pasted-artwork-349.svg"
            alt=""
            width={1061}
            height={1076}
            className="svg-551"
          />
        </div>
      </section>
      <section className="box-900">
        <span
          className="crisp-svg svg-552"
          style={{ ["--crisp-svg-width"]: "123px", ["--crisp-svg-ratio"]: "123 / 361" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={123} height={361} viewBox="0 0 123 361" />
          <Image
            src="/assets/pasted-artwork-350.svg"
            alt=""
            width={246}
            height={722}
          />
        </span>
      </section>
      <section data-inview className="el-2793">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2794">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-139"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-63">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-140"
          />
        </a>
        <span
          className="crisp-svg svg-475"
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
      <section data-inview className="footer-31">
        <span
          className="crisp-svg svg-476"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2795">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-477"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-64">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-478"
          />
        </a>
      </section>
    </>
  );
}
