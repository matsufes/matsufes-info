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
      <span hidden data-page-body="page_msmxmtrg5" />
      <nav className="header-7">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-805"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-806">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-57"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-807">
          <div className="box-517">
            <div className="el-808">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-809">
                <span
                  className="crisp-svg svg-205"
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
            <div className="container-25">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-810">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-811">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-172">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-173">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-174">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-175">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-812">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-813">
                <Link href="/search" id="言葉-p-2" className="button-176">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-177">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-178">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-179">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-814">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-815">
                <Link href="/attention" id="ご来場の-p-2" className="button-180">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-181">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-182">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-183">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-184">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-816">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-817">
                <Link href="/committee" id="委員会企画-p-2" className="button-185">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-186">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-187">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-818">
          <div className="container-26">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-819">
              <div className="el-820">
                <div className="box-518">
                  <p className="text-248">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-249">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-250">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-821" />
              <div id="div-34" data-toggle-show="flex" className="el-822">
                <div id="menu1-2" data-inview className="container-27">
                  <Link href="/about" className="el-823">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-824">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-825">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-826">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-827" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-828">
              <div className="el-829">
                <div className="box-519">
                  <p className="text-251">
                    {"きかく"}
                  </p>
                  <p className="text-252">
                    {"企画"}
                  </p>
                </div>
                <p className="text-253">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-830" />
              <div id="div-36" data-toggle-show="flex" className="el-831">
                <div id="menu1-4" data-inview className="container-28">
                  <Link href="/search" className="el-832">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-833">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-834">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-835">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-836" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-837">
              <div className="el-838">
                <p className="text-254">
                  {"ご"}
                </p>
                <div className="box-520">
                  <p className="text-255">
                    {"あんない"}
                  </p>
                  <p className="text-256">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-839" />
              <div id="div-39" data-toggle-show="flex" className="el-840">
                <div id="menu1-6" data-inview className="container-29">
                  <Link href="/attention" className="el-841">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-842">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-843">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-844">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-845">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-846" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-847">
              <div className="el-848">
                <div className="box-521">
                  <p className="text-257">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-258">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-849" />
              <div id="div-38" data-toggle-show="flex" className="el-850">
                <div id="menu1-8" data-inview className="container-30">
                  <Link href="/committee" className="el-851">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-852">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-853">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-854" />
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
        className="el-357"
      />
      <p className="el-2051">
        <span
          className="crisp-svg svg-358"
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
      <section className="el-26">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-55"
        />
      </section>
      <p className="box-168">
        {"1日の日程表を　見ることができるよ。\nメインステ〜ジでの催しや　音楽サ〜クルの公演時間を　確認しよう。"}
      </p>
      <section className="el-41">
        <span
          className="crisp-svg svg-24"
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
      <section className="el-46">
        <div className="el-47">
          <span
            className="crisp-svg svg-26"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-46.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </div>
        <Link href="/schedule" className="el-48">
          <span
            className="crisp-svg svg-27"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-47.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
        <Link href="/schedule/2" className="el-49">
          <span
            className="crisp-svg svg-28"
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
      <section className="select-5">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステ〜ジ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センタ〜ホ〜ル\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリ〜トパフォ〜マンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-6" name="choice">
          <option>{"場所を選んでね。"}</option>
          <option>{"メインステ〜ジ"}</option>
          <option>{"センタ〜ホ〜ル"}</option>
          <option>{"ストリ〜トパフォ〜マンス"}</option>
          <option>{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-3">
        <div className="box-171">
          <div id="main" data-toggle-show="flex" className="el-76">
            <Image
              src="/assets/pasted-artwork-108.svg"
              alt=""
              width={306}
              height={113}
              className="svg-90"
            />
            <Image
              src="/assets/pasted-artwork-109.svg"
              alt=""
              width={306}
              height={113}
              className="svg-135"
            />
            <Image
              src="/assets/pasted-artwork-110.svg"
              alt=""
              width={306}
              height={113}
              className="svg-91"
            />
            <Image
              src="/assets/pasted-artwork-111.svg"
              alt=""
              width={306}
              height={113}
              className="svg-92"
            />
            <Image
              src="/assets/pasted-artwork-194.svg"
              alt=""
              width={175}
              height={63}
              className="pasted-artwork-svg-55"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-752">
            <Image
              src="/assets/pasted-artwork-201.svg"
              alt=""
              width={306}
              height={537}
              className="svg-204"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-67"
          />
          <span
            className="crisp-svg pc-3"
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
      </section>
      <section data-inview className="footer-2">
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1721">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-223"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-5">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-224"
          />
        </a>
      </section>
      <section data-inview className="el-1742">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1743">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-254"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-20">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-255"
          />
        </a>
        <span
          className="crisp-svg svg-256"
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
