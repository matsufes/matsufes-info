import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description: "松ヶ崎祭に関するよくあるご質問をご紹介します。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "よくあるご質問",
    description: "松ヶ崎祭に関するよくあるご質問をご紹介します。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mw0g8eucm0eorg" />
      <nav className="header-26">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2053"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-2054">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-100"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-2065">
          <div className="box-820">
            <div className="el-2056">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-2055">
                <span
                  className="crisp-svg svg-402"
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
            <div className="container-139">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-2057">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-2058">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-506">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-507">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-508">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-509">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-2059">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-2060">
                <Link href="/search" id="言葉-p-2" className="button-510">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-511">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-512">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-513">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-2061">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-2062">
                <Link href="/attention" id="ご来場の-p-2" className="button-514">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-515">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p-2" className="button-516">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p-2" className="button-517">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-518">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-2063">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-2064">
                <Link href="/committee" id="委員会企画-p-2" className="button-519">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-520">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-521">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2102">
          <div className="container-144">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2074">
              <div className="el-2066">
                <div className="box-821">
                  <p className="text-553">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-554">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-555">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2067" />
              <div id="div-34" data-toggle-show="flex" className="el-2073">
                <div id="menu1-2" data-inview className="container-140">
                  <Link href="/about" className="el-2068">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2069">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2070">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2071">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2072" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2083">
              <div className="el-2075">
                <div className="box-822">
                  <p className="text-556">
                    {"きかく"}
                  </p>
                  <p className="text-557">
                    {"企画"}
                  </p>
                </div>
                <p className="text-558">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2076" />
              <div id="div-36" data-toggle-show="flex" className="el-2082">
                <div id="menu1-4" data-inview className="container-141">
                  <Link href="/search" className="el-2077">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2078">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2079">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2080">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2081" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2093">
              <div className="el-2084">
                <p className="text-559">
                  {"ご"}
                </p>
                <div className="box-823">
                  <p className="text-560">
                    {"あんない"}
                  </p>
                  <p className="text-561">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2085" />
              <div id="div-39" data-toggle-show="flex" className="el-2092">
                <div id="menu1-6" data-inview className="container-142">
                  <Link href="/attention" className="el-2086">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2087">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2088">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2089">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2090">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2091" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2101">
              <div className="el-2094">
                <div className="box-824">
                  <p className="text-562">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-563">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2095" />
              <div id="div-38" data-toggle-show="flex" className="el-2100">
                <div id="menu1-8" data-inview className="container-143">
                  <Link href="/committee" className="el-2096">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2097">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2098">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2099" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/pasted-artwork-217.svg"
        alt=""
        width={1440}
        height={489}
        className="el-2367"
      />
      <p className="box-825">
        <span
          className="crisp-svg svg-403"
          style={{ ["--crisp-svg-width"]: "735px", ["--crisp-svg-ratio"]: "735 / 130" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={735} height={130} viewBox="0 0 735 130" />
          <Image
            src="/assets/pasted-artwork-73.svg"
            alt=""
            width={1470}
            height={260}
          />
        </span>
      </p>
      <section className="box-826">
        <Image
          src="/assets/pasted-artwork-282.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-142"
        />
      </section>
      <section className="box-827">
        <div id="Q-8" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-8\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"8-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"8-2\"}]}]"} className="q-8-2">
          <p className="text-564">
            {"第56回松ヶ崎祭の開催場所と日時を教えてください。"}
          </p>
          <div className="button-522">
            <Image id="8-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2377"
            />
            <Image id="8-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2378"
            />
          </div>
        </div>
        <p id="A-8" data-toggle-show="flex" className="a-8-2">
          {"第56回松ヶ崎祭は、京都工芸繊維大学松ヶ崎キャンパスで、2026年11月13日(金)17:00ー19:10、11月14日(土)10:00ー20:30、11月15日(日)10:00ー17:00に開催されます。"}
        </p>
        <div id="Q-1" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"1-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"1-2\"}]}]"} className="q-1-2">
          <p className="text-565">
            {"松ヶ崎祭の入場に必要な手続きなどはありますか？"}
          </p>
          <div className="button-523">
            <Image id="1-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2379"
            />
            <Image id="1-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2380"
            />
          </div>
        </div>
        <p id="A-1" data-toggle-show="flex" className="a-1-2">
          {"特にございません。どなたでも無料でご入場いただけます。"}
        </p>
        <div id="Q-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-2\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"2-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"2-2\"}]}]"} className="q-2-2">
          <p className="text-566">
            {"雨の場合でも開催されますか？"}
          </p>
          <div className="button-524">
            <Image id="2-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2381"
            />
            <Image id="2-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2382"
            />
          </div>
        </div>
        <p id="A-2" data-toggle-show="flex" className="a-2-2">
          {"雨天決行ですが、荒天の場合はステージや屋外の一部企画が中止となる可能性があります。\n詳しくは公式SNSをご確認ください。"}
        </p>
        <div id="Q-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-3\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"3-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"3-2\"}]}]"} className="q-3-2">
          <p className="text-567">
            {"公式パンフレットはどこでもらえますか？"}
          </p>
          <div className="button-525">
            <Image id="3-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2383"
            />
            <Image id="3-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2384"
            />
          </div>
        </div>
        <p id="A-3" data-toggle-show="flex" className="a-3-2">
          {"本部、西案内所にて無料で配布しております。\n数に限りがあるため、なくなり次第配布を終了する場合があります。"}
        </p>
        <div id="Q-4" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-4\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"4-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"4-2\"}]}]"} className="q-4-2">
          <p className="text-568">
            {"落とし物に関するご質問"}
          </p>
          <div className="button-526">
            <Image id="4-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2385"
            />
            <Image id="4-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2386"
            />
          </div>
        </div>
        <p id="A-4" data-toggle-show="flex" className="a-4-2">
          {"①落とし物をしてしまいました。どうすればいいでしょうか。\n▶︎本部までお越しください。落とし物が届いているかスタッフが確認いたします。見つからない場合も、スタッフで引き続き捜索し、見つかり次第ご連絡いたします。\n\n②落とし物を見つけました。\n▶︎お手数ですが、本部までお持ちください。\n\n③落とし物はいつまで保管していますか？\n▶︎11月17日(火)10:00まで松ヶ崎祭実行委員会が保管いたします。下記のお問い合わせフォームよりご連絡ください。11月17日(火)10:00以降は、京都府左京警察署へ移管いたします。お手数ですが京都府左京警察署へお問い合わせください。"}
        </p>
        <div id="Q-5" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-5\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"5-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"5-2\"}]}]"} className="q-5-2">
          <p className="text-569">
            {"一緒に来た人とはぐれてしまいました。どうすればいいでしょうか。"}
          </p>
          <div className="button-527">
            <Image id="5-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2387"
            />
            <Image id="5-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2388"
            />
          </div>
        </div>
        <p id="A-5" data-toggle-show="flex" className="a-5-2">
          {"本部までお越しください。スタッフが状況をお伺いし、再び合流できるようお手伝いいたします。"}
        </p>
        <div id="Q-6" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-6\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"6-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"6-2\"}]}]"} className="q-6-2">
          <p className="text-570">
            {"飲食・休憩などをできる場所はありますか？"}
          </p>
          <div className="button-528">
            <Image id="6-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2389"
            />
            <Image id="6-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2390"
            />
          </div>
        </div>
        <p id="A-6" data-toggle-show="flex" className="a-6-2">
          {"飲食可能な休憩所をご用意していますので、そちらをご利用ください。\n休憩所の場所については「地図からさがす」ページよりご確認ください。"}
        </p>
        <div id="Q-7" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-7\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"7-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"7-2\"}]}]"} className="q-7-2">
          <p className="text-571">
            {"授乳やおむつ交換をすることができる場所はありますか。"}
          </p>
          <div className="button-529">
            <Image id="7-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2391"
            />
            <Image id="7-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2392"
            />
          </div>
        </div>
        <p id="A-7" data-toggle-show="flex" className="a-7-2">
          {"京都工芸繊維大学 美術工芸資料館１階にございます。\n詳しい場所については「地図からさがす」ページよりご確認ください。"}
        </p>
        <div id="Q-9" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-9\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"9-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"9-2\"}]}]"} className="q-9-2">
          <p className="text-572">
            {"車やバイクでの来場はできますか？"}
          </p>
          <div className="button-530">
            <Image id="9-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2393"
            />
            <Image id="9-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2394"
            />
          </div>
        </div>
        <p id="A-9" data-toggle-show="flex" className="a-9-2">
          {"お控えいただいております。ご来場の際は、公共交通機関をご利用ください。"}
        </p>
        <div id="Q-10" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-10\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"10-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"10-2\"}]}]"} className="q-10-2">
          <p className="text-573">
            {"駐輪場はありますか？"}
          </p>
          <div className="button-531">
            <Image id="10-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2395"
            />
            <Image id="10-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2396"
            />
          </div>
        </div>
        <p id="A-10" data-toggle-show="flex" className="a-10-2">
          {"ございます。詳しい場所は、「地図からさがす」ページよりご確認ください。"}
        </p>
        <div id="Q-11" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-11\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"11-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"11-2\"}]}]"} className="q-11-2">
          <p className="text-574">
            {"ペットを連れてきてもいいですか？"}
          </p>
          <div className="button-532">
            <Image id="11-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2397"
            />
            <Image id="11-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2398"
            />
          </div>
        </div>
        <p id="A-11" data-toggle-show="flex" className="a-11-2">
          {"ペットの同伴は、介助犬を除きご遠慮いただいております。"}
        </p>
        <div id="Q-12" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-12\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"12-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"12-2\"}]}]"} className="q-12-2">
          <p className="text-575">
            {"構内での飲酒・喫煙は可能ですか？"}
          </p>
          <div className="button-533">
            <Image id="12-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2399"
            />
            <Image id="12-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2400"
            />
          </div>
        </div>
        <p id="A-12" data-toggle-show="flex" className="a-12-2">
          {"構内は禁酒・禁煙です。泥酔状態でのご来場や酒類の持ち込みもお控えください。\n※指定喫煙所のみ喫煙が可能です。"}
        </p>
        <div id="Q-13" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-13\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"13-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"13-2\"}]}]"} className="q-13-2">
          <p className="text-576">
            {"電子決済は可能ですか？"}
          </p>
          <div className="button-534">
            <Image id="13-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2401"
            />
            <Image id="13-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2402"
            />
          </div>
        </div>
        <p id="A-13" data-toggle-show="flex" className="a-13-2">
          {"一部の企画・本部・西案内所ではPayPayの使用が可能ですが、現金の持参を推奨いたします。"}
        </p>
        <div id="Q-14" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-14\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"14-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"14-2\"}]}]"} className="q-14-2">
          <p className="text-577">
            {"委員会企画とは何ですか？"}
          </p>
          <div className="button-535">
            <Image id="14-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2403"
            />
            <Image id="14-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2404"
            />
          </div>
        </div>
        <p id="A-14" data-toggle-show="flex" className="a-14-2">
          {"松ヶ崎祭実行委員会によって実施される企画です。\n企画の詳細や開催日時は「委員会企画」ページをご確認ください。"}
        </p>
        <div id="Q-15" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"A-15\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"15-1\"}]},{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"15-2\"}]}]"} className="q-15-2">
          <p className="text-578">
            {"公式メンバー「まつぴよ」に会える企画はありますか？"}
          </p>
          <div className="button-536">
            <Image id="15-1" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2405"
            />
            <Image id="15-2" data-toggle-show="block"
              src="/assets/pasted-artwork-301.svg"
              alt=""
              width={44}
              height={28}
              className="el-2406"
            />
          </div>
        </div>
        <p id="A-15" data-toggle-show="flex" className="a-15-2">
          {"まつぴよグリーティングやストリートパフォーマンスで会うことができます。\n詳しくは「公式メンバー「まつぴよ」」ページからご確認ください。"}
        </p>
      </section>
      <section data-inview className="el-2342">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2343">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-125"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-59">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-126"
          />
        </a>
        <span
          className="crisp-svg svg-451"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-278.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-29">
        <span
          className="crisp-svg svg-452"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2344">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={58}
            height={58}
            className="svg-453"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-60">
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={54}
            height={49}
            className="svg-454"
          />
        </a>
      </section>
    </>
  );
}
