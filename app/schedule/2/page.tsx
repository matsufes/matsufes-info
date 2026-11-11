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
      <span hidden data-page-body="page_mu98rd4648" />
      <nav className="header-9">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-841"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-842">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-58"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-843">
          <div className="box-505">
            <div className="el-844">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-845">
                <span
                  className="crisp-svg svg-201"
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
            <div className="container-37">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-846">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-847">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-189">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-190">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-191">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-192">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-848">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-849">
                <Link href="/search" id="言葉-p-2" className="button-193">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-194">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-195">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-196">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-850">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-851">
                <Link href="/attention" id="ご来場の-p-2" className="button-197">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-198">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-199">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-200">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-201">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-852">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-853">
                <Link href="/committee" id="委員会企画-p-2" className="button-202">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-203">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-204">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-854">
          <div className="container-38">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-855">
              <div className="el-856">
                <div className="box-506">
                  <p className="text-250">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-251">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-252">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-857" />
              <div id="div-34" data-toggle-show="flex" className="el-858">
                <div id="menu1-2" data-inview className="container-39">
                  <Link href="/about" className="el-859">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-860">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-861">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-862">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-863" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-864">
              <div className="el-865">
                <div className="box-507">
                  <p className="text-253">
                    {"きかく"}
                  </p>
                  <p className="text-254">
                    {"企画"}
                  </p>
                </div>
                <p className="text-255">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-866" />
              <div id="div-36" data-toggle-show="flex" className="el-867">
                <div id="menu1-4" data-inview className="container-40">
                  <Link href="/search" className="el-868">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-869">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-870">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-871">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-872" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-873">
              <div className="el-874">
                <p className="text-256">
                  {"ご"}
                </p>
                <div className="box-508">
                  <p className="text-257">
                    {"あんない"}
                  </p>
                  <p className="text-258">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-875" />
              <div id="div-39" data-toggle-show="flex" className="el-876">
                <div id="menu1-6" data-inview className="container-41">
                  <Link href="/attention" className="el-877">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-878">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-879">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-880">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-881">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-882" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-883">
              <div className="el-884">
                <div className="box-509">
                  <p className="text-259">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-260">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-885" />
              <div id="div-38" data-toggle-show="flex" className="el-886">
                <div id="menu1-8" data-inview className="container-42">
                  <Link href="/committee" className="el-887">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-888">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-889">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-890" />
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
        className="el-891"
      />
      <p className="el-1988">
        <span
          className="crisp-svg svg-354"
        >
          <svg aria-hidden="true" width={707} height={136} viewBox="0 0 707 136" />
          <Image
            src="/assets/pasted-artwork-238.svg"
            alt=""
            width={1414}
            height={272}
          />
        </span>
      </p>
      <section className="el-35">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-11"
        />
      </section>
      <p className="box-167">
        {"1日の日程表を　見ることができるよ。\nメインステ〜ジでの催しや　音楽サ〜クルの公演時間を　確認しよう。"}
      </p>
      <section className="el-36">
        <span
          className="crisp-svg svg-21"
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
      <section className="el-38">
        <Link href="/schedule/0" className="el-39">
          <span
            className="crisp-svg svg-31"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-51.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
        <Link href="/schedule" className="el-40">
          <span
            className="crisp-svg svg-22"
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
        <div className="el-41">
          <span
            className="crisp-svg svg-32"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-52.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </div>
      </section>
      <section className="select-3">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステ〜ジ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センタ〜ホ〜ル\"},\"then\":[{\"kind\":\"show\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリ〜トパフォ〜マンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"}]}]}]"} className="select-4" name="choice">
          <option value="場所を選んでね。">{"場所を選んでね。"}</option>
          <option value="メインステ〜ジ">{"メインステ〜ジ"}</option>
          <option value="センタ〜ホ〜ル">{"センタ〜ホ〜ル"}</option>
          <option value="ストリ〜トパフォ〜マンス">{"ストリ〜トパフォ〜マンス"}</option>
          <option value="委員会企画">{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-37">
        <div className="box-164">
          <div id="main15" data-toggle-show="flex" className="el-75">
            <Image
              src="/assets/pasted-artwork-63.svg"
              alt=""
              width={306}
              height={113}
              className="svg-42"
            />
            <Image
              src="/assets/pasted-artwork-64.svg"
              alt=""
              width={306}
              height={224}
              className="svg-43"
            />
            <Image
              src="/assets/pasted-artwork-123.svg"
              alt=""
              width={306}
              height={113}
              className="svg-104"
            />
            <Image
              src="/assets/pasted-artwork-124.svg"
              alt=""
              width={306}
              height={113}
              className="svg-105"
            />
            <Image
              src="/assets/pasted-artwork-125.svg"
              alt=""
              width={306}
              height={113}
              className="svg-106"
            />
            <Image
              src="/assets/pasted-artwork-126.svg"
              alt=""
              width={306}
              height={113}
              className="svg-107"
            />
            <Image
              src="/assets/pasted-artwork-127.svg"
              alt=""
              width={306}
              height={113}
              className="svg-108"
            />
            <Image
              src="/assets/pasted-artwork-128.svg"
              alt=""
              width={306}
              height={113}
              className="svg-109"
            />
            <Image
              src="/assets/pasted-artwork-193.svg"
              alt=""
              width={175}
              height={63}
              className="svg-190"
            />
            <Image
              src="/assets/pasted-artwork-236.svg"
              alt=""
              width={306}
              height={299}
              className="svg-351"
            />
            <Image
              src="/assets/pasted-artwork-394.svg"
              alt=""
              width={306}
              height={113}
              className="svg-597"
            />
          </div>
          <div id="center15" data-toggle-show="flex" className="el-76">
            <Image
              src="/assets/pasted-artwork-57.svg"
              alt=""
              width={306}
              height={801}
              className="svg-36"
            />
          </div>
          <div id="street15" data-toggle-show="flex" className="el-77">
            <Image
              src="/assets/pasted-artwork-58.svg"
              alt=""
              width={306}
              height={113}
              className="svg-37"
            />
            <Image
              src="/assets/pasted-artwork-65.svg"
              alt=""
              width={306}
              height={113}
              className="svg-44"
            />
            <Image
              src="/assets/pasted-artwork-59.svg"
              alt=""
              width={306}
              height={113}
              className="svg-38"
            />
            <Image
              src="/assets/pasted-artwork-60.svg"
              alt=""
              width={306}
              height={202}
              className="svg-39"
            />
            <Image
              src="/assets/pasted-artwork-191.svg"
              alt=""
              width={306}
              height={113}
              className="svg-189"
            />
          </div>
          <div id="committee15" data-toggle-show="flex" className="el-54">
            <Image
              src="/assets/pasted-artwork-66.svg"
              alt=""
              width={306}
              height={212}
              className="image-5"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-79.svg"
            alt=""
            width={295}
            height={2502}
            className="el-71"
          />
          <span
            className="crisp-svg pc-2"
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-237.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
      </section>
      <section data-inview className="footer-4">
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1658">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-221"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-7">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-222"
          />
        </a>
      </section>
      <section data-inview className="el-1681">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1682">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-254"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-22">
          <Image
            src="/assets/pasted-artwork-135.svg"
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
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
