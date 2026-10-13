import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "タイムテーブル",
  description: "今回の松ヶ崎祭のタイムテーブルです。",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu98rd4648" />
      <section className="el-253">
        <div className="el-254">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-255">
            <span
              className="crisp-svg pasted-artwork-svg-43"
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
          <div id="memu-p" data-toggle-show="flex" className="el-256">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-257">
              <span
                className="crisp-svg svg-178"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-258">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-259">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-260">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-261">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-262">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-46">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-47">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-48">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-49">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-263">
              <Link href="/search" id="言葉-p" className="button-50">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-51">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-52">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-53">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-264">
              <Link href="/attention" id="ご来場の-p" className="button-54">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-55">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-56">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-57">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-265">
              <Link href="/committee" id="委員会企画-p" className="button-58">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-59">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-60">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-266"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-267">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-268">
              <span
                className="crisp-svg svg-179"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-269">
                <Link href="/about" className="el-270">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-4">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-271">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-272">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-273">
              <span
                className="crisp-svg svg-180"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-274">
                <Link href="/search" className="el-275">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-276">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-277">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-278">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-279">
              <span
                className="crisp-svg svg-181"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-280">
                <Link href="/attention" className="el-281">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-282">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-283">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-284">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-285">
              <span
                className="crisp-svg svg-182"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-286">
                <Link href="/committee" className="el-287">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-6">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-288">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-289"
        />
      </section>
      <p className="el-62">
        <span
          className="crisp-svg svg-26"
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
      <section className="el-63">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-11"
        />
      </section>
      <p className="box-189">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-64">
        <span
          className="crisp-svg svg-27"
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
      <section className="el-67">
        <Link href="/schedule/0" className="el-68">
          <span
            className="crisp-svg svg-37"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-70.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
        <Link href="/schedule" className="el-69">
          <span
            className="crisp-svg svg-28"
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
        <div className="el-70">
          <span
            className="crisp-svg svg-38"
          >
            <svg aria-hidden="true" width={268} height={84} viewBox="0 0 268 84" />
            <Image
              src="/assets/pasted-artwork-71.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </div>
      </section>
      <section className="select-3">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"committee15\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee15\"},{\"kind\":\"hide\",\"target\":\"main15\"},{\"kind\":\"hide\",\"target\":\"center15\"},{\"kind\":\"hide\",\"target\":\"street15\"}]}]}]"} className="select-4" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-65">
        <div className="box-186">
          <div id="main15" data-toggle-show="flex" className="el-107">
            <Image
              src="/assets/pasted-artwork-84.svg"
              alt=""
              width={306}
              height={113}
              className="svg-49"
            />
            <Image
              src="/assets/pasted-artwork-85.svg"
              alt=""
              width={306}
              height={224}
              className="svg-50"
            />
            <Image
              src="/assets/pasted-artwork-86.svg"
              alt=""
              width={306}
              height={299}
              className="svg-51"
            />
            <Image
              src="/assets/pasted-artwork-162.svg"
              alt=""
              width={306}
              height={113}
              className="svg-126"
            />
            <Image
              src="/assets/pasted-artwork-163.svg"
              alt=""
              width={306}
              height={113}
              className="svg-127"
            />
            <Image
              src="/assets/pasted-artwork-164.svg"
              alt=""
              width={306}
              height={113}
              className="svg-128"
            />
            <Image
              src="/assets/pasted-artwork-165.svg"
              alt=""
              width={306}
              height={113}
              className="svg-129"
            />
            <Image
              src="/assets/pasted-artwork-166.svg"
              alt=""
              width={306}
              height={113}
              className="svg-130"
            />
            <Image
              src="/assets/pasted-artwork-167.svg"
              alt=""
              width={306}
              height={113}
              className="svg-131"
            />
            <Image
              src="/assets/pasted-artwork-168.svg"
              alt=""
              width={306}
              height={113}
              className="svg-132"
            />
          </div>
          <div id="center15" data-toggle-show="flex" className="el-108">
            <Image
              src="/assets/pasted-artwork-78.svg"
              alt=""
              width={306}
              height={801}
              className="svg-43"
            />
          </div>
          <div id="street15" data-toggle-show="flex" className="el-109">
            <Image
              src="/assets/pasted-artwork-79.svg"
              alt=""
              width={306}
              height={113}
              className="svg-44"
            />
            <Image
              src="/assets/pasted-artwork-87.svg"
              alt=""
              width={306}
              height={113}
              className="svg-52"
            />
            <Image
              src="/assets/pasted-artwork-80.svg"
              alt=""
              width={306}
              height={113}
              className="svg-45"
            />
            <Image
              src="/assets/pasted-artwork-81.svg"
              alt=""
              width={306}
              height={202}
              className="svg-46"
            />
          </div>
          <div id="committee15" data-toggle-show="flex" className="el-83">
            <Image
              src="/assets/pasted-artwork-88.svg"
              alt=""
              width={306}
              height={212}
              className="image-6"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-103"
          />
          <span
            className="crisp-svg pc-2"
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
        className="el-66"
      />
    </>
  );
}
