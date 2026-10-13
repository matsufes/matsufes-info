import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu727nz01e" />
      <section className="el-775">
        <div className="el-776">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-777">
            <span
              className="crisp-svg pasted-artwork-svg-57"
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
          <div id="memu-p" data-toggle-show="flex" className="el-778">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-779">
              <span
                className="crisp-svg svg-250"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-780">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-781">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-782">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-783">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-784">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-257">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-258">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-259">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-260">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-785">
              <Link href="/keyword" id="言葉-p" className="button-261">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-262">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-263">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-264">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-786">
              <Link href="/attention" id="ご来場の-p" className="button-265">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-266">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-267">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-268">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-787">
              <Link href="/committee" id="委員会企画-p" className="button-269">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-270">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-271">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-788"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-789">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-790">
              <span
                className="crisp-svg svg-251"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-791">
                <Link href="/about" className="el-792">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-18">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-793">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-794">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-795">
              <span
                className="crisp-svg svg-252"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-796">
                <Link href="/keyword" className="el-797">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-798">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-799">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-800">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-801">
              <span
                className="crisp-svg svg-253"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-802">
                <Link href="/attention" className="el-803">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-804">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-805">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-806">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-807">
              <span
                className="crisp-svg svg-254"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-808">
                <Link href="/committee" className="el-809">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-20">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-810">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </p>
          </div>
        </div>
        <Image data-inview
          src="/assets/image-7.svg"
          alt=""
          width={1920}
          height={583}
          className="el-811"
        />
      </section>
      <p className="box-33">
        <span
          className="crisp-svg svg-21"
          style={{ aspectRatio: "644 / 96" }}
        >
          <Image
            src="/assets/pasted-artwork-56.svg"
            alt=""
            width={1288}
            height={192}
          />
        </span>
      </p>
      <section className="box-34">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-24"
        />
      </section>
      <p className="box-178">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-37">
        <div className="box-42">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage-favorite\"}]}]"}
            className="crisp-svg el-57"
            style={{ aspectRatio: "306 / 236" }}
          >
            <Image
              src="/assets/pasted-artwork-62.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
        </div>
        <div className="box-41">
          <span
            className="crisp-svg svg-24"
            style={{ aspectRatio: "306 / 236" }}
          >
            <Image
              src="/assets/pasted-artwork-63.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
        </div>
      </section>
      <section className="box-35">
        <span
          className="crisp-svg svg-22"
          style={{ aspectRatio: "1352 / 75" }}
        >
          <Image
            src="/assets/pasted-artwork-58.svg"
            alt=""
            width={2704}
            height={150}
          />
        </span>
      </section>
      <section className="box-36">
        <span
          className="crisp-svg svg-103"
          style={{ aspectRatio: "430 / 72" }}
        >
          <Image
            src="/assets/pasted-artwork-139.svg"
            alt=""
            width={860}
            height={144}
          />
        </span>
      </section>
      <section className="box-38">
        <div className="box-108">
          <span
            className="crisp-svg svg-104"
            style={{ aspectRatio: "413 / 257" }}
          >
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-110">
            <span
              className="crisp-svg svg-105"
              style={{ aspectRatio: "86 / 59" }}
            >
              <Image
                src="/assets/pasted-artwork-141.svg"
                alt=""
                width={172}
                height={118}
              />
            </span>
          </div>
        </div>
        <div className="box-109">
          <span
            className="crisp-svg pasted-artwork-svg-32"
            style={{ aspectRatio: "413 / 257" }}
          >
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-111">
            <span
              className="crisp-svg svg-106"
              style={{ aspectRatio: "85 / 59" }}
            >
              <Image
                src="/assets/pasted-artwork-142.svg"
                alt=""
                width={170}
                height={118}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="box-112">
        <div className="box-113">
          <span
            className="crisp-svg svg-107"
            style={{ aspectRatio: "413 / 257" }}
          >
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-114">
            <span
              className="crisp-svg svg-108"
              style={{ aspectRatio: "85 / 59" }}
            >
              <Image
                src="/assets/pasted-artwork-143.svg"
                alt=""
                width={170}
                height={118}
              />
            </span>
          </div>
        </div>
        <div className="box-115">
          <span
            className="crisp-svg pasted-artwork-svg-33"
            style={{ aspectRatio: "413 / 257" }}
          >
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-116">
            <span
              className="crisp-svg svg-109"
              style={{ aspectRatio: "86 / 59" }}
            >
              <Image
                src="/assets/pasted-artwork-144.svg"
                alt=""
                width={172}
                height={118}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="box-117">
        <div className="box-118">
          <span
            className="crisp-svg svg-110"
            style={{ aspectRatio: "413 / 257" }}
          >
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-119">
            <span
              className="crisp-svg svg-111"
              style={{ aspectRatio: "292 / 39" }}
            >
              <Image
                src="/assets/pasted-artwork-145.svg"
                alt=""
                width={584}
                height={78}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="box-120">
        <span
          className="crisp-svg svg-112"
          style={{ aspectRatio: "690 / 314" }}
        >
          <Image
            src="/assets/pasted-artwork-146.svg"
            alt=""
            width={1380}
            height={628}
          />
        </span>
      </section>
      <section className="box-127">
        <span
          className="crisp-svg el-125"
          style={{ aspectRatio: "524 / 207" }}
        >
          <Image
            src="/assets/pasted-artwork-177.svg"
            alt=""
            width={1048}
            height={414}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-5"
      />
    </>
  );
}
