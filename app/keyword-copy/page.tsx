import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muzoss702k" />
      <section className="el-331">
        <div className="el-332">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-333">
            <span
              className="crisp-svg pasted-artwork-svg-45"
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
          <div id="memu-p" data-toggle-show="flex" className="el-334">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-335">
              <span
                className="crisp-svg svg-190"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-336">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-337">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-338">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-339">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-340">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-77">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-78">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-79">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-80">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-341">
              <Link href="/keyword" id="言葉-p" className="button-81">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-82">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-83">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-84">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-342">
              <Link href="/attention" id="ご来場の-p" className="button-85">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-86">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-87">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-88">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-343">
              <Link href="/committee" id="委員会企画-p" className="button-89">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-90">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-91">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-344"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-345">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-346">
              <span
                className="crisp-svg svg-191"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-347">
                <Link href="/about" className="el-348">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-6">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-349">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-350">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-351">
              <span
                className="crisp-svg svg-192"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-352">
                <Link href="/keyword" className="el-353">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-354">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-355">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-356">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-357">
              <span
                className="crisp-svg svg-193"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-358">
                <Link href="/attention" className="el-359">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-360">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-361">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-362">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-363">
              <span
                className="crisp-svg svg-194"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-364">
                <Link href="/committee" className="el-365">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-8">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-366">
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
          className="el-367"
        />
      </section>
      <p className="el-154">
        {"出展名"}
      </p>
      <section className="el-155">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-36"
        />
      </section>
      <p className="el-156">
        {"出展者名"}
      </p>
      <section className="box-162">
        <div className="el-160">
          <span
            className="crisp-svg pasted-artwork-svg-37"
            style={{ aspectRatio: "439 / 96" }}
          >
            <Image
              src="/assets/pasted-artwork-229.svg"
              alt=""
              width={878}
              height={192}
            />
          </span>
          <p className="box-164">
            {"ああああああああああああちゅ〜"}
          </p>
        </div>
        <div className="icon-2">
          <span
            className="crisp-svg pasted-artwork-svg-38"
            style={{ aspectRatio: "351 / 351" }}
          >
            <Image
              src="/assets/pasted-artwork-228.svg"
              alt=""
              width={702}
              height={702}
            />
          </span>
          <Image
            src="/assets/pasted-artwork-232.svg"
            alt=""
            width={278}
            height={278}
            className="svg-161"
          />
        </div>
        <div className="el-161">
          <span
            className="crisp-svg svg-160"
            style={{ aspectRatio: "726 / 181" }}
          >
            <Image
              src="/assets/pasted-artwork-230.svg"
              alt=""
              width={1452}
              height={362}
            />
          </span>
        </div>
        <Image
          src="/assets/pasted-artwork-2.svg"
          alt=""
          width={150}
          height={150}
          className="el-157"
        />
        <Image
          src="/assets/pasted-artwork-3.svg"
          alt=""
          width={158}
          height={150}
          className="el-158"
        />
        <p className="el-162">
          {"11/14(土)10:00~20:30　11/15(日)10:00~16:00"}
        </p>
        <p className="el-163">
          {"1のA"}
        </p>
        <span
          className="crisp-svg el-164"
          style={{ aspectRatio: "198 / 54" }}
        >
          <Image
            src="/assets/pasted-artwork-231.svg"
            alt=""
            width={396}
            height={108}
          />
        </span>
      </section>
      <section className="box-163">
        <p className="m-1-3">
          {"m-1カテゴリ"}
        </p>
        <p className="el-165">
          {"大分類"}
        </p>
        <p className="el-166">
          {"中分類"}
        </p>
        <div className="el-169">
          <Image
            src="/assets/pasted-artwork-237.svg"
            alt=""
            width={209}
            height={204}
            className="svg-163"
          />
        </div>
        <div className="el-170">
          <Image
            src="/assets/pasted-artwork-236.svg"
            alt=""
            width={162}
            height={237}
            className="svg-162"
          />
        </div>
        <p className="box-168">
          {"お気に入り"}
        </p>
        <p className="box-169">
          {"m-1グランプリに\n投票する"}
        </p>
      </section>
      <section className="el-172">
        <div className="box-171" />
        <p className="box-172">
          {"紹介文あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"}
        </p>
      </section>
      <section className="box-173">
        <Image
          src="/assets/pasted-artwork-235.svg"
          alt=""
          width={40}
          height={37}
          className="x-2"
        />
        <Image
          src="/assets/pasted-artwork-234.svg"
          alt=""
          width={44}
          height={44}
          className="el-168"
        />
        <Image
          src="/assets/pasted-artwork-233.svg"
          alt=""
          width={50}
          height={51}
          className="el-167"
        />
      </section>
      <section className="box-170">
        <span
          className="crisp-svg el-171"
          style={{ aspectRatio: "198 / 54" }}
        >
          <Image
            src="/assets/pasted-artwork-238.svg"
            alt=""
            width={396}
            height={108}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-159"
      />
    </>
  );
}
