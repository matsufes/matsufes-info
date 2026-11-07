import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "メインテーマ",
  description: "今回の松ヶ崎祭のメインテーマをご紹介します。",
  openGraph: {
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
          className="el-1263"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1264">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-66"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1265">
          <div className="box-562">
            <div className="el-1266">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1267">
                <span
                  className="crisp-svg svg-216"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-132.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-79">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1268">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1269">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-316">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-317">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-318">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-319">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1270">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1271">
                <Link href="/search" id="言葉-p-2" className="button-320">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-321">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-322">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-323">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1272">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1273">
                <Link href="/attention" id="ご来場の-p-2" className="button-324">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-325">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-326">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-327">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-328">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1274">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1275">
                <Link href="/committee" id="委員会企画-p-2" className="button-329">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-330">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-331">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1276">
          <div className="container-80">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1277">
              <div className="el-1278">
                <div className="box-563">
                  <p className="text-347">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-348">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-349">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1279" />
              <div id="div-34" data-toggle-show="flex" className="el-1280">
                <div id="menu1-2" data-inview className="container-81">
                  <Link href="/about" className="el-1281">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1282">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1283">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1284">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1285" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1286">
              <div className="el-1287">
                <div className="box-564">
                  <p className="text-350">
                    {"きかく"}
                  </p>
                  <p className="text-351">
                    {"企画"}
                  </p>
                </div>
                <p className="text-352">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1288" />
              <div id="div-36" data-toggle-show="flex" className="el-1289">
                <div id="menu1-4" data-inview className="container-82">
                  <Link href="/search" className="el-1290">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1291">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1292">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1293">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1294" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1295">
              <div className="el-1296">
                <p className="text-353">
                  {"ご"}
                </p>
                <div className="box-565">
                  <p className="text-354">
                    {"あんない"}
                  </p>
                  <p className="text-355">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1297" />
              <div id="div-39" data-toggle-show="flex" className="el-1298">
                <div id="menu1-6" data-inview className="container-83">
                  <Link href="/attention" className="el-1299">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1300">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1301">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1302">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1303">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1304" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1305">
              <div className="el-1306">
                <div className="box-566">
                  <p className="text-356">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-357">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1307" />
              <div id="div-38" data-toggle-show="flex" className="el-1308">
                <div id="menu1-8" data-inview className="container-84">
                  <Link href="/committee" className="el-1309">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1310">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1311">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1312" />
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
        className="el-1313"
      />
      <p className="box-61">
        <span
          className="crisp-svg svg-52"
        >
          <svg aria-hidden="true" width={917} height={87} viewBox="0 0 917 87" />
          <Image
            src="/assets/pasted-artwork-74.svg"
            alt=""
            width={1834}
            height={174}
          />
        </span>
      </p>
      <section className="box-62">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-19"
        />
      </section>
      <section className="box-63">
        <Image
          src="/assets/pasted-artwork-200.svg"
          alt=""
          width={1383}
          height={304}
          className="svg-205"
        />
      </section>
      <section className="box-68">
        <span
          className="crisp-svg svg-72"
        >
          <svg aria-hidden="true" width={541} height={114} viewBox="0 0 541 114" />
          <Image
            src="/assets/pasted-artwork-93.svg"
            alt=""
            width={1082}
            height={228}
          />
        </span>
      </section>
      <section className="box-69">
        <div className="box-99">
          <Image
            src="/assets/image.svg"
            alt=""
            width={738}
            height={565}
            className="svg-73"
          />
        </div>
        <div className="box-100">
          <Image
            src="/assets/pasted-artwork-94.svg"
            alt=""
            width={523}
            height={66}
            className="svg-74"
          />
        </div>
      </section>
      <section className="box-101">
        <div className="box-102">
          <span
            className="crisp-svg svg-204"
          >
            <svg aria-hidden="true" width={985} height={748} viewBox="0 0 985 748" />
            <Image
              src="/assets/pasted-artwork-199.svg"
              alt=""
              width={1970}
              height={1496}
            />
          </span>
        </div>
        <div className="box-103">
          <span
            className="crisp-svg svg-75"
          >
            <svg aria-hidden="true" width={944} height={816} viewBox="0 0 944 816" />
            <Image
              src="/assets/pasted-artwork-95.svg"
              alt=""
              width={1888}
              height={1632}
            />
          </span>
        </div>
      </section>
      <section className="box-70">
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
          className="crisp-svg pasted-artwork-svg-86"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1732">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-247"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-16">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-248"
          />
        </a>
      </section>
      <section data-inview className="el-1766">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1767">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-292"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-32">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-293"
          />
        </a>
        <span
          className="crisp-svg svg-294"
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-198.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
