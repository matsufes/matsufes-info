import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ご協賛",
  description: "今回の松ヶ崎祭にご協賛いただいた皆さまをご紹介します。",
  openGraph: {
    title: "ご協賛",
    description: "今回の松ヶ崎祭にご協賛いただいた皆さまをご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6exd68g" />
      <nav className="header-17">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1324"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-219.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1325">
          <span
            className="crisp-svg pasted-artwork-svg-69"
          >
            <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
            <Image
              src="/assets/pasted-artwork-218.svg"
              alt="メニューを開く"
              width={460}
              height={284}
            />
          </span>
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1326">
          <div className="box-568">
            <div className="el-1327">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1328">
                <span
                  className="crisp-svg svg-242"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-155.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-85">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1329">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1330">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-332">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-333">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-334">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-335">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1331">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1332">
                <Link href="/search" id="言葉-p-2" className="button-336">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-337">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-338">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-339">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1333">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1334">
                <Link href="/attention" id="ご来場の-p-2" className="button-340">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-341">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-342">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-343">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-344">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1335">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1336">
                <Link href="/committee" id="委員会企画-p-2" className="button-345">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-346">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-347">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1337">
          <div className="container-86">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1338">
              <div className="el-1339">
                <div className="box-569">
                  <p className="text-358">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-359">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-360">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1340" />
              <div id="div-34" data-toggle-show="flex" className="el-1341">
                <div id="menu1-2" data-inview className="container-87">
                  <Link href="/about" className="el-1342">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1343">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1344">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1345">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1346" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1347">
              <div className="el-1348">
                <div className="box-570">
                  <p className="text-361">
                    {"さがし"}
                  </p>
                  <p className="text-362">
                    {"企画"}
                  </p>
                </div>
                <p className="text-363">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1349" />
              <div id="div-36" data-toggle-show="flex" className="el-1350">
                <div id="menu1-4" data-inview className="container-88">
                  <Link href="/search" className="el-1351">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1352">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1353">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1354">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1355" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1356">
              <div className="el-1357">
                <p className="text-364">
                  {"ご"}
                </p>
                <div className="box-571">
                  <p className="text-365">
                    {"あんない"}
                  </p>
                  <p className="text-366">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1358" />
              <div id="div-39" data-toggle-show="flex" className="el-1359">
                <div id="menu1-6" data-inview className="container-89">
                  <Link href="/attention" className="el-1360">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1361">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1362">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1363">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1364">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1365" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1366">
              <div className="el-1367">
                <div className="box-572">
                  <p className="text-367">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-368">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1368" />
              <div id="div-38" data-toggle-show="flex" className="el-1369">
                <div id="menu1-8" data-inview className="container-90">
                  <Link href="/committee" className="el-1370">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1371">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1372">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1373" />
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
        className="el-1374"
      />
      <section data-inview className="el-60" />
      <p className="box-65">
        <Image
          src="/assets/pasted-artwork-217.svg"
          alt=""
          width={1161}
          height={131}
          className="svg-151"
        />
      </p>
      <section className="box-66">
        <Image
          src="/assets/pasted-artwork-99.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-21"
        />
      </section>
      <p className="box-159">
        {"第56回松ヶ崎祭を開催するにあたり、多くの方々にご協賛いただきました。\nここに深く御礼申し上げます。（敬称略・順不同）"}
      </p>
      <section className="box-123">
        <Image
          src="/assets/pasted-artwork-157.svg"
          alt=""
          width={438}
          height={114}
          className="svg-126"
        />
      </section>
      <section className="box-128">
        <p className="box-175">
          {"・京お好み鉄平\n\n・中華そば 高安\n\n・開晴亭 北山本店\n\n・遊食邸 北山店\n\n・熟成麺屋 神来 一乗寺店\n\n・珍遊 一乗寺本店\n\n・麺家 澤希\n\n・麺屋 極鶏 一乗寺本店\n\n・家系ラーメン 斎藤家 一乗寺店\n\n・株式会社 バックス画材\n\n・天天有 一乗寺本店\n\n・ライフ 松ヶ崎店\n\n・EARTH CAFE\n\n・さいじき"}
        </p>
        <p className="box-129">
          {"・びしや\n\n・麺屋 しな埜\n\n・こにし\n\n・cote a cote\n\n・CAFE JEUNO\n\n・タイ料理 AOW\n\n・musu:bi hair salon\n\n・nondoko ざっぴ\n\n・和より\n\n・餃子と唐揚げ　犀のツノ\n\n・洛北阪急スクエア\n\n・レッドバロン京都北\n\n・うどんの近江や\n\n・BAKERY DAYS"}
        </p>
      </section>
      <section className="box-124">
        <Image
          src="/assets/pasted-artwork-158.svg"
          alt=""
          width={438}
          height={114}
          className="svg-127"
        />
      </section>
      <section className="box-130">
        <p className="box-142">
          {"・小川珈琲ホールディングス株式会社\n\n・櫂有限会社\n\n・株式会社王将フードサービス\n\n・株式会社KINUJO\n\n・株式会社TOAI\n\n・株式会社　丸久小山園"}
        </p>
        <p className="box-131">
          {"・株式会社マンナンライフ\n\n・株式会社ロッテ\n\n・株式会社ロワールホールディングス\n\n・タマノイ酢株式会社\n\n・ブルドックソース株式会社\n\n・マルサンアイ株式会社\n\n・ヤマト株式会社"}
        </p>
      </section>
      <section className="box-132">
        <Image
          src="/assets/pasted-artwork-214.svg"
          alt=""
          width={438}
          height={114}
          className="svg-148"
        />
      </section>
      <section className="box-157">
        <Image
          src="/assets/mf56_HCD.png"
          alt=""
          width={1442}
          height={977}
          className="mf56-hcd-png"
        />
      </section>
      <section className="box-133">
        <div className="box-134">
          <Image
            src="/assets/1791353956278-d18c90cc-01c7-4f18-93e4-7a2e39bd277f_1.jpg"
            alt=""
            width={1024}
            height={727}
            className="el-90"
          />
        </div>
        <div className="box-136">
          <Image
            src="/assets/2026-10-07-15.17.40.png"
            alt=""
            width={1438}
            height={1035}
            className="el-91"
          />
        </div>
        <div className="box-135">
          <Image
            src="/assets/BAKERY-DAYS.jpg"
            alt=""
            width={827}
            height={827}
            className="bakery-days-jpg"
          />
        </div>
      </section>
      <section className="box-137">
        <div className="box-138">
          <Image
            src="/assets/S__148398082.jpg"
            alt=""
            width={2480}
            height={441}
            className="s-148398082-jpg"
          />
        </div>
        <div className="box-139">
          <Image
            src="/assets/02.jpg"
            alt=""
            width={1021}
            height={574}
            className="el-92"
          />
        </div>
      </section>
      <section data-inview className="footer-14">
        <span
          className="crisp-svg pasted-artwork-svg-90"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1794">
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={58}
            height={58}
            className="svg-278"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-17">
          <Image
            src="/assets/pasted-artwork-160.svg"
            alt=""
            width={54}
            height={49}
            className="svg-279"
          />
        </a>
      </section>
      <section data-inview className="el-1838">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1839">
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={58}
            height={58}
            className="svg-324"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-33">
          <Image
            src="/assets/pasted-artwork-160.svg"
            alt=""
            width={54}
            height={49}
            className="svg-325"
          />
        </a>
        <Image
          src="/assets/pasted-artwork-243.svg"
          alt=""
          width={375}
          height={347}
          className="svg-326"
        />
      </section>
    </>
  );
}
