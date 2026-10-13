import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6el0a87" />
      <section className="el-627">
        <div className="el-628">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-629">
            <span
              className="crisp-svg pasted-artwork-svg-53"
              style={{ aspectRatio: "230 / 142" }}
            >
              <Image
                src="/assets/pasted-artwork-248.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-630">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-631">
              <span
                className="crisp-svg svg-230"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-632">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-633">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-634">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-635">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-636">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-197">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-198">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-199">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-200">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-637">
              <Link href="/keyword" id="言葉-p" className="button-201">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-202">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-203">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-204">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-638">
              <Link href="/attention" id="ご来場の-p" className="button-205">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-206">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-207">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-208">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-639">
              <Link href="/committee" id="委員会企画-p" className="button-209">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-210">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-211">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-640"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-641">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-642">
              <span
                className="crisp-svg svg-231"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-643">
                <Link href="/about" className="el-644">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-14">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-645">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-646">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-647">
              <span
                className="crisp-svg svg-232"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-648">
                <Link href="/keyword" className="el-649">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-650">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-651">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-652">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-653">
              <span
                className="crisp-svg svg-233"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-654">
                <Link href="/attention" className="el-655">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-656">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-657">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-658">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-659">
              <span
                className="crisp-svg svg-234"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-660">
                <Link href="/committee" className="el-661">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-16">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-662">
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
          className="el-663"
        />
      </section>
      <p className="box-62">
        <span
          className="crisp-svg svg-66"
          style={{ aspectRatio: "917 / 87" }}
        >
          <Image
            src="/assets/pasted-artwork-103.svg"
            alt=""
            width={1834}
            height={174}
          />
        </span>
      </p>
      <section className="box-63">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-20"
        />
      </section>
      <section className="box-64">
        <Image
          src="/assets/pasted-artwork-106.svg"
          alt=""
          width={1383}
          height={304}
          className="svg-68"
        />
      </section>
      <section className="box-69">
        <span
          className="crisp-svg svg-94"
          style={{ aspectRatio: "541 / 114" }}
        >
          <Image
            src="/assets/pasted-artwork-131.svg"
            alt=""
            width={1082}
            height={228}
          />
        </span>
      </section>
      <section className="box-70">
        <div className="box-101">
          <Image
            src="/assets/image-2.svg"
            alt=""
            width={738}
            height={565}
            className="svg-95"
          />
        </div>
        <div className="box-102">
          <Image
            src="/assets/pasted-artwork-132.svg"
            alt=""
            width={523}
            height={66}
            className="svg-96"
          />
        </div>
      </section>
      <section className="box-103">
        <div className="box-104">
          <span
            className="crisp-svg svg-97"
            style={{ aspectRatio: "985 / 748" }}
          >
            <Image
              src="/assets/pasted-artwork-133.svg"
              alt=""
              width={1970}
              height={1496}
            />
          </span>
        </div>
        <div className="box-105">
          <span
            className="crisp-svg svg-98"
            style={{ aspectRatio: "944 / 816" }}
          >
            <Image
              src="/assets/pasted-artwork-134.svg"
              alt=""
              width={1888}
              height={1632}
            />
          </span>
        </div>
      </section>
      <section className="box-71">
        <Image
          src="/assets/pasted-artwork-107.svg"
          alt=""
          width={103}
          height={313}
          className="svg-69"
        />
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-11"
      />
    </>
  );
}
