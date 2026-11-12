import type { Metadata } from "next";
import { fetchPublic, readTextLimited } from "@/lib/safe-fetch";
import { evaluateValueRecipe as __evalValueRecipe } from "@/lib/value-recipe";
import { cache } from "react";
import Link from "next/link";
import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { safeNavigationUrl, interpolate, interpolateUrl, lookupVar } from "@/lib/vars";

// 60秒ごとにJSONを取得し直してページを作り直す（その間は作ったページを配信する）
export const revalidate = 60;

type Item = Record<string, unknown>;
type Vars = Record<string, unknown>;

/** 同じリクエスト内（メタデータとページ本体）では、同じURLを1回だけ取得する */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchJson = cache(async (url: string, init?: string, origin?: string): Promise<any> => {
  if (!safeRequestOrigin(url, init, origin)) return null;
  const res = await fetchPublic(url, { ...(init ? JSON.parse(init) : {}), next: { revalidate: 60 } });
  // 取得に失敗したら作り直しをやめ、前に作ったページを配信し続ける
  if (!res.ok) throw new Error(`データの取得に失敗しました（${res.status}）`);
  return JSON.parse(await readTextLimited(res, 5 * 1024 * 1024));
});

/** 認証情報や本文のある取得は、編集時に決めたオリジンに限る。 */
function safeRequestOrigin(url: string, init?: string, origin?: string): boolean {
  try { return !!url && (!init || (!!origin && new URL(url).origin === origin)); }
  catch { return false; }
}

/** スクリプト「ページを開いたとき」のデータのブロックを上から順に実行する */
async function loadData(vars: Vars) {
  vars["_0"] = await fetchJson(interpolateUrl("https://api.matsufes.info/data/web-info.json", vars));
  vars["_1"] = lookupVar(vars, "_0.data") ?? null;
  {
    const result = __evalValueRecipe(lookupVar(vars, "_1"), [{"kind":"length"}], vars);
    if (result.kind === "value") vars["_4"] = result.value;
    else if (result.kind === "missing") vars["_4"] = undefined;
  }
}

/** リストで並べる項目にする（オブジェクトはそのまま、文字や数値は {値} に入れる） */
function toItems(v: unknown): Item[] {
  if (!v || typeof v !== "object") return [];
  return Object.values(v).map((x): Item =>
    x && typeof x === "object" && !Array.isArray(x) ? x as Item : { ["値"]: x }
  );
}

