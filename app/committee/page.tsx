import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "委員会企画",
  description: "松ヶ崎祭実行委員会が企画するイベントの紹介です。",
  openGraph: {
    title: "委員会企画",
    description: "松ヶ崎祭実行委員会が企画するイベントの紹介です。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu2t6c971l" />
      <section className="el-709">
        <div className="el-710">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-711">
            <span
              className="crisp-svg pasted-artwork-svg-60"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-223.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-712">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-713">
              <span
                className="crisp-svg svg-254"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-160.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-714">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-715">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-716">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-717">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-718">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-236">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-237">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-238">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-239">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-719">
              <Link href="/search" id="言葉-p" className="button-240">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-241">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-242">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-243">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-720">
              <Link href="/attention" id="ご来場の-p" className="button-244">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-245">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-246">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-247">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-248">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-721">
              <Link href="/committee" id="委員会企画-p" className="button-249">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-250">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-251">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-722"
          />
          <div className="el-723">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-724" data-p="">
              <span
                className="crisp-svg svg-255"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-725">
                <Link href="/about" className="el-726">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-16">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-727">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-728">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-729" data-p="">
              <span
                className="crisp-svg svg-256"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-730">
                <Link href="/search" className="el-731">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-732">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-733">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-734">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-735" data-p="">
              <span
                className="crisp-svg svg-257"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-736">
                <Link href="/attention" className="el-737">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-738">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-739">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-740">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-741">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-742" data-p="">
              <span
                className="crisp-svg svg-258"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-743">
                <Link href="/committee" className="el-744">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-19">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-745">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-746"
        />
      </section>
      <p className="box-21">
        <span
          className="crisp-svg svg-18"
        >
          <svg aria-hidden="true" width={562} height={167} viewBox="0 0 562 167" />
          <Image
            src="/assets/pasted-artwork-40.svg"
            alt=""
            width={1124}
            height={334}
          />
        </span>
      </p>
      <section className="box-22">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-16"
        />
      </section>
      <p className="box-215">
        {"みんなが松ヶ崎祭を　もっと楽しめるように　企画をいっぱい　用意したよ。\nここでしかできない　特別な体験を　お届けするね。"}
      </p>
      <section className="box-23">
        <span
          className="crisp-svg svg-154"
        >
          <svg aria-hidden="true" width={1704} height={1931} viewBox="0 0 1704 1931" />
          <Image
            src="/assets/pasted-artwork-221.svg"
            alt=""
            width={3408}
            height={3862}
          />
        </span>
      </section>
      <section className="box-163">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://livepocket.jp/e/i1x36\"}]}]"}
          className="crisp-svg el-163"
        >
          <svg aria-hidden="true" width={380} height={176} viewBox="0 0 380 176" />
          <Image
            src="/assets/pasted-artwork-218.svg"
            alt=""
            width={760}
            height={352}
          />
        </span>
      </section>
      <section className="box-176">
        <div className="box-177">
          <span
            className="crisp-svg svg-182"
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-225.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="box-178">
          <span
            className="crisp-svg svg-183"
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-226.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-179">
        <div className="box-180">
          <span
            className="crisp-svg svg-184"
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-227.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
        <div className="box-181">
          <span
            className="crisp-svg svg-185"
          >
            <svg aria-hidden="true" width={563} height={675} viewBox="0 0 563 675" />
            <Image
              src="/assets/pasted-artwork-228.svg"
              alt=""
              width={1126}
              height={1350}
            />
          </span>
        </div>
      </section>
      <section className="box-182">
        <div className="box-183">
          <span
            className="crisp-svg svg-186"
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-229.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="box-184">
          <span
            className="crisp-svg svg-187"
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-230.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-185">
        <div className="box-186">
          <span
            className="crisp-svg svg-188"
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-231.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
        <div className="box-187">
          <span
            className="crisp-svg svg-189"
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-232.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <section className="box-188">
        <div className="box-189">
          <span
            className="crisp-svg svg-190"
          >
            <svg aria-hidden="true" width={563} height={443} viewBox="0 0 563 443" />
            <Image
              src="/assets/pasted-artwork-233.svg"
              alt=""
              width={1126}
              height={886}
            />
          </span>
        </div>
        <div className="box-190">
          <span
            className="crisp-svg svg-191"
          >
            <svg aria-hidden="true" width={563} height={426} viewBox="0 0 563 426" />
            <Image
              src="/assets/pasted-artwork-234.svg"
              alt=""
              width={1126}
              height={852}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-3"
      />
    </>
  );
}
