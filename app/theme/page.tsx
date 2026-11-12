import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "メインテーマ",
  description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "メインテーマ",
    description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6el0a87" />
      <nav className="header-16">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1198"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1199">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-65"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1200">
          <div className="box-540">
            <div className="el-1201">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1202">
                <span
                  className="crisp-svg svg-208"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
                >
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-79">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1203">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1204">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-301">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-302">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-303">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-304">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1205">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1206">
                <Link href="/search" id="言葉-p-2" className="button-305">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-306">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-307">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-308">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1207">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1208">
                <Link href="/attention" id="ご来場の-p-2" className="button-309">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-310">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-311">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-312">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-313">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1209">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1210">
                <Link href="/committee" id="委員会企画-p-2" className="button-314">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-315">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-316">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1211">
          <div className="container-80">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1212">
              <div className="el-1213">
                <div className="box-541">
                  <p className="text-327">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-328">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-329">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1214" />
              <div id="div-34" data-toggle-show="flex" className="el-1215">
                <div id="menu1-2" data-inview className="container-81">
                  <Link href="/about" className="el-1216">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1217">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1218">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1219">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1220" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1221">
              <div className="el-1222">
                <div className="box-542">
                  <p className="text-330">
                    {"きかく"}
                  </p>
                  <p className="text-331">
                    {"企画"}
                  </p>
                </div>
                <p className="text-332">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1223" />
              <div id="div-36" data-toggle-show="flex" className="el-1224">
                <div id="menu1-4" data-inview className="container-82">
                  <Link href="/search" className="el-1225">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1226">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1227">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1228">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1229" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1230">
              <div className="el-1231">
                <p className="text-333">
                  {"ご"}
                </p>
                <div className="box-543">
                  <p className="text-334">
                    {"あんない"}
                  </p>
                  <p className="text-335">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1232" />
              <div id="div-39" data-toggle-show="flex" className="el-1233">
                <div id="menu1-6" data-inview className="container-83">
                  <Link href="/attention" className="el-1234">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1235">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1236">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1237">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1238">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1239" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1240">
              <div className="el-1241">
                <div className="box-544">
                  <p className="text-336">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-337">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1242" />
              <div id="div-38" data-toggle-show="flex" className="el-1243">
                <div id="menu1-8" data-inview className="container-84">
                  <Link href="/committee" className="el-1244">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1245">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-1246">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1247" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-4.svg"
        alt=""
        width={1920}
        height={583}
        className="el-1248"
      />
      <p className="box-59">
        <span
          className="crisp-svg svg-52"
          style={{ ["--crisp-svg-width"]: "917px", ["--crisp-svg-ratio"]: "917 / 87" } as import("react").CSSProperties}
        >
          <Image
            src="/assets/pasted-artwork-74.svg"
            alt=""
            width={1834}
            height={174}
          />
        </span>
      </p>
      <section className="box-60">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-19"
        />
      </section>
      <section className="box-61">
        <Image
          src="/assets/pasted-artwork-198.svg"
          alt=""
          width={1383}
          height={304}
          className="svg-197"
        />
      </section>
      <section className="box-66">
        <span
          className="crisp-svg svg-72"
          style={{ ["--crisp-svg-width"]: "541px", ["--crisp-svg-ratio"]: "541 / 114" } as import("react").CSSProperties}
        >
          <Image
            src="/assets/pasted-artwork-93.svg"
            alt=""
            width={1082}
            height={228}
          />
        </span>
      </section>
      <section className="box-67">
        <div className="box-97">
          <Image
            src="/assets/image.svg"
            alt=""
            width={738}
            height={565}
            className="svg-73"
          />
        </div>
        <div className="box-98">
          <Image
            src="/assets/pasted-artwork-94.svg"
            alt=""
            width={523}
            height={66}
            className="svg-74"
          />
        </div>
      </section>
      <section className="box-99">
        <div className="box-100">
          <span
            className="crisp-svg svg-196"
            style={{ ["--crisp-svg-width"]: "985px", ["--crisp-svg-ratio"]: "985 / 748" } as import("react").CSSProperties}
          >
            <Image
              src="/assets/pasted-artwork-197.svg"
              alt=""
              width={1970}
              height={1496}
            />
          </span>
        </div>
        <div className="box-101">
          <span
            className="crisp-svg svg-75"
            style={{ ["--crisp-svg-width"]: "944px", ["--crisp-svg-ratio"]: "944 / 816" } as import("react").CSSProperties}
          >
            <Image
              src="/assets/pasted-artwork-95.svg"
              alt=""
              width={1888}
              height={1632}
            />
          </span>
        </div>
      </section>
      <section className="box-68">
        <Image
          src="/assets/pasted-artwork-76.svg"
          alt=""
          width={103}
          height={313}
          className="svg-54"
        />
      </section>
      <section data-inview className="footer-13">
        <span
          className="crisp-svg pasted-artwork-svg-85"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1015" } as import("react").CSSProperties}
        >
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1667">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-239"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-16">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-240"
          />
        </a>
      </section>
      <section data-inview className="el-1700">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1701">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-284"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-32">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-285"
          />
        </a>
        <span
          className="crisp-svg svg-286"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 347" } as import("react").CSSProperties}
        >
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
