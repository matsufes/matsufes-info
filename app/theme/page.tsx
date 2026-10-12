import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6el0a87" />
      <section className="el-631">
        <div className="el-632">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-633">
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={230}
              height={142}
              className="pasted-artwork-svg-53"
            />
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-634">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-635">
              <Image
                src="/assets/pasted-artwork-171.svg"
                alt=""
                width={43}
                height={31}
                className="svg-232"
              />
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-636">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-637">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-638">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-639">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-640">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-197">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-198">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-199">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-200">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-641">
              <Link href="/keyword" id="言葉-p" className="button-201">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-202">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-203">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-204">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-642">
              <Link href="/attention" id="ご来場の-p" className="button-205">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-206">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-207">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-208">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-643">
              <Link href="/committee" id="委員会企画-p" className="button-209">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-210">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-211">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image
            src="/assets/pasted-artwork-249.svg"
            alt=""
            width={213}
            height={213}
            className="el-644"
          />
          <div className="el-645">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-646">
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={244}
                height={55}
                className="svg-233"
              />
              <div id="menu1" data-toggle-show="flex" data-inview className="el-647">
                <Link href="/about" className="el-648">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-14">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-649">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-650">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-651">
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={153}
                height={55}
                className="svg-234"
              />
              <div id="menu2" data-toggle-show="flex" data-inview className="el-652">
                <Link href="/keyword" className="el-653">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-654">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-655">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-656">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-657">
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={93}
                height={61}
                className="svg-235"
              />
              <div id="menu3" data-toggle-show="flex" data-inview className="el-658">
                <Link href="/attention" className="el-659">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-660">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" className="el-661">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" className="el-662">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-663">
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={127}
                height={58}
                className="svg-236"
              />
              <div id="menu4" data-toggle-show="flex" data-inview className="el-664">
                <Link href="/committee" className="el-665">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-16">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-666">
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
          className="el-667"
        />
      </section>
      <p className="box-62">
        <Image
          src="/assets/pasted-artwork-103.svg"
          alt=""
          width={917}
          height={87}
          className="svg-66"
        />
      </p>
      <section className="box-63">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-20"
        />
      </section>
      <section className="box-64">
        <Image
          src="/assets/pasted-artwork-106.svg"
          alt=""
          width={1383}
          height={304}
          className="svg-68"
        />
      </section>
      <section className="box-69">
        <Image
          src="/assets/pasted-artwork-131.svg"
          alt=""
          width={541}
          height={114}
          className="svg-94"
        />
      </section>
      <section className="box-70">
        <div className="box-101">
          <Image
            src="/assets/image-2.svg"
            alt=""
            width={738}
            height={565}
            className="svg-95"
          />
        </div>
        <div className="box-102">
          <Image
            src="/assets/pasted-artwork-132.svg"
            alt=""
            width={523}
            height={66}
            className="svg-96"
          />
        </div>
      </section>
      <section className="box-103">
        <div className="box-104">
          <Image
            src="/assets/pasted-artwork-133.svg"
            alt=""
            width={985}
            height={748}
            className="svg-97"
          />
        </div>
        <div className="box-105">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={944}
            height={816}
            className="svg-98"
          />
        </div>
      </section>
      <section className="box-71">
        <Image
          src="/assets/pasted-artwork-107.svg"
          alt=""
          width={103}
          height={313}
          className="svg-69"
        />
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-11"
      />
    </>
  );
}
