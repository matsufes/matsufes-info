import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description: "松ヶ崎祭に関するよくあるご質問をご紹介します。",
  openGraph: {
    title: "よくあるご質問",
    description: "松ヶ崎祭に関するよくあるご質問をご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf67d6n7n" />
      <nav className="header-14">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1176"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1177">
          <span
            className="crisp-svg pasted-artwork-svg-67"
          >
            <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
            <Image
              src="/assets/pasted-artwork-223.svg"
              alt="メニューを開く"
              width={460}
              height={284}
            />
          </span>
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1178">
          <div className="box-554">
            <div className="el-1179">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1180">
                <span
                  className="crisp-svg svg-241"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-160.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-67">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1181">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1182">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-284">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-285">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-286">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-287">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1183">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1184">
                <Link href="/search" id="言葉-p-2" className="button-288">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-289">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-290">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-291">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1185">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1186">
                <Link href="/attention" id="ご来場の-p-2" className="button-292">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-293">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-294">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-295">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-296">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1187">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1188">
                <Link href="/committee" id="委員会企画-p-2" className="button-297">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-298">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-299">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1189">
          <div className="container-68">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1190">
              <div className="el-1191">
                <div className="box-555">
                  <p className="text-325">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-326">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-327">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1192" />
              <div id="div-34" data-toggle-show="flex" className="el-1193">
                <div id="menu1-2" data-inview className="container-69">
                  <Link href="/about" className="el-1194">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1195">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1196">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1197">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1198" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1199">
              <div className="el-1200">
                <div className="box-556">
                  <p className="text-328">
                    {"さがし"}
                  </p>
                  <p className="text-329">
                    {"企画"}
                  </p>
                </div>
                <p className="text-330">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1201" />
              <div id="div-36" data-toggle-show="flex" className="el-1202">
                <div id="menu1-4" data-inview className="container-70">
                  <Link href="/search" className="el-1203">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1204">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1205">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1206">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1207" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1208">
              <div className="el-1209">
                <p className="text-331">
                  {"ご"}
                </p>
                <div className="box-557">
                  <p className="text-332">
                    {"あんない"}
                  </p>
                  <p className="text-333">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1210" />
              <div id="div-39" data-toggle-show="flex" className="el-1211">
                <div id="menu1-6" data-inview className="container-71">
                  <Link href="/attention" className="el-1212">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1213">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1214">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1215">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1216">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1217" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1218">
              <div className="el-1219">
                <div className="box-558">
                  <p className="text-334">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-335">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1220" />
              <div id="div-38" data-toggle-show="flex" className="el-1221">
                <div id="menu1-8" data-inview className="container-72">
                  <Link href="/committee" className="el-1222">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1223">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1224">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1225" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={583}
        className="el-1226"
      />
      <p className="box-56">
        <Image
          src="/assets/pasted-artwork-93.svg"
          alt=""
          width={735}
          height={130}
          className="svg-59"
        />
      </p>
      <section className="box-57">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-18"
        />
      </section>
      <section className="box-58" />
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-9"
      />
    </>
  );
}
