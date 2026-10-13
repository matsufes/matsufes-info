import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { interpolate, interpolateUrl } from "@/lib/vars";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

type Item = Record<string, unknown>;
type Vars = Record<string, unknown>;



export const metadata: Metadata = {
  title: "出展検索",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    title: "出展検索",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const vars: Vars = {};
  const { slug } = await params;
  vars.slug = slug;
  const sp = await searchParams;
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === "string") vars[k] = v;
  }
  vars["松ヶ崎祭について"] = "松ヶ崎祭について";
  vars["企画さがし"] = "企画さがし";
  vars["ご案内"] = "ご案内";
  vars["公式特集"] = "公式特集";
  vars["松ヶ崎祭とは-p"] = "松ヶ崎祭とは";
  vars["mf56-p"] = "mf56メインテ〜マ";
  vars["協賛-p"] = "協賛いただいた皆さま";
  vars["お知らせ-p"] = "お知らせ";
  vars["言葉-p"] = "言葉からさがす";
  vars["日程表-p"] = "日程表からさがす";
  vars["地図-p"] = "地図からさがす";
  vars["しおり-p"] = "きみのしおり\n";
  vars["ご来場の-p"] = "ご来場の皆さまへ";
  vars["行き方-p"] = "行き方・会場地図";
  vars["アンケ〜ト-p"] = "来場者アンケ〜ト";
  vars["ご質問-p"] = "よくあるご質問";
  vars["委員会企画-p"] = "委員会企画";
  vars["m-1-p"] = "m-1グランプリ";
  vars["まつぴよ-p"] = "公式メンバ〜「まつぴよ」";
  return (
    <>
      <span hidden data-page-body="page_muzoss702k" />
      <section className="el-327">
        <div className="el-328">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-329">
            <span
              className="crisp-svg pasted-artwork-svg-45"
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
          <div id="memu-p" data-toggle-show="flex" className="el-330">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-331">
              <span
                className="crisp-svg svg-189"
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
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-332">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-333">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-334">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-335">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-336">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-76">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-77">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-78">
                {"協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-79">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-337">
              <Link href="/search" id="言葉-p" className="button-80">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-81">
                {"日程表からさがす"}
              </Link>
              <Link href="/navigation" id="地図-p" className="button-82">
                {"地図からさがす"}
              </Link>
              <Link href="/mypage" id="しおり-p" className="button-83">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-338">
              <Link href="/attention" id="ご来場の-p" className="button-84">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-85">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-86">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-87">
                {"よくあるご質問"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-339">
              <Link href="/committee" id="委員会企画-p" className="button-88">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-89">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-90">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            className="crisp-svg el-340"
          >
            <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
            <Image
              src="/assets/pasted-artwork-248.svg"
              alt=""
              width={426}
              height={426}
            />
          </span>
          <div className="el-341">
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-342">
              <span
                className="crisp-svg svg-190"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-343">
                <Link href="/about" className="el-344">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-6">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-345">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-346">
                  {"お知らせ"}
                </Link>
              </div>
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-347">
              <span
                className="crisp-svg svg-191"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-348">
                <Link href="/search" className="el-349">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-350">
                  {"日程表からさがす"}
                </Link>
                <Link href="/navigation" className="el-351">
                  {"地図からさがす"}
                </Link>
                <Link href="/mypage" className="el-352">
                  {"きみのしおり"}
                </Link>
              </div>
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-353">
              <span
                className="crisp-svg svg-192"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-354">
                <Link href="/attention" className="el-355">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-356">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-357">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-358">
                  {"よくあるご質問"}
                </Link>
              </div>
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-359">
              <span
                className="crisp-svg svg-193"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-360">
                <Link href="/committee" className="el-361">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-8">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-362">
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
          className="el-363"
        />
      </section>
      <p className="el-152">
        {"出展名"}
      </p>
      <section className="el-153">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-36"
        />
      </section>
      <p className="el-154">
        {"出展者名"}
      </p>
      <section className="box-162">
        <div className="el-158">
          <span
            className="crisp-svg pasted-artwork-svg-37"
          >
            <svg aria-hidden="true" width={439} height={96} viewBox="0 0 439 96" />
            <Image
              src="/assets/pasted-artwork-229.svg"
              alt=""
              width={878}
              height={192}
            />
          </span>
          <p className="box-163">
            {"ああああああああああああちゅ〜"}
          </p>
        </div>
        <div className="icon-2">
          <span
            className="crisp-svg pasted-artwork-svg-38"
          >
            <svg aria-hidden="true" width={351} height={351} viewBox="0 0 351 351" />
            <Image
              src="/assets/pasted-artwork-228.svg"
              alt=""
              width={702}
              height={702}
            />
          </span>
          <Image
            src="/assets/pasted-artwork-232.svg"
            alt=""
            width={278}
            height={278}
            className="svg-160"
          />
        </div>
        <div className="el-159" />
        <Image
          src="/assets/pasted-artwork-2.svg"
          alt=""
          width={150}
          height={150}
          className="el-155"
        />
        <Image
          src="/assets/pasted-artwork-3.svg"
          alt=""
          width={158}
          height={150}
          className="el-156"
        />
        <p className="el-160">
          {"11/14(土)10:00~20:30　11/15(日)10:00~16:00"}
        </p>
        <p className="el-161">
          {"1のA"}
        </p>
        <span
          className="crisp-svg el-162"
        >
          <svg aria-hidden="true" width={198} height={54} viewBox="0 0 198 54" />
          <Image
            src="/assets/pasted-artwork-231.svg"
            alt=""
            width={396}
            height={108}
          />
        </span>
        <p className="m-1-3">
          {"m-1カテゴリ"}
        </p>
        <p className="el-163">
          {"大分類"}
        </p>
        <p className="el-164">
          {"中分類"}
        </p>
      </section>
      <section className="box-231">
        <Image
          src="/assets/pasted-artwork-3.svg"
          alt=""
          width={158}
          height={150}
          className="pasted-artwork-svg-65"
        />
        <Image
          src="/assets/pasted-artwork-2.svg"
          alt=""
          width={150}
          height={150}
          className="pasted-artwork-svg-66"
        />
        <p className="box-232">
          {"11/14(土) 10:00〜20:30\n11/15(日) 10:00〜17:00"}
        </p>
      </section>
      <section className="el-168">
        <div className="box-170" />
        <p className="box-171">
          {"紹介文あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"}
        </p>
      </section>
      <section className="box-223">
        <div className="el-960">
          <Image
            src="/assets/pasted-artwork-237.svg"
            alt=""
            width={209}
            height={204}
            className="svg-162"
          />
          <p className="box-167">
            {"お気に入り"}
          </p>
        </div>
        <div className="m-1-25">
          <Image
            src="/assets/pasted-artwork-236.svg"
            alt=""
            width={162}
            height={237}
            className="svg-161"
          />
          <p className="box-168">
            {"m-1グランプリに\n投票する"}
          </p>
        </div>
        <div className="pc-3">
          <span
            className="crisp-svg pasted-artwork-svg-64"
          >
            <svg aria-hidden="true" width={726} height={181} viewBox="0 0 726 181" />
            <Image
              src="/assets/pasted-artwork-230.svg"
              alt=""
              width={1452}
              height={362}
            />
          </span>
          <p className="box-230">
            {"紹介文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"}
          </p>
        </div>
      </section>
      <section className="box-172">
        <Image
          src="/assets/pasted-artwork-235.svg"
          alt=""
          width={40}
          height={37}
          className="x-2"
        />
        <Image
          src="/assets/pasted-artwork-234.svg"
          alt=""
          width={44}
          height={44}
          className="el-166"
        />
        <Image
          src="/assets/pasted-artwork-233.svg"
          alt=""
          width={50}
          height={51}
          className="el-165"
        />
      </section>
      <section className="box-169">
        <span
          className="crisp-svg el-167"
        >
          <svg aria-hidden="true" width={198} height={54} viewBox="0 0 198 54" />
          <Image
            src="/assets/pasted-artwork-238.svg"
            alt=""
            width={396}
            height={108}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-157"
      />
    </>
  );
}
