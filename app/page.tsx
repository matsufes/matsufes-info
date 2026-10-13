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
          <span
            className="crisp-svg pasted-artwork-svg-40"
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
        <div id="memu-p" data-toggle-show="flex" className="el-115">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-116">
            <span
              className="crisp-svg svg-136"
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
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-188"
          style={{ aspectRatio: "213 / 213" }}
        >
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={426}
            height={426}
          />
        </span>
        <div className="el-4">
          <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-5">
            <span
              className="crisp-svg svg"
              style={{ aspectRatio: "244 / 55" }}
            >
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={488}
                height={110}
              />
            </span>
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
            <span
              className="crisp-svg svg-2"
              style={{ aspectRatio: "153 / 55" }}
            >
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={306}
                height={110}
              />
            </span>
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
            <span
              className="crisp-svg svg-4"
              style={{ aspectRatio: "93 / 61" }}
            >
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={186}
                height={122}
              />
            </span>
            <div id="menu3" data-toggle-show="flex" data-inview className="el-18">
              <Link href="/attention" className="el-19">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" className="el-20">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" className="el-21">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" className="el-22">
                {"よくあるご質問"}
              </Link>
            </div>
          </p>
          <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-6">
            <span
              className="crisp-svg svg-3"
              style={{ aspectRatio: "127 / 58" }}
            >
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={254}
                height={116}
              />
            </span>
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
            <span
              className="crisp-svg svg-72"
              style={{ aspectRatio: "677 / 352" }}
            >
              <Image
                src="/assets/image-5.svg"
                alt=""
                width={1354}
                height={704}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="el-8">
        <div className="el-97">
          <span
            className="crisp-svg pasted-artwork-svg-25"
            style={{ aspectRatio: "674 / 215" }}
          >
            <Image
              src="/assets/pasted-artwork-49.svg"
              alt=""
              width={1348}
              height={430}
            />
          </span>
        </div>
      </section>
      <section className="box-73">
        <Link href="/map" className="el-98">
          <span
            className="crisp-svg svg-74"
            style={{ aspectRatio: "172 / 454" }}
          >
            <Image
              src="/assets/pasted-artwork-112.svg"
              alt=""
              width={344}
              height={908}
            />
          </span>
        </Link>
        <Link href="/keyword" className="el-99">
          <span
            className="crisp-svg svg-75"
            style={{ aspectRatio: "371 / 461" }}
          >
            <Image
              src="/assets/pasted-artwork-113.svg"
              alt=""
              width={742}
              height={922}
            />
          </span>
        </Link>
        <Link href="/timetable-13" className="el-100">
          <span
            className="crisp-svg svg-76"
            style={{ aspectRatio: "239 / 400" }}
          >
            <Image
              src="/assets/pasted-artwork-114.svg"
              alt=""
              width={478}
              height={800}
            />
          </span>
        </Link>
      </section>
      <section className="el-26">
        <div className="el-101">
          <span
            className="crisp-svg pasted-artwork-svg-26"
            style={{ aspectRatio: "674 / 212" }}
          >
            <Image
              src="/assets/pasted-artwork-50.svg"
              alt=""
              width={1348}
              height={424}
            />
          </span>
        </div>
      </section>
      <section className="box-195">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          className="crisp-svg el-183"
          style={{ aspectRatio: "999 / 815" }}
        >
          <Image
            src="/assets/pasted-artwork-52.svg"
            alt=""
            width={1998}
            height={1630}
          />
        </span>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/attention\"}]}]"}
          className="crisp-svg el-182"
          style={{ aspectRatio: "1122 / 862" }}
        >
          <Image
            src="/assets/pasted-artwork-51.svg"
            alt=""
            width={2244}
            height={1724}
          />
        </span>
      </section>
      <section className="box-196">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/access\"}]}]"}
          className="crisp-svg el-184"
          style={{ aspectRatio: "1051 / 732" }}
        >
          <Image
            src="/assets/pasted-artwork-109.svg"
            alt=""
            width={2102}
            height={1464}
          />
        </span>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/comingsoon\"}]}]"}
          className="crisp-svg el-185"
          style={{ aspectRatio: "1112 / 769" }}
        >
          <Image
            src="/assets/pasted-artwork-110.svg"
            alt=""
            width={2224}
            height={1538}
          />
        </span>
      </section>
      <section className="box-123">
        <span
          className="crisp-svg svg-135"
          style={{ aspectRatio: "1248 / 195" }}
        >
          <Image
            src="/assets/pasted-artwork-170.svg"
            alt=""
            width={2496}
            height={390}
          />
        </span>
      </section>
      <section className="el-54">
        <div className="el-102">
          <span
            className="crisp-svg pasted-artwork-svg-27"
            style={{ aspectRatio: "674 / 152" }}
          >
            <Image
              src="/assets/pasted-artwork-53.svg"
              alt=""
              width={1348}
              height={304}
            />
          </span>
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
          <span
            className="crisp-svg svg-78"
            style={{ aspectRatio: "929 / 438" }}
          >
            <Image
              src="/assets/image-3.svg"
              alt=""
              width={1858}
              height={876}
            />
          </span>
        </div>
      </section>
      <section className="footer">
        <span
          className="crisp-svg pasted-artwork-svg-34"
          style={{ aspectRatio: "1920 / 1015" }}
        >
          <Image
            src="/assets/pasted-artwork-54.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
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
