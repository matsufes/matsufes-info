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
      <nav className="header-38">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2654"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2655">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-113"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2666">
          <div className="box-901">
            <div className="el-2657">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2656">
                <span
                  className="crisp-svg svg-422"
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
            <div className="container-211">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2658">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2659">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-713">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-714">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-715">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-716">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2660">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2661">
                <Link href="/search" id="言葉-p-2" className="button-717">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-718">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-719">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-720">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2662">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2663">
                <Link href="/attention" id="ご来場の-p-2" className="button-721">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-722">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-723">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-724">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-725">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2664">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2665">
                <Link href="/committee" id="委員会企画-p-2" className="button-726">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-727">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-728">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2703">
          <div className="container-216">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2675">
              <div className="el-2667">
                <div className="box-902">
                  <p className="text-700">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-701">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-702">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2668" />
              <div id="div-34" data-toggle-show="flex" className="el-2674">
                <div id="menu1-2" data-inview className="container-212">
                  <Link href="/about" className="el-2669">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2670">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2671">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2672">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2673" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2684">
              <div className="el-2676">
                <div className="box-903">
                  <p className="text-703">
                    {"きかく"}
                  </p>
                  <p className="text-704">
                    {"企画"}
                  </p>
                </div>
                <p className="text-705">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2677" />
              <div id="div-36" data-toggle-show="flex" className="el-2683">
                <div id="menu1-4" data-inview className="container-213">
                  <Link href="/search" className="el-2678">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2679">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2680">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2681">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2682" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2694">
              <div className="el-2685">
                <p className="text-706">
                  {"ご"}
                </p>
                <div className="box-904">
                  <p className="text-707">
                    {"あんない"}
                  </p>
                  <p className="text-708">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2686" />
              <div id="div-39" data-toggle-show="flex" className="el-2693">
                <div id="menu1-6" data-inview className="container-214">
                  <Link href="/attention" className="el-2687">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2688">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2689">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2690">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2691">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2692" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2702">
              <div className="el-2695">
                <div className="box-905">
                  <p className="text-709">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-710">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2696" />
              <div id="div-38" data-toggle-show="flex" className="el-2701">
                <div id="menu1-8" data-inview className="container-215">
                  <Link href="/committee" className="el-2697">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2698">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2699">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2700" />
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
        className="el-2815"
      />
      <p className="box-906">
        <span
          className="crisp-svg svg-423"
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
      <section className="box-907">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-155"
        />
      </section>
      <p className="box-908">
        {"第56回松ヶ崎祭を開催するにあたり、多くの方々にご協賛いただきました。\nここに深く御礼申し上げます。（敬称略・順不同）"}
      </p>
      <section className="box-909">
        <Image
          src="/assets/pasted-artwork-352.svg"
          alt=""
          width={438}
          height={128}
          className="svg-554"
        />
      </section>
      <section className="box-912">
        <p className="box-910">
          {"・京お好み鉄平\n\n・中華そば 高安\n\n・開晴亭 北山本店\n\n・遊食邸 北山店\n\n・熟成麺屋 神来 一乗寺店\n\n・珍遊 一乗寺本店\n\n・麺家 澤希\n\n・麺屋 極鶏 一乗寺本店\n\n・家系ラーメン 斎藤家 一乗寺店\n\n・株式会社 バックス画材\n\n・天天有 一乗寺本店\n\n・ライフ 松ヶ崎店\n\n・EARTH CAFE\n\n・さいじき"}
        </p>
        <p className="box-911">
          {"・びしや\n\n・麺屋 しな埜\n\n・こにし\n\n・cote a cote\n\n・CAFE JEUNO\n\n・タイ料理 AOW\n\n・musu:bi hair salon\n\n・nondoko ざっぴ\n\n・和より\n\n・餃子と唐揚げ　犀のツノ\n\n・洛北阪急スクエア\n\n・レッドバロン京都北\n\n・うどんの近江や\n\n・BAKERY DAYS"}
        </p>
      </section>
      <section className="box-913">
        <Image
          src="/assets/pasted-artwork-353.svg"
          alt=""
          width={438}
          height={128}
          className="svg-555"
        />
      </section>
      <section className="box-916">
        <p className="box-914">
          {"・小川珈琲ホールディングス株式会社\n\n・櫂有限会社\n\n・株式会社王将フードサービス\n\n・株式会社KINUJO\n\n・株式会社TOAI\n\n・株式会社　丸久小山園"}
        </p>
        <p className="box-915">
          {"・株式会社マンナンライフ\n\n・株式会社ロッテ\n\n・株式会社ロワールホールディングス\n\n・タマノイ酢株式会社\n\n・ブルドックソース株式会社\n\n・マルサンアイ株式会社\n\n・ヤマト株式会社"}
        </p>
      </section>
      <section className="box-917">
        <Image
          src="/assets/pasted-artwork-354.svg"
          alt=""
          width={438}
          height={128}
          className="svg-556"
        />
      </section>
      <section className="box-918">
        <Image
          src="/assets/mf56_HCD.png"
          alt=""
          width={1442}
          height={977}
          className="mf56-hcd-png-2"
        />
      </section>
      <section className="box-922">
        <div className="box-919">
          <Image
            src="/assets/1791353956278-d18c90cc-01c7-4f18-93e4-7a2e39bd277f_1.jpg"
            alt=""
            width={1024}
            height={727}
            className="el-2704"
          />
        </div>
        <div className="box-920">
          <Image
            src="/assets/2026-10-07-15.17.40.png"
            alt=""
            width={1438}
            height={1035}
            className="el-2705"
          />
        </div>
        <div className="box-921">
          <Image
            src="/assets/BAKERY-DAYS.jpg"
            alt=""
            width={827}
            height={827}
            className="bakery-days-jpg-2"
          />
        </div>
      </section>
      <section className="box-925">
        <div className="box-923">
          <Image
            src="/assets/S__148398082.jpg"
            alt=""
            width={2480}
            height={441}
            className="s-148398082-jpg-2"
          />
        </div>
        <div className="box-924">
          <Image
            src="/assets/02.jpg"
            alt=""
            width={1021}
            height={574}
            className="el-2706"
          />
        </div>
      </section>
      <section data-inview className="el-2796">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2797">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-141"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-65">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-142"
          />
        </a>
        <span
          className="crisp-svg svg-479"
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
      <section data-inview className="footer-32">
        <span
          className="crisp-svg svg-480"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2798">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-481"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-66">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-482"
          />
        </a>
      </section>
    </>
  );
}
