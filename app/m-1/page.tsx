import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "m-1グランプリ",
  description: "松ヶ崎祭の出展投票企画、「m-1グランプリ」のページです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "m-1グランプリ",
    description: "松ヶ崎祭の出展投票企画、「m-1グランプリ」のページです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mswzfiqry" />
      <nav className="header-42">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2938"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-3\"}]}]"} className="el-2939">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-172"
          />
        </div>
        <div id="memu-p-3" data-toggle-show="flex" data-inview className="el-2940">
          <div className="box-962">
            <div className="el-2941">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-3\"}]}]"} className="el-2942">
                <span
                  className="crisp-svg svg-605"
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
            <div className="container-229">
              <p id="松ヶ崎祭について-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-3\"}]}]"} className="el-2943">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-3" data-toggle-show="flex" data-inview className="el-2944">
                <Link href="/about" id="松ヶ崎祭とは-p-3" className="button-765">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-3" className="button-766">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-3" className="button-767">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-3" className="button-768">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-3\"}]}]"} className="el-2945">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-3" data-toggle-show="flex" data-inview className="el-2946">
                <Link href="/search" id="言葉-p-3" className="button-769">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-3" className="button-770">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-3" className="button-771">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-3" className="button-772">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-3\"}]}]"} className="el-2947">
                {"ご案内"}
              </p>
              <div id="goannai-phone-3" data-toggle-show="flex" data-inview className="el-2948">
                <Link href="/attention" id="ご来場の-p-3" className="button-773">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-3" className="button-774">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-3" className="button-775">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-3" className="button-776">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-3" className="button-777">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-3\"}]}]"} className="el-2949">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-3" data-toggle-show="flex" data-inview className="el-2950">
                <Link href="/committee" id="委員会企画-p-3" className="button-778">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-3" className="button-779">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-3" className="button-780">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2951">
          <div className="container-230">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2952">
              <div className="el-2953">
                <div className="box-963">
                  <p className="text-740">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-741">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-742">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2954" />
              <div id="div-34" data-toggle-show="flex" className="el-2955">
                <div id="menu1-2" data-inview className="container-231">
                  <Link href="/about" className="el-2956">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2957">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2958">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2959">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2960" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2961">
              <div className="el-2962">
                <div className="box-964">
                  <p className="text-743">
                    {"きかく"}
                  </p>
                  <p className="text-744">
                    {"企画"}
                  </p>
                </div>
                <p className="text-745">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2963" />
              <div id="div-36" data-toggle-show="flex" className="el-2964">
                <div id="menu1-4" data-inview className="container-232">
                  <Link href="/search" className="el-2965">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2966">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2967">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2968">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2969" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2970">
              <div className="el-2971">
                <p className="text-746">
                  {"ご"}
                </p>
                <div className="box-965">
                  <p className="text-747">
                    {"あんない"}
                  </p>
                  <p className="text-748">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2972" />
              <div id="div-39" data-toggle-show="flex" className="el-2973">
                <div id="menu1-6" data-inview className="container-233">
                  <Link href="/attention" className="el-2974">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2975">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2976">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2977">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2978">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2979" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2980">
              <div className="el-2981">
                <div className="box-966">
                  <p className="text-749">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-750">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2982" />
              <div id="div-38" data-toggle-show="flex" className="el-2983">
                <div id="menu1-8" data-inview className="container-234">
                  <Link href="/committee" className="el-2984">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2985">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2986">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2987" />
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
        className="el-2988"
      />
      <p className="box-9">
        <span
          className="crisp-svg svg-3"
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
      <section className="box-12">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-14"
        />
      </section>
      <section className="box-10">
        <span
          className="crisp-svg svg-63"
          style={{ ["--crisp-svg-width"]: "559px", ["--crisp-svg-ratio"]: "559 / 116" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={559} height={116} viewBox="0 0 559 116" />
          <Image
            src="/assets/pasted-artwork-84.svg"
            alt=""
            width={1118}
            height={232}
          />
        </span>
      </section>
      <section className="box-18">
        <p className="box-85">
          {"「m-1グランプリ」は、来場者様みんなの投票によって、部門ごとのNo.1出展団体を決定する、松ヶ崎祭の目玉企画。\n\n\n来場者様一人ひとりの「いちばん良かった！」が、各部門の頂点を選び出すよ。\n\n\n見事1位に輝いた出展団体には、豪華商品が贈られるよ。"}
        </p>
      </section>
      <section className="box-86">
        <span
          className="crisp-svg svg-64"
          style={{ ["--crisp-svg-width"]: "354px", ["--crisp-svg-ratio"]: "354 / 114" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={354} height={114} viewBox="0 0 354 114" />
          <Image
            src="/assets/pasted-artwork-85.svg"
            alt=""
            width={708}
            height={228}
          />
        </span>
      </section>
      <section className="box-87">
        <span
          className="crisp-svg svg-65"
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
      <section className="box-88">
        <div className="box-89">
          <span
            className="crisp-svg svg-66"
            style={{ ["--crisp-svg-width"]: "351px", ["--crisp-svg-ratio"]: "351 / 325" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={351} height={325} viewBox="0 0 351 325" />
            <Image
              src="/assets/pasted-artwork-87.svg"
              alt=""
              width={702}
              height={650}
            />
          </span>
        </div>
        <div className="box-92">
          <Image
            src="/assets/pasted-artwork-90.svg"
            alt=""
            width={49}
            height={57}
            className="svg-69"
          />
        </div>
        <div className="box-90">
          <span
            className="crisp-svg svg-67"
            style={{ ["--crisp-svg-width"]: "345px", ["--crisp-svg-ratio"]: "345 / 286" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={345} height={286} viewBox="0 0 345 286" />
            <Image
              src="/assets/pasted-artwork-88.svg"
              alt=""
              width={690}
              height={572}
            />
          </span>
        </div>
        <div className="box-93">
          <Image
            src="/assets/pasted-artwork-90.svg"
            alt=""
            width={49}
            height={57}
            className="pasted-artwork-svg-29"
          />
        </div>
        <div className="box-91">
          <span
            className="crisp-svg svg-68"
            style={{ ["--crisp-svg-width"]: "343px", ["--crisp-svg-ratio"]: "343 / 286" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={343} height={286} viewBox="0 0 343 286" />
            <Image
              src="/assets/pasted-artwork-89.svg"
              alt=""
              width={686}
              height={572}
            />
          </span>
        </div>
      </section>
      <section className="el-24">
        <input id="field" type="text" className="input" name="field" placeholder="ここに　言葉を　入力してみてね" />
      </section>
      <section className="el-29">
        <Image
          src="/assets/pasted-artwork-15.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg"
        />
        <Image
          src="/assets/pasted-artwork-16.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-2"
        />
        <Image
          src="/assets/pasted-artwork-17.svg"
          alt=""
          width={138}
          height={49}
          className="pasted-artwork-svg-3"
        />
        <Image
          src="/assets/pasted-artwork-18.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-4"
        />
        <Image
          src="/assets/pasted-artwork-20.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-5"
        />
      </section>
      <section className="box-11">
        <span
          className="crisp-svg svg-70"
          style={{ ["--crisp-svg-width"]: "457px", ["--crisp-svg-ratio"]: "457 / 114" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={457} height={114} viewBox="0 0 457 114" />
          <Image
            src="/assets/pasted-artwork-91.svg"
            alt=""
            width={914}
            height={228}
          />
        </span>
      </section>
      <section className="box-19">
        <p className="box-94">
          {"全部で5部門に分かれているよ。\n\n\n5部門それぞれに１票づつ投票できるよ。"}
        </p>
        <div className="box-95">
          <span
            className="crisp-svg svg-71"
            style={{ ["--crisp-svg-width"]: "989px", ["--crisp-svg-ratio"]: "989 / 171" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={989} height={171} viewBox="0 0 989 171" />
            <Image
              src="/assets/pasted-artwork-92.svg"
              alt=""
              width={1978}
              height={342}
            />
          </span>
        </div>
        <p className="box-96">
          {"自分が投票した企画は「きみのしおり」から確認できるよ。\n\n\n5部門中3部門以上投票すると　豪華景品が当たる 「ちゅ〜せんかい」に 参加できるよ。"}
        </p>
        <p className="box-118">
          {"※個人出展は対象外となります。ご了承ください。"}
        </p>
      </section>
      <p data-inview className="box-117">
        <span
          className="crisp-svg svg-119"
          style={{ ["--crisp-svg-width"]: "352px", ["--crisp-svg-ratio"]: "352 / 279" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={352} height={279} viewBox="0 0 352 279" />
          <Image
            src="/assets/pasted-artwork-149.svg"
            alt=""
            width={704}
            height={558}
          />
        </span>
        <span
          className="crisp-svg pasted-artwork-svg-32"
          style={{ ["--crisp-svg-width"]: "1399px", ["--crisp-svg-ratio"]: "1399 / 238" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1399} height={238} viewBox="0 0 1399 238" />
          <Image
            src="/assets/pasted-artwork-148.svg"
            alt=""
            width={2798}
            height={476}
          />
        </span>
        <span
          className="crisp-svg svg-110"
          style={{ ["--crisp-svg-width"]: "1391px", ["--crisp-svg-ratio"]: "1391 / 39" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1391} height={39} viewBox="0 0 1391 39" />
          <Image
            src="/assets/pasted-artwork-129.svg"
            alt=""
            width={2782}
            height={78}
          />
        </span>
      </p>
      <section className="box-955" />
      <section data-inview className="el-2931">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2932">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-596"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-73">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-597"
          />
        </a>
        <span
          className="crisp-svg svg-598"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 347" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
      <section data-inview className="footer-36">
        <span
          className="crisp-svg pasted-artwork-svg-168"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1015" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2933">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-599"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-74">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-600"
          />
        </a>
      </section>
    </>
  );
}
