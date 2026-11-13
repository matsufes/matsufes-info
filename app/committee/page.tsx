import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "委員会企画",
  description: "松ヶ崎祭実行委員会が企画するイベントの紹介です。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "委員会企画",
    description: "松ヶ崎祭実行委員会が企画するイベントの紹介です。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g5cpwgggijw" />
      <nav className="header-34">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2440"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2441">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-109"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2452">
          <div className="box-851">
            <div className="el-2443">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2442">
                <span
                  className="crisp-svg svg-415"
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
            <div className="container-187">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2444">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2445">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-634">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-635">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-636">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-637">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2446">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2447">
                <Link href="/search" id="言葉-p-2" className="button-638">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-639">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-640">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-641">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2448">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2449">
                <Link href="/attention" id="ご来場の-p-2" className="button-642">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-643">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-644">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-645">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-646">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2450">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2451">
                <Link href="/committee" id="委員会企画-p-2" className="button-647">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-648">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-649">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2489">
          <div className="container-192">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2461">
              <div className="el-2453">
                <div className="box-852">
                  <p className="text-641">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-642">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-643">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2454" />
              <div id="div-34" data-toggle-show="flex" className="el-2460">
                <div id="menu1-2" data-inview className="container-188">
                  <Link href="/about" className="el-2455">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2456">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2457">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2458">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2459" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2470">
              <div className="el-2462">
                <div className="box-853">
                  <p className="text-644">
                    {"きかく"}
                  </p>
                  <p className="text-645">
                    {"企画"}
                  </p>
                </div>
                <p className="text-646">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2463" />
              <div id="div-36" data-toggle-show="flex" className="el-2469">
                <div id="menu1-4" data-inview className="container-189">
                  <Link href="/search" className="el-2464">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2465">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2466">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2467">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2468" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2480">
              <div className="el-2471">
                <p className="text-647">
                  {"ご"}
                </p>
                <div className="box-854">
                  <p className="text-648">
                    {"あんない"}
                  </p>
                  <p className="text-649">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2472" />
              <div id="div-39" data-toggle-show="flex" className="el-2479">
                <div id="menu1-6" data-inview className="container-190">
                  <Link href="/attention" className="el-2473">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2474">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2475">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2476">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2477">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2478" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2488">
              <div className="el-2481">
                <div className="box-855">
                  <p className="text-650">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-651">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2482" />
              <div id="div-38" data-toggle-show="flex" className="el-2487">
                <div id="menu1-8" data-inview className="container-191">
                  <Link href="/committee" className="el-2483">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2484">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2485">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2486" />
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
        className="el-2811"
      />
      <p className="box-856">
        <span
          className="crisp-svg svg-416"
          style={{ ["--crisp-svg-width"]: "562px", ["--crisp-svg-ratio"]: "562 / 167" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={562} height={167} viewBox="0 0 562 167" />
          <Image
            src="/assets/pasted-artwork-31.svg"
            alt=""
            width={1124}
            height={334}
          />
        </span>
      </p>
      <section className="box-857">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-151"
        />
      </section>
      <p className="box-858">
        {"みんなが松ヶ崎祭を　もっと楽しめるように　企画をいっぱい　用意したよ。\nここでしかできない　特別な体験を　お届けするね。"}
      </p>
      <section className="el-2490">
        <span
          className="crisp-svg svg-585"
          style={{ ["--crisp-svg-width"]: "1661px", ["--crisp-svg-ratio"]: "1661 / 1821" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1661} height={1821} viewBox="0 0 1661 1821" />
          <Image
            src="/assets/pasted-artwork-386.svg"
            alt=""
            width={3322}
            height={3642}
          />
        </span>
      </section>
      <section className="box-859">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://livepocket.jp/e/i1x36\"}]}]"}
          className="crisp-svg el-2909"
          style={{ ["--crisp-svg-width"]: "380px", ["--crisp-svg-ratio"]: "380 / 176" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={380} height={176} viewBox="0 0 380 176" />
          <Image
            src="/assets/pasted-artwork-365.svg"
            alt=""
            width={760}
            height={352}
          />
        </span>
      </section>
      <section className="box-860">
        <div className="el-2491">
          <span
            className="crisp-svg svg-571"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 675" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-366.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="el-2492">
          <span
            className="crisp-svg svg-572"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 675" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-367.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-861">
        <div className="el-2493">
          <span
            className="crisp-svg svg-586"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 675" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-387.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="el-2494">
          <span
            className="crisp-svg svg-587"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 675" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-388.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-862">
        <div className="el-2495">
          <span
            className="crisp-svg svg-573"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 426" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-368.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="el-2496">
          <span
            className="crisp-svg svg-581"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 426" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-379.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-863">
        <div className="el-2497">
          <span
            className="crisp-svg svg-574"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 426" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-369.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="el-2498">
          <span
            className="crisp-svg svg-575"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 426" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-370.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-864">
        <div className="mod">
          <span
            className="crisp-svg svg-576"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 443" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={443} viewBox="0 0 563 443" />
            <Image
              src="/assets/pasted-artwork-371.svg"
              alt=""
              width={1126}
              height={886}
            />
          </span>
        </div>
        <div className="night">
          <span
            className="crisp-svg svg-577"
            style={{ ["--crisp-svg-width"]: "563px", ["--crisp-svg-ratio"]: "563 / 426" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-372.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="el-3049">
        <div className="box-993">
          <Image
            src="/assets/pasted-artwork-440.svg"
            alt=""
            width={1046}
            height={215}
            className="svg-624"
          />
        </div>
      </section>
      <p className="text-762">
        {"おおきなガラポンを回して、豪華景品を当てよう！\n１等は絶品グルメ！他にもうれしい景品盛りだくさん！"}
      </p>
      <p className="text-763">
        {"開催時間：11/14(土)10:00-20:30　11/15(日)10:00-17:00\n開催場所：本部"}
      </p>
      <section className="box-994">
        <Image
          src="/assets/pasted-artwork-441.svg"
          alt=""
          width={245}
          height={58}
          className="svg-625"
        />
      </section>
      <p className="text-764">
        {"ミッションをクリアすることで、ちゅーせんかいに参加できるよ。\nミッションは全部で３つ。\n１つクリアにつき１回、合計３回挑戦できるよ。\n\nちゅーせんかいに挑戦したい時は、クリア画面を本部のスタッフに見せてね。\n\n景品は高級なお肉や割引券、まつぴよグッズなどなど。\nぜひ挑戦してみてね。"}
      </p>
      <section className="box-995">
        <Image
          src="/assets/pasted-artwork-442.svg"
          alt=""
          width={265}
          height={58}
          className="svg-626"
        />
      </section>
      <section className="el-3050">
        <div className="box-996">
          <Image
            src="/assets/pasted-artwork-443.svg"
            alt=""
            width={307}
            height={32}
            className="svg-627"
          />
        </div>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/survey\"}]}]"}
          className="crisp-svg el-3052"
          style={{ ["--crisp-svg-width"]: "278px", ["--crisp-svg-ratio"]: "278 / 71" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={278} height={71} viewBox="0 0 278 71" />
          <Image
            src="/assets/pasted-artwork-446.svg"
            alt=""
            width={556}
            height={142}
          />
        </span>
      </section>
      <section className="m-1-15">
        <div className="box-997">
          <Image
            src="/assets/pasted-artwork-444.svg"
            alt=""
            width={495}
            height={32}
            className="svg-628"
          />
        </div>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/m-1\"}]}]"}
          className="crisp-svg m-1-16"
          style={{ ["--crisp-svg-width"]: "262px", ["--crisp-svg-ratio"]: "262 / 71" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={262} height={71} viewBox="0 0 262 71" />
          <Image
            src="/assets/pasted-artwork-447.svg"
            alt=""
            width={524}
            height={142}
          />
        </span>
      </section>
      <section className="el-3051">
        <div className="box-998">
          <Image
            src="/assets/pasted-artwork-445.svg"
            alt=""
            width={423}
            height={32}
            className="svg-629"
          />
        </div>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://www.instagram.com/matsupiyo_piyo/\"}]}]"}
          className="crisp-svg el-3053"
          style={{ ["--crisp-svg-width"]: "290px", ["--crisp-svg-ratio"]: "290 / 71" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={290} height={71} viewBox="0 0 290 71" />
          <Image
            src="/assets/pasted-artwork-448.svg"
            alt=""
            width={580}
            height={142}
          />
        </span>
      </section>
      <section data-inview className="el-2781">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2782">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-131"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-55">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-132"
          />
        </a>
        <span
          className="crisp-svg svg-459"
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
      <section data-inview className="footer-27">
        <span
          className="crisp-svg svg-460"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2783">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-461"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-56">
          <Image
            src="/assets/pasted-artwork-281.svg"
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
