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
      <section className="el-405">
        <div className="el-407">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-408">
            <span
              className="crisp-svg pasted-artwork-svg-52"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-223.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-409">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-410">
              <span
                className="crisp-svg svg-214"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-160.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-411">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-412">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-413">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-414">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-415">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-108">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-109">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-110">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-111">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-416">
              <Link href="/search" id="言葉-p" className="button-112">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-113">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-114">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-115">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-417">
              <Link href="/attention" id="ご来場の-p" className="button-116">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-117">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-118">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-119">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-120">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-418">
              <Link href="/committee" id="委員会企画-p" className="button-121">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-122">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-123">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-419"
          />
          <div className="el-420">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-421" data-p="">
              <span
                className="crisp-svg svg-215"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-422">
                <Link href="/about" className="el-423">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-8">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-424">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-425">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-426" data-p="">
              <span
                className="crisp-svg svg-216"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-427">
                <Link href="/search" className="el-428">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-429">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-430">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-431">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-432" data-p="">
              <span
                className="crisp-svg svg-217"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-433">
                <Link href="/attention" className="el-434">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-435">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-436">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-437">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-438">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-439" data-p="">
              <span
                className="crisp-svg svg-218"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-440">
                <Link href="/committee" className="el-441">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-11">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-442">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-406"
        />
      </section>
      <p className="el-25">
        <span
          className="crisp-svg el-50"
        >
          <svg aria-hidden="true" width={719} height={157} viewBox="0 0 719 157" />
          <Image
            src="/assets/pasted-artwork-30.svg"
            alt=""
            width={1438}
            height={314}
          />
        </span>
      </p>
      <section className="el-53">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-68"
        />
      </section>
      <p className="box-169">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-72">
        <span
          className="crisp-svg svg-30"
        >
          <svg aria-hidden="true" width={430} height={64} viewBox="0 0 430 64" />
          <Image
            src="/assets/pasted-artwork-56.svg"
            alt=""
            width={860}
            height={128}
          />
        </span>
      </section>
      <section className="el-77">
        <div className="el-78">
          <span
            className="crisp-svg svg-32"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-57.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </div>
        <Link href="/schedule" className="el-79">
          <span
            className="crisp-svg svg-33"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-58.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
        <Link href="/schedule/2" className="el-80">
          <span
            className="crisp-svg svg-34"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-59.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
      </section>
      <section className="select-5">
        <select id="choice" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-6" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-26">
        <div className="box-172">
          <div id="main" data-toggle-show="flex" className="el-107">
            <Image
              src="/assets/pasted-artwork-136.svg"
              alt=""
              width={306}
              height={113}
              className="svg-106"
            />
            <Image
              src="/assets/pasted-artwork-137.svg"
              alt=""
              width={306}
              height={113}
              className="svg-155"
            />
            <Image
              src="/assets/pasted-artwork-138.svg"
              alt=""
              width={306}
              height={113}
              className="svg-107"
            />
            <Image
              src="/assets/pasted-artwork-139.svg"
              alt=""
              width={306}
              height={113}
              className="svg-108"
            />
            <Image
              src="/assets/pasted-artwork-246.svg"
              alt=""
              width={175}
              height={63}
              className="pasted-artwork-svg-76"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-1445">
            <Image
              src="/assets/pasted-artwork-257.svg"
              alt=""
              width={306}
              height={537}
              className="svg-323"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-105.svg"
            alt=""
            width={295}
            height={2502}
            className="el-98"
          />
          <span
            className="crisp-svg el-166"
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
        className="el-27"
      />
    </>
  );
}
