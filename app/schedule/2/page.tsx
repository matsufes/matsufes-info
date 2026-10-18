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
      <span hidden data-page-body="page_mu98rd4648" />
      <nav className="header-9">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-921"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-922">
          <span
            className="crisp-svg pasted-artwork-svg-62"
          >
            <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
            <Image
              src="/assets/pasted-artwork-223.svg"
              alt="メニューを開く"
              width={460}
              height={284}
            />
          </span>
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-923">
          <div className="box-529">
            <div className="el-924">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-925">
                <span
                  className="crisp-svg svg-236"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-160.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-37">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-926">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-927">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-204">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-205">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-206">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-207">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-928">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-929">
                <Link href="/search" id="言葉-p-2" className="button-208">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-209">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-210">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-211">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-930">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-931">
                <Link href="/attention" id="ご来場の-p-2" className="button-212">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-213">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-214">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-215">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-216">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-932">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-933">
                <Link href="/committee" id="委員会企画-p-2" className="button-217">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-218">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-219">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-934">
          <div className="container-38">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-935">
              <div className="el-936">
                <div className="box-530">
                  <p className="text-270">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-271">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-272">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-937" />
              <div id="div-34" data-toggle-show="flex" className="el-938">
                <div id="menu1-2" data-inview className="container-39">
                  <Link href="/about" className="el-939">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-940">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-941">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-942">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-943" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-944">
              <div className="el-945">
                <div className="box-531">
                  <p className="text-273">
                    {"さがし"}
                  </p>
                  <p className="text-274">
                    {"企画"}
                  </p>
                </div>
                <p className="text-275">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-946" />
              <div id="div-36" data-toggle-show="flex" className="el-947">
                <div id="menu1-4" data-inview className="container-40">
                  <Link href="/search" className="el-948">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-949">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-950">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-951">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-952" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-953">
              <div className="el-954">
                <p className="text-276">
                  {"ご"}
                </p>
                <div className="box-532">
                  <p className="text-277">
                    {"あんない"}
                  </p>
                  <p className="text-278">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-955" />
              <div id="div-39" data-toggle-show="flex" className="el-956">
                <div id="menu1-6" data-inview className="container-41">
                  <Link href="/attention" className="el-957">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-958">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-959">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-960">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-961">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-962" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-963">
              <div className="el-964">
                <div className="box-533">
                  <p className="text-279">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-280">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-965" />
              <div id="div-38" data-toggle-show="flex" className="el-966">
                <div id="menu1-8" data-inview className="container-42">
                  <Link href="/committee" className="el-967">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-968">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-969">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-970" />
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
        className="el-971"
      />
      <p className="el-39">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="svg-22"
        />
      </p>
      <section className="el-40">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-11"
        />
      </section>
      <p className="box-171">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-41">
        <Image
          src="/assets/pasted-artwork-56.svg"
          alt=""
          width={430}
          height={64}
          className="svg-23"
        />
      </section>
      <section className="el-44">
        <Link href="/schedule/0" className="el-45">
          <Image
            src="/assets/pasted-artwork-62.svg"
            alt=""
            width={268}
            height={84}
            className="svg-33"
          />
        </Link>
        <Link href="/schedule" className="el-46">
          <Image
            src="/assets/pasted-artwork-58.svg"
            alt=""
            width={268}
            height={84}
            className="svg-24"
          />
        </Link>
        <div className="el-47">
          <Image
            src="/assets/pasted-artwork-63.svg"
            alt=""
            width={268}
            height={84}
            className="svg-34"
          />
        </div>
      </section>
      <section className="select-3">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"}]}]}]"} className="select-4" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-42">
        <div className="box-168">
          <div id="main15" data-toggle-show="flex" className="el-81">
            <Image
              src="/assets/pasted-artwork-76.svg"
              alt=""
              width={306}
              height={113}
              className="svg-44"
            />
            <Image
              src="/assets/pasted-artwork-77.svg"
              alt=""
              width={306}
              height={224}
              className="svg-45"
            />
            <Image
              src="/assets/pasted-artwork-78.svg"
              alt=""
              width={306}
              height={299}
              className="svg-46"
            />
            <Image
              src="/assets/pasted-artwork-151.svg"
              alt=""
              width={306}
              height={113}
              className="svg-116"
            />
            <Image
              src="/assets/pasted-artwork-152.svg"
              alt=""
              width={306}
              height={113}
              className="svg-117"
            />
            <Image
              src="/assets/pasted-artwork-153.svg"
              alt=""
              width={306}
              height={113}
              className="svg-118"
            />
            <Image
              src="/assets/pasted-artwork-154.svg"
              alt=""
              width={306}
              height={113}
              className="svg-119"
            />
            <Image
              src="/assets/pasted-artwork-155.svg"
              alt=""
              width={306}
              height={113}
              className="svg-120"
            />
            <Image
              src="/assets/pasted-artwork-156.svg"
              alt=""
              width={306}
              height={113}
              className="svg-121"
            />
            <Image
              src="/assets/pasted-artwork-157.svg"
              alt=""
              width={306}
              height={113}
              className="svg-122"
            />
            <Image
              src="/assets/pasted-artwork-247.svg"
              alt=""
              width={175}
              height={63}
              className="svg-222"
            />
          </div>
          <div id="center15" data-toggle-show="flex" className="el-82">
            <Image
              src="/assets/pasted-artwork-70.svg"
              alt=""
              width={306}
              height={801}
              className="svg-38"
            />
          </div>
          <div id="street15" data-toggle-show="flex" className="el-83">
            <Image
              src="/assets/pasted-artwork-71.svg"
              alt=""
              width={306}
              height={113}
              className="svg-39"
            />
            <Image
              src="/assets/pasted-artwork-79.svg"
              alt=""
              width={306}
              height={113}
              className="svg-47"
            />
            <Image
              src="/assets/pasted-artwork-72.svg"
              alt=""
              width={306}
              height={113}
              className="svg-40"
            />
            <Image
              src="/assets/pasted-artwork-73.svg"
              alt=""
              width={306}
              height={202}
              className="svg-41"
            />
            <Image
              src="/assets/pasted-artwork-240.svg"
              alt=""
              width={306}
              height={113}
              className="svg-221"
            />
          </div>
          <div id="committee15" data-toggle-show="flex" className="el-60">
            <Image
              src="/assets/pasted-artwork-80.svg"
              alt=""
              width={306}
              height={212}
              className="image-6"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-105.svg"
            alt=""
            width={295}
            height={2502}
            className="el-77"
          />
          <span
            className="crisp-svg pc-2"
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-220.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="el-43"
      />
    </>
  );
}
