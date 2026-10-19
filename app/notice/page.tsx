import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "松ヶ崎祭に関するお知らせをお届けします。",
  openGraph: {
    title: "お知らせ",
    description: "松ヶ崎祭に関するお知らせをお届けします。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6flq18p" />
      <nav className="header-18">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1376"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1377">
          <span
            className="crisp-svg pasted-artwork-svg-71"
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
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1378">
          <div className="box-574">
            <div className="el-1379">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1380">
                <span
                  className="crisp-svg svg-245"
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
            <div className="container-91">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1381">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1382">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-348">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-349">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-350">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-351">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1383">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1384">
                <Link href="/search" id="言葉-p-2" className="button-352">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-353">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-354">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-355">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1385">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1386">
                <Link href="/attention" id="ご来場の-p-2" className="button-356">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-357">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-358">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-359">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-360">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1387">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1388">
                <Link href="/committee" id="委員会企画-p-2" className="button-361">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-362">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-363">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1389">
          <div className="container-92">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1390">
              <div className="el-1391">
                <div className="box-575">
                  <p className="text-369">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-370">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-371">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1392" />
              <div id="div-34" data-toggle-show="flex" className="el-1393">
                <div id="menu1-2" data-inview className="container-93">
                  <Link href="/about" className="el-1394">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1395">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1396">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1397">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1398" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1399">
              <div className="el-1400">
                <div className="box-576">
                  <p className="text-372">
                    {"さがし"}
                  </p>
                  <p className="text-373">
                    {"企画"}
                  </p>
                </div>
                <p className="text-374">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1401" />
              <div id="div-36" data-toggle-show="flex" className="el-1402">
                <div id="menu1-4" data-inview className="container-94">
                  <Link href="/search" className="el-1403">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1404">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1405">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1406">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1407" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1408">
              <div className="el-1409">
                <p className="text-375">
                  {"ご"}
                </p>
                <div className="box-577">
                  <p className="text-376">
                    {"あんない"}
                  </p>
                  <p className="text-377">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1410" />
              <div id="div-39" data-toggle-show="flex" className="el-1411">
                <div id="menu1-6" data-inview className="container-95">
                  <Link href="/attention" className="el-1412">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1413">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1414">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1415">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1416">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1417" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1418">
              <div className="el-1419">
                <div className="box-578">
                  <p className="text-378">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-379">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1420" />
              <div id="div-38" data-toggle-show="flex" className="el-1421">
                <div id="menu1-8" data-inview className="container-96">
                  <Link href="/committee" className="el-1422">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1423">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1424">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1425" />
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
        className="el-1426"
      />
      <p className="box-67">
        <Image
          src="/assets/pasted-artwork-95.svg"
          alt=""
          width={412}
          height={123}
          className="svg-61"
        />
      </p>
      <section className="box-68">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-22"
        />
      </section>
      <section className="box-192">
        <p className="box-193">
          {"2026/10/13"}
        </p>
        <div className="box-194">
          <Image
            src="/assets/pasted-artwork-236.svg"
            alt=""
            width={112}
            height={37}
            className="svg-187"
          />
        </div>
      </section>
      <section className="box-191">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"10/13中身\"}]}]"}
          className="crisp-svg el-318"
        >
          <svg aria-hidden="true" width={1393} height={115} viewBox="0 0 1393 115" />
          <Image
            src="/assets/pasted-artwork-174.svg"
            alt=""
            width={2786}
            height={230}
          />
        </span>
        <span id="10/13中身" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"10/13中身\"}]}]"} data-toggle-show="block"
          className="crisp-svg el-319"
        >
          <svg aria-hidden="true" width={1393} height={451} viewBox="0 0 1393 451" />
          <Image
            src="/assets/pasted-artwork-235.svg"
            alt=""
            width={2786}
            height={902}
          />
        </span>
      </section>
      <section data-inview className="footer-16">
        <span
          className="crisp-svg pasted-artwork-svg-92"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1796">
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={58}
            height={58}
            className="svg-282"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-19">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={54}
            height={49}
            className="svg-283"
          />
        </a>
      </section>
    </>
  );
}
