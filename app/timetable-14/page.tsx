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
      <section className="el-241">
        <div className="el-242">
          <div id="memu-p" data-toggle-show="flex" className="el-243">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-244">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-193"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-245">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-246">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-247">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-248">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-249">
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
            <div id="kikaku-phone" data-toggle-show="flex" className="el-250">
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
            <div id="goannai-phone" data-toggle-show="flex" className="el-251">
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
            <div id="koushiki-phone" data-toggle-show="flex" className="el-252">
              <Link href="/committee" id="委員会企画-p" className="button-44">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-45">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-46">
                {"公式メンバー「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"scroll-to\",\"target\":\"matsufes\"}]}]"}
            src="/assets/image-4.svg"
            alt=""
            width={213}
            height={213}
            className="el-253"
          />
          <div className="el-254">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-255">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-194"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-256">
                <Link href="/about" className="el-257">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-3">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-258">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-259">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-260">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-195"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-261">
                <Link href="/keyword" className="el-262">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-263">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-264">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-265">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-266">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-196"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-267">
                <Link href="/attention" className="el-268">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-269">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-270">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-271">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-272">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-197"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-273">
                <Link href="/committee" className="el-274">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-5">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-275">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-276">
            <Image
              src="/assets/image.png"
              alt=""
              width={84}
              height={46}
              className="el-277"
            />
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-278"
        />
      </section>
      <p className="el-60">
        <Image
          src="/assets/pasted-artwork-30.svg"
          alt=""
          width={719}
          height={157}
          className="svg-25"
        />
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
      <p className="box-190">
        {"1日の日程表を　見ることができるよ。\nメインステージでの催しや　音楽サークルの公演時間を　確認しよう。"}
      </p>
      <section className="el-73">
        <Image
          src="/assets/pasted-artwork-64.svg"
          alt=""
          width={430}
          height={64}
          className="svg-29"
        />
      </section>
      <section className="el-75">
        <Link href="/timetable-13" className="el-76">
          <Image
            src="/assets/pasted-artwork-69.svg"
            alt=""
            width={268}
            height={84}
            className="svg-36"
          />
        </Link>
        <div className="el-77">
          <Image
            src="/assets/pasted-artwork-68.svg"
            alt=""
            width={268}
            height={84}
            className="svg-35"
          />
        </div>
        <Link href="/timetable-15" className="el-78">
          <Image
            src="/assets/pasted-artwork-67.svg"
            alt=""
            width={268}
            height={84}
            className="svg-31"
          />
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
        <div className="box-193">
          <div id="main14" data-toggle-show="flex" className="el-123">
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
              className="svg-132"
            />
            <Image
              src="/assets/pasted-artwork-152.svg"
              alt=""
              width={306}
              height={113}
              className="svg-133"
            />
            <Image
              src="/assets/pasted-artwork-153.svg"
              alt=""
              width={306}
              height={113}
              className="svg-134"
            />
            <Image
              src="/assets/pasted-artwork-154.svg"
              alt=""
              width={306}
              height={113}
              className="svg-135"
            />
            <Image
              src="/assets/pasted-artwork-155.svg"
              alt=""
              width={306}
              height={113}
              className="svg-136"
            />
            <Image
              src="/assets/pasted-artwork-156.svg"
              alt=""
              width={306}
              height={113}
              className="svg-137"
            />
            <Image
              src="/assets/pasted-artwork-157.svg"
              alt=""
              width={306}
              height={113}
              className="svg-138"
            />
            <Image
              src="/assets/pasted-artwork-158.svg"
              alt=""
              width={306}
              height={113}
              className="svg-139"
            />
            <Image
              src="/assets/pasted-artwork-159.svg"
              alt=""
              width={306}
              height={113}
              className="svg-140"
            />
            <Image
              src="/assets/pasted-artwork-160.svg"
              alt=""
              width={306}
              height={113}
              className="svg-141"
            />
            <Image
              src="/assets/pasted-artwork-161.svg"
              alt=""
              width={306}
              height={113}
              className="svg-142"
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
          <div id="street14" data-toggle-show="flex" className="el-122">
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
              className="svg-167"
            />
            <Image
              src="/assets/pasted-artwork-199.svg"
              alt=""
              width={306}
              height={113}
              className="svg-168"
            />
          </div>
          <div id="committee14" data-toggle-show="flex" className="el-124">
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
            <Image
              src="/assets/pasted-artwork-93.svg"
              alt=""
              width={236}
              height={181}
              className="svg-57"
            />
          </div>
          <Image
            src="/assets/pasted-artwork-115.svg"
            alt=""
            width={295}
            height={2502}
            className="el-120"
          />
          <Image
            src="/assets/pasted-artwork-243.svg"
            alt=""
            width={1670}
            height={3081}
            className="pc"
          />
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
