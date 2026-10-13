import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6exd68g" />
      <section className="el-668">
        <div className="el-669">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-670">
            <span
              className="crisp-svg pasted-artwork-svg-54"
              style={{ aspectRatio: "230 / 142" }}
            >
              <Image
                src="/assets/pasted-artwork-248.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-671">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-672">
              <span
                className="crisp-svg svg-237"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-673">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-674">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-675">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-676">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-677">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-212">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-213">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-214">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-215">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-678">
              <Link href="/keyword" id="言葉-p" className="button-216">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-217">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-218">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-219">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-679">
              <Link href="/attention" id="ご来場の-p" className="button-220">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-221">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-222">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-223">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-680">
              <Link href="/committee" id="委員会企画-p" className="button-224">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-225">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-226">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-681"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-682">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-683">
              <span
                className="crisp-svg svg-238"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-684">
                <Link href="/about" className="el-685">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-15">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-686">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-687">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-688">
              <span
                className="crisp-svg svg-239"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-689">
                <Link href="/keyword" className="el-690">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-691">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-692">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-693">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-694">
              <span
                className="crisp-svg svg-240"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-695">
                <Link href="/attention" className="el-696">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-697">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-698">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-699">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-700">
              <span
                className="crisp-svg svg-241"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-701">
                <Link href="/committee" className="el-702">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-17">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-703">
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
          className="el-704"
        />
      </section>
      <section data-inview className="el-90" />
      <p className="box-65">
        <span
          className="crisp-svg svg-171"
          style={{ aspectRatio: "1161 / 131" }}
        >
          <Image
            src="/assets/pasted-artwork-246.svg"
            alt=""
            width={2322}
            height={262}
          />
        </span>
      </p>
      <section className="box-66">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-21"
        />
      </section>
      <p className="box-178">
        {"第56回松ヶ崎祭を開催するにあたり、多くの方々にご協賛いただきました。\nここに深く御礼申し上げます。（敬称略・順不同）"}
      </p>
      <section className="box-125">
        <span
          className="crisp-svg svg-138"
          style={{ aspectRatio: "438 / 114" }}
        >
          <Image
            src="/assets/pasted-artwork-173.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-146">
        <p className="box-197">
          {"・京お好み鉄平\n\n・中華そば 高安\n\n・開晴亭 北山本店\n\n・遊食邸 北山店\n\n・熟成麺屋 神来 一乗寺店\n\n・珍遊 一乗寺本店\n\n・麺家 澤希\n\n・麺屋 極鶏 一乗寺本店\n\n・家系ラーメン 斎藤家 一乗寺店\n\n・株式会社 バックス画材\n\n・天天有 一乗寺本店\n\n・ライフ 松ヶ崎店\n\n・EARTH CAFE\n\n・さいじき"}
        </p>
        <p className="box-147">
          {"・びしや\n\n・麺屋 しな埜\n\n・こにし\n\n・cote a cote\n\n・CAFE JEUNO\n\n・タイ料理 AOW\n\n・musu:bi hair salon\n\n・nondoko ざっぴ\n\n・和より\n\n・餃子と唐揚げ　犀のツノ\n\n・洛北阪急スクエア\n\n・レッドバロン京都北\n\n・うどんの近江や\n\n・BAKERY DAYS"}
        </p>
      </section>
      <section className="box-126">
        <span
          className="crisp-svg svg-139"
          style={{ aspectRatio: "438 / 114" }}
        >
          <Image
            src="/assets/pasted-artwork-174.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-148">
        <p className="box-160">
          {"・小川珈琲ホールディングス株式会社\n\n・櫂有限会社\n\n・株式会社王将フードサービス\n\n・株式会社KINUJO\n\n・株式会社TOAI\n\n・株式会社　丸久小山園"}
        </p>
        <p className="box-149">
          {"・株式会社マンナンライフ\n\n・株式会社ロッテ\n\n・株式会社ロワールホールディングス\n\n・タマノイ酢株式会社\n\n・ブルドックソース株式会社\n\n・マルサンアイ株式会社\n\n・ヤマト株式会社"}
        </p>
      </section>
      <section className="box-150">
        <span
          className="crisp-svg svg-167"
          style={{ aspectRatio: "438 / 114" }}
        >
          <Image
            src="/assets/pasted-artwork-242.svg"
            alt=""
            width={876}
            height={228}
          />
        </span>
      </section>
      <section className="box-176">
        <Image
          src="/assets/HCD_mf56.png"
          alt=""
          width={2162}
          height={1466}
          className="hcd-mf56-png"
        />
      </section>
      <section className="box-151">
        <div className="box-152">
          <Image
            src="/assets/1791353956278-d18c90cc-01c7-4f18-93e4-7a2e39bd277f_1.jpg"
            alt=""
            width={1024}
            height={727}
            className="el-139"
          />
        </div>
        <div className="box-154">
          <Image
            src="/assets/2026-10-07-15.17.40.png"
            alt=""
            width={1438}
            height={1035}
            className="el-140"
          />
        </div>
        <div className="box-153">
          <Image
            src="/assets/BAKERY-DAYS.jpg"
            alt=""
            width={827}
            height={827}
            className="bakery-days-jpg"
          />
        </div>
      </section>
      <section className="box-155">
        <div className="box-156">
          <Image
            src="/assets/S__148398082.jpg"
            alt=""
            width={2480}
            height={441}
            className="s-148398082-jpg"
          />
        </div>
        <div className="box-157">
          <Image
            src="/assets/02.jpg"
            alt=""
            width={1021}
            height={574}
            className="el-141"
          />
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-12"
      />
    </>
  );
}
