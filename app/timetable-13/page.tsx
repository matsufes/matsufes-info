import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msmxmtrg5" />
      <section className="el-239">
        <div className="el-203">
          <div id="memu-p" data-toggle-show="flex" className="el-204">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-205">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-188"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-206">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-207">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-208">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-209">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-210">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-17">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-18">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-19">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-20">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-211">
              <Link href="/keyword" id="言葉-p" className="button-21">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-22">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-23">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-24">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-212">
              <Link href="/attention" id="ご来場の-p" className="button-25">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-26">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-27">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-28">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-213">
              <Link href="/committee" id="委員会企画-p" className="button-29">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-30">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-31">
                {"公式メンバー「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"scroll-to\",\"target\":\"matsufes\"}]}]"}
            src="/assets/image-4.svg"
            alt=""
            width={213}
            height={213}
            className="el-214"
          />
          <div className="el-215">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-216">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-189"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-217">
                <Link href="/about" className="el-218">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-2">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-219">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-220">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-221">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-190"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-222">
                <Link href="/keyword" className="el-223">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-224">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-225">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-226">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-227">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-191"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-228">
                <Link href="/attention" className="el-229">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-230">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-231">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-232">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-233">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-192"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-234">
                <Link href="/committee" className="el-235">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-4">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-236">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-237">
            <Image
              src="/assets/image.png"
              alt=""
              width={84}
              height={46}
              className="el-238"
            />
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-240"
        />
      </section>
      <p className="el-27">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="el-52"
        />
      </p>
      <section className="el-55">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="svg-85"
        />
      </section>
      <p className="box-189">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-74">
        <Image
          src="/assets/pasted-artwork-64.svg"
          alt=""
          width={430}
          height={64}
          className="svg-30"
        />
      </section>
      <section className="el-79">
        <div className="el-80">
          <Image
            src="/assets/pasted-artwork-65.svg"
            alt=""
            width={268}
            height={84}
            className="svg-32"
          />
        </div>
        <Link href="/timetable-14" className="el-81">
          <Image
            src="/assets/pasted-artwork-66.svg"
            alt=""
            width={268}
            height={84}
            className="svg-33"
          />
        </Link>
        <Link href="/timetable-15" className="el-82">
          <Image
            src="/assets/pasted-artwork-67.svg"
            alt=""
            width={268}
            height={84}
            className="svg-34"
          />
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
      <section className="el-28">
        <div className="box-192">
          <div id="main" data-toggle-show="flex" className="el-128">
            <Image
              src="/assets/pasted-artwork-147.svg"
              alt=""
              width={306}
              height={113}
              className="svg-129"
            />
            <Image
              src="/assets/pasted-artwork-148.svg"
              alt=""
              width={306}
              height={113}
              className="svg-186"
            />
            <Image
              src="/assets/pasted-artwork-149.svg"
              alt=""
              width={306}
              height={113}
              className="svg-130"
            />
            <Image
              src="/assets/pasted-artwork-150.svg"
              alt=""
              width={306}
              height={113}
              className="svg-131"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-119"
          />
          <Image
            src="/assets/pasted-artwork-243.svg"
            alt=""
            width={1670}
            height={3081}
            className="el-195"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-29"
      />
    </>
  );
}
