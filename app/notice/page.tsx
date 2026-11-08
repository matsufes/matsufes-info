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
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1365"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1366">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-68"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1367">
          <div className="box-572">
            <div className="el-1368">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1369">
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
            <div className="container-91">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1370">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1371">
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
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1372">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1373">
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
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1374">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1375">
                <Link href="/attention" id="ご来場の-p-2" className="button-356">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-357">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-358">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-359">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-360">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1376">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1377">
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
        <div className="el-1378">
          <div className="container-92">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1379">
              <div className="el-1380">
                <div className="box-573">
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
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1381" />
              <div id="div-34" data-toggle-show="flex" className="el-1382">
                <div id="menu1-2" data-inview className="container-93">
                  <Link href="/about" className="el-1383">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1384">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1385">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1386">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1387" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1388">
              <div className="el-1389">
                <div className="box-574">
                  <p className="text-372">
                    {"きかく"}
                  </p>
                  <p className="text-373">
                    {"企画"}
                  </p>
                </div>
                <p className="text-374">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1390" />
              <div id="div-36" data-toggle-show="flex" className="el-1391">
                <div id="menu1-4" data-inview className="container-94">
                  <Link href="/search" className="el-1392">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1393">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1394">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1395">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1396" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1397">
              <div className="el-1398">
                <p className="text-375">
                  {"ご"}
                </p>
                <div className="box-575">
                  <p className="text-376">
                    {"あんない"}
                  </p>
                  <p className="text-377">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1399" />
              <div id="div-39" data-toggle-show="flex" className="el-1400">
                <div id="menu1-6" data-inview className="container-95">
                  <Link href="/attention" className="el-1401">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1402">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1403">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1404">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1405">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1406" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1407">
              <div className="el-1408">
                <div className="box-576">
                  <p className="text-378">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-379">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1409" />
              <div id="div-38" data-toggle-show="flex" className="el-1410">
                <div id="menu1-8" data-inview className="container-96">
                  <Link href="/committee" className="el-1411">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1412">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1413">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1414" />
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
        className="el-1415"
      />
      <p className="box-66">
        <span
          className="crisp-svg svg-53"
        >
          <svg aria-hidden="true" width={412} height={123} viewBox="0 0 412 123" />
          <Image
            src="/assets/pasted-artwork-75.svg"
            alt=""
            width={824}
            height={246}
          />
        </span>
      </p>
      <section className="box-67">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-21"
        />
      </section>
      <section className="box-191">
        <p className="box-192">
          {"2026/10/13"}
        </p>
        <div className="box-193">
          <Image
            src="/assets/pasted-artwork-191.svg"
            alt=""
            width={112}
            height={37}
            className="svg-162"
          />
        </div>
      </section>
      <section className="box-190">
        <div id="Q-8" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-8\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-16\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-17\"}]}]"} className="el-2989">
          <p className="text-755">
            {"第56回松ヶ崎祭公式webページが更新されました。"}
          </p>
          <div className="button-778">
            <Image id="img-16" data-toggle-show="block"
              src="/assets/pasted-artwork-269.svg"
              alt=""
              width={44}
              height={28}
              className="el-2990"
            />
            <Image id="img-17" data-toggle-show="block"
              src="/assets/pasted-artwork-269.svg"
              alt=""
              width={44}
              height={28}
              className="el-2991"
            />
          </div>
        </div>
        <p id="A-8" data-toggle-show="flex" className="el-2992">
          {"出展者様情報が公開されました。\n各出展者様のSNS等で松ヶ崎祭の情報を発信していただけます。\n ぜひ一緒に、松ヶ崎祭を盛り上げていただけますと幸いです。\n\n また、システム調整に伴う公開予定日時の変更により、\n出展者の皆さまに多大なるご迷惑をおかけしましたことを、心よりお詫び申し上げます。"}
        </p>
      </section>
      <section className="box-978">
        <p className="box-979">
          {"2026/11/07"}
        </p>
        <div className="box-980">
          <Image
            src="/assets/pasted-artwork-191.svg"
            alt=""
            width={112}
            height={37}
            className="svg-597"
          />
        </div>
      </section>
      <section className="box-981">
        <div id="Q-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-2\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-2\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"img-3\"}]}]"} className="el-2993">
          <p className="text-756">
            {"第56回松ヶ崎祭公式webページが更新されました。"}
          </p>
          <div className="button-779">
            <Image id="img-2" data-toggle-show="block"
              src="/assets/pasted-artwork-269.svg"
              alt=""
              width={44}
              height={28}
              className="el-2994"
            />
            <Image id="img-3" data-toggle-show="block"
              src="/assets/pasted-artwork-269.svg"
              alt=""
              width={44}
              height={28}
              className="el-2995"
            />
          </div>
        </div>
        <p id="A-2" data-toggle-show="flex" className="el-2996">
          {"追加されたコンテンツは以下の通りです。\n\n・よくあるご質問\n・委員会企画"}
        </p>
      </section>
      <section data-inview className="footer-15">
        <span
          className="crisp-svg pasted-artwork-svg-88"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1734">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-249"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-18">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-250"
          />
        </a>
      </section>
      <section data-inview className="el-1770">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1771">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-296"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-34">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-297"
          />
        </a>
        <span
          className="crisp-svg svg-298"
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
