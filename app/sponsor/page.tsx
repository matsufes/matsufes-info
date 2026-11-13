import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ご協賛",
  description: "今回の松ヶ崎祭にご協賛いただいた皆さまをご紹介します。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "ご協賛",
    description: "今回の松ヶ崎祭にご協賛いただいた皆さまをご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g8q76wqupul" />
      <nav className="header-29">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2208"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2209">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-103"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2220">
          <div className="box-856">
            <div className="el-2211">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2210">
                <span
                  className="crisp-svg svg-407"
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
            <div className="container-157">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2212">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2213">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-569">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-570">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-571">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-572">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2214">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2215">
                <Link href="/search" id="言葉-p-2" className="button-573">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-574">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-575">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-576">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2216">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2217">
                <Link href="/attention" id="ご来場の-p-2" className="button-577">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-578">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-579">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-580">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-581">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2218">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2219">
                <Link href="/committee" id="委員会企画-p-2" className="button-582">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-583">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-584">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2257">
          <div className="container-162">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2229">
              <div className="el-2221">
                <div className="box-857">
                  <p className="text-601">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-602">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-603">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2222" />
              <div id="div-34" data-toggle-show="flex" className="el-2228">
                <div id="menu1-2" data-inview className="container-158">
                  <Link href="/about" className="el-2223">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2224">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2225">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2226">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2227" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2238">
              <div className="el-2230">
                <div className="box-858">
                  <p className="text-604">
                    {"きかく"}
                  </p>
                  <p className="text-605">
                    {"企画"}
                  </p>
                </div>
                <p className="text-606">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2231" />
              <div id="div-36" data-toggle-show="flex" className="el-2237">
                <div id="menu1-4" data-inview className="container-159">
                  <Link href="/search" className="el-2232">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2233">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2234">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2235">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2236" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2248">
              <div className="el-2239">
                <p className="text-607">
                  {"ご"}
                </p>
                <div className="box-859">
                  <p className="text-608">
                    {"あんない"}
                  </p>
                  <p className="text-609">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2240" />
              <div id="div-39" data-toggle-show="flex" className="el-2247">
                <div id="menu1-6" data-inview className="container-160">
                  <Link href="/attention" className="el-2241">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2242">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2243">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2244">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2245">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2246" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2256">
              <div className="el-2249">
                <div className="box-860">
                  <p className="text-610">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-611">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2250" />
              <div id="div-38" data-toggle-show="flex" className="el-2255">
                <div id="menu1-8" data-inview className="container-161">
                  <Link href="/committee" className="el-2251">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2252">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2253">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2254" />
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
        className="el-2370"
      />
      <p className="box-861">
        <span
          className="crisp-svg svg-408"
          style={{ ["--crisp-svg-width"]: "1161px", ["--crisp-svg-ratio"]: "1161 / 131" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1161} height={131} viewBox="0 0 1161 131" />
          <Image
            src="/assets/pasted-artwork-185.svg"
            alt=""
            width={2322}
            height={262}
          />
        </span>
      </p>
      <section className="box-862">
        <Image
          src="/assets/pasted-artwork-282.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-145"
        />
      </section>
      <p className="box-863">
        {"第56回松ヶ崎祭を開催するにあたり、多くの方々にご協賛いただきました。\nここに深く御礼申し上げます。（敬称略・順不同）"}
      </p>
      <section className="box-864">
        <Image
          src="/assets/pasted-artwork-347.svg"
          alt=""
          width={438}
          height={128}
          className="svg-538"
        />
      </section>
      <section className="box-867">
        <p className="box-865">
          {"・京お好み鉄平\n\n・中華そば 高安\n\n・開晴亭 北山本店\n\n・遊食邸 北山店\n\n・熟成麺屋 神来 一乗寺店\n\n・珍遊 一乗寺本店\n\n・麺家 澤希\n\n・麺屋 極鶏 一乗寺本店\n\n・家系ラーメン 斎藤家 一乗寺店\n\n・株式会社 バックス画材\n\n・天天有 一乗寺本店\n\n・ライフ 松ヶ崎店\n\n・EARTH CAFE\n\n・さいじき"}
        </p>
        <p className="box-866">
          {"・びしや\n\n・麺屋 しな埜\n\n・こにし\n\n・cote a cote\n\n・CAFE JEUNO\n\n・タイ料理 AOW\n\n・musu:bi hair salon\n\n・nondoko ざっぴ\n\n・和より\n\n・餃子と唐揚げ　犀のツノ\n\n・洛北阪急スクエア\n\n・レッドバロン京都北\n\n・うどんの近江や\n\n・BAKERY DAYS"}
        </p>
      </section>
      <section className="box-868">
        <Image
          src="/assets/pasted-artwork-348.svg"
          alt=""
          width={438}
          height={128}
          className="svg-539"
        />
      </section>
      <section className="box-871">
        <p className="box-869">
          {"・小川珈琲ホールディングス株式会社\n\n・櫂有限会社\n\n・株式会社王将フードサービス\n\n・株式会社KINUJO\n\n・株式会社TOAI\n\n・株式会社　丸久小山園"}
        </p>
        <p className="box-870">
          {"・株式会社マンナンライフ\n\n・株式会社ロッテ\n\n・株式会社ロワールホールディングス\n\n・タマノイ酢株式会社\n\n・ブルドックソース株式会社\n\n・マルサンアイ株式会社\n\n・ヤマト株式会社"}
        </p>
      </section>
      <section className="box-872">
        <Image
          src="/assets/pasted-artwork-349.svg"
          alt=""
          width={438}
          height={128}
          className="svg-540"
        />
      </section>
      <section className="box-873">
        <Image
          src="/assets/mf56_HCD.png"
          alt=""
          width={1442}
          height={977}
          className="mf56-hcd-png-2"
        />
      </section>
      <section className="box-877">
        <div className="box-874">
          <Image
            src="/assets/1791353956278-d18c90cc-01c7-4f18-93e4-7a2e39bd277f_1.jpg"
            alt=""
            width={1024}
            height={727}
            className="el-2258"
          />
        </div>
        <div className="box-875">
          <Image
            src="/assets/2026-10-07-15.17.40.png"
            alt=""
            width={1438}
            height={1035}
            className="el-2259"
          />
        </div>
        <div className="box-876">
          <Image
            src="/assets/BAKERY-DAYS.jpg"
            alt=""
            width={827}
            height={827}
            className="bakery-days-jpg-2"
          />
        </div>
      </section>
      <section className="box-880">
        <div className="box-878">
          <Image
            src="/assets/S__148398082.jpg"
            alt=""
            width={2480}
            height={441}
            className="s-148398082-jpg-2"
          />
        </div>
        <div className="box-879">
          <Image
            src="/assets/02.jpg"
            alt=""
            width={1021}
            height={574}
            className="el-2260"
          />
        </div>
      </section>
      <section data-inview className="el-2351">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2352">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-131"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-65">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-132"
          />
        </a>
        <span
          className="crisp-svg svg-463"
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
      <section data-inview className="footer-32">
        <span
          className="crisp-svg svg-464"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2353">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="svg-465"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-66">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="svg-466"
          />
        </a>
      </section>
    </>
  );
}
