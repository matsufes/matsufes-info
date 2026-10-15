import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
  description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
  openGraph: {
    title: "第56回松ヶ崎祭 | 夢宙 むちゅ〜",
    description: "京都工芸繊維大学の学祭、松ヶ崎祭 公式サイトです！ 今年のメインテーマは「夢宙 むちゅ〜」 2026年11月13日(きん)〜11月15日(にち)開催",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msleaffe1" />
      <section id="memu-p" data-toggle-show="flex" className="el-112">
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-113">
          <span
            className="crisp-svg svg-133"
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
        <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-114">
          {"松ヶ崎祭について"}
        </p>
        <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-115">
          {"企画さがし"}
        </p>
        <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-116">
          {"ご案内"}
        </p>
        <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-117">
          {"公式特集"}
        </p>
        <div id="mf-phone" data-toggle-show="flex" className="el-118">
          <Link href="/about" id="松ヶ崎祭とは-p" className="button">
            {"松ヶ崎祭とは"}
          </Link>
          <Link href="/theme" id="mf56-p" className="button-2">
            {"mf56メインテ〜マ"}
          </Link>
          <Link href="/sponsor" id="協賛-p" className="button-3">
            {"ご協賛いただいた皆さま"}
          </Link>
          <Link href="/notice" id="お知らせ-p" className="button-4">
            {"お知らせ"}
          </Link>
        </div>
        <div id="kikaku-phone" data-toggle-show="flex" className="el-119">
          <Link href="/search" id="言葉-p" className="button-5">
            {"言葉からさがす"}
          </Link>
          <Link href="/schedule/0" id="日程表-p" className="button-6">
            {"日程表からさがす"}
          </Link>
          <Link href="/navigation" id="地図-p" className="button-7">
            {"地図からさがす"}
          </Link>
          <Link href="/mypage" id="しおり-p" className="button-8">
            {"きみのしおり\n"}
          </Link>
        </div>
        <div id="goannai-phone" data-toggle-show="flex" className="el-120">
          <Link href="/attention" id="ご来場の-p" className="button-9">
            {"ご来場の皆さまへ"}
          </Link>
          <Link href="/access" id="行き方-p" className="button-10">
            {"行き方・会場地図"}
          </Link>
          <Link href="/comingsoon" id="アンケ〜ト-p" className="button-11">
            {"来場者アンケ〜ト"}
          </Link>
          <Link href="/comingsoon" id="ご質問-p" className="button-12">
            {"よくあるご質問"}
          </Link>
          <Link href="/links" id="相互リンク-p" className="button-107">
            {"相互リンク"}
          </Link>
        </div>
        <div id="koushiki-phone" data-toggle-show="flex" className="el-121">
          <Link href="/committee" id="委員会企画-p" className="button-13">
            {"委員会企画"}
          </Link>
          <Link href="/m-1" id="m-1-p" className="button-14">
            {"m-1グランプリ"}
          </Link>
          <Link href="/comingsoon" id="まつぴよ-p" className="button-15">
            {"公式メンバ〜「まつぴよ」"}
          </Link>
        </div>
      </section>
      <section className="el">
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-111">
          <span
            className="crisp-svg pasted-artwork-svg-40"
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
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/pasted-artwork-224.svg"
          alt=""
          width={213}
          height={213}
          className="el-176"
        />
        <div className="el-2">
          <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-3">
            <span
              className="crisp-svg svg"
            >
              <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={488}
                height={110}
              />
            </span>
            <div id="menu1" data-toggle-show="flex" data-inview className="el-7">
              <Link href="/about" className="el-8">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" className="mf56">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" className="el-9">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" className="el-10">
                {"お知らせ"}
              </Link>
            </div>
          </p>
          <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-5">
            <span
              className="crisp-svg svg-2"
            >
              <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={306}
                height={110}
              />
            </span>
            <div id="menu2" data-toggle-show="flex" data-inview className="el-11">
              <Link href="/search" className="el-12">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" className="el-13">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" className="el-14">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" className="el-15">
                {"きみのしおり"}
              </Link>
            </div>
          </p>
          <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-49">
            <span
              className="crisp-svg svg-4"
            >
              <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={186}
                height={122}
              />
            </span>
            <div id="menu3" data-toggle-show="flex" data-inview className="el-16">
              <Link href="/attention" className="el-17">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" className="el-18">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" className="el-19">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" className="el-20">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" className="el-405">
                {"相互リンク"}
              </Link>
            </div>
          </p>
          <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-4">
            <span
              className="crisp-svg svg-3"
            >
              <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={254}
                height={116}
              />
            </span>
            <div id="menu4" data-toggle-show="flex" data-inview className="el-21">
              <Link href="/committee" className="el-22">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" className="m-1">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" className="el-23">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </p>
        </div>
      </section>
      <section className="el-88">
        <div data-inview className="el-93">
          <Image
            src="/assets/image.svg"
            alt=""
            width={1920}
            height={1312}
            className="svg-71"
          />
        </div>
        <div data-inview className="el-89">
          <Image
            src="/assets/IMG_3053.PNG"
            alt=""
            width={2480}
            height={3508}
            className="img-3053-png"
          />
        </div>
        <div className="box-159">
          <div className="el-90">
            <Image
              src="/assets/56-.svg"
              alt=""
              width={267}
              height={150}
              className="el-91"
            />
          </div>
          <div className="el-92">
            <span
              className="crisp-svg svg-70"
            >
              <svg aria-hidden="true" width={677} height={352} viewBox="0 0 677 352" />
              <Image
                src="/assets/image-4.svg"
                alt=""
                width={1354}
                height={704}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el-6">
        <div className="el-94">
          <span
            className="crisp-svg pasted-artwork-svg-25"
          >
            <svg aria-hidden="true" width={674} height={215} viewBox="0 0 674 215" />
            <Image
              src="/assets/pasted-artwork-41.svg"
              alt=""
              width={1348}
              height={430}
            />
          </span>
        </div>
      </section>
      <section className="box-73">
        <Link href="/navigation" className="el-95">
          <span
            className="crisp-svg svg-72"
          >
            <svg aria-hidden="true" width={172} height={454} viewBox="0 0 172 454" />
            <Image
              src="/assets/pasted-artwork-102.svg"
              alt=""
              width={344}
              height={908}
            />
          </span>
        </Link>
        <Link href="/search" className="el-96">
          <Image
            src="/assets/pasted-artwork-103.svg"
            alt=""
            width={371}
            height={461}
            className="svg-73"
          />
        </Link>
        <Link href="/schedule/0" className="el-97">
          <span
            className="crisp-svg svg-74"
          >
            <svg aria-hidden="true" width={239} height={400} viewBox="0 0 239 400" />
            <Image
              src="/assets/pasted-artwork-104.svg"
              alt=""
              width={478}
              height={800}
            />
          </span>
        </Link>
      </section>
      <section className="el-24">
        <div className="el-98">
          <span
            className="crisp-svg pasted-artwork-svg-26"
          >
            <svg aria-hidden="true" width={674} height={212} viewBox="0 0 674 212" />
            <Image
              src="/assets/pasted-artwork-42.svg"
              alt=""
              width={1348}
              height={424}
            />
          </span>
        </div>
      </section>
      <section data-inview className="box-176">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          className="crisp-svg el-173"
        >
          <svg aria-hidden="true" width={999} height={815} viewBox="0 0 999 815" />
          <Image
            src="/assets/pasted-artwork-44.svg"
            alt=""
            width={1998}
            height={1630}
          />
        </span>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          className="crisp-svg el-172"
        >
          <svg aria-hidden="true" width={1122} height={862} viewBox="0 0 1122 862" />
          <Image
            src="/assets/pasted-artwork-43.svg"
            alt=""
            width={2244}
            height={1724}
          />
        </span>
      </section>
      <section data-inview className="box-177">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          className="crisp-svg el-174"
        >
          <svg aria-hidden="true" width={1051} height={732} viewBox="0 0 1051 732" />
          <Image
            src="/assets/pasted-artwork-99.svg"
            alt=""
            width={2102}
            height={1464}
          />
        </span>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          className="crisp-svg el-175"
        >
          <svg aria-hidden="true" width={1112} height={769} viewBox="0 0 1112 769" />
          <Image
            src="/assets/pasted-artwork-100.svg"
            alt=""
            width={2224}
            height={1538}
          />
        </span>
      </section>
      <section className="box-123">
        <span
          className="crisp-svg svg-132"
        >
          <svg aria-hidden="true" width={1248} height={195} viewBox="0 0 1248 195" />
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-52">
        <div className="el-99">
          <span
            className="crisp-svg pasted-artwork-svg-27"
          >
            <svg aria-hidden="true" width={674} height={152} viewBox="0 0 674 152" />
            <Image
              src="/assets/pasted-artwork-45.svg"
              alt=""
              width={1348}
              height={304}
            />
          </span>
        </div>
      </section>
      <section className="el-51">
        <div className="box-24">
          <Image data-inview
            src="/assets/image-2.svg"
            alt=""
            width={738}
            height={565}
            className="svg-75"
          />
        </div>
        <div className="box-25">
          <span
            className="crisp-svg svg-76"
          >
            <svg aria-hidden="true" width={929} height={438} viewBox="0 0 929 438" />
            <Image
              src="/assets/image-3.svg"
              alt=""
              width={1858}
              height={876}
            />
          </span>
        </div>
      </section>
      <section data-inview className="footer">
        <span
          className="crisp-svg pasted-artwork-svg-34"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-123">
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={58}
            height={58}
            className="svg-137"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={54}
            height={49}
            className="svg-138"
          />
        </a>
      </section>
    </>
  );
}
