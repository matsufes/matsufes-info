import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mswzfiqry" />
      <section className="el-405">
        <div className="el-406">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-407">
            <span
              className="crisp-svg pasted-artwork-svg-47"
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
          <div id="memu-p" data-toggle-show="flex" className="el-408">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-409">
              <span
                className="crisp-svg svg-200"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-410">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-411">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-412">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-413">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-414">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-107">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-108">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-109">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-110">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-415">
              <Link href="/keyword" id="言葉-p" className="button-111">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-112">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-113">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-114">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-416">
              <Link href="/attention" id="ご来場の-p" className="button-115">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-116">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-117">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-118">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-417">
              <Link href="/committee" id="委員会企画-p" className="button-119">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-120">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-121">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-418"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-419">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-420">
              <span
                className="crisp-svg svg-201"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-421">
                <Link href="/about" className="el-422">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-8">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-423">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-424">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-425">
              <span
                className="crisp-svg svg-202"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-426">
                <Link href="/keyword" className="el-427">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-428">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-429">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-430">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-431">
              <span
                className="crisp-svg svg-203"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-432">
                <Link href="/attention" className="el-433">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-434">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-435">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-436">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-437">
              <span
                className="crisp-svg svg-204"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-438">
                <Link href="/committee" className="el-439">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-10">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-440">
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
          className="el-441"
        />
      </section>
      <p className="box-9">
        <span
          className="crisp-svg svg-7"
          style={{ aspectRatio: "779 / 139" }}
        >
          <Image
            src="/assets/pasted-artwork-32.svg"
            alt=""
            width={1558}
            height={278}
          />
        </span>
      </p>
      <section className="box-12">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-14"
        />
      </section>
      <section className="box-10">
        <span
          className="crisp-svg svg-85"
          style={{ aspectRatio: "559 / 116" }}
        >
          <Image
            src="/assets/pasted-artwork-122.svg"
            alt=""
            width={1118}
            height={232}
          />
        </span>
      </section>
      <section className="box-18">
        <p className="box-89">
          {"「m-1グランプリ」は、来場者様みんなの投票によって、部門ごとのNo.1出展団体を決定する、松ヶ崎祭の目玉企画。\n\n\n来場者様一人ひとりの「いちばん良かった！」が、各部門の頂点を選び出すよ。\n\n\n見事1位に輝いた出展団体には、豪華商品が贈られるよ。"}
        </p>
      </section>
      <section className="box-90">
        <span
          className="crisp-svg svg-86"
          style={{ aspectRatio: "354 / 114" }}
        >
          <Image
            src="/assets/pasted-artwork-123.svg"
            alt=""
            width={708}
            height={228}
          />
        </span>
      </section>
      <section className="box-91">
        <span
          className="crisp-svg svg-87"
          style={{ aspectRatio: "390 / 59" }}
        >
          <Image
            src="/assets/pasted-artwork-124.svg"
            alt=""
            width={780}
            height={118}
          />
        </span>
      </section>
      <section className="box-92">
        <div className="box-93">
          <span
            className="crisp-svg svg-88"
            style={{ aspectRatio: "351 / 325" }}
          >
            <Image
              src="/assets/pasted-artwork-125.svg"
              alt=""
              width={702}
              height={650}
            />
          </span>
        </div>
        <div className="box-96">
          <Image
            src="/assets/pasted-artwork-128.svg"
            alt=""
            width={49}
            height={57}
            className="svg-91"
          />
        </div>
        <div className="box-94">
          <span
            className="crisp-svg svg-89"
            style={{ aspectRatio: "345 / 286" }}
          >
            <Image
              src="/assets/pasted-artwork-126.svg"
              alt=""
              width={690}
              height={572}
            />
          </span>
        </div>
        <div className="box-97">
          <Image
            src="/assets/pasted-artwork-128.svg"
            alt=""
            width={49}
            height={57}
            className="pasted-artwork-svg-31"
          />
        </div>
        <div className="box-95">
          <span
            className="crisp-svg svg-90"
            style={{ aspectRatio: "343 / 286" }}
          >
            <Image
              src="/assets/pasted-artwork-127.svg"
              alt=""
              width={686}
              height={572}
            />
          </span>
        </div>
      </section>
      <section className="box-19">
        <input id="field" type="text" className="input" name="field" placeholder="ここに　言葉を　入力してみてね" />
      </section>
      <section className="box-27">
        <Image
          src="/assets/pasted-artwork-19.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg"
        />
        <Image
          src="/assets/pasted-artwork-20.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-2"
        />
        <Image
          src="/assets/pasted-artwork-21.svg"
          alt=""
          width={138}
          height={49}
          className="pasted-artwork-svg-3"
        />
        <Image
          src="/assets/pasted-artwork-22.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-4"
        />
        <Image
          src="/assets/pasted-artwork-24.svg"
          alt=""
          width={137}
          height={49}
          className="pasted-artwork-svg-5"
        />
      </section>
      <section className="box-11">
        <span
          className="crisp-svg svg-92"
          style={{ aspectRatio: "457 / 114" }}
        >
          <Image
            src="/assets/pasted-artwork-129.svg"
            alt=""
            width={914}
            height={228}
          />
        </span>
      </section>
      <section className="box-20">
        <p className="box-98">
          {"全部で5部門に分かれているよ。\n\n\n5部門それぞれに１票づつ投票できるよ。"}
        </p>
        <div className="box-99">
          <span
            className="crisp-svg svg-93"
            style={{ aspectRatio: "989 / 171" }}
          >
            <Image
              src="/assets/pasted-artwork-130.svg"
              alt=""
              width={1978}
              height={342}
            />
          </span>
        </div>
        <p className="box-100">
          {"自分が投票した企画は「きみのしおり」から確認できるよ。\n\n\n5部門中3部門以上投票すると　豪華景品が当たる 「ちゅ〜せんかい」に 参加できるよ。"}
        </p>
        <p className="box-122">
          {"※個人出展は対象外となります。ご了承ください。"}
        </p>
      </section>
      <p className="box-121">
        <span
          className="crisp-svg svg-149"
          style={{ aspectRatio: "352 / 279" }}
        >
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={704}
            height={558}
          />
        </span>
        <span
          className="crisp-svg pasted-artwork-svg-35"
          style={{ aspectRatio: "1399 / 238" }}
        >
          <Image
            src="/assets/pasted-artwork-195.svg"
            alt=""
            width={2798}
            height={476}
          />
        </span>
        <span
          className="crisp-svg svg-134"
          style={{ aspectRatio: "1391 / 39" }}
        >
          <Image
            src="/assets/pasted-artwork-169.svg"
            alt=""
            width={2782}
            height={78}
          />
        </span>
      </p>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-17"
      />
    </>
  );
}
