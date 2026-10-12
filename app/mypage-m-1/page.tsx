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
      <section className="el-779">
        <div className="el-780">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-781">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-57"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-782">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-783">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-252"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-784">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-785">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-786">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-787">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-788">
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
            <div id="kikaku-phone" data-toggle-show="flex" className="el-789">
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
            <div id="goannai-phone" data-toggle-show="flex" className="el-790">
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
            <div id="koushiki-phone" data-toggle-show="flex" className="el-791">
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
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-792"
          />
          <div className="el-793">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-794">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-253"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-795">
                <Link href="/about" className="el-796">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-18">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-797">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-798">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-799">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-254"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-800">
                <Link href="/keyword" className="el-801">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-802">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-803">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-804">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-805">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-255"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-806">
                <Link href="/attention" className="el-807">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-808">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-809">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-810">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-811">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-256"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-812">
                <Link href="/committee" className="el-813">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-20">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-814">
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
          className="el-815"
        />
      </section>
      <p className="box-33">
        <Image
          src="/assets/pasted-artwork-56.svg"
          alt=""
          width={644}
          height={96}
          className="svg-21"
        />
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
      <p className="box-179">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-37">
        <div className="box-42">
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage-favorite\"}]}]"}
            src="/assets/pasted-artwork-62.svg"
            alt=""
            width={306}
            height={236}
            className="el-57"
          />
        </div>
        <div className="box-41">
          <Image
            src="/assets/pasted-artwork-63.svg"
            alt=""
            width={306}
            height={236}
            className="svg-24"
          />
        </div>
      </section>
      <section className="box-35">
        <Image
          src="/assets/pasted-artwork-58.svg"
          alt=""
          width={1352}
          height={75}
          className="svg-22"
        />
      </section>
      <section className="box-36">
        <Image
          src="/assets/pasted-artwork-139.svg"
          alt=""
          width={430}
          height={72}
          className="svg-103"
        />
      </section>
      <section className="box-38">
        <div className="box-108">
          <Image
            src="/assets/pasted-artwork-140.svg"
            alt=""
            width={413}
            height={257}
            className="svg-104"
          />
          <div className="box-110">
            <Image
              src="/assets/pasted-artwork-141.svg"
              alt=""
              width={86}
              height={59}
              className="svg-105"
            />
          </div>
        </div>
        <div className="box-109">
          <Image
            src="/assets/pasted-artwork-140.svg"
            alt=""
            width={413}
            height={257}
            className="pasted-artwork-svg-32"
          />
          <div className="box-111">
            <Image
              src="/assets/pasted-artwork-142.svg"
              alt=""
              width={85}
              height={59}
              className="svg-106"
            />
          </div>
        </div>
      </section>
      <section className="box-112">
        <div className="box-113">
          <Image
            src="/assets/pasted-artwork-140.svg"
            alt=""
            width={413}
            height={257}
            className="svg-107"
          />
          <div className="box-114">
            <Image
              src="/assets/pasted-artwork-143.svg"
              alt=""
              width={85}
              height={59}
              className="svg-108"
            />
          </div>
        </div>
        <div className="box-115">
          <Image
            src="/assets/pasted-artwork-140.svg"
            alt=""
            width={413}
            height={257}
            className="pasted-artwork-svg-33"
          />
          <div className="box-116">
            <Image
              src="/assets/pasted-artwork-144.svg"
              alt=""
              width={86}
              height={59}
              className="svg-109"
            />
          </div>
        </div>
      </section>
      <section className="box-117">
        <div className="box-118">
          <Image
            src="/assets/pasted-artwork-140.svg"
            alt=""
            width={413}
            height={257}
            className="svg-110"
          />
          <div className="box-119">
            <Image
              src="/assets/pasted-artwork-145.svg"
              alt=""
              width={292}
              height={39}
              className="svg-111"
            />
          </div>
        </div>
      </section>
      <section className="box-120">
        <Image
          src="/assets/pasted-artwork-146.svg"
          alt=""
          width={690}
          height={314}
          className="svg-112"
        />
      </section>
      <section className="box-127">
        <Image
          src="/assets/pasted-artwork-177.svg"
          alt=""
          width={524}
          height={207}
          className="el-126"
        />
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
