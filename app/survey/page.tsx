import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "来場者アンケート",
  description: "松ヶ崎祭にご来場の皆さまへのアンケートです。",
  openGraph: {
    title: "来場者アンケート",
    description: "松ヶ崎祭にご来場の皆さまへのアンケートです。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mv6ai6be3t" />
      <section className="el-747">
        <div className="el-748">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-749">
            <span
              className="crisp-svg pasted-artwork-svg-61"
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
          <div id="memu-p" data-toggle-show="flex" className="el-750">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-751">
              <span
                className="crisp-svg svg-259"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-752">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-753">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-754">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-755">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-756">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-252">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-253">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-254">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-255">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-757">
              <Link href="/search" id="言葉-p" className="button-256">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-257">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-258">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-259">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-758">
              <Link href="/attention" id="ご来場の-p" className="button-260">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-261">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-262">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-263">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-264">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-759">
              <Link href="/committee" id="委員会企画-p" className="button-265">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-266">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-267">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-224.svg"
            alt=""
            width={213}
            height={213}
            className="el-760"
          />
          <div className="el-761">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-762" data-p="">
              <span
                className="crisp-svg svg-260"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-763">
                <Link href="/about" className="el-764">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-17">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-765">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-766">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-767" data-p="">
              <span
                className="crisp-svg svg-261"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-768">
                <Link href="/search" className="el-769">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-770">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-771">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-772">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-773" data-p="">
              <span
                className="crisp-svg svg-262"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-774">
                <Link href="/attention" className="el-775">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-776">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-777">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-778">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-779">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-780" data-p="">
              <span
                className="crisp-svg svg-263"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-781">
                <Link href="/committee" className="el-782">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-20">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-783">
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
          className="el-784"
        />
      </section>
      <section className="box-205">
        <span
          className="crisp-svg svg-202"
        >
          <svg aria-hidden="true" width={1113} height={135} viewBox="0 0 1113 135" />
          <Image
            src="/assets/pasted-artwork-124.svg"
            alt=""
            width={2226}
            height={270}
          />
        </span>
        <p className="box-203">
          <span
            className="crisp-svg svg-203"
          >
            <svg aria-hidden="true" width={371} height={38} viewBox="0 0 371 38" />
            <Image
              src="/assets/pasted-artwork-125.svg"
              alt=""
              width={742}
              height={76}
            />
          </span>
        </p>
        <div className="box-204">
          <span
            className="crisp-svg svg-204"
          >
            <svg aria-hidden="true" width={400} height={400} viewBox="0 0 400 400" />
            <Image
              src="/assets/pasted-artwork-126.svg"
              alt=""
              width={800}
              height={800}
            />
          </span>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-5.svg"
        alt=""
        width={1920}
        height={713}
        className="image-20"
      />
    </>
  );
}
