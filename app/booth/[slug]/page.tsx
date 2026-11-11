import type { Metadata } from "next";
import { fetchPublic, readTextLimited } from "@/lib/safe-fetch";
import { evaluateValueRecipe as __evalValueRecipe } from "@/lib/value-recipe";
import { runPurePageSteps as __runPurePageSteps } from "@/lib/page-load-steps";
import { notFound } from "next/navigation";
import { Fragment, cache } from "react";
import Link from "next/link";
import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { safeNavigationUrl, interpolate, interpolateUrl, lookupVar } from "@/lib/vars";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

type Item = Record<string, unknown>;
type Vars = Record<string, unknown>;

/** 同じリクエスト内（メタデータとページ本体）では、同じURLを1回だけ取得する */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchJson = cache(async (url: string, init?: string, origin?: string): Promise<any> => {
  try {
    if (!safeRequestOrigin(url, init, origin)) return null;
    const res = await fetchPublic(url, { ...(init ? JSON.parse(init) : {}), cache: "no-store" });
    return res.ok ? JSON.parse(await readTextLimited(res, 5 * 1024 * 1024)) : null;
  } catch {
    return null;
  }
});

/** 認証情報や本文のある取得は、編集時に決めたオリジンに限る。 */
function safeRequestOrigin(url: string, init?: string, origin?: string): boolean {
  try { return !!url && (!init || (!!origin && new URL(url).origin === origin)); }
  catch { return false; }
}

/** スクリプト「ページを開いたとき」のデータのブロックを上から順に実行する */
async function loadData(vars: Vars) {
  vars["_0"] = await fetchJson(interpolateUrl("https://api.matsufes.info/data/web-info.json", vars));
  vars["_1"] = interpolate("null", vars);
  if (!__runPurePageSteps([{"id":"st_mv7up0vg4","kind":"for-each","array":"_0.data","then":[{"id":"st_restore_fbc40b2b66b61c3","kind":"if","cond":{"subject":"var","target":"","left":"{ループ.値.publicId}","op":"eq","value":"{slug}"},"then":[{"id":"st_restore_e7ef04865feaad8","kind":"set-var","into":"_1","value":"{ループ.値}"},{"id":"st_restore_6f973508ea722b6","kind":"break-loop"}]}]}], vars, lookupVar, interpolate, __evalValueRecipe)) console.warn("Page-load script exceeded execution limits");
  vars["_4"] = lookupVar(vars, "_1.categories.投票カテゴリ") ?? null;
  vars["_5"] = lookupVar(vars, "_1.customAnswers.中分類") ?? null;
  vars["_6"] = lookupVar(vars, "_1.categories.大分類") ?? null;
  vars["businessHours"] = lookupVar(vars, "_1.businessHours") ?? null;
  {
    const result = __evalValueRecipe(lookupVar(vars, "businessHours"), [{"kind":"split","separator":"、"}], vars);
    if (result.kind === "value") vars["_7"] = result.value;
    else if (result.kind === "missing") vars["_7"] = undefined;
  }
}

