import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "タイムテーブル",
  description: "今回の松ヶ崎祭のタイムテーブルです。",
  openGraph: {
    title: "タイムテーブル",
    description: "今回の松ヶ崎祭のタイムテーブルです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu98rc7s3u" />
      <nav className="header-8">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-855"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-856">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-58"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-857">
          <div className="box-522">
            <div className="el-858">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-859">
                <span
                  className="crisp-svg svg-208"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-132.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-31">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-860">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-861">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-188">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-189">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-190">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-191">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-862">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-863">
                <Link href="/search" id="言葉-p-2" className="button-192">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-193">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-194">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-195">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-864">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-865">
                <Link href="/attention" id="ご来場の-p-2" className="button-196">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-197">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-198">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-199">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-200">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-866">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-867">
                <Link href="/committee" id="委員会企画-p-2" className="button-201">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-202">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-203">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-868">
          <div className="container-32">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-869">
              <div className="el-870">
                <div className="box-523">
                  <p className="text-259">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-260">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-261">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-871" />
              <div id="div-34" data-toggle-show="flex" className="el-872">
                <div id="menu1-2" data-inview className="container-33">
                  <Link href="/about" className="el-873">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-874">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-875">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-876">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-877" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-878">
              <div className="el-879">
                <div className="box-524">
                  <p className="text-262">
                    {"きかく"}
                  </p>
                  <p className="text-263">
                    {"企画"}
                  </p>
                </div>
                <p className="text-264">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-880" />
              <div id="div-36" data-toggle-show="flex" className="el-881">
                <div id="menu1-4" data-inview className="container-34">
                  <Link href="/search" className="el-882">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-883">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-884">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-885">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-886" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-887">
              <div className="el-888">
                <p className="text-265">
                  {"ご"}
                </p>
                <div className="box-525">
                  <p className="text-266">
                    {"あんない"}
                  </p>
                  <p className="text-267">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-889" />
              <div id="div-39" data-toggle-show="flex" className="el-890">
                <div id="menu1-6" data-inview className="container-35">
                  <Link href="/attention" className="el-891">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-892">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-893">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-894">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-895">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-896" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-897">
              <div className="el-898">
                <div className="box-526">
                  <p className="text-268">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-269">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-899" />
              <div id="div-38" data-toggle-show="flex" className="el-900">
                <div id="menu1-8" data-inview className="container-36">
                  <Link href="/committee" className="el-901">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-902">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-903">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-904" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-4.svg"
        alt=""
        width={1920}
        height={583}
        className="el-905"
      />
      <p className="el-2052">
        <span
          className="crisp-svg svg-361"
        >
          <svg aria-hidden="true" width={707} height={136} viewBox="0 0 707 136" />
          <Image
            src="/assets/pasted-artwork-243.svg"
            alt=""
            width={1414}
            height={272}
          />
        </span>
      </p>
      <section className="el-31">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-10"
        />
      </section>
      <p className="box-169">
        {"1日の日程表を　見ることができるよ。\nメインステ〜ジでの催しや　音楽サ〜クルの公演時間を　確認しよう。"}
      </p>
      <section className="el-40">
        <span
          className="crisp-svg svg-23"
        >
          <svg aria-hidden="true" width={430} height={64} viewBox="0 0 430 64" />
          <Image
            src="/assets/pasted-artwork-45.svg"
            alt=""
            width={860}
            height={128}
          />
        </span>
      </section>
      <section className="el-42">
        <Link href="/schedule/0" className="el-43">
          <span
            className="crisp-svg svg-30"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-50.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
        <div className="el-44">
          <span
            className="crisp-svg svg-29"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-49.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </div>
        <Link href="/schedule/2" className="el-45">
          <span
            className="crisp-svg svg-25"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-48.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
      </section>
      <section className="select">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリ〜トパフォ〜マンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステ〜ジ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センタ〜ホ〜ル\"},\"then\":[{\"kind\":\"show\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"}]}]}]"} className="select-2" name="choice">
          <option>{"場所を選んでね。"}</option>
          <option>{"メインステ〜ジ"}</option>
          <option>{"センタ〜ホ〜ル"}</option>
          <option>{"ストリ〜トパフォ〜マンス"}</option>
          <option>{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-32">
        <div className="box-172">
          <div id="main14" data-toggle-show="flex" className="el-71">
            <Image
              src="/assets/pasted-artwork-61.svg"
              alt=""
              width={306}
              height={113}
              className="svg-40"
            />
            <Image
              src="/assets/pasted-artwork-62.svg"
              alt=""
              width={306}
              height={504}
              className="svg-41"
            />
            <Image
              src="/assets/pasted-artwork-112.svg"
              alt=""
              width={306}
              height={113}
              className="svg-93"
            />
            <Image
              src="/assets/pasted-artwork-113.svg"
              alt=""
              width={306}
              height={113}
              className="svg-94"
            />
            <Image
              src="/assets/pasted-artwork-114.svg"
              alt=""
              width={306}
              height={113}
              className="svg-95"
            />
            <Image
              src="/assets/pasted-artwork-115.svg"
              alt=""
              width={306}
              height={113}
              className="svg-96"
            />
            <Image
              src="/assets/pasted-artwork-116.svg"
              alt=""
              width={306}
              height={113}
              className="svg-97"
            />
            <Image
              src="/assets/pasted-artwork-117.svg"
              alt=""
              width={306}
              height={113}
              className="svg-98"
            />
            <Image
              src="/assets/pasted-artwork-118.svg"
              alt=""
              width={306}
              height={113}
              className="svg-99"
            />
            <Image
              src="/assets/pasted-artwork-119.svg"
              alt=""
              width={306}
              height={113}
              className="svg-100"
            />
            <Image
              src="/assets/pasted-artwork-120.svg"
              alt=""
              width={306}
              height={113}
              className="svg-101"
            />
            <Image
              src="/assets/pasted-artwork-121.svg"
              alt=""
              width={306}
              height={113}
              className="svg-102"
            />
            <Image
              src="/assets/pasted-artwork-122.svg"
              alt=""
              width={306}
              height={113}
              className="svg-103"
            />
          </div>
          <div id="center14" data-toggle-show="flex" className="el-51">
            <Image
              src="/assets/pasted-artwork-56.svg"
              alt=""
              width={306}
              height={153}
              className="svg-35"
            />
          </div>
          <div id="street14" data-toggle-show="flex" className="el-70">
            <Image
              src="/assets/pasted-artwork-53.svg"
              alt=""
              width={306}
              height={113}
              className="pasted-artwork-svg-8"
            />
            <Image
              src="/assets/pasted-artwork-54.svg"
              alt=""
              width={306}
              height={113}
              className="svg-33"
            />
            <Image
              src="/assets/pasted-artwork-55.svg"
              alt=""
              width={306}
              height={113}
              className="svg-34"
            />
            <Image
              src="/assets/pasted-artwork-153.svg"
              alt=""
              width={306}
              height={113}
              className="svg-123"
            />
            <Image
              src="/assets/pasted-artwork-154.svg"
              alt=""
              width={306}
              height={113}
              className="svg-124"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-72">
            <Image
              src="/assets/pasted-artwork-66.svg"
              alt=""
              width={306}
              height={212}
              className="pasted-artwork-svg-9"
            />
            <Image
              src="/assets/pasted-artwork-69.svg"
              alt=""
              width={153}
              height={212}
              className="svg-47"
            />
            <Image
              src="/assets/pasted-artwork-68.svg"
              alt=""
              width={153}
              height={212}
              className="svg-46"
            />
            <Image
              src="/assets/pasted-artwork-67.svg"
              alt=""
              width={306}
              height={212}
              className="svg-45"
            />
            <Image
              src="/assets/pasted-artwork-70.svg"
              alt=""
              width={153}
              height={594}
              className="svg-48"
            />
            <span
              className="crisp-svg svg-49"
            >
              <svg aria-hidden="true" width={236} height={181} viewBox="0 0 236 181" />
              <Image
                src="/assets/pasted-artwork-71.svg"
                alt=""
                width={472}
                height={362}
              />
            </span>
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-68"
          />
          <span
            className="crisp-svg pc-4"
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-242.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
        <Image
          src=""
          alt=""
          width={1701}
          height={3102}
          className="el-50"
        />
      </section>
      <section data-inview className="footer-3">
        <span
          className="crisp-svg pasted-artwork-svg-76"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1722">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-227"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-6">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-228"
          />
        </a>
      </section>
      <section data-inview className="el-1744">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1745">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-259"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-21">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-260"
          />
        </a>
        <span
          className="crisp-svg svg-261"
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-198.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
