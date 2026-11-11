import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "タイムテーブル",
  description: "今回の松ヶ崎祭のタイムテーブルです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
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
          className="el-790"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-791">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-57"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-792">
          <div className="box-500">
            <div className="el-793">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-794">
                <span
                  className="crisp-svg svg-200"
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
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-795">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-796">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-173">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-174">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-175">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-176">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-797">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-798">
                <Link href="/search" id="言葉-p-2" className="button-177">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-178">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-179">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-180">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-799">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-800">
                <Link href="/attention" id="ご来場の-p-2" className="button-181">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-182">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-183">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-184">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-185">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-801">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-802">
                <Link href="/committee" id="委員会企画-p-2" className="button-186">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-187">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-188">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-803">
          <div className="container-32">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-804">
              <div className="el-805">
                <div className="box-501">
                  <p className="text-239">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-240">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-241">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-806" />
              <div id="div-34" data-toggle-show="flex" className="el-807">
                <div id="menu1-2" data-inview className="container-33">
                  <Link href="/about" className="el-808">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-809">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-810">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-811">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-812" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-813">
              <div className="el-814">
                <div className="box-502">
                  <p className="text-242">
                    {"きかく"}
                  </p>
                  <p className="text-243">
                    {"企画"}
                  </p>
                </div>
                <p className="text-244">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-815" />
              <div id="div-36" data-toggle-show="flex" className="el-816">
                <div id="menu1-4" data-inview className="container-34">
                  <Link href="/search" className="el-817">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-818">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-819">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-820">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-821" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-822">
              <div className="el-823">
                <p className="text-245">
                  {"ご"}
                </p>
                <div className="box-503">
                  <p className="text-246">
                    {"あんない"}
                  </p>
                  <p className="text-247">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-824" />
              <div id="div-39" data-toggle-show="flex" className="el-825">
                <div id="menu1-6" data-inview className="container-35">
                  <Link href="/attention" className="el-826">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-827">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-828">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-829">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-830">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-831" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-832">
              <div className="el-833">
                <div className="box-504">
                  <p className="text-248">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-249">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-834" />
              <div id="div-38" data-toggle-show="flex" className="el-835">
                <div id="menu1-8" data-inview className="container-36">
                  <Link href="/committee" className="el-836">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-837">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-838">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-839" />
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
        className="el-840"
      />
      <p className="el-1987">
        <span
          className="crisp-svg svg-353"
        >
          <svg aria-hidden="true" width={707} height={136} viewBox="0 0 707 136" />
          <Image
            src="/assets/pasted-artwork-241.svg"
            alt=""
            width={1414}
            height={272}
          />
        </span>
      </p>
      <section className="el-33">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-10"
        />
      </section>
      <p className="box-166">
        {"1日の日程表を　見ることができるよ。\nメインステ〜ジでの催しや　音楽サ〜クルの公演時間を　確認しよう。"}
      </p>
      <section className="el-42">
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
      <section className="el-44">
        <Link href="/schedule/0" className="el-45">
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
        <div className="el-46">
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
        <Link href="/schedule/2" className="el-47">
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
          <option value="場所を選んでね。">{"場所を選んでね。"}</option>
          <option value="メインステ〜ジ">{"メインステ〜ジ"}</option>
          <option value="センタ〜ホ〜ル">{"センタ〜ホ〜ル"}</option>
          <option value="ストリ〜トパフォ〜マンス">{"ストリ〜トパフォ〜マンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-34">
        <div className="box-169">
          <div id="main14" data-toggle-show="flex" className="el-73">
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
          <div id="center14" data-toggle-show="flex" className="el-53">
            <Image
              src="/assets/pasted-artwork-56.svg"
              alt=""
              width={306}
              height={153}
              className="svg-35"
            />
          </div>
          <div id="street14" data-toggle-show="flex" className="el-72">
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
              className="svg-120"
            />
            <Image
              src="/assets/pasted-artwork-154.svg"
              alt=""
              width={306}
              height={113}
              className="svg-121"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-74">
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
            className="el-70"
          />
          <span
            className="crisp-svg pc-4"
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-240.svg"
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
          className="el-52"
        />
      </section>
      <section data-inview className="footer-3">
        <span
          className="crisp-svg pasted-artwork-svg-75"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1657">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-219"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-6">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-220"
          />
        </a>
      </section>
      <section data-inview className="el-1679">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1680">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-251"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-21">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-252"
          />
        </a>
        <span
          className="crisp-svg svg-253"
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
