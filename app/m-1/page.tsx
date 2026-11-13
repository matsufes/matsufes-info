import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "②m-1グランプリ",
  description: "松ヶ崎祭の出展投票企画、「m-1グランプリ」のページです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "②m-1グランプリ",
    description: "松ヶ崎祭の出展投票企画、「m-1グランプリ」のページです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mwb06ie85q5g5p" />
      <nav className="header-43">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2993"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-3\"}]}]"} className="el-2994">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-173"
          />
        </div>
        <div id="memu-p-3" data-toggle-show="flex" data-inview className="el-3005">
          <div className="box-967">
            <div className="el-2996">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-3\"}]}]"} className="el-2995">
                <span
                  className="crisp-svg svg-606"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-235">
              <p id="松ヶ崎祭について-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-3\"}]}]"} className="el-2997">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-3" data-toggle-show="flex" data-inview className="el-2998">
                <Link href="/about" id="松ヶ崎祭とは-p-3" className="button-781">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-3" className="button-782">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-3" className="button-783">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-3" className="button-784">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-3\"}]}]"} className="el-2999">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-3" data-toggle-show="flex" data-inview className="el-3000">
                <Link href="/search" id="言葉-p-3" className="button-785">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-3" className="button-786">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-3" className="button-787">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-3" className="button-788">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-3\"}]}]"} className="el-3001">
                {"ご案内"}
              </p>
              <div id="goannai-phone-3" data-toggle-show="flex" data-inview className="el-3002">
                <Link href="/attention" id="ご来場の-p-3" className="button-789">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-3" className="button-790">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-3" className="button-791">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-3" className="button-792">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-3" className="button-793">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-3\"}]}]"} className="el-3003">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-3" data-toggle-show="flex" data-inview className="el-3004">
                <Link href="/committee" id="委員会企画-p-3" className="button-794">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-3" className="button-795">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-3" className="button-796">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-3042">
          <div className="container-240">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-3014">
              <div className="el-3006">
                <div className="box-968">
                  <p className="text-751">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-752">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-753">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-3007" />
              <div id="div-34" data-toggle-show="flex" className="el-3013">
                <div id="menu1-2" data-inview className="container-236">
                  <Link href="/about" className="el-3008">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-3009">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-3010">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-3011">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-3012" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-3023">
              <div className="el-3015">
                <div className="box-969">
                  <p className="text-754">
                    {"きかく"}
                  </p>
                  <p className="text-755">
                    {"企画"}
                  </p>
                </div>
                <p className="text-756">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-3016" />
              <div id="div-36" data-toggle-show="flex" className="el-3022">
                <div id="menu1-4" data-inview className="container-237">
                  <Link href="/search" className="el-3017">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-3018">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-3019">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-3020">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-3021" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-3033">
              <div className="el-3024">
                <p className="text-757">
                  {"ご"}
                </p>
                <div className="box-970">
                  <p className="text-758">
                    {"あんない"}
                  </p>
                  <p className="text-759">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-3025" />
              <div id="div-39" data-toggle-show="flex" className="el-3032">
                <div id="menu1-6" data-inview className="container-238">
                  <Link href="/attention" className="el-3026">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-3027">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-3028">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-3029">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-3030">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-3031" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-3041">
              <div className="el-3034">
                <div className="box-971">
                  <p className="text-760">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-761">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-3035" />
              <div id="div-38" data-toggle-show="flex" className="el-3040">
                <div id="menu1-8" data-inview className="container-239">
                  <Link href="/committee" className="el-3036">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-3037">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-3038">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-3039" />
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
        className="el-3043"
      />
      <p className="box-972">
        <span
          className="crisp-svg svg-607"
          style={{ ["--crisp-svg-width"]: "779px", ["--crisp-svg-ratio"]: "779 / 139" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={779} height={139} viewBox="0 0 779 139" />
          <Image
            src="/assets/pasted-artwork-27.svg"
            alt=""
            width={1558}
            height={278}
          />
        </span>
      </p>
      <section className="box-973">
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-179"
        />
      </section>
      <section className="box-974">
        <span
          className="crisp-svg svg-609"
          style={{ ["--crisp-svg-width"]: "565px", ["--crisp-svg-ratio"]: "565 / 118" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={565} height={118} viewBox="0 0 565 118" />
          <Image
            src="/assets/pasted-artwork-424.svg"
            alt=""
            width={1130}
            height={236}
          />
        </span>
      </section>
      <section className="box-976">
        <p className="box-975">
          {"「m-1グランプリ」は、来場者様みんなの投票によって、部門ごとのNo.1出展団体を決定する、松ヶ崎祭の目玉企画。\n\n\n来場者様一人ひとりの「いちばん良かった！」が、各部門の頂点を選び出すよ。\n\n\n見事1位に輝いた出展団体には、豪華商品が贈られるよ。"}
        </p>
      </section>
      <section className="box-977">
        <span
          className="crisp-svg svg-610"
          style={{ ["--crisp-svg-width"]: "358px", ["--crisp-svg-ratio"]: "358 / 121" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={358} height={121} viewBox="0 0 358 121" />
          <Image
            src="/assets/pasted-artwork-425.svg"
            alt=""
            width={716}
            height={242}
          />
        </span>
      </section>
      <section className="box-978">
        <span
          className="crisp-svg svg-608"
          style={{ ["--crisp-svg-width"]: "390px", ["--crisp-svg-ratio"]: "390 / 59" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={390} height={59} viewBox="0 0 390 59" />
          <Image
            src="/assets/pasted-artwork-86.svg"
            alt=""
            width={780}
            height={118}
          />
        </span>
      </section>
      <section className="box-984">
        <div className="box-979">
          <span
            className="crisp-svg svg-611"
            style={{ ["--crisp-svg-width"]: "351px", ["--crisp-svg-ratio"]: "351 / 320" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={351} height={320} viewBox="0 0 351 320" />
            <Image
              src="/assets/pasted-artwork-426.svg"
              alt=""
              width={702}
              height={640}
            />
          </span>
        </div>
        <div className="box-980">
          <Image
            src="/assets/pasted-artwork-429.svg"
            alt=""
            width={49}
            height={57}
            className="svg-614"
          />
        </div>
        <div className="box-981">
          <span
            className="crisp-svg svg-612"
            style={{ ["--crisp-svg-width"]: "345px", ["--crisp-svg-ratio"]: "345 / 281" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={345} height={281} viewBox="0 0 345 281" />
            <Image
              src="/assets/pasted-artwork-427.svg"
              alt=""
              width={690}
              height={562}
            />
          </span>
        </div>
        <div className="box-982">
          <Image
            src="/assets/pasted-artwork-429.svg"
            alt=""
            width={49}
            height={57}
            className="pasted-artwork-svg-180"
          />
        </div>
        <div className="box-983">
          <span
            className="crisp-svg svg-613"
            style={{ ["--crisp-svg-width"]: "343px", ["--crisp-svg-ratio"]: "343 / 281" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={343} height={281} viewBox="0 0 343 281" />
            <Image
              src="/assets/pasted-artwork-428.svg"
              alt=""
              width={686}
              height={562}
            />
          </span>
        </div>
      </section>
      <section className="el-3044">
        <input id="field" type="text" className="input-9" name="field" placeholder="ここに　言葉を　入力してみてね" />
      </section>
      <section className="el-3045">
        <Image
          src="/assets/pasted-artwork-15.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-174"
        />
        <Image
          src="/assets/pasted-artwork-16.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-175"
        />
        <Image
          src="/assets/pasted-artwork-17.svg"
          alt=""
          width={138}
          height={49}
          className="pasted-artwork-svg-176"
        />
        <Image
          src="/assets/pasted-artwork-18.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-177"
        />
        <Image
          src="/assets/pasted-artwork-20.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-178"
        />
      </section>
      <section className="box-985">
        <span
          className="crisp-svg svg-615"
          style={{ ["--crisp-svg-width"]: "452px", ["--crisp-svg-ratio"]: "452 / 122" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={452} height={122} viewBox="0 0 452 122" />
          <Image
            src="/assets/pasted-artwork-430.svg"
            alt=""
            width={904}
            height={244}
          />
        </span>
      </section>
      <section className="box-990">
        <p className="box-986">
          {"全部で5部門に分かれているよ。\n\n\n5部門それぞれに１票づつ投票できるよ。"}
        </p>
        <div className="box-987">
          <span
            className="crisp-svg svg-616"
            style={{ ["--crisp-svg-width"]: "989px", ["--crisp-svg-ratio"]: "989 / 171" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={989} height={171} viewBox="0 0 989 171" />
            <Image
              src="/assets/pasted-artwork-431.svg"
              alt=""
              width={1978}
              height={342}
            />
          </span>
        </div>
        <p className="box-988">
          {"自分が投票した企画は「きみのしおり」から確認できるよ。\n\n\n5部門中3部門以上投票すると　豪華景品が当たる 「ちゅ〜せんかい」に 参加できるよ。"}
        </p>
        <p className="box-989">
          {"※個人出展は対象外となります。ご了承ください。"}
        </p>
      </section>
      <p data-inview className="box-991">
        <span
          className="crisp-svg svg-623"
          style={{ ["--crisp-svg-width"]: "1095px", ["--crisp-svg-ratio"]: "1095 / 670" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1095} height={670} viewBox="0 0 1095 670" />
          <Image
            src="/assets/pasted-artwork-435.svg"
            alt=""
            width={2190}
            height={1340}
          />
        </span>
        <span
          className="crisp-svg svg-617"
          style={{ ["--crisp-svg-width"]: "1399px", ["--crisp-svg-ratio"]: "1399 / 238" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1399} height={238} viewBox="0 0 1399 238" />
          <Image
            src="/assets/pasted-artwork-432.svg"
            alt=""
            width={2798}
            height={476}
          />
        </span>
        <span
          className="crisp-svg svg-618"
          style={{ ["--crisp-svg-width"]: "1407px", ["--crisp-svg-ratio"]: "1407 / 44" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1407} height={44} viewBox="0 0 1407 44" />
          <Image
            src="/assets/pasted-artwork-433.svg"
            alt=""
            width={2814}
            height={88}
          />
        </span>
      </p>
      <section className="box-992" />
      <section data-inview className="el-3046">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-3047">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-181"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-75">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-182"
          />
        </a>
        <span
          className="crisp-svg svg-619"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-282.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-37">
        <span
          className="crisp-svg svg-620"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-279.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-3048">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-621"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-76">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-622"
          />
        </a>
      </section>
    </>
  );
}
