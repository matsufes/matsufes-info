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
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-866"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-867">
          <span
            className="crisp-svg pasted-artwork-svg-61"
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
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-868">
          <div className="box-524">
            <div className="el-869">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-870">
                <span
                  className="crisp-svg svg-235"
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
            <div className="container-31">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-871">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-872">
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
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-873">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-874">
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
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-875">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-876">
                <Link href="/attention" id="ご来場の-p-2" className="button-196">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-197">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-198">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-199">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-200">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-877">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-878">
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
        <div className="el-879">
          <div className="container-32">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-880">
              <div className="el-881">
                <div className="box-525">
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
              <div id="div-33" data-toggle-show="flex" data-inview className="el-882" />
              <div id="div-34" data-toggle-show="flex" className="el-883">
                <div id="menu1-2" data-inview className="container-33">
                  <Link href="/about" className="el-884">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-885">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-886">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-887">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-888" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-889">
              <div className="el-890">
                <div className="box-526">
                  <p className="text-262">
                    {"さがし"}
                  </p>
                  <p className="text-263">
                    {"企画"}
                  </p>
                </div>
                <p className="text-264">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-891" />
              <div id="div-36" data-toggle-show="flex" className="el-892">
                <div id="menu1-4" data-inview className="container-34">
                  <Link href="/search" className="el-893">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-894">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-895">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-896">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-897" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-898">
              <div className="el-899">
                <p className="text-265">
                  {"ご"}
                </p>
                <div className="box-527">
                  <p className="text-266">
                    {"あんない"}
                  </p>
                  <p className="text-267">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-900" />
              <div id="div-39" data-toggle-show="flex" className="el-901">
                <div id="menu1-6" data-inview className="container-35">
                  <Link href="/attention" className="el-902">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-903">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-904">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-905">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-906">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-907" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-908">
              <div className="el-909">
                <div className="box-528">
                  <p className="text-268">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-269">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-910" />
              <div id="div-38" data-toggle-show="flex" className="el-911">
                <div id="menu1-8" data-inview className="container-36">
                  <Link href="/committee" className="el-912">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-913">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-914">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-915" />
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
        className="el-916"
      />
      <p className="el-33">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="svg-21"
        />
      </p>
      <section className="el-34">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-10"
        />
      </section>
      <p className="box-170">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-44">
        <Image
          src="/assets/pasted-artwork-56.svg"
          alt=""
          width={430}
          height={64}
          className="svg-25"
        />
      </section>
      <section className="el-46">
        <Link href="/schedule/0" className="el-47">
          <Image
            src="/assets/pasted-artwork-61.svg"
            alt=""
            width={268}
            height={84}
            className="svg-32"
          />
        </Link>
        <div className="el-48">
          <Image
            src="/assets/pasted-artwork-60.svg"
            alt=""
            width={268}
            height={84}
            className="svg-31"
          />
        </div>
        <Link href="/schedule/2" className="el-49">
          <Image
            src="/assets/pasted-artwork-59.svg"
            alt=""
            width={268}
            height={84}
            className="svg-27"
          />
        </Link>
      </section>
      <section className="select">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"}]}]}]"} className="select-2" name="choice">
          <option>{"場所を選んでね。"}</option>
          <option>{"メインステージ"}</option>
          <option>{"センターホール"}</option>
          <option>{"ストリートパフォーマンス"}</option>
          <option>{"委員会企画"}</option>
        </select>
      </section>
      <section className="el-35">
        <div className="box-173">
          <div id="main14" data-toggle-show="flex" className="el-75">
            <Image
              src="/assets/pasted-artwork-74.svg"
              alt=""
              width={306}
              height={113}
              className="svg-42"
            />
            <Image
              src="/assets/pasted-artwork-75.svg"
              alt=""
              width={306}
              height={504}
              className="svg-43"
            />
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={306}
              height={113}
              className="svg-105"
            />
            <Image
              src="/assets/pasted-artwork-141.svg"
              alt=""
              width={306}
              height={113}
              className="svg-106"
            />
            <Image
              src="/assets/pasted-artwork-142.svg"
              alt=""
              width={306}
              height={113}
              className="svg-107"
            />
            <Image
              src="/assets/pasted-artwork-143.svg"
              alt=""
              width={306}
              height={113}
              className="svg-108"
            />
            <Image
              src="/assets/pasted-artwork-144.svg"
              alt=""
              width={306}
              height={113}
              className="svg-109"
            />
            <Image
              src="/assets/pasted-artwork-145.svg"
              alt=""
              width={306}
              height={113}
              className="svg-110"
            />
            <Image
              src="/assets/pasted-artwork-146.svg"
              alt=""
              width={306}
              height={113}
              className="svg-111"
            />
            <Image
              src="/assets/pasted-artwork-147.svg"
              alt=""
              width={306}
              height={113}
              className="svg-112"
            />
            <Image
              src="/assets/pasted-artwork-148.svg"
              alt=""
              width={306}
              height={113}
              className="svg-113"
            />
            <Image
              src="/assets/pasted-artwork-149.svg"
              alt=""
              width={306}
              height={113}
              className="svg-114"
            />
            <Image
              src="/assets/pasted-artwork-150.svg"
              alt=""
              width={306}
              height={113}
              className="svg-115"
            />
          </div>
          <div id="center14" data-toggle-show="flex" className="el-55">
            <Image
              src="/assets/pasted-artwork-69.svg"
              alt=""
              width={306}
              height={153}
              className="svg-37"
            />
          </div>
          <div id="street14" data-toggle-show="flex" className="el-74">
            <Image
              src="/assets/pasted-artwork-64.svg"
              alt=""
              width={306}
              height={113}
              className="pasted-artwork-svg-8"
            />
            <Image
              src="/assets/pasted-artwork-66.svg"
              alt=""
              width={306}
              height={113}
              className="svg-35"
            />
            <Image
              src="/assets/pasted-artwork-68.svg"
              alt=""
              width={306}
              height={113}
              className="svg-36"
            />
            <Image
              src="/assets/pasted-artwork-182.svg"
              alt=""
              width={306}
              height={113}
              className="svg-135"
            />
            <Image
              src="/assets/pasted-artwork-183.svg"
              alt=""
              width={306}
              height={113}
              className="svg-136"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-76">
            <Image
              src="/assets/pasted-artwork-80.svg"
              alt=""
              width={306}
              height={212}
              className="pasted-artwork-svg-9"
            />
            <Image
              src="/assets/pasted-artwork-83.svg"
              alt=""
              width={153}
              height={212}
              className="svg-50"
            />
            <Image
              src="/assets/pasted-artwork-82.svg"
              alt=""
              width={153}
              height={212}
              className="svg-49"
            />
            <Image
              src="/assets/pasted-artwork-81.svg"
              alt=""
              width={306}
              height={212}
              className="svg-48"
            />
            <Image
              src="/assets/pasted-artwork-84.svg"
              alt=""
              width={153}
              height={594}
              className="svg-51"
            />
            <span
              className="crisp-svg svg-52"
            >
              <svg aria-hidden="true" width={236} height={181} viewBox="0 0 236 181" />
              <Image
                src="/assets/pasted-artwork-85.svg"
                alt=""
                width={472}
                height={362}
              />
            </span>
          </div>
          <Image
            src="/assets/pasted-artwork-105.svg"
            alt=""
            width={295}
            height={2502}
            className="el-72"
          />
          <span
            className="crisp-svg pc"
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
        <Image
          src="/assets/pasted-artwork-65.svg"
          alt=""
          width={1701}
          height={3102}
          className="el-54"
        />
      </section>
      <section data-inview className="footer-4">
        <span
          className="crisp-svg pasted-artwork-svg-79"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1733">
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={58}
            height={58}
            className="svg-254"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-7">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={54}
            height={49}
            className="svg-255"
          />
        </a>
      </section>
    </>
  );
}
