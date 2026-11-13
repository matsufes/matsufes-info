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
      <span hidden data-page-body="page_mvzcltff5ss5c7" />
      <nav className="header-30">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/pasted-artwork-283.svg"
          alt=""
          width={158}
          height={156}
          className="el-2289"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2216">
          <Image
            src="/assets/pasted-artwork-285.svg"
            alt=""
            width={132}
            height={74}
            className="svg-426"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2227">
          <div className="box-786">
            <div className="el-2218">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2217">
                <span
                  className="crisp-svg svg-399"
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
            <div className="container-163">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2219">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2220">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-570">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-571">
                  {"mf56メインテーマ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-572">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-573">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2221">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2222">
                <Link href="/search" id="言葉-p-2" className="button-574">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-575">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-576">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-577">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2223">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2224">
                <Link href="/attention" id="ご来場の-p-2" className="button-578">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-579">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-580">
                  {"来場者アンケート"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-581">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-582">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2225">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2226">
                <Link href="/committee" id="委員会企画-p-2" className="button-583">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-584">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/matsupiyo-old" id="まつぴよ-p-2" className="button-585">
                  {"公式メンバー「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2264">
          <div className="container-168">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2236">
              <div className="el-2228">
                <div className="box-787">
                  <p className="text-597">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-598">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-599">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2229" />
              <div id="div-34" data-toggle-show="flex" className="el-2235">
                <div id="menu1-2" data-inview className="container-164">
                  <Link href="/about" className="el-2230">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2231">
                    {"mf56メインテーマ"}
                  </Link>
                  <Link href="/sponsor" className="el-2232">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2233">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2234" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2245">
              <div className="el-2237">
                <div className="box-788">
                  <p className="text-600">
                    {"きかく"}
                  </p>
                  <p className="text-601">
                    {"企画"}
                  </p>
                </div>
                <p className="text-602">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2238" />
              <div id="div-36" data-toggle-show="flex" className="el-2244">
                <div id="menu1-4" data-inview className="container-165">
                  <Link href="/search" className="el-2239">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule/0" className="el-2240">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2241">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2242">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2243" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2255">
              <div className="el-2246">
                <p className="text-603">
                  {"ご"}
                </p>
                <div className="box-789">
                  <p className="text-604">
                    {"あんない"}
                  </p>
                  <p className="text-605">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2247" />
              <div id="div-39" data-toggle-show="flex" className="el-2254">
                <div id="menu1-6" data-inview className="container-166">
                  <Link href="/attention" className="el-2248">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2249">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2250">
                    {"来場者アンケート"}
                  </Link>
                  <Link href="/question" className="el-2251">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2252">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2253" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2263">
              <div className="el-2256">
                <div className="box-790">
                  <p className="text-606">
                    {"こうしきとくしゅー"}
                  </p>
                  <p className="text-607">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2257" />
              <div id="div-38" data-toggle-show="flex" className="el-2262">
                <div id="menu1-8" data-inview className="container-167">
                  <Link href="/committee" className="el-2258">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2259">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2260">
                    {"公式メンバー「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2261" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-2270">
        <div data-inview className="el-2266">
          <Image
            src="/assets/pasted-artwork-381.svg"
            alt=""
            width={1871}
            height={2646}
            className="svg-583"
          />
        </div>
        <div data-inview className="el-2265">
          <span
            className="crisp-svg pasted-artwork-svg-103"
            style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 2498" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={1920} height={2498} viewBox="0 0 1920 2498" />
            <Image
              src="/assets/pasted-artwork-273.svg"
              alt=""
              width={3840}
              height={4996}
            />
          </span>
        </div>
        <div className="box-791">
          <div className="el-2268">
            <Image
              src="/assets/title.png"
              alt="第56回松ヶ崎祭"
              width={1500}
              height={844}
              className="el-2267"
              preload
              fetchPriority="high"
            />
          </div>
          <div className="el-2269">
            <span
              className="crisp-svg svg-589"
              style={{ ["--crisp-svg-width"]: "659px", ["--crisp-svg-ratio"]: "659 / 329" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={659} height={329} viewBox="0 0 659 329" />
              <Image
                src="/assets/pasted-artwork-392.svg"
                alt=""
                width={1318}
                height={658}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el-2272">
        <div className="el-2271">
          <Image
            src="/assets/pasted-artwork-396.svg"
            alt=""
            width={718}
            height={233}
            className="svg-593"
          />
        </div>
      </section>
      <section className="box-793">
        <Link href="/search" className="el-2273">
          <Image
            src="/assets/pasted-artwork-274.svg"
            alt=""
            width={378}
            height={313}
            className="svg-403"
          />
          <p className="box-792">
            <span
              className="crisp-svg svg-400"
              style={{ ["--crisp-svg-width"]: "164px", ["--crisp-svg-ratio"]: "164 / 119" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-194.svg"
                alt="言葉からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="box-796">
        <a href="/navigation" className="el-2274">
          <Image
            src="/assets/pasted-artwork-385.svg"
            alt=""
            width={163}
            height={293}
            className="svg-584"
          />
          <p className="box-794">
            <span
              className="crisp-svg svg-401"
              style={{ ["--crisp-svg-width"]: "164px", ["--crisp-svg-ratio"]: "164 / 119" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={164} height={119} viewBox="0 0 164 119" />
              <Image
                src="/assets/pasted-artwork-195.svg"
                alt="地図からさがす"
                width={328}
                height={238}
              />
            </span>
          </p>
        </a>
        <Link href="/schedule/0" className="el-2275">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={244}
            height={245}
            className="svg-404"
          />
          <p className="box-795">
            <span
              className="crisp-svg svg-405"
              style={{ ["--crisp-svg-width"]: "202px", ["--crisp-svg-ratio"]: "202 / 111" } as import("react").CSSProperties}
            >
              <svg aria-hidden="true" width={202} height={111} viewBox="0 0 202 111" />
              <Image
                src="/assets/pasted-artwork-276.svg"
                alt=""
                width={404}
                height={222}
              />
            </span>
          </p>
        </Link>
      </section>
      <section className="el-2277">
        <div className="el-2276">
          <Image
            src="/assets/pasted-artwork-397.svg"
            alt=""
            width={718}
            height={230}
            className="svg-594"
          />
        </div>
      </section>
      <section data-inview className="el-2278">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          src="/assets/pasted-artwork-382.svg"
          alt=""
          width={1327}
          height={876}
          className="el-2926"
        />
      </section>
      <section data-inview className="el-2279">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          src="/assets/pasted-artwork-383.svg"
          alt=""
          width={1291}
          height={852}
          className="el-2927"
        />
      </section>
      <section data-inview className="el-2280">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/question\"}]}]"}
          src="/assets/pasted-artwork-277.svg"
          alt=""
          width={1185}
          height={817}
          className="el-2288"
        />
      </section>
      <section data-inview className="el-2281">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          src="/assets/pasted-artwork-384.svg"
          alt=""
          width={1270}
          height={876}
          className="el-2928"
        />
      </section>
      <section className="box-797">
        <span
          className="crisp-svg svg-402"
          style={{ ["--crisp-svg-width"]: "1248px", ["--crisp-svg-ratio"]: "1248 / 195" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-130.svg"
            alt=""
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-2283">
        <div className="el-2282">
          <Image
            src="/assets/pasted-artwork-398.svg"
            alt=""
            width={718}
            height={176}
            className="svg-595"
          />
        </div>
      </section>
      <section className="el-2284">
        <div data-inview className="box-798">
          <Image
            src="/assets/pasted-artwork-357.svg"
            alt=""
            width={123}
            height={99}
            className="svg-562"
          />
        </div>
        <div className="box-799">
          <Image
            src="/assets/pasted-artwork-278.svg"
            alt=""
            width={925}
            height={438}
            className="svg-406"
          />
        </div>
      </section>
      <section data-inview className="el-2286">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2285">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-104"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-37">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-105"
          />
        </a>
        <span
          className="crisp-svg svg-410"
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
      <section data-inview className="footer-18">
        <span
          className="crisp-svg svg-407"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2287">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-408"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-38">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-409"
          />
        </a>
      </section>
    </>
  );
}
