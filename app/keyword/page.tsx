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
      <section className="el-294">
        <div className="el-295">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-296">
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
          <div id="memu-p" data-toggle-show="flex" className="el-297">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-298">
              <span
                className="crisp-svg svg-185"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-299">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-300">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-301">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-302">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-303">
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
            <div id="kikaku-phone" data-toggle-show="flex" className="el-304">
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
            <div id="goannai-phone" data-toggle-show="flex" className="el-305">
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
            <div id="koushiki-phone" data-toggle-show="flex" className="el-306">
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
            className="crisp-svg el-307"
            style={{ aspectRatio: "213 / 213" }}
          >
            <Image
              src="/assets/pasted-artwork-249.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-308">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-309">
              <span
                className="crisp-svg svg-186"
                style={{ aspectRatio: "244 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-310">
                <Link href="/about" className="el-311">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-5">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/support" className="el-312">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-313">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-314">
              <span
                className="crisp-svg svg-187"
                style={{ aspectRatio: "153 / 55" }}
              >
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-315">
                <Link href="/keyword" className="el-316">
                  {"言葉からさがす"}
                </Link>
                <Link href="/timetable-13" className="el-317">
                  {"日程表からさがす"}
                </Link>
                <Link href="/map" className="el-318">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage-favorite" className="el-319">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-320">
              <span
                className="crisp-svg svg-188"
                style={{ aspectRatio: "93 / 61" }}
              >
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-321">
                <Link href="/attention" className="el-322">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-323">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-324">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-325">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-326">
              <span
                className="crisp-svg svg-189"
                style={{ aspectRatio: "127 / 58" }}
              >
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-327">
                <Link href="/committee" className="el-328">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-7">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-329">
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
          className="el-330"
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
      <p className="el-174">
        {"松ヶ崎祭には　企画がいっぱい。\n気になる言葉から　きみにぴったりの企画を見つけてね。"}
      </p>
      <section className="box-217">
        <input id="field" type="text" className="input-2" name="field" placeholder="ここに　言葉を　入力してみてね" />
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
      <section className="box-132">
        <span id="m-1" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/m-1\"}]}]"}
          className="crisp-svg svg-146"
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
          className="crisp-svg el-141"
          style={{ aspectRatio: "429 / 280" }}
        >
          <Image
            src="/assets/pasted-artwork-202.svg"
            alt=""
            width={858}
            height={560}
          />
        </span>
        <p className="box-157">
          {"出展名"}
        </p>
        <p className="box-158">
          {"出展者名"}
        </p>
        <Image
          src="/assets/pasted-artwork-203.svg"
          alt=""
          width={119}
          height={119}
          className="svg-152"
        />
        <Image
          src="/assets/pasted-artwork-212.svg"
          alt=""
          width={15}
          height={15}
          className="svg-156"
        />
        <Image
          src="/assets/pasted-artwork-213.svg"
          alt=""
          width={13}
          height={20}
          className="svg-157"
        />
        <p className="box-160">
          {"ああああああああああああちゅ〜"}
        </p>
        <p className="box-161">
          {"１のA"}
        </p>
        <Image
          src="/assets/pasted-artwork-216.svg"
          alt=""
          width={35}
          height={34}
          className="svg-158"
        />
        <Image
          src="/assets/pasted-artwork-227.svg"
          alt=""
          width={533}
          height={16}
          className="svg-159"
        />
        <p className="box-165">
          {"m-1カテゴリ"}
        </p>
        <p className="box-166">
          {"中分類"}
        </p>
        <p className="box-167">
          {"大分類"}
        </p>
      </section>
    </>
  );
}
