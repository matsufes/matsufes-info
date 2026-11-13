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
      <nav className="header-28">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2158"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2159">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-102"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2170">
          <div className="box-840">
            <div className="el-2161">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2160">
                <span
                  className="crisp-svg svg-406"
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
            <div className="container-151">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2162">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2163">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-553">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-554">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-555">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-556">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2164">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2165">
                <Link href="/search" id="言葉-p-2" className="button-557">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-558">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-559">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-560">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2166">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2167">
                <Link href="/attention" id="ご来場の-p-2" className="button-561">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-562">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-563">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-564">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-565">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2168">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2169">
                <Link href="/committee" id="委員会企画-p-2" className="button-566">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-567">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-568">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2207">
          <div className="container-156">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2179">
              <div className="el-2171">
                <div className="box-841">
                  <p className="text-590">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-591">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-592">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2172" />
              <div id="div-34" data-toggle-show="flex" className="el-2178">
                <div id="menu1-2" data-inview className="container-152">
                  <Link href="/about" className="el-2173">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2174">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2175">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2176">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2177" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2188">
              <div className="el-2180">
                <div className="box-842">
                  <p className="text-593">
                    {"きかく"}
                  </p>
                  <p className="text-594">
                    {"企画"}
                  </p>
                </div>
                <p className="text-595">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2181" />
              <div id="div-36" data-toggle-show="flex" className="el-2187">
                <div id="menu1-4" data-inview className="container-153">
                  <Link href="/search" className="el-2182">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2183">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2184">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2185">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2186" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2198">
              <div className="el-2189">
                <p className="text-596">
                  {"ご"}
                </p>
                <div className="box-843">
                  <p className="text-597">
                    {"あんない"}
                  </p>
                  <p className="text-598">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2190" />
              <div id="div-39" data-toggle-show="flex" className="el-2197">
                <div id="menu1-6" data-inview className="container-154">
                  <Link href="/attention" className="el-2191">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2192">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2193">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2194">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2195">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2196" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2206">
              <div className="el-2199">
                <div className="box-844">
                  <p className="text-599">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-600">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2200" />
              <div id="div-38" data-toggle-show="flex" className="el-2205">
                <div id="menu1-8" data-inview className="container-155">
                  <Link href="/committee" className="el-2201">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2202">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2203">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2204" />
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
        className="el-2369"
      />
      <p className="box-845">
        <Image
          src="/assets/pasted-artwork-346.svg"
          alt=""
          width={909}
          height={79}
          className="svg-537"
        />
      </p>
      <section className="box-846">
        <Image
          src="/assets/pasted-artwork-282.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-144"
        />
      </section>
      <section className="box-847">
        <Image
          src="/assets/pasted-artwork-339.svg"
          alt=""
          width={1096}
          height={67}
          className="svg-530"
        />
      </section>
      <section className="box-848">
        <Image
          src="/assets/pasted-artwork-342.svg"
          alt=""
          width={544}
          height={128}
          className="svg-533"
        />
      </section>
      <section className="box-851">
        <div className="box-849">
          <Image
            src="/assets/pasted-artwork-352.svg"
            alt=""
            width={123}
            height={99}
            className="pasted-artwork-svg-149"
          />
        </div>
        <p className="box-850">
          {"夢宙　むちゅー "}
        </p>
      </section>
      <section className="box-854">
        <div className="box-852">
          <Image
            src="/assets/pasted-artwork-343.svg"
            alt=""
            width={1040}
            height={859}
            className="svg-534"
          />
        </div>
        <div className="box-853">
          <Image
            src="/assets/pasted-artwork-344.svg"
            alt=""
            width={1061}
            height={1076}
            className="svg-535"
          />
        </div>
      </section>
      <section className="box-855">
        <span
          className="crisp-svg svg-536"
          style={{ ["--crisp-svg-width"]: "123px", ["--crisp-svg-ratio"]: "123 / 361" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={123} height={361} viewBox="0 0 123 361" />
          <Image
            src="/assets/pasted-artwork-345.svg"
            alt=""
            width={246}
            height={722}
          />
        </span>
      </section>
      <section data-inview className="el-2348">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2349">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-129"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-63">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-130"
          />
        </a>
        <span
          className="crisp-svg svg-459"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-278.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-31">
        <span
          className="crisp-svg svg-460"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2350">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="svg-461"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-64">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="svg-462"
          />
        </a>
      </section>
    </>
  );
}
