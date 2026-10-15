import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "行き方・会場地図",
  description: "松ヶ崎祭が開催される京都工芸繊維大学への行き方・会場地図のページです。",
  openGraph: {
    title: "行き方・会場地図",
    description: "松ヶ崎祭が開催される京都工芸繊維大学への行き方・会場地図のページです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf53mtd6j" />
      <section className="el-676">
        <div className="el-677">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-678">
            <span
              className="crisp-svg pasted-artwork-svg-59"
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
          <div id="memu-p" data-toggle-show="flex" className="el-679">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-680">
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-681">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-682">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-683">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-684">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-685">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-220">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-221">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-222">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-223">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-686">
              <Link href="/search" id="言葉-p" className="button-224">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-225">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-226">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-227">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-687">
              <Link href="/attention" id="ご来場の-p" className="button-228">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-229">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-230">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-231">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-232">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-688">
              <Link href="/committee" id="委員会企画-p" className="button-233">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-234">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-235">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-689"
          />
          <div className="el-690">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-691">
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
              <div id="menu1" data-toggle-show="flex" data-inview className="el-692">
                <Link href="/about" className="el-693">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-15">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-694">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-695">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-696">
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
              <div id="menu2" data-toggle-show="flex" data-inview className="el-697">
                <Link href="/search" className="el-698">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-699">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-700">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-701">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-702">
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
              <div id="menu3" data-toggle-show="flex" data-inview className="el-703">
                <Link href="/attention" className="el-704">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-705">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-706">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-707">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-708">
                  {"相互リンク"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-709">
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
              <div id="menu4" data-toggle-show="flex" data-inview className="el-710">
                <Link href="/committee" className="el-711">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-18">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-712">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
        <Image
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-713"
        />
      </section>
      <p className="box-47">
        <span
          className="crisp-svg svg-57"
        >
          <svg aria-hidden="true" width={854} height={131} viewBox="0 0 854 131" />
          <Image
            src="/assets/pasted-artwork-87.svg"
            alt=""
            width={1708}
            height={262}
          />
        </span>
      </p>
      <section className="box-48">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-15"
        />
      </section>
      <section className="box-49">
        <span
          className="crisp-svg pasted-artwork-svg-30"
        >
          <svg aria-hidden="true" width={510} height={109} viewBox="0 0 510 109" />
          <Image
            src="/assets/pasted-artwork-108.svg"
            alt=""
            width={1020}
            height={218}
          />
        </span>
      </section>
      <section className="box-165">
        <p className="box-166">
          {"・地下鉄烏丸線　松ヶ崎駅　徒歩 8分\n\n・叡山電車　一乗寺駅　徒歩 11分\n\n・叡山電車　修学院駅　徒歩 14分"}
        </p>
      </section>
      <section className="box-84">
        <span
          className="crisp-svg svg-80"
        >
          <svg aria-hidden="true" width={510} height={101} viewBox="0 0 510 101" />
          <Image
            src="/assets/pasted-artwork-109.svg"
            alt=""
            width={1020}
            height={202}
          />
        </span>
      </section>
      <section className="box-167">
        <p className="box-168">
          {"・市バス65号系統など　左京区総合庁舎・京都工芸繊維大学前　徒歩 1分\n\n\n・京都バス17・43号系統など　高野泉町　徒歩 4分\n\n\n・市バス松ヶ崎4号系統など　左京区総合庁舎前　徒歩 5分\n\n\n・市バス北8・65号系統など　松ヶ崎海尻町　徒歩 7分\n\n\n・市バス206・204号系統など　高木町　徒歩 8分"}
        </p>
      </section>
      <section className="box-85">
        <span
          className="crisp-svg svg-81"
        >
          <svg aria-hidden="true" width={298} height={106} viewBox="0 0 298 106" />
          <Image
            src="/assets/pasted-artwork-110.svg"
            alt=""
            width={596}
            height={212}
          />
        </span>
      </section>
      <section className="box-86">
        <p className="box-87">
          {"ご来場の際は、公共交通機関をご利用ください。 \n\n\n自家用車・タクシー・バイク・自転車・キックボードなどでの入構はご遠慮いただいております。\n\n\n自転車でご来場の方は、会場の案内係の指示に従い、指定の場所へ駐輪してください。\n\n\n構内の自転車走行は禁止されています。"}
        </p>
      </section>
      <section className="box-50">
        <span
          className="crisp-svg svg-58"
        >
          <svg aria-hidden="true" width={1089} height={710} viewBox="0 0 1089 710" />
          <Image
            src="/assets/pasted-artwork-88.svg"
            alt=""
            width={2178}
            height={1420}
          />
        </span>
      </section>
      <section className="box-51" />
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-7"
      />
    </>
  );
}
