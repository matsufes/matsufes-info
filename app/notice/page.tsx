import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "松ヶ崎祭に関するお知らせをお届けします。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "お知らせ",
    description: "松ヶ崎祭に関するお知らせをお届けします。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g8rjmzybnlp" />
      <nav className="header-39">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2707"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2708">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-114"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2719">
          <div className="box-926">
            <div className="el-2710">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2709">
                <span
                  className="crisp-svg svg-424"
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
            <div className="container-217">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2711">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2712">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-729">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-730">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-731">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-732">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2713">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2714">
                <Link href="/search" id="言葉-p-2" className="button-733">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-734">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-735">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-736">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2715">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2716">
                <Link href="/attention" id="ご来場の-p-2" className="button-737">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-738">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-739">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-740">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-741">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2717">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2718">
                <Link href="/committee" id="委員会企画-p-2" className="button-742">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-743">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-744">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2756">
          <div className="container-222">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2728">
              <div className="el-2720">
                <div className="box-927">
                  <p className="text-711">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-712">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-713">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2721" />
              <div id="div-34" data-toggle-show="flex" className="el-2727">
                <div id="menu1-2" data-inview className="container-218">
                  <Link href="/about" className="el-2722">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2723">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2724">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2725">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2726" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2737">
              <div className="el-2729">
                <div className="box-928">
                  <p className="text-714">
                    {"きかく"}
                  </p>
                  <p className="text-715">
                    {"企画"}
                  </p>
                </div>
                <p className="text-716">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2730" />
              <div id="div-36" data-toggle-show="flex" className="el-2736">
                <div id="menu1-4" data-inview className="container-219">
                  <Link href="/search" className="el-2731">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2732">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2733">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2734">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2735" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2747">
              <div className="el-2738">
                <p className="text-717">
                  {"ご"}
                </p>
                <div className="box-929">
                  <p className="text-718">
                    {"あんない"}
                  </p>
                  <p className="text-719">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2739" />
              <div id="div-39" data-toggle-show="flex" className="el-2746">
                <div id="menu1-6" data-inview className="container-220">
                  <Link href="/attention" className="el-2740">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2741">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2742">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2743">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2744">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2745" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2755">
              <div className="el-2748">
                <div className="box-930">
                  <p className="text-720">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-721">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2749" />
              <div id="div-38" data-toggle-show="flex" className="el-2754">
                <div id="menu1-8" data-inview className="container-221">
                  <Link href="/committee" className="el-2750">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2751">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2752">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2753" />
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
        className="el-2816"
      />
      <p className="box-931">
        <span
          className="crisp-svg svg-425"
          style={{ ["--crisp-svg-width"]: "412px", ["--crisp-svg-ratio"]: "412 / 123" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={412} height={123} viewBox="0 0 412 123" />
          <Image
            src="/assets/pasted-artwork-75.svg"
            alt=""
            width={824}
            height={246}
          />
        </span>
      </p>
      <section className="box-932">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-156"
        />
      </section>
      <section className="box-935">
        <p className="box-933">
          {"2026/10/13"}
        </p>
        <div className="box-934">
          <Image
            src="/assets/pasted-artwork-355.svg"
            alt=""
            width={112}
            height={42}
            className="svg-557"
          />
        </div>
      </section>
      <section className="box-936">
        <div id="お知らせ１" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"詳細1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"8-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"8-2\"}]}]"} className="el-2854">
          <p className="text-722">
            {"第56回松ヶ崎祭公式webページが更新されました。"}
          </p>
          <div className="button-745">
            <Image id="8-1" data-toggle-show="block"
              src="/assets/pasted-artwork-305.svg"
              alt=""
              width={44}
              height={28}
              className="el-2855"
            />
            <Image id="8-2" data-toggle-show="block"
              src="/assets/pasted-artwork-305.svg"
              alt=""
              width={44}
              height={28}
              className="el-2856"
            />
          </div>
        </div>
        <p id="詳細1" data-toggle-show="flex" className="el-2857">
          {"出展者様情報が公開されました。\n各出展者様のSNS等で松ヶ崎祭の情報を発信していただけます。\n ぜひ一緒に、松ヶ崎祭を盛り上げていただけますと幸いです。\n\n また、システム調整に伴う公開予定日時の変更により、\n出展者の皆さまに多大なるご迷惑をおかけしましたことを、心よりお詫び申し上げます。"}
        </p>
      </section>
      <section className="box-946">
        <p className="box-947">
          {"2026/11/06"}
        </p>
        <div className="box-948">
          <Image
            src="/assets/pasted-artwork-355.svg"
            alt=""
            width={112}
            height={42}
            className="svg-578"
          />
        </div>
      </section>
      <section className="box-949">
        <span id="10/13中身-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"10/13中身-2\"}]}]"}
          className="crisp-svg el-2910"
          style={{ ["--crisp-svg-width"]: "1393px", ["--crisp-svg-ratio"]: "1393 / 451" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1393} height={451} viewBox="0 0 1393 451" />
          <Image
            src="/assets/pasted-artwork-188.svg"
            alt=""
            width={2786}
            height={902}
          />
        </span>
        <div id="お知らせ１-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"詳細1-2\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"8-3\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"8-4\"}]}]"} className="el-2911">
          <p className="text-734">
            {"第56回松ヶ崎祭公式webページが更新されました。"}
          </p>
          <div className="button-762">
            <Image id="8-3" data-toggle-show="block"
              src="/assets/pasted-artwork-305.svg"
              alt=""
              width={44}
              height={28}
              className="el-2912"
            />
            <Image id="8-4" data-toggle-show="block"
              src="/assets/pasted-artwork-305.svg"
              alt=""
              width={44}
              height={28}
              className="el-2913"
            />
          </div>
        </div>
        <p id="詳細1-2" data-toggle-show="flex" className="el-2914">
          {"追加されたコンテンツは以下の通りです。\n\n・公式メンバ〜「まつぴよ」\n・委員会企画"}
        </p>
      </section>
      <span
        className="crisp-svg svg-484"
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
      <section data-inview className="el-2799">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2800">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-143"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-67">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-144"
          />
        </a>
        <span
          className="crisp-svg svg-483"
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
      <section data-inview className="footer-33">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2801">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-485"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-68">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-486"
          />
        </a>
      </section>
    </>
  );
}
