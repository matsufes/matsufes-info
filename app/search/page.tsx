import type { Metadata } from "next";
import { fetchPublic, readTextLimited } from "@/lib/safe-fetch";
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
}

/** リストで並べる項目にする（オブジェクトはそのまま、文字や数値は {値} に入れる） */
function toItems(v: unknown): Item[] {
  if (!Array.isArray(v)) return [];
  return v.flatMap((x): Item[] =>
    x == null || Array.isArray(x) ? [] : typeof x === "object" ? [x as Item] : [{ "値": x }]
  );
}

export const metadata: Metadata = {
  title: "言葉からさがす",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    title: "言葉からさがす",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page() {
  const vars: Vars = {};
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
      <span hidden data-page-body="page_mv6trtsz1" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"store-load\",\"key\":\"mf_bookmarks\",\"into\":\"_2\",\"shared\":true}]},{\"trigger\":\"load\",\"steps\":[{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"sort-array\",\"array\":\"_1\",\"field\":\"publicId\",\"dir\":\"asc\"}]}]"} />
      <Image data-inview
        src="/assets/image.png"
        alt=""
        width={477}
        height={374}
        className="el-405"
        priority
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-406"
        priority
      />
      <nav className="header">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-475"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-464">
          <span
            className="crisp-svg pasted-artwork-svg-51"
          >
            <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
            <Image
              src="/assets/pasted-artwork-223.svg"
              alt="メニューを開く"
              width={460}
              height={284}
            />
          </span>
        </div>
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-465">
          <div className="box-368">
            <div className="el-531">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-466">
                <span
                  className="crisp-svg svg-214"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-160.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-6">
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-467">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-471">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-108">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-109">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-110">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-111">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-468">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-472">
                <Link href="/search" id="言葉-p" className="button-112">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-113">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-114">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-115">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-469">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-473">
                <Link href="/attention" id="ご来場の-p" className="button-116">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-117">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p" className="button-118">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p" className="button-119">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-120">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-470">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-474">
                <Link href="/committee" id="委員会企画-p" className="button-121">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-122">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-123">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-530">
          <div className="container">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-495">
              <div className="el-494">
                <div className="box-361">
                  <p className="text-103">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-104">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-105">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-496" />
              <div id="div-34" data-toggle-show="flex" className="el-501">
                <div id="menu1-2" data-inview className="container-2">
                  <Link href="/about" className="el-497">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-498">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-499">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-500">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-502" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-503">
              <div className="el-504">
                <div className="box-362">
                  <p className="text-106">
                    {"さがし"}
                  </p>
                  <p className="text-107">
                    {"企画"}
                  </p>
                </div>
                <p className="text-108">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-505" />
              <div id="div-36" data-toggle-show="flex" className="el-506">
                <div id="menu1-4" data-inview className="container-3">
                  <Link href="/search" className="el-507">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-508">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-509">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-510">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-511" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-512">
              <div className="el-513">
                <p className="text-111">
                  {"ご"}
                </p>
                <div className="box-363">
                  <p className="text-109">
                    {"あんない"}
                  </p>
                  <p className="text-110">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-514" />
              <div id="div-39" data-toggle-show="flex" className="el-515">
                <div id="menu1-6" data-inview className="container-4">
                  <Link href="/attention" className="el-516">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-517">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-518">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-519">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-521">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-520" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-522">
              <div className="el-523">
                <div className="box-364">
                  <p className="text-112">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-113">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-524" />
              <div id="div-38" data-toggle-show="flex" className="el-525">
                <div id="menu1-8" data-inview className="container-5">
                  <Link href="/committee" className="el-526">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-527">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-528">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-529" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-407">
        <div className="box-232">
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
      <section className="box-233">
        <Image
          src="/assets/main-thema-soshoku.svg"
          alt=""
          width={1240}
          height={34}
          className="main-thema-soshoku-svg"
          priority
        />
      </section>
      <section className="box-234">
        <div className="el-408">
          <div className="box-235">
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
          <div className="box-236">
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
        <div className="el-409">
          <div className="box-237">
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
          <div className="box-238">
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
          <div className="box-239">
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
          <div className="box-240">
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
          <div className="box-241">
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
      <section className="box-242">
        <div className="box-244">
          <div className="box-243" />
          <div className="box-245">
            <div className="box-246">
              <Image
                src="/assets/image-3.png"
                alt="検索"
                width={102}
                height={111}
                className="png"
              />
            </div>
            <input id="field" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"filter-array","array":"_1","no":1,"conds":[{"field":"name","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"exhibitorName","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"customAnswers.中分類","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"searchWords","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })}]},{"kind":"count","array":"_1","into":"_3"}]}])} type="text" className="input-3" name="field" placeholder="ここに　言葉を　入力してみてね" />
          </div>
        </div>
      </section>
      <section className="el-404">
        <div className="box-248">
          <div className="box-309">
            <div className="box-314">
              <div className="box-310">
                <div className="box-311" />
                <div className="box-312">
                  <div className="box-313">
                    <Image
                      src="/assets/image-3.png"
                      alt=""
                      width={102}
                      height={111}
                      className="png-34"
                    />
                  </div>
                  <input id="field-2" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"filter-array","array":"_1","no":15,"conds":[{"field":"name","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })},{"field":"exhibitorName","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })},{"field":"customAnswers.中分類","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })},{"field":"searchWords","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })}]},{"kind":"count","array":"_1","into":"_3"}]}])} type="text" className="input-4" name="field-2" placeholder="ここに　言葉を　入力してみてね" />
                </div>
              </div>
            </div>
            <div className="box-304">
              <div className="el-461">
                <div id="div-30" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-30\"},{\"kind\":\"show\",\"target\":\"div-32\"},{\"kind\":\"show\",\"target\":\"div-31\"}]}]"} data-toggle-show="flex" className="el-462">
                  <Image
                    src="/assets/image-4.png"
                    alt=""
                    width={300}
                    height={107}
                    className="png-32"
                  />
                  <div className="box-305">
                    <p className="text-72">
                      {"ひらく"}
                    </p>
                  </div>
                </div>
                <div id="div-31" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-31\"},{\"kind\":\"show\",\"target\":\"div-30\"},{\"kind\":\"hide\",\"target\":\"div-32\"}]}]"} data-toggle-show="flex" data-inview className="el-463">
                  <Image
                    src="/assets/image-124-1-.png"
                    alt=""
                    width={274}
                    height={98}
                    className="png-33"
                    priority
                  />
                  <div className="box-306">
                    <p className="text-73">
                      {"とじる"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="div-32" data-toggle-show="flex" data-inview className="el-410">
              <div className="box-247">
                <Image
                  src="/assets/_-_2.png"
                  alt="いつ"
                  width={129}
                  height={129}
                  className="el-411"
                />
                <p className="text-26">
                  {"いつ"}
                </p>
              </div>
              <div className="box-249">
                <div className="el-413">
                  <div id="div-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":16,\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/13\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div\"}]}]"} data-toggle-show="flex" className="el-412">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-2"
                    />
                    <div className="box-250">
                      <p className="text-27">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                  <div id="div" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":16},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"show\",\"target\":\"div-2\"}]}]"} data-toggle-show="flex" data-inview className="el-414">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-3"
                    />
                    <div className="box-251">
                      <p className="text-28">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-417">
                  <div id="div-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":2,\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-4\"}]}]"} data-toggle-show="flex" className="el-418">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-4"
                    />
                    <div className="box-252">
                      <p className="text-29">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-4" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":2},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"show\",\"target\":\"div-3\"}]}]"} data-toggle-show="flex" data-inview className="el-419">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-5"
                    />
                    <div className="box-253">
                      <p className="text-30">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-420">
                  <div id="div-5" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":3,\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-6\"}]}]"} data-toggle-show="flex" className="el-421">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-6"
                    />
                    <div className="box-254">
                      <p className="text-31">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-6" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":3},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"show\",\"target\":\"div-5\"}]}]"} data-toggle-show="flex" data-inview className="el-422">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-7"
                    />
                    <div className="box-255">
                      <p className="text-32">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-256">
                <Image
                  src="/assets/image-5.png"
                  alt="どこで"
                  width={85}
                  height={108}
                  className="png-8"
                />
                <p className="text-33">
                  {"どこで"}
                </p>
              </div>
              <div className="box-257">
                <div className="el-423">
                  <div id="div-7" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":4,\"conds\":[{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"1\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"2\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"3\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"4\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"5\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"6\"},{\"field\":\"place\",\"op\":\"eq\",\"value\":\"\"},{\"field\":\"place\",\"op\":\"contains\",\"value\":\"構内全体\"},{\"field\":\"place\",\"op\":\"ends-with\",\"value\":\"前\"},{\"field\":\"place\",\"op\":\"ends-with\",\"value\":\"横\"},{\"field\":\"place\",\"op\":\"contains\",\"value\":\"武道場\"},{\"field\":\"place\",\"op\":\"contains\",\"value\":\"和楽庵\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-8\"}]}]"} data-toggle-show="flex" className="el-424">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-9"
                    />
                    <div className="box-258">
                      <div className="box-264">
                        <p className="text-34">
                          {"おくがい"}
                        </p>
                        <p className="text-37">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-8" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":4},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"show\",\"target\":\"div-7\"}]}]"} data-toggle-show="flex" className="el-425">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-10"
                    />
                    <div className="box-259">
                      <div className="box-265">
                        <p className="text-38">
                          {"おくがい"}
                        </p>
                        <p className="text-39">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-426">
                  <div id="div-9" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":5,\"conds\":[{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"1\"},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"2\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"3\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"4\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"5\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"6\",\"and\":true},{\"field\":\"place\",\"op\":\"not-empty\",\"value\":\"\",\"and\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"not-contains\",\"value\":\"パフォーマンス\",\"and\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"not-contains\",\"value\":\"ストリートパフォーマンス\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"構内全体\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"前\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"横\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"武道場\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"和楽庵\",\"and\":true}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-10\"}]}]"} data-toggle-show="flex" className="el-427">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-11"
                    />
                    <div className="box-260">
                      <div className="box-266">
                        <p className="text-40">
                          {"おくない"}
                        </p>
                        <p className="text-41">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-10" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":5},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"show\",\"target\":\"div-9\"}]}]"} data-toggle-show="flex" className="el-428">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-12"
                    />
                    <div className="box-261">
                      <div className="box-267">
                        <p className="text-42">
                          {"おくない"}
                        </p>
                        <p className="text-43">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-429">
                  <div id="div-11" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":6,\"conds\":[{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"パフォーマンス\"},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"ストリートパフォーマンス\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-12\"}]}]"} data-toggle-show="flex" className="el-430">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-13"
                    />
                    <div className="box-262">
                      <p className="text-35">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-12" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":6},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"show\",\"target\":\"div-11\"}]}]"} data-toggle-show="flex" className="el-431">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-14"
                    />
                    <div className="box-263">
                      <p className="text-36">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-270">
                <Image
                  src="/assets/_-_2-1-.png"
                  alt="どんなことがしたい？"
                  width={82}
                  height={104}
                  className="el-432"
                />
                <p className="text-45">
                  {"どんなことがしたい？"}
                </p>
              </div>
              <div className="box-271">
                <div className="el-433">
                  <div id="div-13" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":7,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"たべる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-14\"}]}]"} data-toggle-show="flex" className="el-434">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-15"
                    />
                    <div className="box-272">
                      <p className="text-46">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-14" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":7},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"show\",\"target\":\"div-13\"}]}]"} data-toggle-show="flex" className="el-435">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-16"
                    />
                    <div className="box-273">
                      <p className="text-49">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-436">
                  <div id="div-15" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":8,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"あそぶ\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-16\"}]}]"} data-toggle-show="flex" className="el-437">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-17"
                    />
                    <div className="box-274">
                      <p className="text-47">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-16" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":8},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"show\",\"target\":\"div-15\"}]}]"} data-toggle-show="flex" className="el-438">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-18"
                    />
                    <div className="box-275">
                      <p className="text-50">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-439">
                  <div id="div-17" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":9,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"のむ\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-18\"}]}]"} data-toggle-show="flex" className="el-440">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-19"
                    />
                    <div className="box-276">
                      <p className="text-48">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-18" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":9},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"show\",\"target\":\"div-17\"}]}]"} data-toggle-show="flex" data-inview className="el-441">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-20"
                    />
                    <div className="box-277">
                      <p className="text-51">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-442">
                  <div id="div-19" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":10,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"みる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-20\"}]}]"} data-toggle-show="flex" className="el-443">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-21"
                    />
                    <div className="box-278">
                      <p className="text-52">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-20" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":10},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"show\",\"target\":\"div-19\"}]}]"} data-toggle-show="flex" data-inview className="el-444">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-22"
                    />
                    <div className="box-279">
                      <p className="text-57">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-445">
                  <div id="div-21" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":11,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"かう\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-22\"}]}]"} data-toggle-show="flex" className="el-446">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-23"
                    />
                    <div className="box-280">
                      <p className="text-53">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                  <div id="div-22" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":11},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"show\",\"target\":\"div-21\"}]}]"} data-toggle-show="flex" data-inview className="el-447">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-24"
                    />
                    <div className="box-281">
                      <p className="text-58">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-448">
                  <div id="div-23" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":12,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"さわる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-24\"}]}]"} data-toggle-show="flex" className="el-449">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-25"
                    />
                    <div className="box-282">
                      <p className="text-54">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-24" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":12},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"show\",\"target\":\"div-23\"}]}]"} data-toggle-show="flex" data-inview className="el-450">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-26"
                    />
                    <div className="box-283">
                      <p className="text-59">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-451">
                  <div id="div-25" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":13,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"つくる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-26\"}]}]"} data-toggle-show="flex" className="el-452">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-27"
                    />
                    <div className="box-284">
                      <p className="text-55">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-26" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":13},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"show\",\"target\":\"div-25\"}]}]"} data-toggle-show="flex" data-inview className="el-453">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-28"
                    />
                    <div className="box-285">
                      <p className="text-60">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-454">
                  <div id="div-27" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":14,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"きく\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-28\"}]}]"} data-toggle-show="flex" className="el-455">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-29"
                    />
                    <div className="box-286">
                      <p className="text-56">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                  <div id="div-28" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":14},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-27\"}]}]"} data-toggle-show="flex" data-inview className="el-456">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt="絞り込みボタン"
                      width={274}
                      height={98}
                      className="png-30"
                    />
                    <div className="box-287">
                      <p className="text-61">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="el-457">
                <div id="div-29" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\"},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-29\"},{\"kind\":\"set-value\",\"target\":\"field\",\"value\":\"\"},{\"kind\":\"set-value\",\"target\":\"field-2\",\"value\":\"\"}]}]"} data-toggle-show="flex" className="el-458">
                  <Image
                    src="/assets/image-4.png"
                    alt="やり直しボタン"
                    width={300}
                    height={107}
                    className="png-31"
                  />
                  <div className="box-288">
                    <Image
                      src="/assets/_-_2-2-.png"
                      alt="やり直し"
                      width={50}
                      height={58}
                      className="el-459"
                    />
                    <p className="text-62">
                      {"やりなおす"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-289">
                <Link href="/m-1" className="box-290">
                  <div className="box-291">
                    <div className="box-292">
                      <p className="text-63">
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
                  <Image
                    src="/assets/Vector-3-.svg"
                    alt="m-1グランプリに投票する"
                    width={343}
                    height={178}
                    className="vector-3-svg"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="box-268">
            <div className="box-269">
              <p className="text-44" data-live={interpolate("{_3}件の出展が見つかりました", { ...vars, ...{"_3":"{_3}","\u0000keepEscapes":true} })}>
                {interpolate("{_3}件の出展が見つかりました", vars)}
              </p>
            </div>
            <div className="box-307">
              <div data-array="_1" className="el-415">
                {toItems(lookupVar(vars, "_1")).map((item, i) => {
                  const iv0 = { ...vars, ...item };
                  return (
                    <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": item["name"], "exhibitorName": item["exhibitorName"], "tags": item["tags"], "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": item["searchWords"], "businessHours": item["businessHours"], "venue": item["venue"], "place": item["place"], "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "categories.大分類": lookupVar(item, "categories.大分類"), "publicId": item["publicId"] })}>
                      <SmartLink href={safeNavigationUrl(interpolateUrl("/booth/{publicId}", iv0))} className="el-416">
                        <div className="box-315">
                          <p className="text-64">
                            {interpolate("{name}", iv0)}
                          </p>
                          <div className="el-814">
                            <Image id="fav-on" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"list-edit","into":"_2","op":"remove","value":interpolate("{publicId}", { ...iv0, ...{"\u0000keepEscapes":true} }),"sep":"."},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...iv0, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-on"},{"kind":"show","target":"fav-off"}]}])} data-toggle-show="block"
                              src="/assets/bkonn.svg"
                              alt="お気に入り登録済"
                              width={35}
                              height={34}
                              className="bkonn-svg"
                              priority
                            />
                            <Image id="fav-off" data-scripts={JSON.stringify([{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_2}", { ...iv0, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"op":"contains","value":interpolate("{publicId}", { ...iv0, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]},{"trigger":"click","steps":[{"kind":"list-edit","into":"_2","op":"add","value":interpolate("{publicId}", { ...iv0, ...{"\u0000keepEscapes":true} }),"sep":"."},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...iv0, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-off"},{"kind":"show","target":"fav-on"}]}])} data-toggle-show="block"
                              src="/assets/bkoff2.svg"
                              alt="お気に入り未登録"
                              width={35}
                              height={34}
                              className="bkoff2-svg"
                            />
                          </div>
                        </div>
                        <span
                          className="crisp-svg el-460"
                        >
                          <svg aria-hidden="true" width={307} height={17} viewBox="0 0 307 17" />
                          <Image
                            src="/assets/1-.svg"
                            alt=""
                            width={614}
                            height={34}
                          />
                        </span>
                        <p className="text-65">
                          {interpolate("{exhibitorName}", iv0)}
                        </p>
                        <div className="box-293">
                          <div className="box-303">
                            <div className="box-294">
                              <Image
                                src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                                alt=""
                                width={1024}
                                height={1024}
                                className="image-14"
                              />
                              <p className="text-66">
                                {"No Image"}
                              </p>
                            </div>
                          </div>
                          <div className="box-295">
                            <div className="box-296">
                              <Image
                                src="/assets/Vector-4-.svg"
                                alt=""
                                width={15}
                                height={15}
                                className="vector-4-svg"
                              />
                              <p className="text-67">
                                {interpolate("{customAnswers.皆さまへ}", iv0)}
                              </p>
                            </div>
                            <div className="box-297">
                              <Image
                                src="/assets/Group-244.svg"
                                alt=""
                                width={13}
                                height={20}
                                className="group-244-svg"
                              />
                              <p className="text-68">
                                {interpolate("{location}", iv0)}
                              </p>
                            </div>
                            <div className="box-298">
                              <div className="box-299">
                                <p className="text-69">
                                  {interpolate("{categories.投票カテゴリ.0}", iv0)}
                                </p>
                              </div>
                            </div>
                            <div className="box-300">
                              <div className="box-301">
                                <p className="text-70">
                                  {interpolate("{categories.大分類.0}", iv0)}
                                </p>
                              </div>
                              <div className="box-302">
                                <p className="text-71">
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
      <section className="box-308">
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
          className="crisp-svg pasted-artwork-svg-81"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1735">
          <Image
            src="/assets/pasted-artwork-164.svg"
            alt=""
            width={58}
            height={58}
            className="svg-258"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-9">
          <Image
            src="/assets/pasted-artwork-165.svg"
            alt=""
            width={54}
            height={49}
            className="svg-259"
          />
        </a>
      </section>
    </>
  );
}
