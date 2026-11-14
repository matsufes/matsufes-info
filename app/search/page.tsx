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
}

/** ブラウザで並べるリストのお手本用: ページの変数に無い {名前} はそのまま残す */
function templateVars(vars: Vars): Vars {
  return new Proxy(vars, {
    has: () => true,
    // lookupVar deliberately reads only own keys. Expose virtual own-key
    // descriptors for template placeholders without weakening JSON safety.
    getOwnPropertyDescriptor: (t, k) => Reflect.getOwnPropertyDescriptor(t, k) ??
      (typeof k === "string"
        ? { configurable: true, enumerable: false, writable: true, value: "{" + k + "}" }
        : undefined),
    // 文字としての「{」は「\{」のまま残し、複製するときに置き換える
    get: (t, k) =>
      typeof k !== "string" ? undefined : k === "\u0000keepEscapes" ? true : k in t ? t[k] : `{${k}}`,
  });
}

export const metadata: Metadata = {
  title: "言葉からさがす",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "言葉からさがす",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page() {
  const vars: Vars = Object.create(null);
  vars["松ヶ崎祭について-3"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p-3"] = "松ヶ崎祭とは";
  vars["mf56-p-3"] = "mf56メインテーマ";
  vars["協賛-p-3"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p-3"] = "お知らせ";
  vars["企画さがし-3"] = "企画さがし";
  vars["言葉-p-3"] = "言葉からさがす";
  vars["日程表-p-3"] = "日程表からさがす";
  vars["地図-p-3"] = "地図からさがす";
  vars["しおり-p-3"] = "きみのしおり";
  vars["ご案内-3"] = "ご案内";
  vars["ご来場の-p-3"] = "ご来場の皆さまへ";
  vars["行き方-p-3"] = "行き方・会場地図";
  vars["アンケ〜ト-p-3"] = "来場者アンケート";
  vars["ご質問-p-3"] = "よくあるご質問";
  vars["相互リンク-p-3"] = "相互リンク";
  vars["公式特集-3"] = "公式特集";
  vars["委員会企画-p-3"] = "委員会企画";
  vars["m-1-p-3"] = "m-1グランプリ";
  vars["まつぴよ-p-3"] = "公式メンバー「まつぴよ」";
  await loadData(vars);
  vars["松ヶ崎祭について-3"] = "松ヶ崎祭について";
  vars["松ヶ崎祭とは-p-3"] = "松ヶ崎祭とは";
  vars["mf56-p-3"] = "mf56メインテーマ";
  vars["協賛-p-3"] = "ご協賛いただいた皆さま";
  vars["お知らせ-p-3"] = "お知らせ";
  vars["企画さがし-3"] = "企画さがし";
  vars["言葉-p-3"] = "言葉からさがす";
  vars["日程表-p-3"] = "日程表からさがす";
  vars["地図-p-3"] = "地図からさがす";
  vars["しおり-p-3"] = "きみのしおり";
  vars["ご案内-3"] = "ご案内";
  vars["ご来場の-p-3"] = "ご来場の皆さまへ";
  vars["行き方-p-3"] = "行き方・会場地図";
  vars["アンケ〜ト-p-3"] = "来場者アンケート";
  vars["ご質問-p-3"] = "よくあるご質問";
  vars["相互リンク-p-3"] = "相互リンク";
  vars["公式特集-3"] = "公式特集";
  vars["委員会企画-p-3"] = "委員会企画";
  vars["m-1-p-3"] = "m-1グランプリ";
  vars["まつぴよ-p-3"] = "公式メンバー「まつぴよ」";
  return (
    <>
      <span hidden data-page-body="page_mwg374j71mg4xr" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"set-var","into":"_3","value":interpolate("{_3}", { ...vars, ...{"_3":"{_3}","\u0000keepEscapes":true} })}],"changeVariable":"_1"},{"trigger":"load","steps":[{"kind":"store-load","key":"mf_bookmarks","into":"_4","shared":true},{"kind":"transform","source":"_4","into":"_5","transform":{"kind":"split","separator":"."}},{"kind":"set-var","into":"_1","raw":lookupVar(vars, "_0.data") ?? null},{"kind":"transform","source":"_1","into":"_3","transform":{"kind":"length"}},{"kind":"list-display","mode":"sort","array":"_1","field":"publicId","dir":"asc"}]}])} />
      <nav className="header-50">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/pasted-artwork-278.svg"
          alt="トップに戻る"
          width={158}
          height={156}
          className="el-2599"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p-3\"}]}]"} className="el-2601">
          <Image
            src="/assets/pasted-artwork-280.svg"
            alt="メニューを開く"
            width={132}
            height={74}
            className="el-2600"
          />
        </div>
        <div id="memu-p-3" data-toggle-show="flex" data-inview className="el-2613">
          <div className="box-1156">
            <div className="el-2604">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p-3\"}]}]"} className="el-2603">
                <span
                  className="crisp-svg el-2602"
                  style={{ ["--crisp-svg-width"]: "43px", ["--crisp-svg-ratio"]: "43 / 31" } as import("react").CSSProperties}
                >
                  <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                  <Image
                    src="/assets/pasted-artwork-131.svg"
                    alt="メニューを閉じる"
                    width={86}
                    height={62}
                  />
                </span>
              </div>
            </div>
            <div className="container-157">
              <p id="松ヶ崎祭について-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone-3\"}]}]"} className="el-2605">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone-3" data-toggle-show="flex" data-inview className="el-2606">
                <Link href="/about" id="松ヶ崎祭とは-p-3" className="button-573">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p-3" className="button-574">
                  {"mf56メインテーマ"}
                </Link>
                <Link href="/sponsor" id="協賛-p-3" className="button-575">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p-3" className="button-576">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone-3\"}]}]"} className="el-2607">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone-3" data-toggle-show="flex" data-inview className="el-2608">
                <Link href="/search" id="言葉-p-3" className="button-577">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p-3" className="button-578">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p-3" className="button-579">
                  {"地図からさがす"}
                </a>
                <a href="https://map.matsufes.info/?bookmarks=1" id="しおり-p-3" className="button-580">
                  {"きみのしおり"}
                </a>
              </div>
              <p id="ご案内-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone-3\"}]}]"} className="el-2609">
                {"ご案内"}
              </p>
              <div id="goannai-phone-3" data-toggle-show="flex" data-inview className="el-2610">
                <Link href="/attention" id="ご来場の-p-3" className="button-581">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p-3" className="button-582">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p-3" className="button-583">
                  {"来場者アンケート"}
                </Link>
                <Link href="/question" id="ご質問-p-3" className="button-584">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p-3" className="button-585">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone-3\"}]}]"} className="el-2611">
                {"公式特集"}
              </p>
              <div id="koushiki-phone-3" data-toggle-show="flex" data-inview className="el-2612">
                <Link href="/committee" id="委員会企画-p-3" className="button-586">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p-3" className="button-587">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/matsupiyo" id="まつぴよ-p-3" className="button-588">
                  {"公式メンバー「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pc-11">
          <div className="container-162">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-41\"},{\"kind\":\"show\",\"target\":\"div-42\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-41\"},{\"kind\":\"hide\",\"target\":\"div-42\"}]}]"} className="el-2622">
              <div className="el-2614">
                <div className="box-1157">
                  <p className="text-780">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-781">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-782">
                  {"について"}
                </p>
              </div>
              <div id="div-41" data-toggle-show="flex" data-inview className="el-2615" />
              <div id="div-42" data-toggle-show="flex" className="el-2621">
                <div id="menu1-11" data-inview className="container-158">
                  <Link href="/about" className="el-2616">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2617">
                    {"mf56メインテーマ"}
                  </Link>
                  <Link href="/sponsor" className="el-2618">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2619">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-10" className="el-2620" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-43\"},{\"kind\":\"hide\",\"target\":\"div-44\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-43\"},{\"kind\":\"show\",\"target\":\"div-44\"}]}]"} className="el-2631">
              <div className="el-2623">
                <div className="box-1158">
                  <p className="text-783">
                    {"きかく"}
                  </p>
                  <p className="text-784">
                    {"企画"}
                  </p>
                </div>
                <p className="text-785">
                  {"さがし"}
                </p>
              </div>
              <div id="div-43" data-toggle-show="flex" data-inview className="el-2624" />
              <div id="div-44" data-toggle-show="flex" className="el-2630">
                <div id="menu1-13" data-inview className="container-159">
                  <Link href="/search" className="el-2625">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule/0" className="el-2626">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2627">
                    {"地図からさがす"}
                  </a>
                  <a href="https://map.matsufes.info/?bookmarks=1" className="el-2628">
                    {"きみのしおり"}
                  </a>
                  <div id="menu1-12" className="el-2629" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-45\"},{\"kind\":\"hide\",\"target\":\"div-46\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-45\"},{\"kind\":\"show\",\"target\":\"div-46\"}]}]"} className="el-2641">
              <div className="el-2632">
                <p className="text-786">
                  {"ご"}
                </p>
                <div className="box-1159">
                  <p className="text-787">
                    {"あんない"}
                  </p>
                  <p className="text-788">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-45" data-toggle-show="flex" data-inview className="el-2633" />
              <div id="div-46" data-toggle-show="flex" className="el-2640">
                <div id="menu1-15" data-inview className="container-160">
                  <Link href="/attention" className="el-2634">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2635">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2636">
                    {"来場者アンケート"}
                  </Link>
                  <Link href="/question" className="el-2637">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2638">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-14" className="el-2639" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-47\"},{\"kind\":\"hide\",\"target\":\"div-48\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-47\"},{\"kind\":\"show\",\"target\":\"div-48\"}]}]"} className="el-2649">
              <div className="el-2642">
                <div className="box-1160">
                  <p className="text-789">
                    {"こうしきとくしゅー"}
                  </p>
                  <p className="text-790">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-47" data-toggle-show="flex" data-inview className="el-2643" />
              <div id="div-48" data-toggle-show="flex" className="el-2648">
                <div id="menu1-17" data-inview className="container-161">
                  <Link href="/committee" className="el-2644">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2645">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-2646">
                    {"公式メンバー「まつぴよ」"}
                  </Link>
                  <div id="menu1-16" className="el-2647" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Image data-inview
        src="/assets/Rcloud.webp"
        alt=""
        width={1392}
        height={1101}
        className="svg-713"
      />
      <Image data-inview
        src="/assets/Lcloud.webp"
        alt=""
        width={1032}
        height={981}
        className="svg-714"
      />
      <section className="el-2533">
        <div className="box-1071">
          <p className="text-708">
            {"ことば"}
          </p>
          <h1 className="text-709">
            {"言葉"}
          </h1>
        </div>
        <h2 className="text-710">
          {"からさがす"}
        </h2>
      </section>
      <section className="box-1072">
        <Image
          src="/assets/pasted-artwork-281.svg"
          alt=""
          width={1356}
          height={65}
          className="pasted-artwork-svg-175"
        />
      </section>
      <section className="box-1080">
        <div className="el-2534">
          <div className="box-1073">
            <p className="text-711">
              {"まつがさきさい"}
            </p>
            <p className="text-712">
              {"松ヶ崎祭"}
            </p>
          </div>
          <p className="text-713">
            {"には　"}
          </p>
          <div className="box-1074">
            <p className="text-714">
              {"きかく"}
            </p>
            <p className="text-715">
              {"企画"}
            </p>
          </div>
          <p className="text-716">
            {"がいっぱい。"}
          </p>
        </div>
        <div className="el-2535">
          <div className="box-1075">
            <p className="text-717">
              {"き"}
            </p>
            <p className="text-718">
              {"気"}
            </p>
          </div>
          <p className="text-719">
            {"になる"}
          </p>
          <div className="box-1076">
            <p className="text-720">
              {"ことば"}
            </p>
            <p className="text-721">
              {"言葉"}
            </p>
          </div>
          <p className="text-722">
            {"から　"}
          </p>
          <div className="box-1077">
            <p className="text-723">
              {"きみ"}
            </p>
            <p className="text-724">
              {"君"}
            </p>
          </div>
          <p className="text-725">
            {"にぴったりの"}
          </p>
          <div className="box-1078">
            <p className="text-726">
              {"きかく"}
            </p>
            <p className="text-727">
              {"企画"}
            </p>
          </div>
          <p className="text-728">
            {"を"}
          </p>
          <div className="box-1079">
            <p className="text-729">
              {"み"}
            </p>
            <p className="text-730">
              {"見"}
            </p>
          </div>
          <p className="text-731">
            {"つけてね。"}
          </p>
        </div>
      </section>
      <section className="box-1085">
        <div className="box-1084">
          <div className="box-1081" />
          <div className="box-1083">
            <div className="box-1082">
              <Image
                src="/assets/pasted-artwork-208.svg"
                alt=""
                width={56}
                height={60}
                className="el-2597"
              />
            </div>
            <input id="field" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":2},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":1,\"conds\":[{\"field\":\"name\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"}},{\"field\":\"exhibitorName\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false},{\"field\":\"customAnswers.中分類\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false},{\"field\":\"searchWords\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false}]}]}]"} type="text" className="input-12" name="field" placeholder="ここに　言葉を　入力してみてね" />
          </div>
        </div>
      </section>
      <section className="el-2588">
        <div className="box-1150">
          <div className="box-1134">
            <div className="box-1090">
              <div className="box-1089">
                <div className="box-1086" />
                <div className="box-1088">
                  <div className="box-1087">
                    <Image
                      src="/assets/pasted-artwork-208.svg"
                      alt=""
                      width={56}
                      height={60}
                      className="el-2598"
                    />
                  </div>
                  <input id="field-2" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":1},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":2,\"conds\":[{\"field\":\"name\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"}},{\"field\":\"exhibitorName\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false},{\"field\":\"customAnswers.中分類\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false},{\"field\":\"searchWords\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false}]}]}]"} type="text" className="input-13" name="field-2" placeholder="ここに　言葉を　入力してみてね" />
                </div>
              </div>
            </div>
            <div className="box-1093">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"value\",\"target\":\"agree\",\"op\":\"eq\",\"value\":\"false\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree\",\"value\":\"true\"},{\"kind\":\"hide\",\"target\":\"div-30\"},{\"kind\":\"show\",\"target\":\"div-31\"},{\"kind\":\"show\",\"target\":\"div-32\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree\",\"value\":\"false\"},{\"kind\":\"hide\",\"target\":\"div-32\"},{\"kind\":\"hide\",\"target\":\"div-31\"},{\"kind\":\"show\",\"target\":\"div-30\"}]}]}]"} className="el-2538">
                <label id="agree" className="checkbox-43">
                  <input type="checkbox" name="agree" value="true" />
                  {"同意する"}
                </label>
                <div id="div-30" data-toggle-show="flex" className="el-2536">
                  <Image
                    src="/assets/off.webp"
                    alt=""
                    width={701}
                    height={228}
                    className="png-149"
                  />
                  <div className="box-1091">
                    <p className="text-732">
                      {"ひらく"}
                    </p>
                  </div>
                </div>
                <div id="div-31" data-toggle-show="flex" data-inview className="el-2537">
                  <Image
                    src="/assets/on.webp"
                    alt=""
                    width={759}
                    height={213}
                    className="png-150"
                    preload
                    fetchPriority="high"
                  />
                  <div className="box-1092">
                    <p className="text-733">
                      {"とじる"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="div-32" data-toggle-show="flex" data-inview className="el-2583">
              <div className="box-1094">
                <Image
                  src="/assets/pasted-artwork-210.svg"
                  alt=""
                  width={60}
                  height={58}
                  className="el-2591"
                />
                <p className="text-734">
                  {"いつ"}
                </p>
              </div>
              <div className="box-1101">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-2\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"show\",\"target\":\"div-2\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":3,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/13\"}]},{\"kind\":\"hide\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div\"}]}]}]"} className="el-2541">
                  <label id="agree-2" className="checkbox-29">
                    <input type="checkbox" name="agree-2" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-2" data-toggle-show="flex" className="el-2539">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-179"
                    />
                    <div className="box-1095">
                      <p className="text-735">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                  <div id="div" data-toggle-show="flex" data-inview className="el-2540">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-151"
                    />
                    <div className="box-1096">
                      <p className="text-736">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-3\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"show\",\"target\":\"div-3\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":4,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"hide\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-4\"}]}]}]"} className="el-2544">
                  <label id="agree-3" className="checkbox-30">
                    <input type="checkbox" name="agree-3" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-3" data-toggle-show="flex" className="el-2542">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-152"
                    />
                    <div className="box-1097">
                      <p className="text-737">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-4" data-toggle-show="flex" data-inview className="el-2543">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-153"
                    />
                    <div className="box-1098">
                      <p className="text-738">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-4\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"show\",\"target\":\"div-5\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":5,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/15\"}]},{\"kind\":\"hide\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-6\"}]}]}]"} className="el-2547">
                  <label id="agree-4" className="checkbox-31">
                    <input type="checkbox" name="agree-4" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-5" data-toggle-show="flex" className="el-2545">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-154"
                    />
                    <div className="box-1099">
                      <p className="text-739">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-6" data-toggle-show="flex" data-inview className="el-2546">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-155"
                    />
                    <div className="box-1100">
                      <p className="text-740">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1102">
                <Image
                  src="/assets/pasted-artwork-211.svg"
                  alt=""
                  width={50}
                  height={71}
                  className="el-2592"
                />
                <p className="text-741">
                  {"どこで"}
                </p>
              </div>
              <div className="box-1113">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-5\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":6},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"show\",\"target\":\"div-7\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":6,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\"}]},{\"kind\":\"hide\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-8\"}]}]}]"} className="el-2550">
                  <label id="agree-5" className="checkbox-32">
                    <input type="checkbox" name="agree-5" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-7" data-toggle-show="flex" className="el-2548">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-156"
                    />
                    <div className="box-1104">
                      <div className="box-1103">
                        <p className="text-742">
                          {"おくがい"}
                        </p>
                        <p className="text-743">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-8" data-toggle-show="flex" className="el-2549">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-157"
                    />
                    <div className="box-1106">
                      <div className="box-1105">
                        <p className="text-744">
                          {"おくがい"}
                        </p>
                        <p className="text-745">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-6\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":7},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"show\",\"target\":\"div-9\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":7,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\",\"not\":true}]},{\"kind\":\"hide\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-10\"}]}]}]"} className="el-2553">
                  <label id="agree-6" className="checkbox-33">
                    <input type="checkbox" name="agree-6" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-9" data-toggle-show="flex" className="el-2551">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-158"
                    />
                    <div className="box-1108">
                      <div className="box-1107">
                        <p className="text-746">
                          {"おくない"}
                        </p>
                        <p className="text-747">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-10" data-toggle-show="flex" className="el-2552">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-159"
                    />
                    <div className="box-1110">
                      <div className="box-1109">
                        <p className="text-748">
                          {"おくない"}
                        </p>
                        <p className="text-749">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-7\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":8},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"show\",\"target\":\"div-11\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":8,\"join\":\"or\",\"conds\":[{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"パフォーマンス\",\"not\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"ストリートパフォーマンス\",\"and\":false},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"屋内パフォーマンス\",\"and\":false}]},{\"kind\":\"hide\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-12\"}]}]}]"} className="el-2556">
                  <label id="agree-7" className="checkbox-34">
                    <input type="checkbox" name="agree-7" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-11" data-toggle-show="flex" className="el-2554">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-160"
                    />
                    <div className="box-1111">
                      <p className="text-750">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-12" data-toggle-show="flex" className="el-2555">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-161"
                    />
                    <div className="box-1112">
                      <p className="text-751">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1114">
                <Image
                  src="/assets/pasted-artwork-212.svg"
                  alt=""
                  width={71}
                  height={72}
                  className="el-2593"
                />
                <p className="text-752">
                  {"どんなことがしたい？"}
                </p>
              </div>
              <div className="box-1131">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-8\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":9},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"show\",\"target\":\"div-13\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":9,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"たべる\"}]},{\"kind\":\"hide\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-14\"}]}]}]"} className="el-2559">
                  <label id="agree-8" className="checkbox-35">
                    <input type="checkbox" name="agree-8" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-13" data-toggle-show="flex" className="el-2557">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-162"
                    />
                    <div className="box-1115">
                      <p className="text-753">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-14" data-toggle-show="flex" data-inview className="el-2558">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-163"
                    />
                    <div className="box-1116">
                      <p className="text-754">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-9\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":10},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"show\",\"target\":\"div-15\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":10,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"あそぶ\"}]},{\"kind\":\"hide\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-16\"}]}]}]"} className="el-2562">
                  <label id="agree-9" className="checkbox-36">
                    <input type="checkbox" name="agree-9" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-15" data-toggle-show="flex" className="el-2560">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-164"
                    />
                    <div className="box-1117">
                      <p className="text-755">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-16" data-toggle-show="flex" data-inview className="el-2561">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-165"
                    />
                    <div className="box-1118">
                      <p className="text-756">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-10\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":11},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"show\",\"target\":\"div-17\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":11,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"のむ\"}]},{\"kind\":\"hide\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-18\"}]}]}]"} className="el-2565">
                  <label id="agree-10" className="checkbox-37">
                    <input type="checkbox" name="agree-10" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-17" data-toggle-show="flex" className="el-2563">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-166"
                    />
                    <div className="box-1119">
                      <p className="text-757">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-18" data-toggle-show="flex" data-inview className="el-2564">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-167"
                    />
                    <div className="box-1120">
                      <p className="text-758">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-11\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":12},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"show\",\"target\":\"div-19\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":12,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"みる\"}]},{\"kind\":\"hide\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-20\"}]}]}]"} className="el-2568">
                  <label id="agree-11" className="checkbox-38">
                    <input type="checkbox" name="agree-11" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-19" data-toggle-show="flex" className="el-2566">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-168"
                    />
                    <div className="box-1121">
                      <p className="text-759">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-20" data-toggle-show="flex" data-inview className="el-2567">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-169"
                    />
                    <div className="box-1122">
                      <p className="text-760">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-12\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":13},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"show\",\"target\":\"div-21\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":13,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"かう\"}]},{\"kind\":\"hide\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-22\"}]}]}]"} className="el-2571">
                  <label id="agree-12" className="checkbox-39">
                    <input type="checkbox" name="agree-12" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-21" data-toggle-show="flex" className="el-2569">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-170"
                    />
                    <div className="box-1123">
                      <p className="text-761">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                  <div id="div-22" data-toggle-show="flex" data-inview className="el-2570">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-171"
                    />
                    <div className="box-1124">
                      <p className="text-762">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-13\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":14},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"show\",\"target\":\"div-23\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":14,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"さわる\"}]},{\"kind\":\"hide\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-24\"}]}]}]"} className="el-2574">
                  <label id="agree-13" className="checkbox-40">
                    <input type="checkbox" name="agree-13" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-23" data-toggle-show="flex" className="el-2572">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-172"
                    />
                    <div className="box-1125">
                      <p className="text-763">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-24" data-toggle-show="flex" data-inview className="el-2573">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-173"
                    />
                    <div className="box-1126">
                      <p className="text-764">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-14\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":15},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"show\",\"target\":\"div-25\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":15,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"つくる\"}]},{\"kind\":\"hide\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-26\"}]}]}]"} className="el-2577">
                  <label id="agree-14" className="checkbox-41">
                    <input type="checkbox" name="agree-14" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-25" data-toggle-show="flex" className="el-2575">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-174"
                    />
                    <div className="box-1127">
                      <p className="text-765">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-26" data-toggle-show="flex" data-inview className="el-2576">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-175"
                    />
                    <div className="box-1128">
                      <p className="text-766">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-15\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":16},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-27\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":16,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"きく\"}]},{\"kind\":\"hide\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-28\"}]}]}]"} className="el-2580">
                  <label id="agree-15" className="checkbox-42">
                    <input type="checkbox" name="agree-15" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-27" data-toggle-show="flex" className="el-2578">
                    <Image
                      src="/assets/off.webp"
                      alt=""
                      width={701}
                      height={228}
                      className="png-176"
                    />
                    <div className="box-1129">
                      <p className="text-767">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                  <div id="div-28" data-toggle-show="flex" data-inview className="el-2579">
                    <Image
                      src="/assets/on.webp"
                      alt=""
                      width={759}
                      height={213}
                      className="png-177"
                    />
                    <div className="box-1130">
                      <p className="text-768">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://matsufes-info.vercel.app/search" className="el-2582">
                <div id="div-29" data-toggle-show="flex" className="box-1133">
                  <Image
                    src="/assets/off.webp"
                    alt="やり直しボタン"
                    width={701}
                    height={228}
                    className="png-178"
                  />
                  <div className="box-1132">
                    <Image
                      src="/assets/_-_2-2.png"
                      alt="やり直し"
                      width={50}
                      height={58}
                      className="el-2581"
                    />
                    <p className="text-769">
                      {"やりなおす"}
                    </p>
                  </div>
                </div>
              </a>
              <div className="box-1152">
                <Link href="/m-1" className="box-1153">
                  <div className="box-1154">
                    <div className="box-1155">
                      <p className="text-779">
                        {"m-1グランプリに投票する"}
                      </p>
                      <Image
                        src="/assets/image-22.png"
                        alt="m-1グランプリ投票"
                        width={44}
                        height={64}
                        className="image-22-png-5"
                      />
                      <Image
                        src="/assets/pasted-artwork-216.svg"
                        alt=""
                        width={27}
                        height={39}
                        className="svg-710"
                      />
                    </div>
                  </div>
                  <span
                    className="crisp-svg vector-3-svg-5"
                    style={{ ["--crisp-svg-width"]: "343px", ["--crisp-svg-ratio"]: "343 / 178" } as import("react").CSSProperties}
                  >
                    <svg aria-hidden="true" width={343} height={178} viewBox="0 0 343 178" />
                    <Image
                      src="/assets/Vector-3.svg"
                      alt="m-1グランプリに投票する"
                      width={686}
                      height={356}
                    />
                  </span>
                  <Image
                    src="/assets/pasted-artwork-215.svg"
                    alt=""
                    width={411}
                    height={110}
                    className="svg-711"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="box-1149">
            <div className="box-1135">
              <p className="text-770" data-live={interpolate("{_3}件の出展が見つかりました", { ...vars, ...{"_3":"{_3}","\u0000keepEscapes":true} })}>
                {interpolate("{_3}件の出展が見つかりました", vars)}
              </p>
            </div>
            <div className="box-1148">
              <div data-array="_1" data-client-list className="el-2587">
                <div data-tpl hidden style={{ display: "none" }}>
                  {((iv0: Vars) => (
                    <>
                    <SmartLink href={safeNavigationUrl(interpolateUrl("/booth/{publicId}", iv0))} className="el-2586" data-href-parts={JSON.stringify(["/booth/", { name: "publicId", at: 7, ...(Object.prototype.hasOwnProperty.call(iv0, "publicId") || Object.prototype.hasOwnProperty.call(iv0, "publicId") ? { fallback: interpolate("{publicId}", { ...iv0 }) } : {}) }, ""])}>
                      <div className="box-1136">
                        <p className="text-771" data-text-parts={JSON.stringify(["", { name: "name", ...(Object.prototype.hasOwnProperty.call(iv0, "name") || Object.prototype.hasOwnProperty.call(iv0, "name") ? { fallback: interpolate("{name}", { ...iv0 }) } : {}) }, ""])}>
                          {interpolate("{name}", iv0)}
                        </p>
                        <div data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5","rawRef":{ name: "_5" }},"op":"contains","value":{"inputRef":"publicId","rawRef":{ name: "publicId", ...(Object.prototype.hasOwnProperty.call(iv0, "publicId") || Object.prototype.hasOwnProperty.call(iv0, "publicId") ? { fallback: lookupVar({ ...iv0 }, "publicId") ?? null } : {}) }}},"then":[{"kind":"remove-list-item","list":"_5","mode":"value","value":{"inputRef":"publicId","rawRef":{ name: "publicId", ...(Object.prototype.hasOwnProperty.call(iv0, "publicId") || Object.prototype.hasOwnProperty.call(iv0, "publicId") ? { fallback: lookupVar({ ...iv0 }, "publicId") ?? null } : {}) }}},{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}],"else":[{"kind":"set-list-item","list":"_5","key":"","value":{"inputRef":"publicId","rawRef":{ name: "publicId", ...(Object.prototype.hasOwnProperty.call(iv0, "publicId") || Object.prototype.hasOwnProperty.call(iv0, "publicId") ? { fallback: lookupVar({ ...iv0 }, "publicId") ?? null } : {}) }}},{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}]},{"kind":"transform","source":"_5","into":"_4","transform":{"kind":"join","separator":"."},"rawRef":{ name: "_5" }},{"kind":"store-save","key":"mf_bookmarks","value":{ scriptParts: ["", { name: "_4" }, ""] },"shared":true}]},{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":{"inputRef":"publicId","rawRef":{ name: "publicId", ...(Object.prototype.hasOwnProperty.call(iv0, "publicId") || Object.prototype.hasOwnProperty.call(iv0, "publicId") ? { fallback: lookupVar({ ...iv0 }, "publicId") ?? null } : {}) }},"left":{"inputRef":"_5","rawRef":{ name: "_5" }}},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]}])} className="el-2584">
                          <Image id="fav-on" data-toggle-show="block"
                            src="/assets/pasted-artwork-459.svg"
                            alt="お気に入り登録済"
                            width={140}
                            height={136}
                            className="bkonn-svg-4"
                            preload
                            fetchPriority="high"
                          />
                          <Image id="fav-off" data-toggle-show="block"
                            src="/assets/pasted-artwork-460.svg"
                            alt="お気に入り未登録"
                            width={140}
                            height={136}
                            className="bkoff2-svg-4"
                          />
                        </div>
                      </div>
                      <span
                        className="crisp-svg el-2585"
                        style={{ ["--crisp-svg-width"]: "307px", ["--crisp-svg-ratio"]: "307 / 17" } as import("react").CSSProperties}
                      >
                        <svg aria-hidden="true" width={307} height={17} viewBox="0 0 307 17" />
                        <Image
                          src="/assets/1.svg"
                          alt=""
                          width={614}
                          height={34}
                        />
                      </span>
                      <p className="text-772" data-text-parts={JSON.stringify(["", { name: "exhibitorName", ...(Object.prototype.hasOwnProperty.call(iv0, "exhibitorName") || Object.prototype.hasOwnProperty.call(iv0, "exhibitorName") ? { fallback: interpolate("{exhibitorName}", { ...iv0 }) } : {}) }, ""])}>
                        {interpolate("{exhibitorName}", iv0)}
                      </p>
                      <div className="box-1147">
                        <div className="box-1138">
                          <div className="box-1137">
                            <Image
                              src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} data-image-src-parts={JSON.stringify(["", { name: "imageUrl", ...(Object.prototype.hasOwnProperty.call(iv0, "imageUrl") || Object.prototype.hasOwnProperty.call(iv0, "imageUrl") ? { fallback: interpolate("{imageUrl}", { ...iv0 }) } : {}) }, ""])}
                              alt=""
                              width={1024}
                              height={1024}
                              className="image-22"
                            />
                            <p className="text-773">
                              {"No Image"}
                            </p>
                          </div>
                        </div>
                        <div className="box-1146">
                          <div className="box-1139">
                            <Image
                              src="/assets/pasted-artwork-378.svg"
                              alt=""
                              width={60}
                              height={60}
                              className="el-2594"
                            />
                            <p className="text-774" data-text-parts={JSON.stringify(["", { name: "customAnswers.皆さまへ", ...(Object.prototype.hasOwnProperty.call(iv0, "customAnswers.皆さまへ") || Object.prototype.hasOwnProperty.call(iv0, "customAnswers") ? { fallback: interpolate("{customAnswers.皆さまへ}", { ...iv0 }) } : {}) }, ""])}>
                              {interpolate("{customAnswers.皆さまへ}", iv0)}
                            </p>
                          </div>
                          <div className="box-1140">
                            <Image
                              src="/assets/pasted-artwork-379.svg"
                              alt=""
                              width={49}
                              height={79}
                              className="el-2595"
                            />
                            <p className="text-775" data-text-parts={JSON.stringify(["", { name: "location", ...(Object.prototype.hasOwnProperty.call(iv0, "location") || Object.prototype.hasOwnProperty.call(iv0, "location") ? { fallback: interpolate("{location}", { ...iv0 }) } : {}) }, ""])}>
                              {interpolate("{location}", iv0)}
                            </p>
                          </div>
                          <div className="box-1142">
                            <div className="box-1141">
                              <p className="text-776" data-text-parts={JSON.stringify(["", { name: "categories.投票カテゴリ.0", ...(Object.prototype.hasOwnProperty.call(iv0, "categories.投票カテゴリ.0") || Object.prototype.hasOwnProperty.call(iv0, "categories") ? { fallback: interpolate("{categories.投票カテゴリ.0}", { ...iv0 }) } : {}) }, ""])}>
                                {interpolate("{categories.投票カテゴリ.0}", iv0)}
                              </p>
                            </div>
                          </div>
                          <div className="box-1145">
                            <div className="box-1143">
                              <p className="text-777" data-text-parts={JSON.stringify(["", { name: "categories.大分類.0", ...(Object.prototype.hasOwnProperty.call(iv0, "categories.大分類.0") || Object.prototype.hasOwnProperty.call(iv0, "categories") ? { fallback: interpolate("{categories.大分類.0}", { ...iv0 }) } : {}) }, ""])}>
                                {interpolate("{categories.大分類.0}", iv0)}
                              </p>
                            </div>
                            <div className="box-1144">
                              <p className="text-778" data-text-parts={JSON.stringify(["", { name: "customAnswers.中分類", ...(Object.prototype.hasOwnProperty.call(iv0, "customAnswers.中分類") || Object.prototype.hasOwnProperty.call(iv0, "customAnswers") ? { fallback: interpolate("{customAnswers.中分類}", { ...iv0 }) } : {}) }, ""])}>
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
                        className="frame-png-5"
                      />
                    </SmartLink>
                    </>
                  ))(templateVars(vars))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/pasted-artwork-209.svg"
          alt=""
          width={501}
          height={938}
          className="svg-712"
        />
      </section>
      <section className="box-1151">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png-8"
        />
      </section>
      <section data-inview className="el-2590">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2589">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-707"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-83">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-708"
          />
        </a>
        <span
          className="crisp-svg svg-709"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 347" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={347} viewBox="0 0 375 347" />
          <Image
            src="/assets/pasted-artwork-196.svg"
            alt=""
            width={750}
            height={694}
          />
        </span>
      </section>
      <section data-inview className="footer-41">
        <span
          className="crisp-svg svg-715"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1227" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1227} viewBox="0 0 1920 1227" />
          <Image
            src="/assets/pasted-artwork-274.svg"
            alt=""
            width={3840}
            height={2454}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2596">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-716"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-84">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-717"
          />
        </a>
      </section>
    </>
  );
}
