import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "相互リンク",
  description: "松ヶ崎祭HPの相互リンクです。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
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
          className="el-943"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-2\"}]}]"} className="el-944">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-60"
          />
        </div>
        <div id="memu-p-2" data-toggle-show="flex" data-inview className="el-945">
          <div className="box-515">
            <div className="el-946">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-2\"}]}]"} className="el-947">
                <span
                  className="crisp-svg svg-203"
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
            <div className="container-49">
              <p id="松ヶ崎祭について-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-2\"}]}]"} className="el-948">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-2" data-toggle-show="flex" data-inview className="el-949">
                <Link href="/about" id="松ヶ崎祭とは-p-2" className="button-221">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-2" className="button-222">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-2" className="button-223">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-2" className="button-224">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-2\"}]}]"} className="el-950">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-2" data-toggle-show="flex" data-inview className="el-951">
                <Link href="/search" id="言葉-p-2" className="button-225">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-2" className="button-226">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-2" className="button-227">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p-2" className="button-228">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-2\"}]}]"} className="el-952">
                {"ご案内"}
              </p>
              <div id="goannai-phone-2" data-toggle-show="flex" data-inview className="el-953">
                <Link href="/attention" id="ご来場の-p-2" className="button-229">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-2" className="button-230">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-2" className="button-231">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p-2" className="button-232">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-2" className="button-233">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-2\"}]}]"} className="el-954">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-2" data-toggle-show="flex" data-inview className="el-955">
                <Link href="/committee" id="委員会企画-p-2" className="button-234">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-2" className="button-235">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p-2" className="button-236">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-956">
          <div className="container-50">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-957">
              <div className="el-958">
                <div className="box-516">
                  <p className="text-272">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-273">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-274">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-959" />
              <div id="div-34" data-toggle-show="flex" className="el-960">
                <div id="menu1-2" data-inview className="container-51">
                  <Link href="/about" className="el-961">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-962">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-963">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-964">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-965" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-966">
              <div className="el-967">
                <div className="box-517">
                  <p className="text-275">
                    {"きかく"}
                  </p>
                  <p className="text-276">
                    {"企画"}
                  </p>
                </div>
                <p className="text-277">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-968" />
              <div id="div-36" data-toggle-show="flex" className="el-969">
                <div id="menu1-4" data-inview className="container-52">
                  <Link href="/search" className="el-970">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-971">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-972">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-973">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-974" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-975">
              <div className="el-976">
                <p className="text-278">
                  {"ご"}
                </p>
                <div className="box-518">
                  <p className="text-279">
                    {"あんない"}
                  </p>
                  <p className="text-280">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-977" />
              <div id="div-39" data-toggle-show="flex" className="el-978">
                <div id="menu1-6" data-inview className="container-53">
                  <Link href="/attention" className="el-979">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-980">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-981">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-982">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-983">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-984" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-985">
              <div className="el-986">
                <div className="box-519">
                  <p className="text-281">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-282">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-987" />
              <div id="div-38" data-toggle-show="flex" className="el-988">
                <div id="menu1-8" data-inview className="container-54">
                  <Link href="/committee" className="el-989">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-990">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-991">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-992" />
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
        className="el-993"
      />
      <p className="box-212">
        <span
          className="crisp-svg svg-569"
        >
          <svg aria-hidden="true" width={522} height={122} viewBox="0 0 522 122" />
          <Image
            src="/assets/pasted-artwork-359.svg"
            alt=""
            width={1044}
            height={244}
          />
        </span>
      </p>
      <section className="box-213">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-46"
        />
      </section>
      <section className="box-215">
        <p className="box-214">
          {"開催日程順に掲載しています。"}
        </p>
      </section>
      <section className="box-217">
        <span
          className="crisp-svg svg-173"
        >
          <svg aria-hidden="true" width={577} height={181} viewBox="0 0 577 181" />
          <Image
            src="/assets/pasted-artwork-182.svg"
            alt=""
            width={1154}
            height={362}
          />
        </span>
        <div className="box-216">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://trias.link/2026/\"}]}]"}
            className="crisp-svg el-319"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-137.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-218">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/akv65Tn4vQnYoEfP8?g_st=ic\"}]}]"}
          src="/assets/pasted-artwork-145.svg"
          alt=""
          width={326}
          height={66}
          className="google1"
        />
      </section>
      <section className="box-220">
        <span
          className="crisp-svg svg-174"
        >
          <svg aria-hidden="true" width={625} height={181} viewBox="0 0 625 181" />
          <Image
            src="/assets/pasted-artwork-181.svg"
            alt=""
            width={1250}
            height={362}
          />
        </span>
        <div className="box-219">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://geidaisai2026.com/\"}]}]"}
            className="crisp-svg el-320"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-137.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-221">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/ZnEXceuCtfmEXqbUA?g_st=il\"}]}]"}
          src="/assets/pasted-artwork-145.svg"
          alt=""
          width={326}
          height={66}
          className="google2"
        />
      </section>
      <section className="box-223">
        <span
          className="crisp-svg svg-175"
        >
          <svg aria-hidden="true" width={562} height={181} viewBox="0 0 562 181" />
          <Image
            src="/assets/pasted-artwork-146.svg"
            alt=""
            width={1124}
            height={362}
          />
        </span>
        <div className="box-222">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://kpufes.com/\"}]}]"}
            className="crisp-svg el-321"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-137.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-224">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/q7N6d7AU35q5W2HC7?g_st=in\"}]}]"}
          src="/assets/pasted-artwork-145.svg"
          alt=""
          width={326}
          height={66}
          className="google3"
        />
      </section>
      <section className="box-226">
        <span
          className="crisp-svg svg-176"
        >
          <svg aria-hidden="true" width={674} height={181} viewBox="0 0 674 181" />
          <Image
            src="/assets/pasted-artwork-147.svg"
            alt=""
            width={1348}
            height={362}
          />
        </span>
        <div className="box-225">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://nf.la/\"}]}]"}
            className="crisp-svg el-322"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-137.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-227">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://www.google.co.jp/maps/place/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6+%E5%90%89%E7%94%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9+%E6%9C%AC%E9%83%A8%E6%A7%8B%E5%86%85/@35.0271195,135.7786612,17z/data=!3m2!4b1!5s0x60010857f2d5c407:0xa51ccd9fd0612078!4m6!3m5!1s0x600108562446b2bb:0x17026e2b02f706d9!8m2!3d35.0271151!4d135.7812361!16s%2Fg%2F120x68zh?entry=ttu\\u0026g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D\"}]}]"}
          src="/assets/pasted-artwork-145.svg"
          alt=""
          width={326}
          height={66}
          className="google4"
        />
      </section>
      <section data-inview className="footer-8">
        <span
          className="crisp-svg pasted-artwork-svg-80"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1662">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-229"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-11">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-230"
          />
        </a>
      </section>
      <section data-inview className="el-1691">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1692">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-269"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-27">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-270"
          />
        </a>
        <span
          className="crisp-svg svg-271"
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
    </>
  );
}
