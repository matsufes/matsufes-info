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
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-815"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-219.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-816">
          <span
            className="crisp-svg pasted-artwork-svg-59"
          >
            <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
            <Image
              src="/assets/pasted-artwork-218.svg"
              alt="メニューを開く"
              width={460}
              height={284}
            />
          </span>
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-817">
          <div className="box-518">
            <div className="el-818">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-819">
                <span
                  className="crisp-svg svg-232"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-155.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-25">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-820">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-821">
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
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-822">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-823">
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
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-824">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-825">
                <Link href="/attention" id="ご来場の-p-2" className="button-180">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-181">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-182">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-183">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-184">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-826">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-827">
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
        <div className="el-828">
          <div className="container-26">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-829">
              <div className="el-830">
                <div className="box-519">
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
              <div id="div-33" data-toggle-show="flex" data-inview className="el-831" />
              <div id="div-34" data-toggle-show="flex" className="el-832">
                <div id="menu1-2" data-inview className="container-27">
                  <Link href="/about" className="el-833">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-834">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-835">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-836">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-837" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-838">
              <div className="el-839">
                <div className="box-520">
                  <p className="text-251">
                    {"さがし"}
                  </p>
                  <p className="text-252">
                    {"企画"}
                  </p>
                </div>
                <p className="text-253">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-840" />
              <div id="div-36" data-toggle-show="flex" className="el-841">
                <div id="menu1-4" data-inview className="container-28">
                  <Link href="/search" className="el-842">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-843">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-844">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-845">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-846" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-847">
              <div className="el-848">
                <p className="text-254">
                  {"ご"}
                </p>
                <div className="box-521">
                  <p className="text-255">
                    {"あんない"}
                  </p>
                  <p className="text-256">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-849" />
              <div id="div-39" data-toggle-show="flex" className="el-850">
                <div id="menu1-6" data-inview className="container-29">
                  <Link href="/attention" className="el-851">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-852">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-853">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-854">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-855">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-856" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-857">
              <div className="el-858">
                <div className="box-522">
                  <p className="text-257">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-258">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-859" />
              <div id="div-38" data-toggle-show="flex" className="el-860">
                <div id="menu1-8" data-inview className="container-30">
                  <Link href="/committee" className="el-861">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-862">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-863">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-864" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={583}
        className="el-365"
      />
      <p className="el-3">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="el-25"
        />
      </p>
      <section className="el-28">
        <Image
          src="/assets/pasted-artwork-99.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-64"
        />
      </section>
      <p className="box-169">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-45">
        <Image
          src="/assets/pasted-artwork-56.svg"
          alt=""
          width={430}
          height={64}
          className="svg-26"
        />
      </section>
      <section className="el-50">
        <div className="el-51">
          <Image
            src="/assets/pasted-artwork-57.svg"
            alt=""
            width={268}
            height={84}
            className="svg-28"
          />
        </div>
        <Link href="/schedule" className="el-52">
          <Image
            src="/assets/pasted-artwork-58.svg"
            alt=""
            width={268}
            height={84}
            className="svg-29"
          />
        </Link>
        <Link href="/schedule/2" className="el-53">
          <Image
            src="/assets/pasted-artwork-59.svg"
            alt=""
            width={268}
            height={84}
            className="svg-30"
          />
        </Link>
      </section>
      <section className="select-5">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-6" name="choice">
          <option>{"場所を選んでね。"}</option>
          <option>{"メインステージ"}</option>
          <option>{"センターホール"}</option>
          <option>{"ストリートパフォーマンス"}</option>
          <option>{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-4">
        <div className="box-172">
          <div id="main" data-toggle-show="flex" className="el-80">
            <Image
              src="/assets/pasted-artwork-131.svg"
              alt=""
              width={306}
              height={113}
              className="svg-102"
            />
            <Image
              src="/assets/pasted-artwork-132.svg"
              alt=""
              width={306}
              height={113}
              className="svg-150"
            />
            <Image
              src="/assets/pasted-artwork-133.svg"
              alt=""
              width={306}
              height={113}
              className="svg-103"
            />
            <Image
              src="/assets/pasted-artwork-134.svg"
              alt=""
              width={306}
              height={113}
              className="svg-104"
            />
            <Image
              src="/assets/pasted-artwork-235.svg"
              alt=""
              width={175}
              height={63}
              className="pasted-artwork-svg-57"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-760">
            <Image
              src="/assets/pasted-artwork-246.svg"
              alt=""
              width={306}
              height={537}
              className="svg-231"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-100.svg"
            alt=""
            width={295}
            height={2502}
            className="el-71"
          />
          <span
            className="crisp-svg el-128"
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-215.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
      </section>
      <section data-inview className="footer-2">
        <span
          className="crisp-svg pasted-artwork-svg-77"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1731">
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={58}
            height={58}
            className="svg-250"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-5">
          <Image
            src="/assets/pasted-artwork-160.svg"
            alt=""
            width={54}
            height={49}
            className="svg-251"
          />
        </a>
      </section>
      <section data-inview className="el-1812">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1813">
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={58}
            height={58}
            className="svg-285"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-20">
          <Image
            src="/assets/pasted-artwork-160.svg"
            alt=""
            width={54}
            height={49}
            className="svg-286"
          />
        </a>
        <Image
          src="/assets/pasted-artwork-243.svg"
          alt=""
          width={375}
          height={347}
          className="svg-287"
        />
      </section>
    </>
  );
}
