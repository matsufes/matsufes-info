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
import Header from "@/components/Header";

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
  vars["_1"] = JSON.parse("null");
  if (!__runPurePageSteps([{"id":"st_mv7up0vg4","kind":"for-each","array":"_0.data","then":[{"id":"st_restore_96168e510f60fba","kind":"if","cond":{"subject":"var","target":"","left":"{ループ.値.publicId}","op":"eq","value":"{slug}"},"then":[{"id":"st_restore_05278af564e6c82","kind":"set-var","into":"_1","value":"{ループ.値}"},{"id":"st_restore_f567c103b2c3f49","kind":"break-loop"}]}]}], vars, lookupVar, interpolate, __evalValueRecipe)) console.warn("Page-load script exceeded execution limits");
  vars["_7"] = lookupVar(vars, "_1.categories.投票カテゴリ") ?? null;
  vars["_8"] = lookupVar(vars, "_1.customAnswers.中分類") ?? null;
  vars["_9"] = lookupVar(vars, "_1.categories.大分類") ?? null;
  vars["businessHours"] = lookupVar(vars, "_1.businessHours") ?? null;
  {
    const result = __evalValueRecipe(lookupVar(vars, "businessHours"), [{"kind":"split","separator":"、"}], vars);
    if (result.kind === "value") vars["_a"] = result.value;
    else if (result.kind === "missing") vars["_a"] = undefined;
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
  vars["松ヶ崎祭について-2"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p-2"] = "松ヶ崎祭とは";
  vars["mf56-p-2"] = "mf56メインテーマ";
  vars["協賛-p-2"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p-2"] = "お知らせ";
  vars["企画さがし-2"] = "企画さがし";
  vars["言葉-p-2"] = "言葉からさがす";
  vars["日程表-p-2"] = "日程表からさがす";
  vars["地図-p-2"] = "地図からさがす";
  vars["しおり-p-2"] = "きみのしおり";
  vars["ご案内-2"] = "ご案内";
  vars["ご来場の-p-2"] = "ご来場の皆さまへ";
  vars["行き方-p-2"] = "行き方・会場地図";
  vars["アンケ〜ト-p-2"] = "来場者アンケート";
  vars["ご質問-p-2"] = "よくあるご質問";
  vars["相互リンク-p-2"] = "相互リンク";
  vars["公式特集-2"] = "公式特集";
  vars["委員会企画-p-2"] = "委員会企画";
  vars["m-1-p-2"] = "m-1グランプリ";
  vars["まつぴよ-p-2"] = "公式メンバー「まつぴよ」";
  await loadData(vars);
  const data = vars["_1"] as Item | null;
  const title = "出展検索";
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
  vars["松ヶ崎祭について-2"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p-2"] = "松ヶ崎祭とは";
  vars["mf56-p-2"] = "mf56メインテーマ";
  vars["協賛-p-2"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p-2"] = "お知らせ";
  vars["企画さがし-2"] = "企画さがし";
  vars["言葉-p-2"] = "言葉からさがす";
  vars["日程表-p-2"] = "日程表からさがす";
  vars["地図-p-2"] = "地図からさがす";
  vars["しおり-p-2"] = "きみのしおり";
  vars["ご案内-2"] = "ご案内";
  vars["ご来場の-p-2"] = "ご来場の皆さまへ";
  vars["行き方-p-2"] = "行き方・会場地図";
  vars["アンケ〜ト-p-2"] = "来場者アンケート";
  vars["ご質問-p-2"] = "よくあるご質問";
  vars["相互リンク-p-2"] = "相互リンク";
  vars["公式特集-2"] = "公式特集";
  vars["委員会企画-p-2"] = "委員会企画";
  vars["m-1-p-2"] = "m-1グランプリ";
  vars["まつぴよ-p-2"] = "公式メンバー「まつぴよ」";
  await loadData(vars);
  if (!vars["_1"]) notFound();
  vars["松ヶ崎祭について-2"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p-2"] = "松ヶ崎祭とは";
  vars["mf56-p-2"] = "mf56メインテーマ";
  vars["協賛-p-2"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p-2"] = "お知らせ";
  vars["企画さがし-2"] = "企画さがし";
  vars["言葉-p-2"] = "言葉からさがす";
  vars["日程表-p-2"] = "日程表からさがす";
  vars["地図-p-2"] = "地図からさがす";
  vars["しおり-p-2"] = "きみのしおり";
  vars["ご案内-2"] = "ご案内";
  vars["ご来場の-p-2"] = "ご来場の皆さまへ";
  vars["行き方-p-2"] = "行き方・会場地図";
  vars["アンケ〜ト-p-2"] = "来場者アンケート";
  vars["ご質問-p-2"] = "よくあるご質問";
  vars["相互リンク-p-2"] = "相互リンク";
  vars["公式特集-2"] = "公式特集";
  vars["委員会企画-p-2"] = "委員会企画";
  vars["m-1-p-2"] = "m-1グランプリ";
  vars["まつぴよ-p-2"] = "公式メンバー「まつぴよ」";
  return (
    <>
      <span hidden data-page-body="page_mvhyhtub6uytqm" data-scripts={JSON.stringify([{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"empty","value":"","left":{"inputRef":"_1.snsX","raw":lookupVar(vars, "_1.snsX") ?? null}},"then":[{"kind":"hide","target":"x"}]},{"kind":"if","cond":{"subject":"var","target":"","op":"empty","value":"","left":{"inputRef":"_1.snsInstagram","raw":lookupVar(vars, "_1.snsInstagram") ?? null}},"then":[{"kind":"hide","target":"inst"}]},{"kind":"if","cond":{"subject":"var","target":"","op":"empty","value":"","left":{"inputRef":"_1.snsWeb","raw":lookupVar(vars, "_1.snsWeb") ?? null}},"then":[{"kind":"hide","target":"web"}],"else":[{"kind":"if","cond":{"subject":"var","target":"","op":"starts-with","value":"http","left":{"inputRef":"_1.snsWeb","raw":lookupVar(vars, "_1.snsWeb") ?? null}},"then":[{"kind":"set-var","into":"snsWeb","raw":lookupVar(vars, "_1.snsWeb") ?? null}],"else":[{"kind":"set-var","into":"snsWeb","value":interpolate("https://{_1.snsWeb}", { ...vars, ...{"\u0000keepEscapes":true} })}]}]},{"kind":"store-load","key":"mf_bookmarks","into":"_4","shared":true},{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":{"inputRef":"_1.publicId","raw":lookupVar(vars, "_1.publicId") ?? null},"left":{"inputRef":"_4"}},"then":[{"kind":"hide","target":"favoff"},{"kind":"show","target":"fav-svg"}]}]}])} />
      <Header />
      <Image data-inview
        src="/assets/image.png"
        alt=""
        width={477}
        height={374}
        className="el-1864"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/pasted-artwork-156.svg"
        alt=""
        width={428}
        height={407}
        className="svg-335"
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-1865"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/pasted-artwork-28.svg"
        alt=""
        width={618}
        height={489}
        className="svg-336"
      />
      <section className="el-1866">
        <h1 className="text-498">
          {interpolate("{_1.name}", vars)}
        </h1>
      </section>
      <section className="box-704">
        <Image
          src="/assets/main-thema-soshoku.svg"
          alt=""
          width={1240}
          height={34}
          className="main-thema-soshoku-svg-5"
          preload
          fetchPriority="high"
        />
        <Image
          src="/assets/pasted-artwork-286.svg"
          alt=""
          width={1356}
          height={65}
          className="svg-337"
        />
      </section>
      <section className="box-705">
        <h2 className="text-499">
          {interpolate("{_1.exhibitorName}", vars)}
        </h2>
      </section>
      <section className="el-1882">
        <div className="box-746">
          <div className="box-721">
            <div className="el-1867">
              <div className="box-709">
                <p className="text-500">
                  {interpolate("{_1.customAnswers.皆さまへ}", vars)}
                </p>
                <div className="box-707">
                  <div className="box-706" />
                </div>
                <div className="box-708" />
              </div>
            </div>
            <div className="el-1870">
              <div className="icon-6">
                <div className="box-711">
                  <div className="box-710">
                    <p className="text-501">
                      {"No Image"}
                    </p>
                  </div>
                  <Image
                    src={interpolate("{_1.imageUrl}", vars) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                    alt=""
                    width={1024}
                    height={1024}
                    className="image-20"
                  />
                </div>
                <div className="box-712" />
              </div>
              <div className="box-720">
                <div className="box-713">
                  <Image
                    src="/assets/_-_2.png"
                    alt="いつ"
                    width={129}
                    height={129}
                    className="el-1868"
                  />
                  <Image
                    src=""
                    alt=""
                    width={60}
                    height={58}
                    className="svg-338"
                  />
                  <div className="text-503">
                    {toItems(lookupVar(vars, "_a")).map((item, i) => {
                      const iv0 = { ...vars, ...item };
                      return (
                        <Fragment key={i}>
                          <p className="text-502">
                            {interpolate("{値}", iv0)}
                          </p>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="box-719">
                  <div className="box-714">
                    <Image
                      src="/assets/image-5.png"
                      alt="どこで"
                      width={85}
                      height={108}
                      className="png-92"
                    />
                    <Image
                      src=""
                      alt=""
                      width={50}
                      height={71}
                      className="svg-339"
                    />
                    <h2 className="text-504">
                      {interpolate("{_1.location}", vars)}
                    </h2>
                  </div>
                  <div className="el-1869">
                    <div className="box-718">
                      <Image
                        src="/assets/image-4.png"
                        alt="地図をひらくボタン"
                        width={300}
                        height={107}
                        className="png-93"
                      />
                      <Image
                        src=""
                        alt=""
                        width={238}
                        height={52}
                        className="svg-340"
                      />
                      <div className="box-717">
                        <div className="box-715">
                          <p className="text-505">
                            {"ちず"}
                          </p>
                          <p className="text-506">
                            {"地図"}
                          </p>
                        </div>
                        <p className="text-507">
                          {"を"}
                        </p>
                        <div className="box-716">
                          <p className="text-508">
                            {"ひら"}
                          </p>
                          <p className="text-509">
                            {"開"}
                          </p>
                        </div>
                        <p className="text-510">
                          {"く"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-722">
            <div className="el-1873">
              {toItems(lookupVar(vars, "_7")).map((item, i) => {
                const iv1 = { ...vars, ...item };
                return (
                  <Fragment key={i}>
                    <div className="el-1872">
                      <p className="el-1871">
                        {interpolate("{値}", iv1)}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="el-1876">
              {toItems(lookupVar(vars, "_9")).map((item, i) => {
                const iv2 = { ...vars, ...item };
                return (
                  <Fragment key={i}>
                    <div className="el-1875">
                      <p className="el-1874">
                        {interpolate("{値}", iv2)}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="el-1879">
              <div className="el-1878">
                <p className="el-1877">
                  {interpolate("{_8}", vars)}
                </p>
              </div>
            </div>
          </div>
          <div className="box-731">
            <div className="box-726">
              <div className="box-723">
                <Image
                  src="/assets/_-_2.png"
                  alt=""
                  width={129}
                  height={129}
                  className="el-1880"
                />
                <div className="text-512">
                  {toItems(lookupVar(vars, "_a")).map((item, i) => {
                    const iv3 = { ...vars, ...item };
                    return (
                      <Fragment key={i}>
                        <p className="text-511">
                          {interpolate("{値}", iv3)}
                        </p>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="box-725">
                <div className="box-724">
                  <Image
                    src="/assets/image-5.png"
                    alt=""
                    width={85}
                    height={108}
                    className="png-94"
                  />
                  <h2 className="text-513">
                    {interpolate("{_1.location}", vars)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="box-730">
              <SmartLink href={safeNavigationUrl(interpolateUrl("https://map.matsufes.info/?id={_1.publicId}", vars))} className="el-1881">
                <Image
                  src="/assets/image-4.png"
                  alt=""
                  width={300}
                  height={107}
                  className="png-95"
                />
                <Image
                  src="/assets/pasted-artwork-228.svg"
                  alt=""
                  width={238}
                  height={52}
                  className="svg-341"
                />
                <div className="box-729">
                  <div className="box-727">
                    <p className="text-514">
                      {"ちず"}
                    </p>
                    <p className="text-515">
                      {"地図"}
                    </p>
                  </div>
                  <p className="text-516">
                    {"を"}
                  </p>
                  <div className="box-728">
                    <p className="text-517">
                      {"ひら"}
                    </p>
                    <p className="text-518">
                      {"開"}
                    </p>
                  </div>
                  <p className="text-519">
                    {"く"}
                  </p>
                </div>
              </SmartLink>
            </div>
          </div>
          <div className="box-740">
            <div className="box-734">
              <div className="box-733">
                <p className="text-520">
                  {interpolate("{_1.description}", vars)}
                </p>
                <div className="box-732" />
              </div>
            </div>
            <div className="box-736">
              <div className="fav-3">
                <div className="box-735">
                  <Image id="fav-svg" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"set-var","into":"_5d","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5d"},"op":"empty","value":"","not":true},"then":[{"kind":"transform","source":"_4","into":"_5e","transform":{"kind":"fallback","text":"","when":"nullish"}},{"kind":"transform","source":"_5e","into":"_5f","transform":{"kind":"split","separator":"."}},{"kind":"set-var","into":"_5d","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"set-var","into":"_5g","value":"[]"},{"kind":"set-var","into":"_5h","value":"false"},{"kind":"for-each","array":"_5f","then":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"ループ.値","raw":lookupVar(vars, "ループ.値") ?? null},"op":"eq","value":{"inputRef":"_5d"}},"then":[{"kind":"set-var","into":"_5h","value":"true"}]},{"kind":"set-list-item","list":"_5g","key":"","value":{"inputRef":"ループ.値","raw":lookupVar(vars, "ループ.値") ?? null}}]},{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5h"},"op":"eq","value":"false"},"then":[{"kind":"set-list-item","list":"_5g","key":"","value":{"inputRef":"_5d"}}]},{"kind":"transform","source":"_5g","into":"_4","transform":{"kind":"join","separator":"."}}]},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_4}", { ...vars, ...{"_4":"{_4}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-svg"},{"kind":"show","target":"favoff"}]}])} data-toggle-show="block"
                    src="/assets/fav.svg"
                    alt="お気に入り登録済"
                    width={154}
                    height={150}
                    className="favon-3"
                    preload
                    fetchPriority="high"
                  />
                  <Image
                    src=""
                    alt=""
                    width={90}
                    height={93}
                    className="svg-342"
                  />
                  <Image
                    src="/assets/pasted-artwork-454.svg"
                    alt=""
                    width={90}
                    height={93}
                    className="svg-624"
                  />
                  <Image id="favoff" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"set-var","into":"_5i","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5i"},"op":"empty","value":"","not":true},"then":[{"kind":"transform","source":"_4","into":"_5j","transform":{"kind":"fallback","text":"","when":"nullish"}},{"kind":"transform","source":"_5j","into":"_5k","transform":{"kind":"split","separator":"."}},{"kind":"set-var","into":"_5i","raw":lookupVar(vars, "_1.publicId") ?? null},{"kind":"set-var","into":"_5l","value":"[]"},{"kind":"set-var","into":"_5m","value":"false"},{"kind":"for-each","array":"_5k","then":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"ループ.値","raw":lookupVar(vars, "ループ.値") ?? null},"op":"eq","value":{"inputRef":"_5i"}},"then":[],"else":[{"kind":"set-list-item","list":"_5l","key":"","value":{"inputRef":"ループ.値","raw":lookupVar(vars, "ループ.値") ?? null}}]}]},{"kind":"transform","source":"_5l","into":"_4","transform":{"kind":"join","separator":"."}}]},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_4}", { ...vars, ...{"_4":"{_4}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"favoff"},{"kind":"show","target":"fav-svg"}]}])} data-toggle-show="block"
                    src="/assets/pasted-artwork-179.svg"
                    alt="お気に入り未登録"
                    width={209}
                    height={204}
                    className="favoff-3"
                  />
                </div>
                <p className="text-521">
                  {"お気に入り"}
                </p>
              </div>
              <SmartLink href={safeNavigationUrl(interpolateUrl("https://vote.matsufes.info/?id={_1.publicId}", vars))} className="vote-3">
                <Image
                  src="/assets/pasted-artwork-178.svg"
                  alt="m-1グランプリ"
                  width={162}
                  height={237}
                  className="pasted-artwork-svg-95"
                />
                <Image
                  src="/assets/pasted-artwork-230.svg"
                  alt=""
                  width={56}
                  height={88}
                  className="svg-344"
                />
                <Image
                  src="/assets/pasted-artwork-229.svg"
                  alt=""
                  width={56}
                  height={78}
                  className="svg-343"
                />
                <p className="text-522">
                  {"m-1グランプリに\n投票する"}
                </p>
              </SmartLink>
            </div>
            <div className="box-739">
              <div className="box-738">
                <p className="text-523">
                  {interpolate("{_1.description}", vars)}
                </p>
                <div className="box-737" />
              </div>
            </div>
          </div>
          <div className="box-742">
            <div className="box-741">
              <Image id="x" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"open-url","url":interpolateUrl("{_1.snsX}", { ...vars, ...{"\u0000keepEscapes":true} }),"newTab":true}]}])}
                src="/assets/pasted-artwork-177.svg"
                alt="X"
                width={40}
                height={37}
                className="x-35"
              />
              <Image id="inst" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"open-url","url":interpolateUrl("{_1.snsInstagram}", { ...vars, ...{"\u0000keepEscapes":true} }),"newTab":true}]}])}
                src="/assets/pasted-artwork-176.svg"
                alt="Instagram"
                width={44}
                height={44}
                className="inst-3"
              />
              <Image id="web" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"open-url","url":interpolateUrl("{snsWeb}", { ...vars, ...{"snsWeb":"{snsWeb}","\u0000keepEscapes":true} }),"newTab":true}]}])}
                src="/assets/pasted-artwork-175.svg"
                alt="外部サイト"
                width={50}
                height={51}
                className="web-3"
              />
            </div>
          </div>
          <div className="box-745">
            <Link href="/search" className="back-3">
              <Image
                src="/assets/image-4.png"
                alt="一覧にもどるボタン"
                width={300}
                height={107}
                className="png-96"
              />
              <Image
                src="/assets/pasted-artwork-231.svg"
                alt=""
                width={242}
                height={61}
                className="svg-345"
              />
              <div className="box-744">
                <div className="box-743">
                  <p className="text-524">
                    {"いちらん"}
                  </p>
                  <p className="text-525">
                    {"一覧"}
                  </p>
                </div>
                <p className="text-526">
                  {"にもどる"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="box-747">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png-6"
        />
      </section>
      <section data-inview className="el-2319">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2320">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-114"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-47">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-115"
          />
        </a>
        <span
          className="crisp-svg svg-434"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-282.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-23">
        <span
          className="crisp-svg svg-435"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-279.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2321">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt=""
            width={58}
            height={58}
            className="svg-436"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-48">
          <Image
            src="/assets/pasted-artwork-281.svg"
            alt=""
            width={54}
            height={49}
            className="svg-437"
          />
        </a>
      </section>
    </>
  );
}
