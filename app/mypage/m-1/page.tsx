import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "マイページ",
  description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu727nz01e" />
      <section className="el-771">
        <div className="el-772">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-773">
            <span
              className="crisp-svg pasted-artwork-svg-57"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-247.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-774">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-775">
              <span
                className="crisp-svg svg-248"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-171.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-776">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-777">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-778">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-779">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-780">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-256">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-257">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-258">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-259">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-781">
              <Link href="/search" id="言葉-p" className="button-260">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-261">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-262">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-263">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-782">
              <Link href="/attention" id="ご来場の-p" className="button-264">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-265">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-266">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-267">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-783">
              <Link href="/committee" id="委員会企画-p" className="button-268">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-269">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-270">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-784"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-785">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-786">
              <span
                className="crisp-svg svg-249"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-787">
                <Link href="/about" className="el-788">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-18">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-789">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-790">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-791">
              <span
                className="crisp-svg svg-250"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-792">
                <Link href="/search" className="el-793">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-794">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-795">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-796">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-797">
              <span
                className="crisp-svg svg-251"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-798">
                <Link href="/attention" className="el-799">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-800">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-801">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-802">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-803">
              <span
                className="crisp-svg svg-252"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-804">
                <Link href="/committee" className="el-805">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-20">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-806">
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
          className="el-807"
        />
      </section>
      <p className="box-33">
        <span
          className="crisp-svg svg-21"
        >
          <svg aria-hidden="true" width={644} height={96} viewBox="0 0 644 96" />
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
      <p className="box-177">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-37">
        <div className="box-42">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage\"}]}]"}
            className="crisp-svg el-55"
          >
            <svg aria-hidden="true" width={306} height={236} viewBox="0 0 306 236" />
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
          >
            <svg aria-hidden="true" width={306} height={236} viewBox="0 0 306 236" />
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
        >
          <svg aria-hidden="true" width={1352} height={75} viewBox="0 0 1352 75" />
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
          className="crisp-svg svg-102"
        >
          <svg aria-hidden="true" width={430} height={72} viewBox="0 0 430 72" />
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
            className="crisp-svg svg-103"
          >
            <svg aria-hidden="true" width={413} height={257} viewBox="0 0 413 257" />
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-110">
            <span
              className="crisp-svg svg-104"
            >
              <svg aria-hidden="true" width={86} height={59} viewBox="0 0 86 59" />
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
          >
            <svg aria-hidden="true" width={413} height={257} viewBox="0 0 413 257" />
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-111">
            <span
              className="crisp-svg svg-105"
            >
              <svg aria-hidden="true" width={85} height={59} viewBox="0 0 85 59" />
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
            className="crisp-svg svg-106"
          >
            <svg aria-hidden="true" width={413} height={257} viewBox="0 0 413 257" />
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-114">
            <span
              className="crisp-svg svg-107"
            >
              <svg aria-hidden="true" width={85} height={59} viewBox="0 0 85 59" />
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
          >
            <svg aria-hidden="true" width={413} height={257} viewBox="0 0 413 257" />
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-116">
            <span
              className="crisp-svg svg-108"
            >
              <svg aria-hidden="true" width={86} height={59} viewBox="0 0 86 59" />
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
            className="crisp-svg svg-109"
          >
            <svg aria-hidden="true" width={413} height={257} viewBox="0 0 413 257" />
            <Image
              src="/assets/pasted-artwork-140.svg"
              alt=""
              width={826}
              height={514}
            />
          </span>
          <div className="box-119">
            <span
              className="crisp-svg svg-110"
            >
              <svg aria-hidden="true" width={292} height={39} viewBox="0 0 292 39" />
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
          className="crisp-svg svg-111"
        >
          <svg aria-hidden="true" width={690} height={314} viewBox="0 0 690 314" />
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
          className="crisp-svg el-123"
        >
          <svg aria-hidden="true" width={524} height={207} viewBox="0 0 524 207" />
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
