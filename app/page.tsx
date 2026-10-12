import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 6",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msleaffe1" />
      <section className="el-3">
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-114">
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt=""
            width={230}
            height={142}
            className="pasted-artwork-svg-40"
          />
        </div>
        <div id="memu-p" data-toggle-show="flex" className="el-115">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-116">
            <Image
              src="/assets/pasted-artwork-171.svg"
              alt=""
              width={43}
              height={31}
              className="svg-136"
            />
          </div>
          <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-117">
            {"松ヶ崎祭について"}
          </p>
          <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-118">
            {"企画さがし"}
          </p>
          <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-119">
            {"ご案内"}
          </p>
          <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-120">
            {"公式特集"}
          </p>
          <div id="mf-phone" data-toggle-show="flex" className="el-121">
            <Link href="/about" id="松ヶ崎祭とは-p" className="button-2">
              {"松ヶ崎祭とは"}
            </Link>
            <Link href="/theme" id="mf56-p" className="button-3">
              {"mf56メインテ〜マ"}
            </Link>
            <Link href="/support" id="協賛-p" className="button-4">
              {"協賛いただいた皆さま"}
            </Link>
            <Link href="/notice" id="お知らせ-p" className="button-5">
              {"お知らせ"}
            </Link>
          </div>
          <div id="kikaku-phone" data-toggle-show="flex" className="el-122">
            <Link href="/keyword" id="言葉-p" className="button-6">
              {"言葉からさがす"}
            </Link>
            <Link href="/timetable-13" id="日程表-p" className="button-7">
              {"日程表からさがす"}
            </Link>
            <Link href="/map" id="地図-p" className="button-8">
              {"地図からさがす"}
            </Link>
            <Link href="/mypage-favorite" id="しおり-p" className="button-9">
              {"きみのしおり\n"}
            </Link>
          </div>
          <div id="goannai-phone" data-toggle-show="flex" className="el-123">
            <Link href="/attention" id="ご来場の-p" className="button-10">
              {"ご来場の皆さまへ"}
            </Link>
            <Link href="/access" id="行き方-p" className="button-11">
              {"行き方・会場地図"}
            </Link>
            <Link href="/comingsoon" id="アンケ〜ト-p" className="button-12">
              {"来場者アンケ〜ト"}
            </Link>
            <Link href="/comingsoon" id="ご質問-p" className="button-13">
              {"よくあるご質問"}
            </Link>
          </div>
          <div id="koushiki-phone" data-toggle-show="flex" className="el-124">
            <Link href="/committee" id="委員会企画-p" className="button-14">
              {"委員会企画"}
            </Link>
            <Link href="/m-1" id="m-1-p" className="button-15">
              {"m-1グランプリ"}
            </Link>
            <Link href="/comingsoon" id="まつぴよ-p" className="button-16">
              {"公式メンバ〜「まつぴよ」"}
            </Link>
          </div>
        </div>
        <Image
          src="/assets/pasted-artwork-249.svg"
          alt=""
          width={213}
          height={213}
          className="el-188"
        />
        <div className="el-4">
          <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-5">
            <Image
              src="/assets/pasted-artwork-25.svg"
              alt=""
              width={244}
              height={55}
              className="svg"
            />
            <div id="menu1" data-toggle-show="flex" data-inview className="el-9">
              <Link href="/about" className="el-10">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" className="mf56">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" className="el-11">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" className="el-12">
                {"お知らせ"}
              </Link>
            </div>
          </p>
          <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-7">
            <Image
              src="/assets/pasted-artwork-26.svg"
              alt=""
              width={153}
              height={55}
              className="svg-2"
            />
            <div id="menu2" data-toggle-show="flex" data-inview className="el-13">
              <Link href="/keyword" className="el-14">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" className="el-15">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" className="el-16">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" className="el-17">
                {"きみのしおり"}
              </Link>
            </div>
          </p>
          <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-51">
            <Image
              src="/assets/pasted-artwork-27.svg"
              alt=""
              width={93}
              height={61}
              className="svg-4"
            />
            <div id="menu3" data-toggle-show="flex" data-inview className="el-18">
              <Link href="/attention" className="el-19">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" className="el-20">
                {"行き方・会場地図"}
              </Link>
              <Link href="/survey" className="el-21">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/question" className="el-22">
                {"よくあるご質問"}
              </Link>
            </div>
          </p>
          <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-6">
            <Image
              src="/assets/pasted-artwork-28.svg"
              alt=""
              width={127}
              height={58}
              className="svg-3"
            />
            <div id="menu4" data-toggle-show="flex" data-inview className="el-23">
              <Link href="/committee" className="el-24">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" className="m-1">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" className="el-25">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </p>
        </div>
      </section>
      <section className="el-91">
        <div data-inview className="el-96">
          <Image
            src="/assets/image.svg"
            alt=""
            width={1920}
            height={1312}
            className="svg-73"
          />
        </div>
        <div data-inview className="el-92">
          <Image
            src="/assets/IMG_3053.PNG"
            alt=""
            width={2480}
            height={3508}
            className="img-3053-png"
          />
        </div>
        <div className="box-177">
          <div className="el-93">
            <Image
              src="/assets/56-.svg"
              alt=""
              width={267}
              height={150}
              className="el-94"
            />
          </div>
          <div className="el-95">
            <Image
              src="/assets/image-5.svg"
              alt=""
              width={677}
              height={352}
              className="svg-72"
            />
          </div>
        </div>
      </section>
      <section className="el-8">
        <div className="el-97">
          <Image
            src="/assets/pasted-artwork-49.svg"
            alt=""
            width={674}
            height={215}
            className="pasted-artwork-svg-25"
          />
        </div>
      </section>
      <section className="box-73">
        <Link href="/map" className="el-98">
          <Image
            src="/assets/pasted-artwork-112.svg"
            alt=""
            width={172}
            height={454}
            className="svg-74"
          />
        </Link>
        <Link href="/keyword" className="el-99">
          <Image
            src="/assets/pasted-artwork-113.svg"
            alt=""
            width={371}
            height={461}
            className="svg-75"
          />
        </Link>
        <Link href="/timetable-13" className="el-100">
          <Image
            src="/assets/pasted-artwork-114.svg"
            alt=""
            width={239}
            height={400}
            className="svg-76"
          />
        </Link>
      </section>
      <section className="el-26">
        <div className="el-101">
          <Image
            src="/assets/pasted-artwork-50.svg"
            alt=""
            width={674}
            height={212}
            className="pasted-artwork-svg-26"
          />
        </div>
      </section>
      <section className="box-195">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          src="/assets/pasted-artwork-52.svg"
          alt=""
          width={999}
          height={815}
          className="el-183"
        />
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          src="/assets/pasted-artwork-51.svg"
          alt=""
          width={1122}
          height={862}
          className="el-182"
        />
      </section>
      <section className="box-196">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          src="/assets/pasted-artwork-109.svg"
          alt=""
          width={1051}
          height={732}
          className="el-184"
        />
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          src="/assets/pasted-artwork-110.svg"
          alt=""
          width={1112}
          height={769}
          className="el-185"
        />
      </section>
      <section className="box-123">
        <Image
          src="/assets/pasted-artwork-170.svg"
          alt=""
          width={1248}
          height={195}
          className="svg-135"
        />
      </section>
      <section className="el-54">
        <div className="el-102">
          <Image
            src="/assets/pasted-artwork-53.svg"
            alt=""
            width={674}
            height={152}
            className="pasted-artwork-svg-27"
          />
        </div>
      </section>
      <section className="el-53">
        <div className="box-24">
          <Image data-inview
            src="/assets/image-2.svg"
            alt=""
            width={738}
            height={565}
            className="svg-77"
          />
        </div>
        <div className="box-25">
          <Image
            src="/assets/image-3.svg"
            alt=""
            width={929}
            height={438}
            className="svg-78"
          />
        </div>
      </section>
      <section className="footer">
        <Image
          src="/assets/pasted-artwork-54.svg"
          alt=""
          width={1920}
          height={1015}
          className="pasted-artwork-svg-34"
        />
        <a href="https://www.instagram.com/kit_matsufes/" className="el-125">
          <Image
            src="/assets/pasted-artwork-175.svg"
            alt=""
            width={58}
            height={58}
            className="svg-140"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x">
          <Image
            src="/assets/pasted-artwork-176.svg"
            alt=""
            width={54}
            height={49}
            className="svg-141"
          />
        </a>
      </section>
    </>
  );
}
