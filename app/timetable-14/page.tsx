import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu98rc7s3u" />
      <section className="el-220">
        <div className="el-221">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-222">
            <span
              className="crisp-svg pasted-artwork-svg-42"
              style={{ aspectRatio: "230 / 142" }}
            >
              <Image
                src="/assets/pasted-artwork-247.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-223">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-224">
              <span
                className="crisp-svg svg-175"
                style={{ aspectRatio: "43 / 31" }}
              >
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-225">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-226">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-227">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-228">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-229">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-32">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-33">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-34">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-35">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-230">
              <Link href="/keyword" id="言葉-p" className="button-36">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-37">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-38">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-39">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-231">
              <Link href="/attention" id="ご来場の-p" className="button-40">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-41">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-42">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-43">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-232">
              <Link href="/committee" id="委員会企画-p" className="button-44">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-45">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-46">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-233"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-234">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-235">
              <span
                className="crisp-svg svg-176"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-236">
                <Link href="/about" className="el-237">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-3">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-238">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-239">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-240">
              <span
                className="crisp-svg svg-177"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-241">
                <Link href="/keyword" className="el-242">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-243">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-244">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-245">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-246">
              <span
                className="crisp-svg svg-178"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-247">
                <Link href="/attention" className="el-248">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-249">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-250">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-251">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-252">
              <span
                className="crisp-svg svg-179"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-253">
                <Link href="/committee" className="el-254">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-5">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-255">
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
          className="el-256"
        />
      </section>
      <p className="el-60">
        <span
          className="crisp-svg svg-25"
          style={{ aspectRatio: "719 / 157" }}
        >
          <Image
            src="/assets/pasted-artwork-30.svg"
            alt=""
            width={1438}
            height={314}
          />
        </span>
      </p>
      <section className="el-61">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-10"
        />
      </section>
      <p className="box-189">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-73">
        <span
          className="crisp-svg svg-29"
          style={{ aspectRatio: "430 / 64" }}
        >
          <Image
            src="/assets/pasted-artwork-64.svg"
            alt=""
            width={860}
            height={128}
          />
        </span>
      </section>
      <section className="el-75">
        <Link href="/timetable-13" className="el-76">
          <span
            className="crisp-svg svg-36"
            style={{ aspectRatio: "268 / 84" }}
          >
            <Image
              src="/assets/pasted-artwork-69.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
        <div className="el-77">
          <span
            className="crisp-svg svg-35"
            style={{ aspectRatio: "268 / 84" }}
          >
            <Image
              src="/assets/pasted-artwork-68.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </div>
        <Link href="/timetable-15" className="el-78">
          <span
            className="crisp-svg svg-31"
            style={{ aspectRatio: "268 / 84" }}
          >
            <Image
              src="/assets/pasted-artwork-67.svg"
              alt=""
              width={536}
              height={168}
            />
          </span>
        </Link>
      </section>
      <section className="select">
        <select id="choice" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"ストリートパフォーマンス\"},\"then\":[{\"kind\":\"show\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"メインステージ\"},\"then\":[{\"kind\":\"show\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"センターホール\"},\"then\":[{\"kind\":\"show\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"committee14\"}]},{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"choice\",\"op\":\"eq\",\"value\":\"委員会企画\"},\"then\":[{\"kind\":\"show\",\"target\":\"committee14\"},{\"kind\":\"hide\",\"target\":\"street14\"},{\"kind\":\"hide\",\"target\":\"center14\"},{\"kind\":\"hide\",\"target\":\"main14\"}]}]}]"} className="select-2" name="choice">
          <option>場所を選んでね。</option>
          <option>メインステージ</option>
          <option>センターホール</option>
          <option>ストリートパフォーマンス</option>
          <option>委員会企画</option>
        </select>
      </section>
      <section className="el-62">
        <div className="box-192">
          <div id="main14" data-toggle-show="flex" className="el-107">
            <Image
              src="/assets/pasted-artwork-82.svg"
              alt=""
              width={306}
              height={113}
              className="svg-47"
            />
            <Image
              src="/assets/pasted-artwork-83.svg"
              alt=""
              width={306}
              height={504}
              className="svg-48"
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
              src="/assets/pasted-artwork-158.svg"
              alt=""
              width={306}
              height={113}
              className="svg-123"
            />
            <Image
              src="/assets/pasted-artwork-159.svg"
              alt=""
              width={306}
              height={113}
              className="svg-124"
            />
            <Image
              src="/assets/pasted-artwork-160.svg"
              alt=""
              width={306}
              height={113}
              className="svg-125"
            />
            <Image
              src="/assets/pasted-artwork-161.svg"
              alt=""
              width={306}
              height={113}
              className="svg-126"
            />
          </div>
          <div id="center14" data-toggle-show="flex" className="el-84">
            <Image
              src="/assets/pasted-artwork-77.svg"
              alt=""
              width={306}
              height={153}
              className="svg-42"
            />
          </div>
          <div id="street14" data-toggle-show="flex" className="el-106">
            <Image
              src="/assets/pasted-artwork-72.svg"
              alt=""
              width={306}
              height={113}
              className="pasted-artwork-svg-8"
            />
            <Image
              src="/assets/pasted-artwork-74.svg"
              alt=""
              width={306}
              height={113}
              className="svg-39"
            />
            <Image
              src="/assets/pasted-artwork-75.svg"
              alt=""
              width={306}
              height={113}
              className="svg-40"
            />
            <Image
              src="/assets/pasted-artwork-76.svg"
              alt=""
              width={306}
              height={113}
              className="svg-41"
            />
            <Image
              src="/assets/pasted-artwork-198.svg"
              alt=""
              width={306}
              height={113}
              className="svg-150"
            />
            <Image
              src="/assets/pasted-artwork-199.svg"
              alt=""
              width={306}
              height={113}
              className="svg-151"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-108">
            <Image
              src="/assets/pasted-artwork-88.svg"
              alt=""
              width={306}
              height={212}
              className="pasted-artwork-svg-9"
            />
            <Image
              src="/assets/pasted-artwork-91.svg"
              alt=""
              width={153}
              height={212}
              className="svg-55"
            />
            <Image
              src="/assets/pasted-artwork-90.svg"
              alt=""
              width={153}
              height={212}
              className="svg-54"
            />
            <Image
              src="/assets/pasted-artwork-89.svg"
              alt=""
              width={306}
              height={212}
              className="svg-53"
            />
            <Image
              src="/assets/pasted-artwork-92.svg"
              alt=""
              width={153}
              height={594}
              className="svg-56"
            />
            <span
              className="crisp-svg svg-57"
              style={{ aspectRatio: "236 / 181" }}
            >
              <Image
                src="/assets/pasted-artwork-93.svg"
                alt=""
                width={472}
                height={362}
              />
            </span>
          </div>
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-104"
          />
          <span
            className="crisp-svg pc"
            style={{ aspectRatio: "1670 / 3081" }}
          >
            <Image
              src="/assets/pasted-artwork-243.svg"
              alt=""
              width={3340}
              height={6162}
            />
          </span>
        </div>
        <Image
          src="/assets/pasted-artwork-73.svg"
          alt=""
          width={1701}
          height={3102}
          className="el-83"
        />
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-63"
      />
    </>
  );
}
