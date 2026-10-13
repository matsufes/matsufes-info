import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "委員会企画",
  description: "松ヶ崎祭実行委員会が企画するイベントの紹介です。",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu2t6c971l" />
      <section className="el-512">
        <div className="el-513">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-514">
            <span
              className="crisp-svg pasted-artwork-svg-50"
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
          <div id="memu-p" data-toggle-show="flex" className="el-515">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-516">
              <span
                className="crisp-svg svg-213"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-517">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-518">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-519">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-520">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-521">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-151">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-152">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-153">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-154">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-522">
              <Link href="/search" id="言葉-p" className="button-155">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-156">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-157">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-158">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-523">
              <Link href="/attention" id="ご来場の-p" className="button-159">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-160">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-161">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-162">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-524">
              <Link href="/committee" id="委員会企画-p" className="button-163">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-164">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-165">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-525"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-526">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-527">
              <span
                className="crisp-svg svg-214"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-528">
                <Link href="/about" className="el-529">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-11">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-530">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-531">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-532">
              <span
                className="crisp-svg svg-215"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-533">
                <Link href="/search" className="el-534">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-535">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-536">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-537">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-538">
              <span
                className="crisp-svg svg-216"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-539">
                <Link href="/attention" className="el-540">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-541">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-542">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-543">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-544">
              <span
                className="crisp-svg svg-217"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-545">
                <Link href="/committee" className="el-546">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-13">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-547">
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
          className="el-548"
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
      <p className="box-256">
        {"みんなが松ヶ崎祭を　もっと楽しめるように　企画をいっぱい　用意したよ。\nここでしかできない　特別な体験を　お届けするね。"}
      </p>
      <section className="box-23">
        <span
          className="crisp-svg svg-165"
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
      <section className="box-181">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://livepocket.jp/e/i1x36\"}]}]"}
          className="crisp-svg el-169"
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
      <section className="box-196">
        <div className="box-197">
          <span
            className="crisp-svg svg-258"
            style={{ aspectRatio: "563 / 675" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="box-198">
          <span
            className="crisp-svg svg-259"
            style={{ aspectRatio: "563 / 675" }}
          >
            <Image
              src="/assets/pasted-artwork-250.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-199">
        <div className="box-200">
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
        <div className="box-201">
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
      <section className="box-202">
        <div className="box-203">
          <span
            className="crisp-svg svg-262"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-253.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="box-204">
          <span
            className="crisp-svg svg-263"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-254.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-205">
        <div className="box-206">
          <span
            className="crisp-svg svg-264"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-255.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="box-207">
          <span
            className="crisp-svg svg-265"
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
      </section>
      <section className="box-208">
        <div className="box-209">
          <span
            className="crisp-svg svg-266"
            style={{ aspectRatio: "563 / 443" }}
          >
            <Image
              src="/assets/pasted-artwork-257.svg"
              alt=""
              width={1126}
              height={886}
            />
          </span>
        </div>
        <div className="box-210">
          <span
            className="crisp-svg svg-267"
            style={{ aspectRatio: "563 / 426" }}
          >
            <Image
              src="/assets/pasted-artwork-258.svg"
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
