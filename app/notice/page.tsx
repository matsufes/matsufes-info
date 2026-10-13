import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "松ヶ崎祭に関するお知らせをお届けします。",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_muf6flq18p" />
      <section className="el-697">
        <div className="el-698">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-699">
            <span
              className="crisp-svg pasted-artwork-svg-55"
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
          <div id="memu-p" data-toggle-show="flex" className="el-700">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-701">
              <span
                className="crisp-svg svg-238"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-702">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-703">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-704">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-705">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-706">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-226">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-227">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-228">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-229">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-707">
              <Link href="/search" id="言葉-p" className="button-230">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-231">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-232">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-233">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-708">
              <Link href="/attention" id="ご来場の-p" className="button-234">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-235">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-236">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-237">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-709">
              <Link href="/committee" id="委員会企画-p" className="button-238">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-239">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-240">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-710"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-711">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-712">
              <span
                className="crisp-svg svg-239"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-713">
                <Link href="/about" className="el-714">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-16">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-715">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-716">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-717">
              <span
                className="crisp-svg svg-240"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-718">
                <Link href="/search" className="el-719">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-720">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-721">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-722">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-723">
              <span
                className="crisp-svg svg-241"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-724">
                <Link href="/attention" className="el-725">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-726">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-727">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-728">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-729">
              <span
                className="crisp-svg svg-242"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-730">
                <Link href="/committee" className="el-731">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-18">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-732">
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
          className="el-733"
        />
      </section>
      <p className="box-67">
        <span
          className="crisp-svg svg-66"
        >
          <svg aria-hidden="true" width={412} height={123} viewBox="0 0 412 123" />
          <Image
            src="/assets/pasted-artwork-105.svg"
            alt=""
            width={824}
            height={246}
          />
        </span>
      </p>
      <section className="box-68">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-22"
        />
      </section>
      <section className="box-213">
        <p className="box-214">
          {"2026/10/13"}
        </p>
        <div className="box-215">
          <Image
            src="/assets/pasted-artwork-260.svg"
            alt=""
            width={112}
            height={37}
            className="svg-268"
          />
        </div>
      </section>
      <section className="box-212">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"10/13中身\"}]}]"}
          className="crisp-svg el-845"
        >
          <svg aria-hidden="true" width={1393} height={115} viewBox="0 0 1393 115" />
          <Image
            src="/assets/pasted-artwork-189.svg"
            alt=""
            width={2786}
            height={230}
          />
        </span>
        <span id="10/13中身" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"10/13中身\"}]}]"} data-toggle-show="block"
          className="crisp-svg el-846"
        >
          <svg aria-hidden="true" width={1393} height={451} viewBox="0 0 1393 451" />
          <Image
            src="/assets/pasted-artwork-259.svg"
            alt=""
            width={2786}
            height={902}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="image-13"
      />
    </>
  );
}