export const metadata: Metadata = {
  title: "言葉からさがす",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "言葉からさがす",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page() {
  const vars: Vars = Object.create(null);
  vars["松ヶ崎祭について"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p"] = "松ヶ崎祭とは";
  vars["mf56-p"] = "mf56メインテ〜マ";
  vars["協賛-p"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p"] = "お知らせ";
  vars["企画さがし"] = "企画さがし";
  vars["言葉-p"] = "言葉からさがす";
  vars["日程表-p"] = "日程表からさがす";
  vars["地図-p"] = "地図からさがす";
  vars["しおり-p"] = "きみのしおり";
  vars["ご案内"] = "ご案内";
  vars["ご来場の-p"] = "ご来場の皆さまへ";
  vars["行き方-p"] = "行き方・会場地図";
  vars["アンケ〜ト-p"] = "来場者アンケ〜ト";
  vars["ご質問-p"] = "よくあるご質問";
  vars["相互リンク-p"] = "相互リンク";
  vars["公式特集"] = "公式特集";
  vars["委員会企画-p"] = "委員会企画";
  vars["m-1-p"] = "m-1グランプリ";
  vars["まつぴよ-p"] = "公式メンバ〜「まつぴよ」";
  await loadData(vars);
  vars["松ヶ崎祭について"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p"] = "松ヶ崎祭とは";
  vars["mf56-p"] = "mf56メインテ〜マ";
  vars["協賛-p"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p"] = "お知らせ";
  vars["企画さがし"] = "企画さがし";
  vars["言葉-p"] = "言葉からさがす";
  vars["日程表-p"] = "日程表からさがす";
  vars["地図-p"] = "地図からさがす";
  vars["しおり-p"] = "きみのしおり";
  vars["ご案内"] = "ご案内";
  vars["ご来場の-p"] = "ご来場の皆さまへ";
  vars["行き方-p"] = "行き方・会場地図";
  vars["アンケ〜ト-p"] = "来場者アンケ〜ト";
  vars["ご質問-p"] = "よくあるご質問";
  vars["相互リンク-p"] = "相互リンク";
  vars["公式特集"] = "公式特集";
  vars["委員会企画-p"] = "委員会企画";
  vars["m-1-p"] = "m-1グランプリ";
  vars["まつぴよ-p"] = "公式メンバ〜「まつぴよ」";
  return (
    <>
      <span hidden data-page-body="page_mv6trtsz1" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"store-load\",\"key\":\"mf_bookmarks\",\"into\":\"_2\",\"shared\":true},{\"kind\":\"transform\",\"source\":\"_2\",\"into\":\"_3\",\"transform\":{\"kind\":\"split\",\"separator\":\".\"}},{\"kind\":\"list-display\",\"mode\":\"sort\",\"array\":\"_1\",\"field\":\"publicId\",\"dir\":\"asc\"}]}]"} />
      <Image data-inview
        src="/assets/image.png"
        alt=""
        width={477}
        height={374}
        className="el-363"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-364"
        preload
        fetchPriority="high"
      />
      <nav className="header">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-402"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-391">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-48"
          />
        </div>
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-392">
          <div className="box-345">
            <div id="div-42" className="el-458">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-393">
                <span
                  className="crisp-svg svg-182"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" }}
                >
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-6">
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-394">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-398">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-93">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-94">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-95">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-96">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-395">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-399">
                <Link href="/search" id="言葉-p" className="button-97">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-98">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-99">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-100">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-396">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-400">
                <Link href="/attention" id="ご来場の-p" className="button-101">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-102">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p" className="button-103">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p" className="button-104">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-105">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-397">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-401">
                <Link href="/committee" id="委員会企画-p" className="button-106">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-107">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-108">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-457">
          <div className="container">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-422">
              <div className="el-421">
                <div className="box-338">
                  <p className="text-83">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-84">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-85">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-423" />
              <div id="div-34" data-toggle-show="flex" className="el-428">
                <div id="menu1-2" data-inview className="container-2">
                  <Link href="/about" className="el-424">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-425">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-426">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-427">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-429" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-430">
              <div className="el-431">
                <div className="box-339">
                  <p className="text-86">
                    {"きかく"}
                  </p>
                  <p className="text-87">
                    {"企画"}
                  </p>
                </div>
                <p className="text-88">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-432" />
              <div id="div-36" data-toggle-show="flex" className="el-433">
                <div id="menu1-4" data-inview className="container-3">
                  <Link href="/search" className="el-434">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-435">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-436">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-437">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-438" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-439">
              <div className="el-440">
                <p className="text-91">
                  {"ご"}
                </p>
                <div className="box-340">
                  <p className="text-89">
                    {"あんない"}
                  </p>
                  <p className="text-90">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-441" />
              <div id="div-39" data-toggle-show="flex" className="el-442">
                <div id="menu1-6" data-inview className="container-4">
                  <Link href="/attention" className="el-443">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-444">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-445">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-446">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-448">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-447" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-449">
              <div className="el-450">
                <div className="box-341">
                  <p className="text-92">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-93">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-451" />
              <div id="div-38" data-toggle-show="flex" className="el-452">
                <div id="menu1-8" data-inview className="container-5">
                  <Link href="/committee" className="el-453">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-454">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-455">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-456" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-365">
        <div className="box-228">
          <p className="text-4">
            {"ことば"}
          </p>
          <h1 className="text-2">
            {"言葉"}
          </h1>
        </div>
        <h2 className="text-3">
          {"からさがす"}
        </h2>
      </section>
      <section className="box-229">
        <Image
          src="/assets/main-thema-soshoku.svg"
          alt=""
          width={1240}
          height={34}
          className="main-thema-soshoku-svg"
          preload
          fetchPriority="high"
        />
      </section>
      <section className="box-230">
        <div className="el-366">
          <div className="box-231">
            <p className="text-5">
              {"まつがさきさい"}
            </p>
            <p className="text-6">
              {"松ヶ崎祭"}
            </p>
          </div>
          <p className="text-7">
            {"には　"}
          </p>
          <div className="box-232">
            <p className="text-8">
              {"きかく"}
            </p>
            <p className="text-9">
              {"企画"}
            </p>
          </div>
          <p className="text-10">
            {"がいっぱい。"}
          </p>
        </div>
        <div className="el-367">
          <div className="box-233">
            <p className="text-11">
              {"き"}
            </p>
            <p className="text-12">
              {"気"}
            </p>
          </div>
          <p className="text-13">
            {"になる"}
          </p>
          <div className="box-234">
            <p className="text-14">
              {"ことば"}
            </p>
            <p className="text-15">
              {"言葉"}
            </p>
          </div>
          <p className="text-16">
            {"から　"}
          </p>
          <div className="box-235">
            <p className="text-17">
              {"きみ"}
            </p>
            <p className="text-18">
              {"君"}
            </p>
          </div>
          <p className="text-19">
            {"にぴったりの"}
          </p>
          <div className="box-236">
            <p className="text-20">
              {"きかく"}
            </p>
            <p className="text-21">
              {"企画"}
            </p>
          </div>
          <p className="text-22">
            {"を"}
          </p>
          <div className="box-237">
            <p className="text-23">
              {"み"}
            </p>
            <p className="text-24">
              {"見"}
            </p>
          </div>
          <p className="text-25">
            {"つけてね。"}
          </p>
        </div>
      </section>
      <section className="box-238">
        <div className="box-240">
          <div className="box-239" />
          <div className="box-241">
            <div className="box-242">
              <Image
                src="/assets/image-3.png"
                alt="検索"
                width={102}
                height={111}
                className="png"
              />
            </div>
            <input id="field" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":2},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":1,\"conds\":[{\"field\":\"name\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"}},{\"field\":\"exhibitorName\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false},{\"field\":\"customAnswers.中分類\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false},{\"field\":\"searchWords\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false}]}]}]"} type="text" className="input-3" name="field" placeholder="ここに　言葉を　入力してみてね" />
          </div>
        </div>
      </section>
      <section className="el-362">
        <div className="box-244">
          <div className="box-286">
            <div className="box-291">
              <div className="box-287">
                <div className="box-288" />
                <div className="box-289">
                  <div className="box-290">
                    <Image
                      src="/assets/image-3.png"
                      alt=""
                      width={102}
                      height={111}
                      className="png-14"
                    />
                  </div>
                  <input id="field-2" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":1},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":2,\"conds\":[{\"field\":\"name\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"}},{\"field\":\"exhibitorName\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false},{\"field\":\"customAnswers.中分類\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false},{\"field\":\"searchWords\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false}]}]}]"} type="text" className="input-4" name="field-2" placeholder="ここに　言葉を　入力してみてね" />
                </div>
              </div>
            </div>
            <div className="box-281">
              <div className="el-388">
                <div id="div-30" data-toggle-show="flex" className="el-389">
                  <Image
                    src="/assets/image-4.png"
                    alt=""
                    width={300}
                    height={107}
                    className="png-12"
                  />
                  <div className="box-282">
                    <p className="text-52">
                      {"ひらく"}
                    </p>
                  </div>
                </div>
                <div id="div-31" data-toggle-show="flex" data-inview className="el-390">
                  <Image
                    src="/assets/image-124-1.png"
                    alt=""
                    width={274}
                    height={98}
                    className="png-13"
                    preload
                    fetchPriority="high"
                  />
                  <div className="box-283">
                    <p className="text-53">
                      {"とじる"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="div-32" data-toggle-show="flex" data-inview className="el-368">
              <div className="box-243">
                <Image
                  src="/assets/_-_2.png"
                  alt="いつ"
                  width={129}
                  height={129}
                  className="el-369"
                />
                <p className="text-26">
                  {"いつ"}
                </p>
              </div>
              <div className="box-245">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-2\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"show\",\"target\":\"div-2\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":3,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/13\"}]},{\"kind\":\"hide\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div\"}]}]}]"} className="el-371">
                  <label id="agree-2" className="checkbox">
                    <input type="checkbox" name="agree-2" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-2" data-toggle-show="flex" className="el-370">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-2"
                    />
                    <div className="box-246">
                      <p className="text-27">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                  <div id="div" data-toggle-show="flex" data-inview className="el-372">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-3"
                    />
                    <div className="box-247">
                      <p className="text-28">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-3\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"show\",\"target\":\"div-3\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":4,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"hide\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-4\"}]}]}]"} className="el-3072">
                  <label id="agree-3" className="checkbox-5">
                    <input type="checkbox" name="agree-3" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-3" data-toggle-show="flex" className="el-3073">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-97"
                    />
                    <div className="box-1007">
                      <p className="text-765">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-4" data-toggle-show="flex" data-inview className="el-3074">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-98"
                    />
                    <div className="box-1008">
                      <p className="text-766">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-4\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"show\",\"target\":\"div-5\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":5,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/15\"}]},{\"kind\":\"hide\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-6\"}]}]}]"} className="el-3075">
                  <label id="agree-4" className="checkbox-6">
                    <input type="checkbox" name="agree-4" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-5" data-toggle-show="flex" className="el-3076">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-99"
                    />
                    <div className="box-1009">
                      <p className="text-767">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-6" data-toggle-show="flex" data-inview className="el-3077">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-100"
                    />
                    <div className="box-1010">
                      <p className="text-768">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-248">
                <Image
                  src="/assets/image-5.png"
                  alt="どこで"
                  width={85}
                  height={108}
                  className="png-4"
                />
                <p className="text-29">
                  {"どこで"}
                </p>
              </div>
              <div className="box-249">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-5\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":6},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"show\",\"target\":\"div-7\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":6,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\"}]},{\"kind\":\"hide\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-8\"}]}]}]"} className="el-375">
                  <label id="agree-5" className="checkbox-2">
                    <input type="checkbox" name="agree-5" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-7" data-toggle-show="flex" className="el-376">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-5"
                    />
                    <div className="box-250">
                      <div className="box-256">
                        <p className="text-30">
                          {"おくがい"}
                        </p>
                        <p className="text-33">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-8" data-toggle-show="flex" className="el-377">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-6"
                    />
                    <div className="box-251">
                      <div className="box-257">
                        <p className="text-34">
                          {"おくがい"}
                        </p>
                        <p className="text-35">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-6\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":7},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"show\",\"target\":\"div-9\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":7,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\",\"not\":true}]},{\"kind\":\"hide\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-10\"}]}]}]"} className="el-378">
                  <label id="agree-6" className="checkbox-3">
                    <input type="checkbox" name="agree-6" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-9" data-toggle-show="flex" className="el-379">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-7"
                    />
                    <div className="box-252">
                      <div className="box-258">
                        <p className="text-36">
                          {"おくない"}
                        </p>
                        <p className="text-37">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-10" data-toggle-show="flex" className="el-380">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-8"
                    />
                    <div className="box-253">
                      <div className="box-259">
                        <p className="text-38">
                          {"おくない"}
                        </p>
                        <p className="text-39">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-7\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":8},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"show\",\"target\":\"div-11\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":8,\"join\":\"or\",\"conds\":[{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"パフォーマンス\",\"not\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"ストリートパフォーマンス\",\"and\":false},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"屋内パフォーマンス\",\"and\":false}]},{\"kind\":\"hide\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-12\"}]}]}]"} className="el-381">
                  <label id="agree-7" className="checkbox-4">
                    <input type="checkbox" name="agree-7" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-11" data-toggle-show="flex" className="el-382">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-9"
                    />
                    <div className="box-254">
                      <p className="text-31">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-12" data-toggle-show="flex" className="el-383">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-10"
                    />
                    <div className="box-255">
                      <p className="text-32">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-262">
                <Image
                  src="/assets/_-_2-1.png"
                  alt="どんなことがしたい？"
                  width={82}
                  height={104}
                  className="el-384"
                />
                <p className="text-41">
                  {"どんなことがしたい？"}
                </p>
              </div>
              <div className="box-263">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-8\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":9},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"show\",\"target\":\"div-13\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":9,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"たべる\"}]},{\"kind\":\"hide\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-14\"}]}]}]"} className="el-3078">
                  <label id="agree-8" className="checkbox-7">
                    <input type="checkbox" name="agree-8" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-13" data-toggle-show="flex" className="el-3079">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-101"
                    />
                    <div className="box-1011">
                      <p className="text-769">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-14" data-toggle-show="flex" data-inview className="el-3080">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-102"
                    />
                    <div className="box-1012">
                      <p className="text-770">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-9\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":10},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"show\",\"target\":\"div-15\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":10,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"あそぶ\"}]},{\"kind\":\"hide\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-16\"}]}]}]"} className="el-3081">
                  <label id="agree-9" className="checkbox-8">
                    <input type="checkbox" name="agree-9" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-15" data-toggle-show="flex" className="el-3082">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-103"
                    />
                    <div className="box-1013">
                      <p className="text-771">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-16" data-toggle-show="flex" data-inview className="el-3083">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-104"
                    />
                    <div className="box-1014">
                      <p className="text-772">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-10\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":11},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"show\",\"target\":\"div-17\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":11,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"のむ\"}]},{\"kind\":\"hide\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-18\"}]}]}]"} className="el-3084">
                  <label id="agree-10" className="checkbox-9">
                    <input type="checkbox" name="agree-10" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-17" data-toggle-show="flex" className="el-3085">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-105"
                    />
                    <div className="box-1015">
                      <p className="text-773">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-18" data-toggle-show="flex" data-inview className="el-3086">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-106"
                    />
                    <div className="box-1016">
                      <p className="text-774">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-11\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":12},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"show\",\"target\":\"div-19\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":12,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"みる\"}]},{\"kind\":\"hide\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-20\"}]}]}]"} className="el-3087">
                  <label id="agree-11" className="checkbox-10">
                    <input type="checkbox" name="agree-11" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-19" data-toggle-show="flex" className="el-3088">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-107"
                    />
                    <div className="box-1017">
                      <p className="text-775">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-20" data-toggle-show="flex" data-inview className="el-3089">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-108"
                    />
                    <div className="box-1018">
                      <p className="text-776">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-12\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":13},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"show\",\"target\":\"div-21\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":13,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"かう\"}]},{\"kind\":\"hide\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-22\"}]}]}]"} className="el-3090">
                  <label id="agree-12" className="checkbox-11">
                    <input type="checkbox" name="agree-12" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-21" data-toggle-show="flex" className="el-3091">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-109"
                    />
                    <div className="box-1019">
                      <p className="text-777">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                  <div id="div-22" data-toggle-show="flex" data-inview className="el-3092">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-110"
                    />
                    <div className="box-1020">
                      <p className="text-778">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-13\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":14},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"show\",\"target\":\"div-23\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":14,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"さわる\"}]},{\"kind\":\"hide\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-24\"}]}]}]"} className="el-3093">
                  <label id="agree-13" className="checkbox-12">
                    <input type="checkbox" name="agree-13" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-23" data-toggle-show="flex" className="el-3094">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-111"
                    />
                    <div className="box-1021">
                      <p className="text-779">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-24" data-toggle-show="flex" data-inview className="el-3095">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-112"
                    />
                    <div className="box-1022">
                      <p className="text-780">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-14\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":15},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"show\",\"target\":\"div-25\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":15,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"つくる\"}]},{\"kind\":\"hide\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-26\"}]}]}]"} className="el-3096">
                  <label id="agree-14" className="checkbox-13">
                    <input type="checkbox" name="agree-14" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-25" data-toggle-show="flex" className="el-3097">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-113"
                    />
                    <div className="box-1023">
                      <p className="text-781">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-26" data-toggle-show="flex" data-inview className="el-3098">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-114"
                    />
                    <div className="box-1024">
                      <p className="text-782">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-15\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":16},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-27\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":16,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"きく\"}]},{\"kind\":\"hide\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-28\"}]}]}]"} className="el-3099">
                  <label id="agree-15" className="checkbox-14">
                    <input type="checkbox" name="agree-15" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-27" data-toggle-show="flex" className="el-3100">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-115"
                    />
                    <div className="box-1025">
                      <p className="text-783">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                  <div id="div-28" data-toggle-show="flex" data-inview className="el-3101">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-116"
                    />
                    <div className="box-1026">
                      <p className="text-784">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\"}]}]"} className="el-385">
                <div id="div-29" data-toggle-show="flex" className="box-264">
                  <Image
                    src="/assets/image-4.png"
                    alt="やり直しボタン"
                    width={300}
                    height={107}
                    className="png-11"
                  />
                  <div className="box-265">
                    <Image
                      src="/assets/_-_2-2.png"
                      alt="やり直し"
                      width={50}
                      height={58}
                      className="el-386"
                    />
                    <p className="text-42">
                      {"やりなおす"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-266">
                <Link href="/m-1" className="box-267">
                  <div className="box-268">
                    <div className="box-269">
                      <p className="text-43">
                        {"m-1グランプリに投票する"}
                      </p>
                      <Image
                        src="/assets/image-22.png"
                        alt="m-1グランプリ投票"
                        width={44}
                        height={64}
                        className="image-22-png"
                      />
                    </div>
                  </div>
                  <span
                    className="crisp-svg vector-3-svg"
                    style={{ ["--crisp-svg-width"]: "343px", ["--crisp-svg-ratio"]: "343 / 178" }}
                  >
                    <Image
                      src="/assets/Vector-3.svg"
                      alt="m-1グランプリに投票する"
                      width={686}
                      height={356}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="box-260">
            <div className="box-261">
              <p className="text-40">
                {interpolate("{_4}件の出展が見つかりました", vars)}
              </p>
            </div>
            <div className="box-284">
              <div data-array="_1" className="el-373">
                {toItems(lookupVar(vars, "_1")).map((item, i) => {
                  const iv0 = { ...vars, ...item };
                  return (
                    <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": (Object.prototype.hasOwnProperty.call(item, "name") ? item["name"] : undefined), "exhibitorName": (Object.prototype.hasOwnProperty.call(item, "exhibitorName") ? item["exhibitorName"] : undefined), "tags": (Object.prototype.hasOwnProperty.call(item, "tags") ? item["tags"] : undefined), "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": (Object.prototype.hasOwnProperty.call(item, "searchWords") ? item["searchWords"] : undefined), "businessHours": (Object.prototype.hasOwnProperty.call(item, "businessHours") ? item["businessHours"] : undefined), "place": (Object.prototype.hasOwnProperty.call(item, "place") ? item["place"] : undefined), "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "venue": (Object.prototype.hasOwnProperty.call(item, "venue") ? item["venue"] : undefined), "categories.大分類": lookupVar(item, "categories.大分類"), "publicId": (Object.prototype.hasOwnProperty.call(item, "publicId") ? item["publicId"] : undefined) })}>
                      <SmartLink href={safeNavigationUrl(interpolateUrl("/booth/{publicId}", iv0))} className="el-374">
                        <div className="box-292">
                          <p className="text-44">
                            {interpolate("{name}", iv0)}
                          </p>
                          <div data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_3"},"op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},"then":[{"kind":"transform","source":"_3","into":"_3","transform":{"kind":"append","operand":"{publicId}","operandType":"text"}},{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}],"else":[{"kind":"set-list-item","list":"","key":"","value":""},{"kind":"remove-list-item","list":"","mode":"value","value":""},{"kind":"remove-list-item","list":"_3","mode":"value","value":""},{"kind":"transform","source":"_3","into":"_3","transform":{"kind":"field","key":""}}]}]},{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null},"left":{"inputRef":"_3"}},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]}])} className="el-739">
                            <Image id="fav-on" data-toggle-show="block"
                              src="/assets/bkonn.svg"
                              alt="お気に入り登録済"
                              width={35}
                              height={34}
                              className="bkonn-svg"
                              preload
                              fetchPriority="high"
                            />
                            <Image id="fav-off" data-toggle-show="block"
                              src="/assets/bkoff2.svg"
                              alt="お気に入り未登録"
                              width={35}
                              height={34}
                              className="bkoff2-svg"
                            />
                          </div>
                        </div>
                        <span
                          className="crisp-svg el-387"
                          style={{ ["--crisp-svg-width"]: "307px", ["--crisp-svg-ratio"]: "307 / 17" }}
                        >
                          <Image
                            src="/assets/1.svg"
                            alt=""
                            width={614}
                            height={34}
                          />
                        </span>
                        <p className="text-45">
                          {interpolate("{exhibitorName}", iv0)}
                        </p>
                        <div className="box-270">
                          <div className="box-280">
                            <div className="box-271">
                              <Image
                                src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                                alt=""
                                width={1024}
                                height={1024}
                                className="image-11"
                              />
                              <p className="text-46">
                                {"No Image"}
                              </p>
                            </div>
                          </div>
                          <div className="box-272">
                            <div className="box-273">
                              <Image
                                src="/assets/Vector-4.svg"
                                alt=""
                                width={15}
                                height={15}
                                className="vector-4-svg"
                              />
                              <p className="text-47">
                                {interpolate("{customAnswers.皆さまへ}", iv0)}
                              </p>
                            </div>
                            <div className="box-274">
                              <Image
                                src="/assets/Group-244.svg"
                                alt=""
                                width={13}
                                height={20}
                                className="group-244-svg"
                              />
                              <p className="text-48">
                                {interpolate("{location}", iv0)}
                              </p>
                            </div>
                            <div className="box-275">
                              <div className="box-276">
                                <p className="text-49">
                                  {interpolate("{categories.投票カテゴリ.0}", iv0)}
                                </p>
                              </div>
                            </div>
                            <div className="box-277">
                              <div className="box-278">
                                <p className="text-50">
                                  {interpolate("{categories.大分類.0}", iv0)}
                                </p>
                              </div>
                              <div className="box-279">
                                <p className="text-51">
                                  {interpolate("{customAnswers.中分類}", iv0)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Image
                          src="/assets/frame.png"
                          alt=""
                          width={750}
                          height={468}
                          className="frame-png"
                        />
                      </SmartLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-285">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png"
        />
      </section>
      <section data-inview className="footer-6">
        <span
          className="crisp-svg pasted-artwork-svg-78"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1015" }}
        >
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1660">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-225"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-9">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-226"
          />
        </a>
      </section>
      <section data-inview className="el-1685">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1686">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-260"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-24">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-261"
          />
        </a>
        <span
          className="crisp-svg svg-262"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 347" }}
        >
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
