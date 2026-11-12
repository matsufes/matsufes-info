import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "マイページ",
  description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "マイページ",
    description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv6alv245p" />
      <nav className="header-19">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1351"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1352">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-68"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1353">
          <div className="box-555">
            <div className="el-1354">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1355">
                <span
                  className="crisp-svg svg-211"
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
            <div className="container-97">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1356">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1357">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-349">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-350">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-351">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-352">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1358">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1359">
                <Link href="/search" id="言葉-p-2" className="button-353">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-354">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-355">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-356">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1360">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1361">
                <Link href="/attention" id="ご来場の-p-2" className="button-357">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-358">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-359">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-360">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-361">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1362">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1363">
                <Link href="/committee" id="委員会企画-p-2" className="button-362">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-363">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-364">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1364">
          <div className="container-98">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1365">
              <div className="el-1366">
                <div className="box-556">
                  <p className="text-360">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-361">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-362">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1367" />
              <div id="div-34" data-toggle-show="flex" className="el-1368">
                <div id="menu1-2" data-inview className="container-99">
                  <Link href="/about" className="el-1369">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1370">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1371">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1372">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1373" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1374">
              <div className="el-1375">
                <div className="box-557">
                  <p className="text-363">
                    {"きかく"}
                  </p>
                  <p className="text-364">
                    {"企画"}
                  </p>
                </div>
                <p className="text-365">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1376" />
              <div id="div-36" data-toggle-show="flex" className="el-1377">
                <div id="menu1-4" data-inview className="container-100">
                  <Link href="/search" className="el-1378">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1379">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1380">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1381">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1382" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1383">
              <div className="el-1384">
                <p className="text-366">
                  {"ご"}
                </p>
                <div className="box-558">
                  <p className="text-367">
                    {"あんない"}
                  </p>
                  <p className="text-368">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1385" />
              <div id="div-39" data-toggle-show="flex" className="el-1386">
                <div id="menu1-6" data-inview className="container-101">
                  <Link href="/attention" className="el-1387">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1388">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1389">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1390">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1391">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1392" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1393">
              <div className="el-1394">
                <div className="box-559">
                  <p className="text-369">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-370">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1395" />
              <div id="div-38" data-toggle-show="flex" className="el-1396">
                <div id="menu1-8" data-inview className="container-102">
                  <Link href="/committee" className="el-1397">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1398">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1399">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1400" />
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
        className="el-1401"
      />
      <section className="box-204">
        <span
          className="crisp-svg svg-169"
          style={{ ["--crisp-svg-width"]: "1113px", ["--crisp-svg-ratio"]: "1113 / 135" } as import("react").CSSProperties}
        >
          <Image
            src="/assets/pasted-artwork-96.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-202">
          <span
            className="crisp-svg svg-170"
            style={{ ["--crisp-svg-width"]: "371px", ["--crisp-svg-ratio"]: "371 / 38" } as import("react").CSSProperties}
          >
            <Image
              src="/assets/pasted-artwork-97.svg"
              alt=""
              width={742}
              height={76}
            />
          </span>
        </p>
        <div className="box-203">
          <span
            className="crisp-svg svg-171"
            style={{ ["--crisp-svg-width"]: "400px", ["--crisp-svg-ratio"]: "400 / 400" } as import("react").CSSProperties}
          >
            <Image
              src="/assets/pasted-artwork-98.svg"
              alt=""
              width={800}
              height={800}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-3.svg"
        alt=""
        width={1920}
        height={713}
        className="image-10"
      />
    </>
  );
}
