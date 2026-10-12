import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu98rd4648" />
      <section className="el-279">
        <div className="el-280">
          <div id="memu-p" data-toggle-show="flex" className="el-281">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-282">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-198"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-283">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-284">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-285">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-286">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-287">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-47">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-48">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-49">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-50">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-288">
              <Link href="/keyword" id="言葉-p" className="button-51">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-52">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-53">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-54">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-289">
              <Link href="/attention" id="ご来場の-p" className="button-55">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-56">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-57">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-58">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-290">
              <Link href="/committee" id="委員会企画-p" className="button-59">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-60">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-61">
                {"公式メンバー「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"scroll-to\",\"target\":\"matsufes\"}]}]"}
            src="/assets/image-4.svg"
            alt=""
            width={213}
            height={213}
            className="el-291"
          />
          <div className="el-292">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-293">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-199"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-294">
                <Link href="/about" className="el-295">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-4">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-296">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-297">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-298">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-200"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-299">
                <Link href="/keyword" className="el-300">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-301">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-302">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-303">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-304">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-201"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-305">
                <Link href="/attention" className="el-306">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-307">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-308">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-309">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-310">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-202"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-311">
                <Link href="/committee" className="el-312">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-6">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-313">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-314">
            <Image
              src="/assets/image.png"
              alt=""
              width={84}
              height={46}
              className="el-315"
            />
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-316"
        />
      </section>
      <section data-inview className="el-90">
        <Image
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="svg-71"
        />
      </section>
      <p className="el-64">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="svg-26"
        />
      </p>
      <section className="el-65">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-11"
        />
      </section>
      <p className="box-191">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-66">
        <Image
          src="/assets/pasted-artwork-64.svg"
          alt=""
          width={430}
          height={64}
          className="svg-27"
        />
      </section>
      <section className="el-69">
        <Link href="/timetable-13" className="el-70">
          <Image
            src="/assets/pasted-artwork-70.svg"
            alt=""
            width={268}
            height={84}
            className="svg-37"
          />
        </Link>
        <Link href="/timetable-14" className="el-71">
          <Image
            src="/assets/pasted-artwork-66.svg"
            alt=""
            width={268}
            height={84}
            className="svg-28"
          />
        </Link>
        <div className="el-72">
          <Image
            src="/assets/pasted-artwork-71.svg"
            alt=""
            width={268}
            height={84}
            className="svg-38"
          />
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
      <section className="el-67">
        <div className="box-188">
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-121"
          />
          <Image
            src="/assets/pasted-artwork-243.svg"
            alt=""
            width={1670}
            height={3081}
            className="pc-2"
          />
        </div>
        <div id="main15" data-toggle-show="flex" className="el-125">
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
            className="svg-143"
          />
          <Image
            src="/assets/pasted-artwork-163.svg"
            alt=""
            width={306}
            height={113}
            className="svg-144"
          />
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={306}
            height={113}
            className="svg-145"
          />
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={306}
            height={113}
            className="svg-146"
          />
          <Image
            src="/assets/pasted-artwork-166.svg"
            alt=""
            width={306}
            height={113}
            className="svg-147"
          />
          <Image
            src="/assets/pasted-artwork-167.svg"
            alt=""
            width={306}
            height={113}
            className="svg-148"
          />
          <Image
            src="/assets/pasted-artwork-168.svg"
            alt=""
            width={306}
            height={113}
            className="svg-149"
          />
        </div>
        <div id="center15" data-toggle-show="flex" className="el-126">
          <Image
            src="/assets/pasted-artwork-78.svg"
            alt=""
            width={306}
            height={801}
            className="svg-43"
          />
        </div>
        <div id="street15" data-toggle-show="flex" className="el-127">
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
        <div id="committee15" data-toggle-show="flex" className="el-85">
          <Image
            src="/assets/pasted-artwork-88.svg"
            alt=""
            width={306}
            height={212}
            className="image-6"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-68"
      />
    </>
  );
}
