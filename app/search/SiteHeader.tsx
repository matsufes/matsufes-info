import Link from "next/link";
import Image from "next/image";

/** 出展検索ページ共通のヘッダー（app/search/page.tsx のヘッダーと同じ内容） */
export default function SiteHeader() {
  return (
    <section className="el-290">
      <div className="el-291">
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-292">
          <span
            className="crisp-svg pasted-artwork-svg-44"
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
        <div id="memu-p" data-toggle-show="flex" className="el-293">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-294">
            <span
              className="crisp-svg svg-182"
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
          <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-295">
            {"松ヶ崎祭について"}
          </p>
          <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-296">
            {"企画さがし"}
          </p>
          <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-297">
            {"ご案内"}
          </p>
          <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-298">
            {"公式特集"}
          </p>
          <div id="mf-phone" data-toggle-show="flex" className="el-299">
            <Link href="/about" id="松ヶ崎祭とは-p" className="button-61">
              {"松ヶ崎祭とは"}
            </Link>
            <Link href="/theme" id="mf56-p" className="button-62">
              {"mf56メインテ〜マ"}
            </Link>
            <Link href="/sponsor" id="協賛-p" className="button-63">
              {"ご協賛いただいた皆さま"}
            </Link>
            <Link href="/notice" id="お知らせ-p" className="button-64">
              {"お知らせ"}
            </Link>
          </div>
          <div id="kikaku-phone" data-toggle-show="flex" className="el-300">
            <Link href="/search" id="言葉-p" className="button-65">
              {"言葉からさがす"}
            </Link>
            <Link href="/schedule/0" id="日程表-p" className="button-66">
              {"日程表からさがす"}
            </Link>
            <Link href="/navigation" id="地図-p" className="button-67">
              {"地図からさがす"}
            </Link>
            <Link href="/mypage" id="しおり-p" className="button-68">
              {"きみのしおり\n"}
            </Link>
          </div>
          <div id="goannai-phone" data-toggle-show="flex" className="el-301">
            <Link href="/attention" id="ご来場の-p" className="button-69">
              {"ご来場の皆さまへ"}
            </Link>
            <Link href="/access" id="行き方-p" className="button-70">
              {"行き方・会場地図"}
            </Link>
            <Link href="/comingsoon" id="アンケ〜ト-p" className="button-71">
              {"来場者アンケ〜ト"}
            </Link>
            <Link href="/comingsoon" id="ご質問-p" className="button-72">
              {"よくあるご質問"}
            </Link>
          </div>
          <div id="koushiki-phone" data-toggle-show="flex" className="el-302">
            <Link href="/committee" id="委員会企画-p" className="button-73">
              {"委員会企画"}
            </Link>
            <Link href="/m-1" id="m-1-p" className="button-74">
              {"m-1グランプリ"}
            </Link>
            <Link href="/comingsoon" id="まつぴよ-p" className="button-75">
              {"公式メンバ〜「まつぴよ」"}
            </Link>
          </div>
        </div>
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-303"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-248.svg"
            alt=""
            width={426}
            height={426}
          />
        </span>
        <div className="el-304">
          <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-305">
            <span
              className="crisp-svg svg-183"
            >
              <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
              <Image
                src="/assets/pasted-artwork-25.svg"
                alt=""
                width={488}
                height={110}
              />
            </span>
            <div id="menu1" data-toggle-show="flex" data-inview className="el-306">
              <Link href="/about" className="el-307">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" className="mf56-5">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" className="el-308">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" className="el-309">
                {"お知らせ"}
              </Link>
            </div>
          </div>
          <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-310">
            <span
              className="crisp-svg svg-184"
            >
              <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
              <Image
                src="/assets/pasted-artwork-26.svg"
                alt=""
                width={306}
                height={110}
              />
            </span>
            <div id="menu2" data-toggle-show="flex" data-inview className="el-311">
              <Link href="/search" className="el-312">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" className="el-313">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" className="el-314">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" className="el-315">
                {"きみのしおり"}
              </Link>
            </div>
          </div>
          <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-316">
            <span
              className="crisp-svg svg-185"
            >
              <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
              <Image
                src="/assets/pasted-artwork-27.svg"
                alt=""
                width={186}
                height={122}
              />
            </span>
            <div id="menu3" data-toggle-show="flex" data-inview className="el-317">
              <Link href="/attention" className="el-318">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" className="el-319">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" className="el-320">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" className="el-321">
                {"よくあるご質問"}
              </Link>
            </div>
          </div>
          <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-322">
            <span
              className="crisp-svg svg-186"
            >
              <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
              <Image
                src="/assets/pasted-artwork-28.svg"
                alt=""
                width={254}
                height={116}
              />
            </span>
            <div id="menu4" data-toggle-show="flex" data-inview className="el-323">
              <Link href="/committee" className="el-324">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" className="m-1-7">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" className="el-325">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image data-inview
        src="/assets/image-7.svg"
        alt=""
        width={1920}
        height={583}
        className="el-326"
      />
    </section>
  );
}