/** リストで並べる項目にする（オブジェクトはそのまま、文字や数値は {値} に入れる） */
function toItems(v: unknown): Item[] {
  if (!v || typeof v !== "object") return [];
  return Object.values(v).map((x): Item =>
    x && typeof x === "object" && !Array.isArray(x) ? x as Item : { ["値"]: x }
  );
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const vars: Vars = Object.create(null);
  const sp = await searchParams;
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === "string") vars[k] = v;
  }
  // URLの [slug] は、同じ名前のクエリより優先する
  const { slug } = await params;
  vars.slug = slug;
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
  const data = vars["_1"] as Item | null;
  const title = "出展情報";
  return {
    title,
    description: "松ヶ崎祭の出展情報をご覧いただけます。",
    openGraph: {
      siteName: "第56回松ヶ崎祭",
      title,
      description: "松ヶ崎祭の出展情報をご覧いただけます。",
      images: ["/assets/ogp.png"],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const vars: Vars = Object.create(null);
  const sp = await searchParams;
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === "string") vars[k] = v;
  }
  // URLの [slug] は、同じ名前のクエリより優先する
  const { slug } = await params;
  vars.slug = slug;
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
  if (!vars["_1"]) notFound();
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
      <span hidden data-page-body="page_mv7ucj3ccc" data-scripts={JSON.stringify([{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"empty","value":"","left":interpolate("{_1.snsX}", { ...vars, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"hide","target":"x"}]},{"kind":"if","cond":{"subject":"var","target":"","op":"empty","value":"","left":interpolate("{_1.snsInstagram}", { ...vars, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"hide","target":"inst"}]},{"kind":"if","cond":{"subject":"var","target":"","op":"empty","value":"","left":interpolate("{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"hide","target":"web"}],"else":[{"kind":"if","cond":{"subject":"var","target":"","op":"starts-with","value":"http","left":interpolate("{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"set-var","into":"snsWeb","raw":lookupVar(vars, "_1.snsWeb") ?? null}],"else":[{"kind":"set-var","into":"snsWeb","value":interpolate("https://{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} })}]}]},{"kind":"store-load","key":"mf_bookmarks","into":"_2","shared":true},{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":interpolate("{_1.publicId}", { ...vars, ...{"\u0000keepEscapes":true} }),"left":interpolate("{_2}", { ...vars, ...{"_2":"{_2}","\u0000keepEscapes":true} })},"then":[{"kind":"hide","target":"favoff"},{"kind":"show","target":"fav-svg"}]}]}])} />
      <nav className="header-2">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-459"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-460">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-50"
          />
        </div>
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-461">
          <div className="box-346">
            <div className="el-462">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-463">
                <span
                  className="crisp-svg svg-187"
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-132.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-7">
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-464">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-465">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-109">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-110">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-111">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-112">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-466">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-467">
                <Link href="/search" id="言葉-p" className="button-113">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-114">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-115">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-116">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-468">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-469">
                <Link href="/attention" id="ご来場の-p" className="button-117">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-118">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p" className="button-119">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p" className="button-120">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-121">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-470">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-471">
                <Link href="/committee" id="委員会企画-p" className="button-122">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-123">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-124">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-472">
          <div className="container-8">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-473">
              <div className="el-474">
                <div className="box-347">
                  <p className="text-94">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-95">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-96">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-475" />
              <div id="div-34" data-toggle-show="flex" className="el-476">
                <div id="menu1-2" data-inview className="container-9">
                  <Link href="/about" className="el-477">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-478">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-479">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-480">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-481" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-482">
              <div className="el-483">
                <div className="box-348">
                  <p className="text-97">
                    {"きかく"}
                  </p>
                  <p className="text-98">
                    {"企画"}
                  </p>
                </div>
                <p className="text-99">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-484" />
              <div id="div-36" data-toggle-show="flex" className="el-485">
                <div id="menu1-4" data-inview className="container-10">
                  <Link href="/search" className="el-486">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-487">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-488">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-489">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-490" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-491">
              <div className="el-492">
                <p className="text-100">
                  {"ご"}
                </p>
                <div className="box-349">
                  <p className="text-101">
                    {"あんない"}
                  </p>
                  <p className="text-102">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-493" />
              <div id="div-39" data-toggle-show="flex" className="el-494">
                <div id="menu1-6" data-inview className="container-11">
                  <Link href="/attention" className="el-495">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-496">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-497">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-498">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-499">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-500" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-501">
              <div className="el-502">
                <div className="box-350">
                  <p className="text-103">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-104">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-503" />
              <div id="div-38" data-toggle-show="flex" className="el-504">
                <div id="menu1-8" data-inview className="container-12">
                  <Link href="/committee" className="el-505">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-506">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-507">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-508" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/image.png"
        alt=""
        width={477}
        height={374}
        className="el-403"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-404"
        preload
        fetchPriority="high"
      />
      <section className="el-405">
        <h1 className="text-54">
          {interpolate("{_1.name}", vars)}
        </h1>
      </section>
      <section className="box-293">
        <Image
          src="/assets/main-thema-soshoku.svg"
          alt=""
          width={1240}
          height={34}
          className="main-thema-soshoku-svg-2"
          preload
          fetchPriority="high"
        />
      </section>
      <section className="box-294">
        <h2 className="text-55">
          {interpolate("{_1.exhibitorName}", vars)}
        </h2>
      </section>
      <section className="el-413">
        <div className="box-319">
          <div className="box-296">
            <div className="el-406">
              <div className="box-297">
                <p className="text-56">
                  {interpolate("{_1.customAnswers.皆さまへ}", vars)}
                </p>
                <div className="box-300">
                  <div className="box-299" />
                </div>
                <div className="box-298" />
              </div>
            </div>
            <div className="el-407">
              <div className="icon-4">
                <div className="box-303">
                  <div className="box-301">
                    <p className="text-57">
                      {"No Image"}
                    </p>
                  </div>
                  <Image
                    src={interpolate("{_1.imageUrl}", vars) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                    alt=""
                    width={1024}
                    height={1024}
                    className="image-12"
                  />
                </div>
                <div className="box-302" />
              </div>
              <div className="box-304">
                <div className="box-305">
                  <Image
                    src="/assets/_-_2.png"
                    alt="いつ"
                    width={129}
                    height={129}
                    className="el-408"
                  />
                  <div className="text-72">
                    {toItems(lookupVar(vars, "_7")).map((item, i) => {
                      const iv0 = { ...vars, ...item };
                      return (
                        <Fragment key={i}>
                          <p className="text-58">
                            {interpolate("{値}", iv0)}
                          </p>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="box-306">
                  <div className="box-320">
                    <Image
                      src="/assets/image-5.png"
                      alt="どこで"
                      width={85}
                      height={108}
                      className="png-15"
                    />
                    <h2 className="text-59">
                      {interpolate("{_1.location}", vars)}
                    </h2>
                  </div>
                  <div className="box-321">
                    <div className="box-314">
                      <Image
                        src="/assets/image-4.png"
                        alt="地図をひらくボタン"
                        width={300}
                        height={107}
                        className="png-17"
                      />
                      <div className="box-315">
                        <div className="box-316">
                          <p className="text-64">
                            {"ちず"}
                          </p>
                          <p className="text-65">
                            {"地図"}
                          </p>
                        </div>
                        <p className="text-66">
                          {"を"}
                        </p>
                        <div className="box-317">
                          <p className="text-67">
                            {"ひら"}
                          </p>
                          <p className="text-68">
                            {"開"}
                          </p>
                        </div>
                        <p className="text-69">
                          {"く"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-322">
            <div className="el-409">
              {toItems(lookupVar(vars, "_4")).map((item, i) => {
                const iv1 = { ...vars, ...item };
                return (
                  <Fragment key={i}>
                    <div className="el-410">
                      <p className="el-411">
                        {interpolate("{値}", iv1)}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="el-414">
              {toItems(lookupVar(vars, "_6")).map((item, i) => {
                const iv2 = { ...vars, ...item };
                return (
                  <Fragment key={i}>
                    <div className="el-415">
                      <p className="el-416">
                        {interpolate("{値}", iv2)}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="el-412">
              <div className="el-417">
                <p className="el-418">
                  {interpolate("{_5}", vars)}
                </p>
              </div>
            </div>
          </div>
          <div className="box-326">
            <div className="box-337">
              <div className="box-327">
                <Image
                  src="/assets/_-_2.png"
                  alt=""
                  width={129}
                  height={129}
                  className="el-419"
                />
                <div className="text-73">
                  {toItems(lookupVar(vars, "_7")).map((item, i) => {
                    const iv3 = { ...vars, ...item };
                    return (
                      <Fragment key={i}>
                        <p className="text-74">
                          {interpolate("{値}", iv3)}
                        </p>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="box-328">
                <div className="box-329">
                  <Image
                    src="/assets/image-5.png"
                    alt=""
                    width={85}
                    height={108}
                    className="png-18"
                  />
                  <h2 className="text-75">
                    {interpolate("{_1.location}", vars)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="box-330">
              <SmartLink href={safeNavigationUrl(interpolateUrl("https://map.matsufes.info/?id={_1.publicId}", vars))} className="el-420">
                <Image
                  src="/assets/image-4.png"
                  alt=""
                  width={300}
                  height={107}
                  className="png-19"
                />
                <div className="box-331">
                  <div className="box-332">
                    <p className="text-76">
                      {"ちず"}
                    </p>
                    <p className="text-77">
                      {"地図"}
                    </p>
                  </div>
                  <p className="text-78">
                    {"を"}
                  </p>
                  <div className="box-333">
                    <p className="text-79">
                      {"ひら"}
                    </p>
                    <p className="text-80">
                      {"開"}
                    </p>
                  </div>
                  <p className="text-81">
                    {"く"}
                  </p>
                </div>
              </SmartLink>
            </div>
          </div>
          <div className="box-307">
            <div className="box-334">
              <div className="box-335">
                <p className="text-82">
                  {interpolate("{_1.description}", vars)}
                </p>
                <div className="box-336" />
              </div>
            </div>
            <div className="box-323">
              <div className="fav">
                <div className="box-318">
                  <Image id="fav-svg" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"set-var","into":"_i","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_i}", { ...vars, ...{"_i":"{_i}","\u0000keepEscapes":true} }),"op":"empty","value":"","not":true},"then":[{"kind":"transform","source":"_2","into":"_j","transform":{"kind":"fallback","text":"","when":"nullish"}},{"kind":"transform","source":"_j","into":"_k","transform":{"kind":"split","separator":"."}},{"kind":"set-var","into":"_i","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"set-var","into":"_l","value":"[]"},{"kind":"set-var","into":"_m","value":"false"},{"kind":"for-each","array":"_k","then":[{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{ループ.値}", { ...vars, ...{"\u0000keepEscapes":true} }),"op":"eq","value":interpolate("{_i}", { ...vars, ...{"_i":"{_i}","\u0000keepEscapes":true} })},"then":[{"kind":"set-var","into":"_m","value":"true"}]},{"kind":"set-list-item","list":"_l","key":"","value":"{ループ.値}"}]},{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_m}", { ...vars, ...{"_m":"{_m}","\u0000keepEscapes":true} }),"op":"eq","value":"false"},"then":[{"kind":"set-list-item","list":"_l","key":"","value":"{_i}"}]},{"kind":"transform","source":"_l","into":"_2","transform":{"kind":"join","separator":"."}}]},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...vars, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-svg"},{"kind":"show","target":"favoff"}]}])} data-toggle-show="block"
                    src="/assets/fav.svg"
                    alt="お気に入り登録済"
                    width={154}
                    height={150}
                    className="favon"
                    preload
                    fetchPriority="high"
                  />
                  <Image id="favoff" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"set-var","into":"_d","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_d}", { ...vars, ...{"_d":"{_d}","\u0000keepEscapes":true} }),"op":"empty","value":"","not":true},"then":[{"kind":"transform","source":"_2","into":"_e","transform":{"kind":"fallback","text":"","when":"nullish"}},{"kind":"transform","source":"_e","into":"_f","transform":{"kind":"split","separator":"."}},{"kind":"set-var","into":"_d","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"set-var","into":"_g","value":"[]"},{"kind":"set-var","into":"_h","value":"false"},{"kind":"for-each","array":"_f","then":[{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{ループ.値}", { ...vars, ...{"\u0000keepEscapes":true} }),"op":"eq","value":interpolate("{_d}", { ...vars, ...{"_d":"{_d}","\u0000keepEscapes":true} })},"then":[],"else":[{"kind":"set-list-item","list":"_g","key":"","value":"{ループ.値}"}]}]},{"kind":"transform","source":"_g","into":"_2","transform":{"kind":"join","separator":"."}}]},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...vars, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"favoff"},{"kind":"show","target":"fav-svg"}]}])} data-toggle-show="block"
                    src="/assets/pasted-artwork-181.svg"
                    alt="お気に入り未登録"
                    width={209}
                    height={204}
                    className="favoff"
                  />
                </div>
                <p className="text-70">
                  {"お気に入り"}
                </p>
              </div>
              <SmartLink href={safeNavigationUrl(interpolateUrl("https://vote.matsufes.info/?id={_1.publicId}", vars))} className="vote">
                <Image
                  src="/assets/pasted-artwork-180.svg"
                  alt="m-1グランプリ"
                  width={162}
                  height={237}
                  className="pasted-artwork-svg-49"
                />
                <p className="text-71">
                  {"m-1グランプリに\n投票する"}
                </p>
              </SmartLink>
            </div>
            <div className="box-324">
              <div className="box-308">
                <p className="text-60">
                  {interpolate("{_1.description}", vars)}
                </p>
                <div className="box-309" />
              </div>
            </div>
          </div>
          <div className="box-325">
            <div className="box-310">
              <Image id="x" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"open-url","url":interpolateUrl("{_1.snsX}", { ...vars, ...{"\u0000keepEscapes":true} }),"newTab":true}]}])}
                src="/assets/pasted-artwork-179.svg"
                alt="X"
                width={40}
                height={37}
                className="x-3"
              />
              <Image id="inst" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"open-url","url":interpolateUrl("{_1.snsInstagram}", { ...vars, ...{"\u0000keepEscapes":true} }),"newTab":true}]}])}
                src="/assets/pasted-artwork-178.svg"
                alt="Instagram"
                width={44}
                height={44}
                className="inst"
              />
              <Image id="web" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"open-url","url":interpolateUrl("{snsWeb}", { ...vars, ...{"snsWeb":"{snsWeb}","\u0000keepEscapes":true} }),"newTab":true}]}])}
                src="/assets/pasted-artwork-177.svg"
                alt="外部サイト"
                width={50}
                height={51}
                className="web"
              />
            </div>
          </div>
          <div className="box-311">
            <Link href="/search" className="back">
              <Image
                src="/assets/image-4.png"
                alt="一覧にもどるボタン"
                width={300}
                height={107}
                className="png-16"
              />
              <div className="box-312">
                <div className="box-313">
                  <p className="text-61">
                    {"いちらん"}
                  </p>
                  <p className="text-62">
                    {"一覧"}
                  </p>
                </div>
                <p className="text-63">
                  {"にもどる"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="box-295">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png-2"
        />
      </section>
      <section data-inview className="footer-10">
        <span
          className="crisp-svg pasted-artwork-svg-82"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1664">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-234"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-13">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-235"
          />
        </a>
      </section>
      <section data-inview className="el-1687">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1688">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-264"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-25">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-265"
          />
        </a>
        <span
          className="crisp-svg svg-266"
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-198.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
    </>
  );
}
