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
      <section className="el-633">
        <div className="el-634">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-635">
            <span
              className="crisp-svg pasted-artwork-svg-58"
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
          <div id="memu-p" data-toggle-show="flex" className="el-636">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-637">
              <span
                className="crisp-svg svg-246"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-638">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-639">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-640">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-641">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-642">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-204">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-205">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-206">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-207">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-643">
              <Link href="/search" id="言葉-p" className="button-208">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-209">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-210">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-211">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-644">
              <Link href="/attention" id="ご来場の-p" className="button-212">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-213">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-214">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-215">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-216">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-645">
              <Link href="/committee" id="委員会企画-p" className="button-217">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-218">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-219">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-646"
          />
          <div className="el-647">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-648" data-p="">
              <span
                className="crisp-svg svg-247"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-649">
                <Link href="/about" className="el-650">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-14">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-651">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-652">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-653" data-p="">
              <span
                className="crisp-svg svg-248"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-654">
                <Link href="/search" className="el-655">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-656">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-657">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-658">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-659" data-p="">
              <span
                className="crisp-svg svg-249"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-660">
                <Link href="/attention" className="el-661">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-662">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-663">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-664">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-665">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-666" data-p="">
              <span
                className="crisp-svg svg-250"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-667">
                <Link href="/committee" className="el-668">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-17">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-669">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-670"
        />
      </section>
      <p className="box-216">
        <span
          className="crisp-svg svg-215"
        >
          <svg aria-hidden="true" width={522} height={122} viewBox="0 0 522 122" />
          <Image
            src="/assets/pasted-artwork-239.svg"
            alt=""
            width={1044}
            height={244}
          />
        </span>
      </p>
      <section className="box-217">
        <Image
          src="/assets/pasted-artwork-101.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-51"
        />
      </section>
      <section className="box-219">
        <p className="box-218">
          {"開催日程順に掲載しています。"}
        </p>
      </section>
      <section className="box-221">
        <span
          className="crisp-svg svg-211"
        >
          <svg aria-hidden="true" width={577} height={181} viewBox="0 0 577 181" />
          <Image
            src="/assets/pasted-artwork-217.svg"
            alt=""
            width={1154}
            height={362}
          />
        </span>
        <div className="box-220">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://trias.link/2026/\"}]}]"}
            className="crisp-svg el-401"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-167.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-222">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/akv65Tn4vQnYoEfP8?g_st=ic\"}]}]"}
          src="/assets/pasted-artwork-176.svg"
          alt=""
          width={326}
          height={66}
          className="google1"
        />
      </section>
      <section className="box-224">
        <span
          className="crisp-svg svg-212"
        >
          <svg aria-hidden="true" width={625} height={181} viewBox="0 0 625 181" />
          <Image
            src="/assets/pasted-artwork-216.svg"
            alt=""
            width={1250}
            height={362}
          />
        </span>
        <div className="box-223">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://geidaisai2026.com/\"}]}]"}
            className="crisp-svg el-402"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-167.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-225">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/ZnEXceuCtfmEXqbUA?g_st=il\"}]}]"}
          src="/assets/pasted-artwork-176.svg"
          alt=""
          width={326}
          height={66}
          className="google2"
        />
      </section>
      <section className="box-227">
        <span
          className="crisp-svg svg-213"
        >
          <svg aria-hidden="true" width={562} height={181} viewBox="0 0 562 181" />
          <Image
            src="/assets/pasted-artwork-177.svg"
            alt=""
            width={1124}
            height={362}
          />
        </span>
        <div className="box-226">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://kpufes.com/\"}]}]"}
            className="crisp-svg el-403"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-167.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-228">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://maps.app.goo.gl/q7N6d7AU35q5W2HC7?g_st=in\"}]}]"}
          src="/assets/pasted-artwork-176.svg"
          alt=""
          width={326}
          height={66}
          className="google3"
        />
      </section>
      <section className="box-230">
        <span
          className="crisp-svg svg-214"
        >
          <svg aria-hidden="true" width={674} height={181} viewBox="0 0 674 181" />
          <Image
            src="/assets/pasted-artwork-178.svg"
            alt=""
            width={1348}
            height={362}
          />
        </span>
        <div className="box-229">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://nf.la/\"}]}]"}
            className="crisp-svg el-404"
          >
            <svg aria-hidden="true" width={406} height={191} viewBox="0 0 406 191" />
            <Image
              src="/assets/pasted-artwork-167.svg"
              alt=""
              width={812}
              height={382}
            />
          </span>
        </div>
      </section>
      <section className="box-231">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://www.google.co.jp/maps/place/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6+%E5%90%89%E7%94%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9+%E6%9C%AC%E9%83%A8%E6%A7%8B%E5%86%85/@35.0271195,135.7786612,17z/data=!3m2!4b1!5s0x60010857f2d5c407:0xa51ccd9fd0612078!4m6!3m5!1s0x600108562446b2bb:0x17026e2b02f706d9!8m2!3d35.0271151!4d135.7812361!16s%2Fg%2F120x68zh?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D\"}]}]"}
          src="/assets/pasted-artwork-176.svg"
          alt=""
          width={326}
          height={66}
          className="google4"
        />
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-22"
      />
    </>
  );
}
