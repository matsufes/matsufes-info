import type { Metadata } from "next";
import { fetchPublic, readTextLimited } from "@/lib/safe-fetch";
import { notFound } from "next/navigation";
import { Fragment, cache } from "react";
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
  // 見つからないときはデータ無しにする（中心のデータが無ければページを404にする）
  if (res.status === 404 || res.status === 410) return null;
  // 取得に失敗したら作り直しをやめ、前に作ったページを配信し続ける
  if (!res.ok) throw new Error(`データの取得に失敗しました（${res.status}）`);
  return JSON.parse(await readTextLimited(res, 5 * 1024 * 1024));
});

/** "products.0" のような位置を掘る（配列の "-1" は最後の要素） */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dig(v: any, path: string[]): unknown {
  for (const k of path) v = Array.isArray(v) && k === "-1" ? v[v.length - 1] : v?.[k];
  return v ?? null;
}

/** 一覧から field が key の1件を探す（URLの値はエンコードされていることがある） */
function findIn(list: unknown, field: string, key: string): unknown {
  if (!Array.isArray(list)) return null;
  const path = field.split(".");
  return (
    list.find((item) => {
      const v = String(dig(item, path) ?? "");
      return v === key || encodeURIComponent(v) === key;
    }) ?? null
  );
}

/** 文字列を区切り文字で分解する（前後の空白を除き、空の要素は捨てる） */
function splitText(text: string, sep: string): string[] {
  return text
    .split(sep)
    .map((x) => x.trim())
    .filter(Boolean);
}

/** 認証情報や本文のある取得は、編集時に決めたオリジンに限る。 */
function safeRequestOrigin(url: string, init?: string, origin?: string): boolean {
  try { return !!url && (!init || (!!origin && new URL(url).origin === origin)); }
  catch { return false; }
}

/** スクリプト「ページを開いたとき」のデータのブロックを上から順に実行する */
async function loadData(vars: Vars) {
  vars["_0"] = await fetchJson(interpolateUrl("https://api.matsufes.info/data/web-info.json", vars));
  vars["_1"] = findIn(lookupVar(vars, "_0.data"), "publicId", interpolate("{slug}", vars));
  vars["_4"] = lookupVar(vars, "_1.categories.投票カテゴリ") ?? null;
  vars["_5"] = lookupVar(vars, "_1.customAnswers.中分類") ?? null;
  vars["_6"] = lookupVar(vars, "_1.categories.大分類") ?? null;
  vars["businessHours"] = lookupVar(vars, "_1.businessHours") ?? null;
  vars["_7"] = splitText(interpolate("{businessHours}", vars), "、");
}

