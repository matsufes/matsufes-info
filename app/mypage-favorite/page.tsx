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
      <section className="el-738">
        <div className="el-739">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-740">
            <span
              className="crisp-svg pasted-artwork-svg-56"
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
          <div id="memu-p" data-toggle-show="flex" className="el-741">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-742">
              <span
                className="crisp-svg svg-245"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-743">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-744">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-745">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-746">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-747">
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
            <div id="kikaku-phone" data-toggle-show="flex" className="el-748">
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
            <div id="goannai-phone" data-toggle-show="flex" className="el-749">
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
            <div id="koushiki-phone" data-toggle-show="flex" className="el-750">
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
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-751"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-752">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-753">
              <span
                className="crisp-svg svg-246"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-754">
                <Link href="/about" className="el-755">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-17">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-756">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-757">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-758">
              <span
                className="crisp-svg svg-247"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-759">
                <Link href="/keyword" className="el-760">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-761">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-762">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-763">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-764">
              <span
                className="crisp-svg svg-248"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-765">
                <Link href="/attention" className="el-766">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-767">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-768">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-769">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-770">
              <span
                className="crisp-svg svg-249"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-771">
                <Link href="/committee" className="el-772">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-19">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-773">
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
          className="el-774"
        />
      </section>
      <p className="box-28">
        <span
          className="crisp-svg svg-19"
          style={{ aspectRatio: "644 / 96" }}
        >
          <Image
            src="/assets/pasted-artwork-56.svg"
            alt=""
            width={1288}
            height={192}
          />
        </span>
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
      <p className="box-179">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-31">
        <div className="box-39">
          <span
            className="crisp-svg svg-23"
            style={{ aspectRatio: "306 / 236" }}
          >
            <Image
              src="/assets/pasted-artwork-60.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
        </div>
        <div className="box-40">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage-m-1\"}]}]"}
            className="crisp-svg m-1-2"
            style={{ aspectRatio: "306 / 236" }}
          >
            <Image
              src="/assets/pasted-artwork-61.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
        </div>
      </section>
      <section className="box-30">
        <span
          className="crisp-svg svg-20"
          style={{ aspectRatio: "1420 / 70" }}
        >
          <Image
            src="/assets/pasted-artwork-57.svg"
            alt=""
            width={2840}
            height={140}
          />
        </span>
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
