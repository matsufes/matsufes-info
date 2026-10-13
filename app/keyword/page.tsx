import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ページ 8",
};

export default function Page() {
  return (
    <>
      <span hidden data-page-body="page_msotieex1e" />
      <section className="el-298">
        <div className="el-299">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-300">
            <span
              className="crisp-svg pasted-artwork-svg-44"
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
          <div id="memu-p" data-toggle-show="flex" className="el-301">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-302">
              <span
                className="crisp-svg svg-187"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-303">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-304">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-305">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-306">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-307">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-62">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-63">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/support" id="協賛-p" className="button-64">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-65">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-308">
              <Link href="/keyword" id="言葉-p" className="button-66">
                {"言葉からさがす"}
              </Link>
              <Link href="/timetable-13" id="日程表-p" className="button-67">
                {"日程表からさがす"}
              </Link>
              <Link href="/map" id="地図-p" className="button-68">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage-favorite" id="しおり-p" className="button-69">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-309">
              <Link href="/attention" id="ご来場の-p" className="button-70">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-71">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-72">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-73">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-310">
              <Link href="/committee" id="委員会企画-p" className="button-74">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-75">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-76">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-311"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-312">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-313">
              <span
                className="crisp-svg svg-188"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-314">
                <Link href="/about" className="el-315">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-5">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-316">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-317">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-318">
              <span
                className="crisp-svg svg-189"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-319">
                <Link href="/keyword" className="el-320">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-321">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-322">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-323">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-324">
              <span
                className="crisp-svg svg-190"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-325">
                <Link href="/attention" className="el-326">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-327">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-328">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-329">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-330">
              <span
                className="crisp-svg svg-191"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-331">
                <Link href="/committee" className="el-332">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-7">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-333">
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
          className="el-334"
        />
      </section>
      <p className="el-30">
        <span
          className="crisp-svg svg-5"
          style={{ aspectRatio: "603 / 159" }}
        >
          <Image
            src="/assets/pasted-artwork-29.svg"
            alt=""
            width={1206}
            height={318}
          />
        </span>
      </p>
      <section className="el-56">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-12"
        />
      </section>
      <p className="el-177">
        {"松ヶ崎祭には　企画がいっぱい。\n気になる言葉から　きみにぴったりの企画を見つけてね。"}
      </p>
      <section className="el-179">
        <input id="field" type="text" className="input-2" name="field" placeholder="ここに　言葉を　入力してみてね" />
        <span
          className="crisp-svg svg-170"
          style={{ aspectRatio: "1473 / 195" }}
        >
          <Image
            src="/assets/pasted-artwork-245.svg"
            alt=""
            width={2946}
            height={390}
          />
        </span>
      </section>
      <section className="el-33">
        <div className="box-5">
          <Image
            src="/assets/pasted-artwork-2.svg"
            alt=""
            width={150}
            height={150}
            className="image-2"
          />
        </div>
        <p className="box-4">
          {"  いつ？"}
        </p>
      </section>
      <section className="el-31">
        <Image
          src="/assets/pasted-artwork-5.svg"
          alt=""
          width={137}
          height={49}
          className="el-36"
        />
        <Image
          src="/assets/pasted-artwork-6.svg"
          alt=""
          width={137}
          height={49}
          className="el-37"
        />
        <Image
          src="/assets/pasted-artwork-7.svg"
          alt=""
          width={137}
          height={49}
          className="el-38"
        />
      </section>
      <section className="el-58">
        <div className="box-43">
          <Image
            src="/assets/pasted-artwork-3.svg"
            alt=""
            width={158}
            height={150}
            className="pasted-artwork-svg-6"
          />
        </div>
        <p className="box-44">
          {"どこで？"}
        </p>
      </section>
      <section className="el-34">
        <Image
          src="/assets/pasted-artwork-9.svg"
          alt=""
          width={137}
          height={49}
          className="el-40"
        />
        <Image
          src="/assets/pasted-artwork-8.svg"
          alt=""
          width={137}
          height={49}
          className="el-39"
        />
        <Image
          src="/assets/pasted-artwork-10.svg"
          alt=""
          width={137}
          height={49}
          className="el-41"
        />
      </section>
      <section className="el-59">
        <div className="box-45">
          <Image
            src="/assets/pasted-artwork-4.svg"
            alt=""
            width={120}
            height={150}
            className="pasted-artwork-svg-7"
          />
        </div>
        <p className="box-46">
          {"  どんなことがしたい？"}
        </p>
      </section>
      <section className="el-35">
        <div className="box-6">
          <Image
            src="/assets/pasted-artwork-11.svg"
            alt=""
            width={138}
            height={49}
            className="el-42"
          />
          <Image
            src="/assets/pasted-artwork-12.svg"
            alt=""
            width={137}
            height={49}
            className="el-43"
          />
          <Image
            src="/assets/pasted-artwork-13.svg"
            alt=""
            width={137}
            height={49}
            className="el-44"
          />
          <Image
            src="/assets/pasted-artwork-14.svg"
            alt=""
            width={137}
            height={49}
            className="el-45"
          />
        </div>
        <div className="box-7">
          <Image
            src="/assets/pasted-artwork-15.svg"
            alt=""
            width={138}
            height={49}
            className="el-46"
          />
          <Image
            src="/assets/pasted-artwork-16.svg"
            alt=""
            width={138}
            height={49}
            className="el-47"
          />
          <Image
            src="/assets/pasted-artwork-17.svg"
            alt=""
            width={137}
            height={49}
            className="el-48"
          />
          <Image
            src="/assets/pasted-artwork-18.svg"
            alt=""
            width={137}
            height={49}
            className="el-49"
          />
        </div>
      </section>
      <section className="box-8">
        <Image
          src="/assets/pasted-artwork-23.svg"
          alt=""
          width={179}
          height={49}
          className="el-50"
        />
      </section>
      <section className="box-133">
        <span id="m-1" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/m-1\"}]}]"}
          className="crisp-svg svg-147"
          style={{ aspectRatio: "343 / 178" }}
        >
          <Image
            src="/assets/pasted-artwork-191.svg"
            alt=""
            width={686}
            height={356}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-32"
      />
      <section className="icon">
        <span
          className="crisp-svg el-144"
          style={{ aspectRatio: "429 / 280" }}
        >
          <Image
            src="/assets/pasted-artwork-202.svg"
            alt=""
            width={858}
            height={560}
          />
        </span>
        <p className="box-158">
          {"出展名"}
        </p>
        <p className="box-159">
          {"出展者名"}
        </p>
        <Image
          src="/assets/pasted-artwork-203.svg"
          alt=""
          width={119}
          height={119}
          className="svg-153"
        />
        <Image
          src="/assets/pasted-artwork-212.svg"
          alt=""
          width={15}
          height={15}
          className="svg-157"
        />
        <Image
          src="/assets/pasted-artwork-213.svg"
          alt=""
          width={13}
          height={20}
          className="svg-158"
        />
        <p className="box-161">
          {"ああああああああああああちゅ〜"}
        </p>
        <p className="box-162">
          {"１のA"}
        </p>
        <Image
          src="/assets/pasted-artwork-216.svg"
          alt=""
          width={35}
          height={34}
          className="svg-159"
        />
        <Image
          src="/assets/pasted-artwork-227.svg"
          alt=""
          width={533}
          height={16}
          className="svg-160"
        />
        <p className="box-166">
          {"m-1カテゴリ"}
        </p>
        <p className="box-167">
          {"中分類"}
        </p>
        <p className="box-168">
          {"大分類"}
        </p>
      </section>
    </>
  );
}
