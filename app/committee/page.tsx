import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_mu2t6c971l" />
      <section className="el-520">
        <div className="el-521">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-522">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-50"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-523">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-524">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-217"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-525">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-526">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-527">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-528">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-529">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-152">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-153">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-154">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-155">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-530">
              <Link href="/keyword" id="言葉-p" className="button-156">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-157">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-158">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-159">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-531">
              <Link href="/attention" id="ご来場の-p" className="button-160">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-161">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-162">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-163">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-532">
              <Link href="/committee" id="委員会企画-p" className="button-164">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-165">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-166">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-533"
          />
          <div className="el-534">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-535">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-218"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-536">
                <Link href="/about" className="el-537">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-11">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-538">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-539">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-540">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-219"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-541">
                <Link href="/keyword" className="el-542">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-543">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-544">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-545">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-546">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-220"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-547">
                <Link href="/attention" className="el-548">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-549">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-550">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-551">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-552">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-221"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-553">
                <Link href="/committee" className="el-554">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-13">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-555">
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
          className="el-556"
        />
      </section>
      <p className="box-21">
        <Image
          src="/assets/pasted-artwork-48.svg"
          alt=""
          width={562}
          height={167}
          className="svg-18"
        />
      </p>
      <section className="box-22">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-16"
        />
      </section>
      <section className="box-23">
        <Image
          src="/assets/pasted-artwork-244.svg"
          alt=""
          width={1704}
          height={1931}
          className="svg-168"
        />
      </section>
      <section className="box-183">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://livepocket.jp/e/i1x36\"}]}]"}
          src="/assets/pasted-artwork-241.svg"
          alt=""
          width={380}
          height={176}
          className="el-176"
        />
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-3"
      />
    </>
  );
}
