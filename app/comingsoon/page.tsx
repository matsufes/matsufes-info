import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muhpllld2i" />
      <section className="el-816">
        <div className="el-817">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-818">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-58"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-819">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-820">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-257"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-821">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-822">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-823">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-824">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-825">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-272">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-273">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-274">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-275">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-826">
              <Link href="/keyword" id="言葉-p" className="button-276">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-277">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-278">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-279">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-827">
              <Link href="/attention" id="ご来場の-p" className="button-280">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-281">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-282">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-283">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-828">
              <Link href="/committee" id="委員会企画-p" className="button-284">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-285">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-286">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-829"
          />
          <div className="el-830">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-831">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-258"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-832">
                <Link href="/about" className="el-833">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-19">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-834">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-835">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-836">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-259"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-837">
                <Link href="/keyword" className="el-838">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-839">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-840">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-841">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-842">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-260"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-843">
                <Link href="/attention" className="el-844">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-845">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-846">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-847">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-848">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-261"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-849">
                <Link href="/committee" className="el-850">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-21">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-851">
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
          className="el-852"
        />
      </section>
      <section className="box-75">
        <Image
          src="/assets/pasted-artwork-135.svg"
          alt=""
          width={1113}
          height={135}
          className="svg-99"
        />
        <p className="box-106">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={371}
            height={38}
            className="svg-100"
          />
        </p>
        <div className="box-107">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={400}
            height={400}
            className="svg-101"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-15"
      />
    </>
  );
}
