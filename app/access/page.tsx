import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "行き方・会場地図",
  description: "松ヶ崎祭が開催される京都工芸繊維大学への行き方・会場地図のページです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "行き方・会場地図",
    description: "松ヶ崎祭が開催される京都工芸繊維大学への行き方・会場地図のページです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g5ayccl4poy" />
      <nav className="header-33">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2390"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2391">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-108"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2402">
          <div className="box-833">
            <div className="el-2393">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2392">
                <span
                  className="crisp-svg svg-414"
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
            <div className="container-181">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2394">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2395">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-618">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-619">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-620">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-621">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2396">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2397">
                <Link href="/search" id="言葉-p-2" className="button-622">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-623">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-624">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-625">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2398">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2399">
                <Link href="/attention" id="ご来場の-p-2" className="button-626">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-627">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-628">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-629">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-630">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2400">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2401">
                <Link href="/committee" id="委員会企画-p-2" className="button-631">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-632">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-633">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2439">
          <div className="container-186">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2411">
              <div className="el-2403">
                <div className="box-834">
                  <p className="text-630">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-631">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-632">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2404" />
              <div id="div-34" data-toggle-show="flex" className="el-2410">
                <div id="menu1-2" data-inview className="container-182">
                  <Link href="/about" className="el-2405">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2406">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2407">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2408">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2409" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2420">
              <div className="el-2412">
                <div className="box-835">
                  <p className="text-633">
                    {"きかく"}
                  </p>
                  <p className="text-634">
                    {"企画"}
                  </p>
                </div>
                <p className="text-635">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2413" />
              <div id="div-36" data-toggle-show="flex" className="el-2419">
                <div id="menu1-4" data-inview className="container-183">
                  <Link href="/search" className="el-2414">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2415">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2416">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2417">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2418" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2430">
              <div className="el-2421">
                <p className="text-636">
                  {"ご"}
                </p>
                <div className="box-836">
                  <p className="text-637">
                    {"あんない"}
                  </p>
                  <p className="text-638">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2422" />
              <div id="div-39" data-toggle-show="flex" className="el-2429">
                <div id="menu1-6" data-inview className="container-184">
                  <Link href="/attention" className="el-2423">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2424">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2425">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2426">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2427">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2428" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2438">
              <div className="el-2431">
                <div className="box-837">
                  <p className="text-639">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-640">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2432" />
              <div id="div-38" data-toggle-show="flex" className="el-2437">
                <div id="menu1-8" data-inview className="container-185">
                  <Link href="/committee" className="el-2433">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2434">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2435">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2436" />
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
        className="el-2810"
      />
      <p className="box-838">
        <Image
          src="/assets/pasted-artwork-304.svg"
          alt=""
          width={846}
          height={125}
          className="svg-509"
        />
      </p>
      <section className="box-839">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-150"
        />
      </section>
      <section className="box-840">
        <Image
          src="/assets/pasted-artwork-295.svg"
          alt=""
          width={545}
          height={128}
          className="svg-502"
        />
      </section>
      <section className="box-842">
        <p className="box-841">
          {"・地下鉄烏丸線　松ヶ崎駅　徒歩 8分\n\n・叡山電車　一乗寺駅　徒歩 11分\n\n・叡山電車　修学院駅　徒歩 14分"}
        </p>
      </section>
      <section className="box-843">
        <Image
          src="/assets/pasted-artwork-296.svg"
          alt=""
          width={545}
          height={128}
          className="svg-503"
        />
      </section>
      <section className="box-845">
        <p className="box-844">
          {"・市バス65号系統など　左京区総合庁舎・京都工芸繊維大学前　徒歩 1分\n\n\n・京都バス17・43号系統など　高野泉町　徒歩 4分\n\n\n・市バス松ヶ崎4号系統など　左京区総合庁舎前　徒歩 5分\n\n\n・市バス北8・65号系統など　松ヶ崎海尻町　徒歩 7分\n\n\n・市バス206・204号系統など　高木町　徒歩 8分"}
        </p>
      </section>
      <section className="box-846">
        <Image
          src="/assets/pasted-artwork-297.svg"
          alt=""
          width={332}
          height={128}
          className="svg-504"
        />
      </section>
      <section className="box-848">
        <p className="box-847">
          {"ご来場の際は、公共交通機関をご利用ください。 \n\n\n自家用車・タクシー・バイク・自転車・キックボードなどでの入構はご遠慮いただいております。\n\n\n自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n\n構内の自転車走行は禁止されています。"}
        </p>
      </section>
      <section className="box-849">
        <Image
          src="/assets/pasted-artwork-395.svg"
          alt=""
          width={1069}
          height={677}
          className="svg-592"
        />
      </section>
      <section className="box-850" />
      <section data-inview className="el-2778">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2779">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-129"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-53">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-130"
          />
        </a>
        <span
          className="crisp-svg svg-455"
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
      <section data-inview className="footer-26">
        <span
          className="crisp-svg svg-456"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2780">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-457"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-54">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-458"
          />
        </a>
      </section>
    </>
  );
}