/** リストで並べる項目にする（オブジェクトはそのまま、文字や数値は {値} に入れる） */
function toItems(v: unknown): Item[] {
  if (!Array.isArray(v)) return [];
  return v.flatMap((x): Item[] =>
    x == null || Array.isArray(x) ? [] : typeof x === "object" ? [x as Item] : [{ "値": x }]
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const vars: Vars = {};
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
  const title = data ? String(data["name"] ?? "") : "出展情報";
  return {
    title,
    description: "松ヶ崎祭の出展情報をご覧いただけます。",
    openGraph: {
      title,
      description: "松ヶ崎祭の出展情報をご覧いただけます。",
      images: ["/assets/ogp.png"],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const vars: Vars = {};
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
      <span hidden data-page-body="page_mv7ucj3ccc" data-scripts={JSON.stringify([{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_1.snsX}", { ...vars, ...{"\u0000keepEscapes":true} }),"op":"empty","value":""},"then":[{"kind":"hide","target":"x"}]},{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_1.snsInstagram}", { ...vars, ...{"\u0000keepEscapes":true} }),"op":"empty","value":""},"then":[{"kind":"hide","target":"inst"}]},{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} }),"op":"empty","value":""},"then":[{"kind":"hide","target":"web"}],"else":[{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} }),"op":"starts-with","value":"http"},"then":[{"kind":"set-var","into":"snsWeb","raw":lookupVar(vars, "_1.snsWeb") ?? null}],"else":[{"kind":"set-var","into":"snsWeb","value":interpolate("https://{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} })}]}]},{"kind":"store-load","key":"mf_bookmarks","into":"_2","shared":true},{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_2}", { ...vars, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"op":"contains","value":interpolate("{_1.publicId}", { ...vars, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"hide","target":"favoff"},{"kind":"show","target":"fav-svg"}]}]}])} />
      <nav className="header-2">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-524"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-525">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-51"
          />
        </div>
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-526">
          <div className="box-368">
            <div className="el-527">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-528">
                <span
                  className="crisp-svg svg-194"
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
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-529">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-530">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-124">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-125">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-126">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-127">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-531">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-532">
                <Link href="/search" id="言葉-p" className="button-128">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-129">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-130">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-131">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-533">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-534">
                <Link href="/attention" id="ご来場の-p" className="button-132">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-133">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p" className="button-134">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p" className="button-135">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-136">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-535">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-536">
                <Link href="/committee" id="委員会企画-p" className="button-137">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-138">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-139">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-537">
          <div className="container-8">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-538">
              <div className="el-539">
                <div className="box-369">
                  <p className="text-114">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-115">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-116">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-540" />
              <div id="div-34" data-toggle-show="flex" className="el-541">
                <div id="menu1-2" data-inview className="container-9">
                  <Link href="/about" className="el-542">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-543">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-544">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-545">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-546" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-547">
              <div className="el-548">
                <div className="box-370">
                  <p className="text-117">
                    {"きかく"}
                  </p>
                  <p className="text-118">
                    {"企画"}
                  </p>
                </div>
                <p className="text-119">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-549" />
              <div id="div-36" data-toggle-show="flex" className="el-550">
                <div id="menu1-4" data-inview className="container-10">
                  <Link href="/search" className="el-551">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-552">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-553">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-554">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-555" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-556">
              <div className="el-557">
                <p className="text-120">
                  {"ご"}
                </p>
                <div className="box-371">
                  <p className="text-121">
                    {"あんない"}
                  </p>
                  <p className="text-122">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-558" />
              <div id="div-39" data-toggle-show="flex" className="el-559">
                <div id="menu1-6" data-inview className="container-11">
                  <Link href="/attention" className="el-560">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-561">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-562">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-563">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-564">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-565" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-566">
              <div className="el-567">
                <div className="box-372">
                  <p className="text-123">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-124">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-568" />
              <div id="div-38" data-toggle-show="flex" className="el-569">
                <div id="menu1-8" data-inview className="container-12">
                  <Link href="/committee" className="el-570">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-571">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-572">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-573" />
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
        className="el-468"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-469"
        preload
        fetchPriority="high"
      />
      <section className="el-470">
        <h1 className="text-74">
          {interpolate("{_1.name}", vars)}
        </h1>
      </section>
      <section className="box-315">
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
      <section className="box-316">
        <h2 className="text-75">
          {interpolate("{_1.exhibitorName}", vars)}
        </h2>
      </section>
      <section className="el-478">
        <div className="box-341">
          <div className="box-318">
            <div className="el-471">
              <div className="box-319">
                <p className="text-76">
                  {interpolate("{_1.customAnswers.皆さまへ}", vars)}
                </p>
                <div className="box-322">
                  <div className="box-321" />
                </div>
                <div className="box-320" />
              </div>
            </div>
            <div className="el-472">
              <div className="icon-4">
                <div className="box-325">
                  <div className="box-323">
                    <p className="text-77">
                      {"No Image"}
                    </p>
                  </div>
                  <Image
                    src={interpolate("{_1.imageUrl}", vars) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                    alt=""
                    width={1024}
                    height={1024}
                    className="image-13"
                  />
                </div>
                <div className="box-324" />
              </div>
              <div className="box-326">
                <div className="box-327">
                  <Image
                    src="/assets/_-_2.png"
                    alt="いつ"
                    width={129}
                    height={129}
                    className="el-473"
                  />
                  <div className="text-92">
                    {toItems(lookupVar(vars, "_7")).map((item, i) => {
                      const iv0 = { ...vars, ...item };
                      return (
                        <Fragment key={i}>
                          <p className="text-78">
                            {interpolate("{値}", iv0)}
                          </p>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="box-328">
                  <div className="box-342">
                    <Image
                      src="/assets/image-5.png"
                      alt="どこで"
                      width={85}
                      height={108}
                      className="png-35"
                    />
                    <h2 className="text-79">
                      {interpolate("{_1.location}", vars)}
                    </h2>
                  </div>
                  <div className="box-343">
                    <div className="box-336">
                      <Image
                        src="/assets/image-4.png"
                        alt="地図をひらくボタン"
                        width={300}
                        height={107}
                        className="png-37"
                      />
                      <div className="box-337">
                        <div className="box-338">
                          <p className="text-84">
                            {"ちず"}
                          </p>
                          <p className="text-85">
                            {"地図"}
                          </p>
                        </div>
                        <p className="text-86">
                          {"を"}
                        </p>
                        <div className="box-339">
                          <p className="text-87">
                            {"ひら"}
                          </p>
                          <p className="text-88">
                            {"開"}
                          </p>
                        </div>
                        <p className="text-89">
                          {"く"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-344">
            <div className="el-474">
              {toItems(lookupVar(vars, "_4")).map((item, i) => {
                const iv1 = { ...vars, ...item };
                return (
                  <Fragment key={i}>
                    <div className="el-475">
                      <p className="el-476">
                        {interpolate("{値}", iv1)}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="el-479">
              {toItems(lookupVar(vars, "_6")).map((item, i) => {
                const iv2 = { ...vars, ...item };
                return (
                  <Fragment key={i}>
                    <div className="el-480">
                      <p className="el-481">
                        {interpolate("{値}", iv2)}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="el-477">
              <div className="el-482">
                <p className="el-483">
                  {interpolate("{_5}", vars)}
                </p>
              </div>
            </div>
          </div>
          <div className="box-348">
            <div className="box-359">
              <div className="box-349">
                <Image
                  src="/assets/_-_2.png"
                  alt=""
                  width={129}
                  height={129}
                  className="el-484"
                />
                <div className="text-93">
                  {toItems(lookupVar(vars, "_7")).map((item, i) => {
                    const iv3 = { ...vars, ...item };
                    return (
                      <Fragment key={i}>
                        <p className="text-94">
                          {interpolate("{値}", iv3)}
                        </p>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="box-350">
                <div className="box-351">
                  <Image
                    src="/assets/image-5.png"
                    alt=""
                    width={85}
                    height={108}
                    className="png-38"
                  />
                  <h2 className="text-95">
                    {interpolate("{_1.location}", vars)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="box-352">
              <SmartLink href={safeNavigationUrl(interpolateUrl("https://map.matsufes.info/?id={_1.publicId}", vars))} className="el-485">
                <Image
                  src="/assets/image-4.png"
                  alt=""
                  width={300}
                  height={107}
                  className="png-39"
                />
                <div className="box-353">
                  <div className="box-354">
                    <p className="text-96">
                      {"ちず"}
                    </p>
                    <p className="text-97">
                      {"地図"}
                    </p>
                  </div>
                  <p className="text-98">
                    {"を"}
                  </p>
                  <div className="box-355">
                    <p className="text-99">
                      {"ひら"}
                    </p>
                    <p className="text-100">
                      {"開"}
                    </p>
                  </div>
                  <p className="text-101">
                    {"く"}
                  </p>
                </div>
              </SmartLink>
            </div>
          </div>
          <div className="box-329">
            <div className="box-356">
              <div className="box-357">
                <p className="text-102">
                  {interpolate("{_1.description}", vars)}
                </p>
                <div className="box-358" />
              </div>
            </div>
            <div className="box-345">
              <div className="fav">
                <div className="box-340">
                  <Image id="fav-svg" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"list-edit","into":"_2","op":"add","value":interpolate("{_1.publicId}", { ...vars, ...{"\u0000keepEscapes":true} }),"sep":"."},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...vars, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-svg"},{"kind":"show","target":"favoff"}]}])} data-toggle-show="block"
                    src="/assets/fav.svg"
                    alt="お気に入り登録済"
                    width={154}
                    height={150}
                    className="favon"
                    preload
                    fetchPriority="high"
                  />
                  <Image id="favoff" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"list-edit","into":"_2","op":"remove","value":interpolate("{_1.publicId}", { ...vars, ...{"\u0000keepEscapes":true} }),"sep":"."},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...vars, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"favoff"},{"kind":"show","target":"fav-svg"}]}])} data-toggle-show="block"
                    src="/assets/pasted-artwork-181.svg"
                    alt="お気に入り未登録"
                    width={209}
                    height={204}
                    className="favoff"
                  />
                </div>
                <p className="text-90">
                  {"お気に入り"}
                </p>
              </div>
              <SmartLink href={safeNavigationUrl(interpolateUrl("https://vote.matsufes.info/?id={_1.publicId}", vars))} className="vote">
                <Image
                  src="/assets/pasted-artwork-180.svg"
                  alt="m-1グランプリ"
                  width={162}
                  height={237}
                  className="pasted-artwork-svg-50"
                />
                <p className="text-91">
                  {"m-1グランプリに\n投票する"}
                </p>
              </SmartLink>
            </div>
            <div className="box-346">
              <div className="box-330">
                <p className="text-80">
                  {interpolate("{_1.description}", vars)}
                </p>
                <div className="box-331" />
              </div>
            </div>
          </div>
          <div className="box-347">
            <div className="box-332">
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
          <div className="box-333">
            <Link href="/search" className="back">
              <Image
                src="/assets/image-4.png"
                alt="一覧にもどるボタン"
                width={300}
                height={107}
                className="png-36"
              />
              <div className="box-334">
                <div className="box-335">
                  <p className="text-81">
                    {"いちらん"}
                  </p>
                  <p className="text-82">
                    {"一覧"}
                  </p>
                </div>
                <p className="text-83">
                  {"にもどる"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="box-317">
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
          className="crisp-svg pasted-artwork-svg-83"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1729">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-241"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-13">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-242"
          />
        </a>
      </section>
      <section data-inview className="el-1752">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1753">
          <Image
            src="/assets/pasted-artwork-136.svg"
            alt=""
            width={58}
            height={58}
            className="svg-271"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-25">
          <Image
            src="/assets/pasted-artwork-137.svg"
            alt=""
            width={54}
            height={49}
            className="svg-272"
          />
        </a>
        <span
          className="crisp-svg svg-273"
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
