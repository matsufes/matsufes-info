import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { interpolate, interpolateUrl, lookupVar } from "@/lib/vars";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

type Item = Record<string, unknown>;
type Vars = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchJson(url: string): Promise<any> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

/** "products.0" のような位置を掘る（配列の "-1" は最後の要素） */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dig(v: any, path: string[]): unknown {
  for (const k of path) v = Array.isArray(v) && k === "-1" ? v[v.length - 1] : v?.[k];
  return v ?? null;
}

/** スクリプト「ページを開いたとき」のデータのブロックを上から順に実行する */
async function loadData(vars: Vars) {
  let got: unknown = null;
  got = await fetchJson(interpolateUrl("https://api.matsufes.info/data/web-info.json", vars));
  vars["データ"] = got;
  vars["data"] = dig(got, ["data"]);
}

/** リストで並べる項目にする（オブジェクトはそのまま、文字や数値は {値} に入れる） */
function toItems(v: unknown): Item[] {
  if (!Array.isArray(v)) return [];
  return v.flatMap((x): Item[] =>
    x == null || Array.isArray(x) ? [] : typeof x === "object" ? [x as Item] : [{ "値": x }]
  );
}

export const metadata: Metadata = {
  title: "出展検索",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    title: "出展検索",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const vars: Vars = {};
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
  vars["協賛-p"] = "ご協賛いただいた皆さま";
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
  await loadData(vars);
  vars["松ヶ崎祭について"] = "松ヶ崎祭について";
  vars["企画さがし"] = "企画さがし";
  vars["ご案内"] = "ご案内";
  vars["公式特集"] = "公式特集";
  vars["松ヶ崎祭とは-p"] = "松ヶ崎祭とは";
  vars["mf56-p"] = "mf56メインテ〜マ";
  vars["協賛-p"] = "ご協賛いただいた皆さま";
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
      <span hidden data-page-body="page_msotieex1e" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"sort-array\",\"array\":\"data\",\"field\":\"publicId\",\"dir\":\"asc\"}]}]"} />
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
            <p id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-305">
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
            </p>
            <p id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-310">
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
            </p>
            <p id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-316">
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
            </p>
            <p id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-322">
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
            </p>
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
      <p className="el-28">
        <span
          className="crisp-svg svg-5"
        >
          <svg aria-hidden="true" width={603} height={159} viewBox="0 0 603 159" />
          <Image
            src="/assets/pasted-artwork-29.svg"
            alt=""
            width={1206}
            height={318}
          />
        </span>
      </p>
      <section className="el-54">
        <Image
          src="/assets/pasted-artwork-111.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-12"
        />
      </section>
      <p className="el-170">
        {"松ヶ崎祭には　企画がいっぱい。\n気になる言葉から　きみにぴったりの企画を見つけてね。"}
      </p>
      <section className="box-215">
        <input id="field" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"filter-array","array":"data","conds":[{"field":"name","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}"} })},{"field":"exhibitorName","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}"} })},{"field":"tags","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}"} })}]}]}])} type="text" className="input-2" name="field" placeholder="ここに　言葉を　入力してみてね" />
      </section>
      <section className="box-233">
        <div className="box-232">
          <div className="el-31">
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
          </div>
          <div className="el-29">
            <Image
              src="/assets/pasted-artwork-5.svg"
              alt=""
              width={137}
              height={49}
              className="el-34"
            />
            <Image
              src="/assets/pasted-artwork-6.svg"
              alt=""
              width={137}
              height={49}
              className="el-35"
            />
            <Image
              src="/assets/pasted-artwork-7.svg"
              alt=""
              width={137}
              height={49}
              className="el-36"
            />
          </div>
          <div className="el-56">
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
          </div>
          <div className="el-32">
            <Image
              src="/assets/pasted-artwork-9.svg"
              alt=""
              width={137}
              height={49}
              className="el-38"
            />
            <Image
              src="/assets/pasted-artwork-8.svg"
              alt=""
              width={137}
              height={49}
              className="el-37"
            />
            <Image
              src="/assets/pasted-artwork-10.svg"
              alt=""
              width={137}
              height={49}
              className="el-39"
            />
          </div>
          <div className="el-57">
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
          </div>
          <div className="el-33">
            <div className="box-6">
              <Image
                src="/assets/pasted-artwork-11.svg"
                alt=""
                width={138}
                height={49}
                className="el-40"
              />
              <Image
                src="/assets/pasted-artwork-12.svg"
                alt=""
                width={137}
                height={49}
                className="el-41"
              />
              <Image
                src="/assets/pasted-artwork-13.svg"
                alt=""
                width={137}
                height={49}
                className="el-42"
              />
              <Image
                src="/assets/pasted-artwork-14.svg"
                alt=""
                width={137}
                height={49}
                className="el-43"
              />
            </div>
            <div className="box-7">
              <Image
                src="/assets/pasted-artwork-15.svg"
                alt=""
                width={138}
                height={49}
                className="el-44"
              />
              <Image
                src="/assets/pasted-artwork-16.svg"
                alt=""
                width={138}
                height={49}
                className="el-45"
              />
              <Image
                src="/assets/pasted-artwork-17.svg"
                alt=""
                width={137}
                height={49}
                className="el-46"
              />
              <Image
                src="/assets/pasted-artwork-18.svg"
                alt=""
                width={137}
                height={49}
                className="el-47"
              />
            </div>
          </div>
          <div className="box-8">
            <Image
              src="/assets/pasted-artwork-23.svg"
              alt=""
              width={179}
              height={49}
              className="el-48"
            />
          </div>
          <div className="box-132">
            <span id="m-1" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/m-1\"}]}]"}
              className="crisp-svg svg-144"
            >
              <svg aria-hidden="true" width={343} height={178} viewBox="0 0 343 178" />
              <Image
                src="/assets/pasted-artwork-191.svg"
                alt=""
                width={686}
                height={356}
              />
            </span>
          </div>
        </div>
        <div className="box-234">
          <div data-array="data" className="icon-3">
            {toItems(lookupVar(vars, "data")).map((item, i) => {
              const iv0 = { ...vars, ...item };
              return (
                <div key={i} style={{ display: "contents" }} data-item={JSON.stringify({ "name": item["name"], "exhibitorName": item["exhibitorName"], "tags": item["tags"], "publicId": item["publicId"] })}>
                  <div className="icon">
                    <span
                      className="crisp-svg el-139"
                    >
                      <svg aria-hidden="true" width={429} height={280} viewBox="0 0 429 280" />
                      <Image
                        src="/assets/pasted-artwork-202.svg"
                        alt=""
                        width={858}
                        height={560}
                      />
                    </span>
                    <p className="box-157">
                      {interpolate("{exhibitorName}", iv0)}
                    </p>
                    <p className="box-158">
                      {interpolate("{groupName}", iv0)}
                    </p>
                    <Image
                      src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAAAAACw="}
                      alt=""
                      width={1024}
                      height={1024}
                      className="svg-150"
                    />
                    <Image
                      src="/assets/pasted-artwork-212.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="svg-154"
                    />
                    <Image
                      src="/assets/pasted-artwork-213.svg"
                      alt=""
                      width={13}
                      height={20}
                      className="svg-155"
                    />
                    <p className="box-160">
                      {interpolate("{customAnswers.皆さまへ}", iv0)}
                    </p>
                    <p className="box-161">
                      {interpolate("{exhibitNo}", iv0)}
                    </p>
                    <Image
                      src="/assets/pasted-artwork-216.svg"
                      alt=""
                      width={35}
                      height={34}
                      className="svg-156"
                    />
                    <Image
                      src="/assets/pasted-artwork-227.svg"
                      alt=""
                      width={533}
                      height={16}
                      className="svg-157"
                    />
                    <p className="box-164">
                      {"m-1カテゴリ"}
                    </p>
                    <p className="box-165">
                      {interpolate("{customAnswers.中分類}", iv0)}
                    </p>
                    <p className="box-166">
                      {interpolate("{type}", iv0)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Image data-inview
        src="/assets/image-6.svg"
        alt=""
        width={1920}
        height={713}
        className="el-30"
      />
    </>
  );
}
