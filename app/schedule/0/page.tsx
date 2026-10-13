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
      <section className="el-178">
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-179"
        />
        <div className="el-181">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-182">
            <span
              className="crisp-svg pasted-artwork-svg-41"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-247.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-183">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-184">
              <span
                className="crisp-svg svg-169"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-185">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-186">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-187">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-188">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-189">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-16">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-17">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-18">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-19">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-190">
              <Link href="/search" id="言葉-p" className="button-20">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-21">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-22">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-23">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-191">
              <Link href="/attention" id="ご来場の-p" className="button-24">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-25">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-26">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-27">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-192">
              <Link href="/committee" id="委員会企画-p" className="button-28">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-29">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-30">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-193"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-194">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-195">
              <span
                className="crisp-svg svg-170"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-196">
                <Link href="/about" className="el-197">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-2">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-198">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-199">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-200">
              <span
                className="crisp-svg svg-171"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-201">
                <Link href="/search" className="el-202">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-203">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-204">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-205">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-206">
              <span
                className="crisp-svg svg-172"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-207">
                <Link href="/attention" className="el-208">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-209">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-210">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-211">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-212">
              <span
                className="crisp-svg svg-173"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-213">
                <Link href="/committee" className="el-214">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-4">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-215">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
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
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-71"
        />
      </section>
      <p className="box-187">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-72">
        <span
          className="crisp-svg svg-30"
        >
          <svg aria-hidden="true" width={430} height={64} viewBox="0 0 430 64" />
          <Image
            src="/assets/pasted-artwork-64.svg"
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
              src="/assets/pasted-artwork-65.svg"
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
              src="/assets/pasted-artwork-66.svg"
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
              src="/assets/pasted-artwork-67.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
      </section>
      <section className="select-5">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"hide\",\"target\":\"main\"}]}]}]"} className="select-6" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-26">
        <div className="box-190">
          <div id="main" data-toggle-show="flex" className="el-110">
            <Image
              src="/assets/pasted-artwork-147.svg"
              alt=""
              width={306}
              height={113}
              className="svg-113"
            />
            <Image
              src="/assets/pasted-artwork-148.svg"
              alt=""
              width={306}
              height={113}
              className="svg-167"
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
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-101"
          />
          <span
            className="crisp-svg el-171"
          >
            <svg aria-hidden="true" width={1670} height={3081} viewBox="0 0 1670 3081" />
            <Image
              src="/assets/pasted-artwork-243.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-27"
      />
    </>
  );
}
