import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu3wp199l" />
      <section className="el-742">
        <div className="el-743">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-744">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-56"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-745">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-746">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-247"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-747">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-748">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-749">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-750">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-751">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-242">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-243">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-244">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-245">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-752">
              <Link href="/keyword" id="言葉-p" className="button-246">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-247">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-248">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-249">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-753">
              <Link href="/attention" id="ご来場の-p" className="button-250">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-251">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-252">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-253">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-754">
              <Link href="/committee" id="委員会企画-p" className="button-254">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-255">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-256">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-755"
          />
          <div className="el-756">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-757">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-248"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-758">
                <Link href="/about" className="el-759">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-17">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-760">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-761">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-762">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-249"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-763">
                <Link href="/keyword" className="el-764">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-765">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-766">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-767">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-768">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-250"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-769">
                <Link href="/attention" className="el-770">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-771">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-772">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-773">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-774">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-251"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-775">
                <Link href="/committee" className="el-776">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-19">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-777">
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
          className="el-778"
        />
      </section>
      <p className="box-28">
        <Image
          src="/assets/pasted-artwork-56.svg"
          alt=""
          width={644}
          height={96}
          className="svg-19"
        />
      </p>
      <section className="box-29">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-23"
        />
      </section>
      <p className="box-180">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-31">
        <div className="box-39">
          <Image
            src="/assets/pasted-artwork-60.svg"
            alt=""
            width={306}
            height={236}
            className="svg-23"
          />
        </div>
        <div className="box-40">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage-m-1\"}]}]"}
            src="/assets/pasted-artwork-61.svg"
            alt=""
            width={306}
            height={236}
            className="m-1-2"
          />
        </div>
      </section>
      <section className="box-30">
        <Image
          src="/assets/pasted-artwork-57.svg"
          alt=""
          width={1420}
          height={70}
          className="svg-20"
        />
      </section>
      <section className="box-32" />
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-4"
      />
    </>
  );
}
