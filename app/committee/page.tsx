import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu2t6c971l" />
      <section className="el-516">
        <div className="el-517">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-518">
            <span
              className="crisp-svg pasted-artwork-svg-50"
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
          <div id="memu-p" data-toggle-show="flex" className="el-519">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-520">
              <span
                className="crisp-svg svg-215"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-521">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-522">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-523">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-524">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-525">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-152">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-153">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-154">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-155">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-526">
              <Link href="/keyword" id="言葉-p" className="button-156">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-157">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-158">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-159">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-527">
              <Link href="/attention" id="ご来場の-p" className="button-160">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-161">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-162">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-163">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-528">
              <Link href="/committee" id="委員会企画-p" className="button-164">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-165">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-166">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-529"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-530">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-531">
              <span
                className="crisp-svg svg-216"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-532">
                <Link href="/about" className="el-533">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-11">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-534">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-535">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-536">
              <span
                className="crisp-svg svg-217"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-537">
                <Link href="/keyword" className="el-538">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-539">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-540">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-541">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-542">
              <span
                className="crisp-svg svg-218"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-543">
                <Link href="/attention" className="el-544">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-545">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-546">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-547">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-548">
              <span
                className="crisp-svg svg-219"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-549">
                <Link href="/committee" className="el-550">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-13">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-551">
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
          className="el-552"
        />
      </section>
      <p className="box-21">
        <span
          className="crisp-svg svg-18"
          style={{ aspectRatio: "562 / 167" }}
        >
          <Image
            src="/assets/pasted-artwork-48.svg"
            alt=""
            width={1124}
            height={334}
          />
        </span>
      </p>
      <section className="box-22">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-16"
        />
      </section>
      <p className="box-212">
        {"みんなが松ヶ崎祭を　もっと楽しめるように　企画をいっぱい　用意したよ。\n\n\n今日しかできない　特別な体験を　お届けするね。"}
      </p>
      <section className="box-23">
        <span
          className="crisp-svg svg-167"
          style={{ aspectRatio: "1704 / 1931" }}
        >
          <Image
            src="/assets/pasted-artwork-244.svg"
            alt=""
            width={3408}
            height={3862}
          />
        </span>
      </section>
      <section className="box-182">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://livepocket.jp/e/i1x36\"}]}]"}
          className="crisp-svg el-173"
          style={{ aspectRatio: "380 / 176" }}
        >
          <Image
            src="/assets/pasted-artwork-241.svg"
            alt=""
            width={760}
            height={352}
          />
        </span>
      </section>
      <section className="box-197">
        <div className="box-198">
          <span
            className="crisp-svg svg-260"
            style={{ aspectRatio: "563 / 675" }}
          >
            <Image
              src="/assets/pasted-artwork-251.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="box-199">
          <span
            className="crisp-svg svg-261"
            style={{ aspectRatio: "563 / 675" }}
          >
            <Image
              src="/assets/pasted-artwork-252.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-200">
        <div className="box-201">
          <span
            className="crisp-svg svg-262"
            style={{ aspectRatio: "563 / 675" }}
          >
            <Image
              src="/assets/pasted-artwork-254.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="box-202">
          <span
            className="crisp-svg svg-263"
            style={{ aspectRatio: "563 / 675" }}
          >
            <Image
              src="/assets/pasted-artwork-255.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-203">
        <div className="box-204">
          <span
            className="crisp-svg svg-264"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-256.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="box-205">
          <span
            className="crisp-svg svg-265"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-257.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-206">
        <div className="box-207">
          <span
            className="crisp-svg svg-266"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-259.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="box-208">
          <span
            className="crisp-svg svg-267"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-260.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-209">
        <div className="box-210">
          <span
            className="crisp-svg svg-268"
            style={{ aspectRatio: "563 / 443" }}
          >
            <Image
              src="/assets/pasted-artwork-261.svg"
              alt=""
              width={1126}
              height={886}
            />
          </span>
        </div>
        <div className="box-211">
          <span
            className="crisp-svg svg-269"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-262.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-3"
      />
    </>
  );
}
