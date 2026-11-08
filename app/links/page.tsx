import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "相互リンク",
  description: "松ヶ崎祭HPの相互リンクです。",
  openGraph: {
    title: "相互リンク",
    description: "松ヶ崎祭HPの相互リンクです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv6o9vxe2u" />
      <nav className="header-11">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-1008"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-1009">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-61"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-1010">
          <div className="box-537">
            <div className="el-1011">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-1012">
                <span
                  className="crisp-svg svg-209"
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
            <div className="container-49">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-1013">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-1014">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-236">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-237">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-238">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-239">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-1015">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-1016">
                <Link href="/search" id="言葉-p-2" className="button-240">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-241">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-242">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-243">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-1017">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-1018">
                <Link href="/attention" id="ご来場の-p-2" className="button-244">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-245">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-246">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-247">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-248">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-1019">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-1020">
                <Link href="/committee" id="委員会企画-p-2" className="button-249">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-250">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-251">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1021">
          <div className="container-50">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1022">
              <div className="el-1023">
                <div className="box-538">
                  <p className="text-292">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-293">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-294">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1024" />
              <div id="div-34" data-toggle-show="flex" className="el-1025">
                <div id="menu1-2" data-inview className="container-51">
                  <Link href="/about" className="el-1026">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1027">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1028">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1029">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1030" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1031">
              <div className="el-1032">
                <div className="box-539">
                  <p className="text-295">
                    {"きかく"}
                  </p>
                  <p className="text-296">
                    {"企画"}
                  </p>
                </div>
                <p className="text-297">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1033" />
              <div id="div-36" data-toggle-show="flex" className="el-1034">
                <div id="menu1-4" data-inview className="container-52">
                  <Link href="/search" className="el-1035">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1036">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1037">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1038">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1039" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1040">
              <div className="el-1041">
                <p className="text-298">
                  {"ご"}
                </p>
                <div className="box-540">
                  <p className="text-299">
                    {"あんない"}
                  </p>
                  <p className="text-300">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1042" />
              <div id="div-39" data-toggle-show="flex" className="el-1043">
                <div id="menu1-6" data-inview className="container-53">
                  <Link href="/attention" className="el-1044">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1045">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1046">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1047">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1048">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1049" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1050">
              <div className="el-1051">
                <div className="box-541">
                  <p className="text-301">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-302">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1052" />
              <div id="div-38" data-toggle-show="flex" className="el-1053">
                <div id="menu1-8" data-inview className="container-54">
                  <Link href="/committee" className="el-1054">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1055">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1056">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1057" />
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
        className="el-1058"
      />
      <p className="box-215">
        <span
          className="crisp-svg svg-583"
        >
          <svg aria-hidden="true" width={522} height={122} viewBox="0 0 522 122" />
          <Image
            src="/assets/pasted-artwork-374.svg"
            alt=""
            width={1044}
            height={244}
          />
        </span>
      </p>
      <section className="box-216">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-47"
        />
      </section>
      <section className="box-218">
        <p className="box-217">
          {"開催日程順に掲載しています。"}
        </p>
      </section>
      <section className="box-220">
        <span
          className="crisp-svg svg-179"
        >
          <svg aria-hidden="true" width={577} height={181} viewBox="0 0 577 181" />
          <Image
            src="/assets/pasted-artwork-184.svg"
            alt=""
            width={1154}
            height={362}
          />
        </span>
        <div className="box-219">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://trias.link/2026/\"}]}]"}
            className="crisp-svg el-353"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-139.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-221">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/akv65Tn4vQnYoEfP8?g_st=ic\"}]}]"}
          src="/assets/pasted-artwork-147.svg"
          alt=""
          width={326}
          height={66}
          className="google1"
        />
      </section>
      <section className="box-223">
        <span
          className="crisp-svg svg-180"
        >
          <svg aria-hidden="true" width={625} height={181} viewBox="0 0 625 181" />
          <Image
            src="/assets/pasted-artwork-183.svg"
            alt=""
            width={1250}
            height={362}
          />
        </span>
        <div className="box-222">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://geidaisai2026.com/\"}]}]"}
            className="crisp-svg el-354"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-139.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-224">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/ZnEXceuCtfmEXqbUA?g_st=il\"}]}]"}
          src="/assets/pasted-artwork-147.svg"
          alt=""
          width={326}
          height={66}
          className="google2"
        />
      </section>
      <section className="box-226">
        <span
          className="crisp-svg svg-181"
        >
          <svg aria-hidden="true" width={562} height={181} viewBox="0 0 562 181" />
          <Image
            src="/assets/pasted-artwork-148.svg"
            alt=""
            width={1124}
            height={362}
          />
        </span>
        <div className="box-225">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://kpufes.com/\"}]}]"}
            className="crisp-svg el-355"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-139.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-227">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/q7N6d7AU35q5W2HC7?g_st=in\"}]}]"}
          src="/assets/pasted-artwork-147.svg"
          alt=""
          width={326}
          height={66}
          className="google3"
        />
      </section>
      <section className="box-229">
        <span
          className="crisp-svg svg-182"
        >
          <svg aria-hidden="true" width={674} height={181} viewBox="0 0 674 181" />
          <Image
            src="/assets/pasted-artwork-149.svg"
            alt=""
            width={1348}
            height={362}
          />
        </span>
        <div className="box-228">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://nf.la/\"}]}]"}
            className="crisp-svg el-356"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-139.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-230">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://www.google.co.jp/maps/place/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6+%E5%90%89%E7%94%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9+%E6%9C%AC%E9%83%A8%E6%A7%8B%E5%86%85/@35.0271195,135.7786612,17z/data=!3m2!4b1!5s0x60010857f2d5c407:0xa51ccd9fd0612078!4m6!3m5!1s0x600108562446b2bb:0x17026e2b02f706d9!8m2!3d35.0271151!4d135.7812361!16s%2Fg%2F120x68zh?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D\"}]}]"}
          src="/assets/pasted-artwork-147.svg"
          alt=""
          width={326}
          height={66}
          className="google4"
        />
      </section>
      <section data-inview className="footer-8">
        <span
          className="crisp-svg pasted-artwork-svg-81"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1727">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-235"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-11">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-236"
          />
        </a>
      </section>
      <section data-inview className="el-1756">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1757">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-275"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-27">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-276"
          />
        </a>
        <span
          className="crisp-svg svg-277"
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
