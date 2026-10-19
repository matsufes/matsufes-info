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
      <nav className="header-13">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1120"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1121">
          <span
            className="crisp-svg pasted-artwork-svg-65"
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
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1122">
          <div className="box-548">
            <div className="el-1123">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1124">
                <span
                  className="crisp-svg svg-238"
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
            <div className="container-61">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1125">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1126">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-268">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-269">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-270">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-271">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1127">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1128">
                <Link href="/search" id="言葉-p-2" className="button-272">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-273">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-274">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-275">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1129">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1130">
                <Link href="/attention" id="ご来場の-p-2" className="button-276">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-277">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-278">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-279">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-280">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1131">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1132">
                <Link href="/committee" id="委員会企画-p-2" className="button-281">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-282">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-283">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1133">
          <div className="container-62">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1134">
              <div className="el-1135">
                <div className="box-549">
                  <p className="text-314">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-315">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-316">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1136" />
              <div id="div-34" data-toggle-show="flex" className="el-1137">
                <div id="menu1-2" data-inview className="container-63">
                  <Link href="/about" className="el-1138">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1139">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1140">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1141">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1142" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1143">
              <div className="el-1144">
                <div className="box-550">
                  <p className="text-317">
                    {"さがし"}
                  </p>
                  <p className="text-318">
                    {"企画"}
                  </p>
                </div>
                <p className="text-319">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1145" />
              <div id="div-36" data-toggle-show="flex" className="el-1146">
                <div id="menu1-4" data-inview className="container-64">
                  <Link href="/search" className="el-1147">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1148">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1149">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1150">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1151" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1152">
              <div className="el-1153">
                <p className="text-320">
                  {"ご"}
                </p>
                <div className="box-551">
                  <p className="text-321">
                    {"あんない"}
                  </p>
                  <p className="text-322">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1154" />
              <div id="div-39" data-toggle-show="flex" className="el-1155">
                <div id="menu1-6" data-inview className="container-65">
                  <Link href="/attention" className="el-1156">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1157">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1158">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1159">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1160">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1161" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1162">
              <div className="el-1163">
                <div className="box-552">
                  <p className="text-323">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-324">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1164" />
              <div id="div-38" data-toggle-show="flex" className="el-1165">
                <div id="menu1-8" data-inview className="container-66">
                  <Link href="/committee" className="el-1166">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1167">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1168">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1169" />
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
        className="el-1170"
      />
      <p className="box-21">
        <Image
          src="/assets/pasted-artwork-40.svg"
          alt=""
          width={562}
          height={167}
          className="svg-14"
        />
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
        <Image
          src="/assets/pasted-artwork-221.svg"
          alt=""
          width={1704}
          height={1931}
          className="svg-149"
        />
      </section>
      <section className="box-163">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://livepocket.jp/e/i1x36\"}]}]"}
          src="/assets/pasted-artwork-218.svg"
          alt=""
          width={380}
          height={176}
          className="el-125"
        />
      </section>
      <section className="box-176">
        <div className="box-177">
          <Image
            src="/assets/pasted-artwork-225.svg"
            alt=""
            width={563}
            height={675}
            className="svg-177"
          />
        </div>
        <div className="box-178">
          <Image
            src="/assets/pasted-artwork-226.svg"
            alt=""
            width={563}
            height={675}
            className="svg-178"
          />
        </div>
      </section>
      <section className="box-179">
        <div className="box-180">
          <Image
            src="/assets/pasted-artwork-227.svg"
            alt=""
            width={563}
            height={675}
            className="svg-179"
          />
        </div>
        <div className="box-181">
          <Image
            src="/assets/pasted-artwork-228.svg"
            alt=""
            width={563}
            height={675}
            className="svg-180"
          />
        </div>
      </section>
      <section className="box-182">
        <div className="box-183">
          <Image
            src="/assets/pasted-artwork-229.svg"
            alt=""
            width={563}
            height={426}
            className="svg-181"
          />
        </div>
        <div className="box-184">
          <Image
            src="/assets/pasted-artwork-230.svg"
            alt=""
            width={563}
            height={426}
            className="svg-182"
          />
        </div>
      </section>
      <section className="box-185">
        <div className="box-186">
          <Image
            src="/assets/pasted-artwork-231.svg"
            alt=""
            width={563}
            height={426}
            className="svg-183"
          />
        </div>
        <div className="box-187">
          <Image
            src="/assets/pasted-artwork-232.svg"
            alt=""
            width={563}
            height={426}
            className="svg-184"
          />
        </div>
      </section>
      <section className="box-188">
        <div className="box-189">
          <Image
            src="/assets/pasted-artwork-233.svg"
            alt=""
            width={563}
            height={443}
            className="svg-185"
          />
        </div>
        <div className="box-190">
          <Image
            src="/assets/pasted-artwork-234.svg"
            alt=""
            width={563}
            height={426}
            className="svg-186"
          />
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
