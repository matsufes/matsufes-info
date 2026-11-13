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
    if (result.kind === "value") vars["_3"] = result.value;
    else if (result.kind === "missing") vars["_3"] = undefined;
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
      <span hidden data-page-body="page_mwefqpvo1m40u4" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"store-load\",\"key\":\"mf_bookmarks\",\"into\":\"_4\",\"shared\":true},{\"kind\":\"transform\",\"source\":\"_4\",\"into\":\"_5\",\"transform\":{\"kind\":\"split\",\"separator\":\".\"}},{\"kind\":\"list-display\",\"mode\":\"sort\",\"array\":\"_1\",\"field\":\"publicId\",\"dir\":\"asc\"}]}]"} />
      <Image data-inview
        src="/assets/image.png"
        alt=""
        width={477}
        height={374}
        className="el-2298"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-2299"
        preload
        fetchPriority="high"
      />
      <nav className="header-30">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-2300"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-2301">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-157"
          />
        </div>
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-2312">
          <div className="box-968">
            <div id="div-42" className="el-2303">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-2302">
                <span
                  className="crisp-svg svg-537"
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
            <div className="container-151">
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-2304">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-2305">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-542">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-543">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-544">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-545">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-2306">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-2307">
                <Link href="/search" id="言葉-p" className="button-546">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-547">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-548">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-549">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-2308">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-2309">
                <Link href="/attention" id="ご来場の-p" className="button-550">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-551">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p" className="button-552">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p" className="button-553">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-554">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-2310">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-2311">
                <Link href="/committee" id="委員会企画-p" className="button-555">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-556">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-557">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-2349">
          <div className="container-156">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-2321">
              <div className="el-2313">
                <div className="box-969">
                  <p className="text-621">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-622">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-623">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-2314" />
              <div id="div-34" data-toggle-show="flex" className="el-2320">
                <div id="menu1-2" data-inview className="container-152">
                  <Link href="/about" className="el-2315">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-2316">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-2317">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-2318">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-2319" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-2330">
              <div className="el-2322">
                <div className="box-970">
                  <p className="text-624">
                    {"きかく"}
                  </p>
                  <p className="text-625">
                    {"企画"}
                  </p>
                </div>
                <p className="text-626">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-2323" />
              <div id="div-36" data-toggle-show="flex" className="el-2329">
                <div id="menu1-4" data-inview className="container-153">
                  <Link href="/search" className="el-2324">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-2325">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-2326">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-2327">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-2328" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-2340">
              <div className="el-2331">
                <p className="text-627">
                  {"ご"}
                </p>
                <div className="box-971">
                  <p className="text-628">
                    {"あんない"}
                  </p>
                  <p className="text-629">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-2332" />
              <div id="div-39" data-toggle-show="flex" className="el-2339">
                <div id="menu1-6" data-inview className="container-154">
                  <Link href="/attention" className="el-2333">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-2334">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-2335">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-2336">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-2337">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-2338" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-2348">
              <div className="el-2341">
                <div className="box-972">
                  <p className="text-630">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-631">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-2342" />
              <div id="div-38" data-toggle-show="flex" className="el-2347">
                <div id="menu1-8" data-inview className="container-155">
                  <Link href="/committee" className="el-2343">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-2344">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-2345">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-2346" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-2350">
        <div className="box-973">
          <p className="text-632">
            {"ことば"}
          </p>
          <h1 className="text-633">
            {"言葉"}
          </h1>
        </div>
        <h2 className="text-634">
          {"からさがす"}
        </h2>
      </section>
      <section className="box-974">
        <Image
          src="/assets/main-thema-soshoku.svg"
          alt=""
          width={1240}
          height={34}
          className="main-thema-soshoku-svg-6"
          preload
          fetchPriority="high"
        />
      </section>
      <section className="box-982">
        <div className="el-2351">
          <div className="box-975">
            <p className="text-635">
              {"まつがさきさい"}
            </p>
            <p className="text-636">
              {"松ヶ崎祭"}
            </p>
          </div>
          <p className="text-637">
            {"には　"}
          </p>
          <div className="box-976">
            <p className="text-638">
              {"きかく"}
            </p>
            <p className="text-639">
              {"企画"}
            </p>
          </div>
          <p className="text-640">
            {"がいっぱい。"}
          </p>
        </div>
        <div className="el-2352">
          <div className="box-977">
            <p className="text-641">
              {"き"}
            </p>
            <p className="text-642">
              {"気"}
            </p>
          </div>
          <p className="text-643">
            {"になる"}
          </p>
          <div className="box-978">
            <p className="text-644">
              {"ことば"}
            </p>
            <p className="text-645">
              {"言葉"}
            </p>
          </div>
          <p className="text-646">
            {"から　"}
          </p>
          <div className="box-979">
            <p className="text-647">
              {"きみ"}
            </p>
            <p className="text-648">
              {"君"}
            </p>
          </div>
          <p className="text-649">
            {"にぴったりの"}
          </p>
          <div className="box-980">
            <p className="text-650">
              {"きかく"}
            </p>
            <p className="text-651">
              {"企画"}
            </p>
          </div>
          <p className="text-652">
            {"を"}
          </p>
          <div className="box-981">
            <p className="text-653">
              {"み"}
            </p>
            <p className="text-654">
              {"見"}
            </p>
          </div>
          <p className="text-655">
            {"つけてね。"}
          </p>
        </div>
      </section>
      <section className="box-987">
        <div className="box-986">
          <div className="box-983" />
          <div className="box-985">
            <div className="box-984">
              <Image
                src="/assets/image-3.png"
                alt="検索"
                width={102}
                height={111}
                className="png-117"
              />
            </div>
            <input id="field" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":2},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":1,\"conds\":[{\"field\":\"name\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"}},{\"field\":\"exhibitorName\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false},{\"field\":\"customAnswers.中分類\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false},{\"field\":\"searchWords\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field\"},\"and\":false}]}]}]"} type="text" className="input-10" name="field" placeholder="ここに　言葉を　入力してみてね" />
          </div>
        </div>
      </section>
      <section className="el-2407">
        <div className="box-1056">
          <div className="box-1040">
            <div className="box-992">
              <div className="box-991">
                <div className="box-988" />
                <div className="box-990">
                  <div className="box-989">
                    <Image
                      src="/assets/image-3.png"
                      alt=""
                      width={102}
                      height={111}
                      className="png-118"
                    />
                  </div>
                  <input id="field-2" data-scripts={"[{\"trigger\":\"change\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":1},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":2,\"conds\":[{\"field\":\"name\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"}},{\"field\":\"exhibitorName\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false},{\"field\":\"customAnswers.中分類\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false},{\"field\":\"searchWords\",\"op\":\"contains\",\"value\":{\"inputRef\":\"field-2\"},\"and\":false}]}]}]"} type="text" className="input-11" name="field-2" placeholder="ここに　言葉を　入力してみてね" />
                </div>
              </div>
            </div>
            <div className="box-995">
              <div className="el-2355">
                <div id="div-30" data-toggle-show="flex" className="el-2353">
                  <Image
                    src="/assets/image-4.png"
                    alt=""
                    width={300}
                    height={107}
                    className="png-119"
                  />
                  <div className="box-993">
                    <p className="text-656">
                      {"ひらく"}
                    </p>
                  </div>
                </div>
                <div id="div-31" data-toggle-show="flex" data-inview className="el-2354">
                  <Image
                    src="/assets/image-124-1.png"
                    alt=""
                    width={274}
                    height={98}
                    className="png-120"
                    preload
                    fetchPriority="high"
                  />
                  <div className="box-994">
                    <p className="text-657">
                      {"とじる"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="div-32" data-toggle-show="flex" data-inview className="el-2402">
              <div className="box-996">
                <Image
                  src="/assets/_-_2.png"
                  alt="いつ"
                  width={129}
                  height={129}
                  className="el-2356"
                />
                <p className="text-658">
                  {"いつ"}
                </p>
              </div>
              <div className="box-1003">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-2\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"show\",\"target\":\"div-2\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":3,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/13\"}]},{\"kind\":\"hide\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div\"}]}]}]"} className="el-2359">
                  <label id="agree-2" className="checkbox-15">
                    <input type="checkbox" name="agree-2" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-2" data-toggle-show="flex" className="el-2357">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-121"
                    />
                    <div className="box-997">
                      <p className="text-659">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                  <div id="div" data-toggle-show="flex" data-inview className="el-2358">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-122"
                    />
                    <div className="box-998">
                      <p className="text-660">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-3\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"show\",\"target\":\"div-3\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":4,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"hide\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-4\"}]}]}]"} className="el-2362">
                  <label id="agree-3" className="checkbox-16">
                    <input type="checkbox" name="agree-3" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-3" data-toggle-show="flex" className="el-2360">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-123"
                    />
                    <div className="box-999">
                      <p className="text-661">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-4" data-toggle-show="flex" data-inview className="el-2361">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-124"
                    />
                    <div className="box-1000">
                      <p className="text-662">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-4\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"show\",\"target\":\"div-5\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":5,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/15\"}]},{\"kind\":\"hide\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-6\"}]}]}]"} className="el-2365">
                  <label id="agree-4" className="checkbox-17">
                    <input type="checkbox" name="agree-4" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-5" data-toggle-show="flex" className="el-2363">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-125"
                    />
                    <div className="box-1001">
                      <p className="text-663">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-6" data-toggle-show="flex" data-inview className="el-2364">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-126"
                    />
                    <div className="box-1002">
                      <p className="text-664">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1004">
                <Image
                  src="/assets/image-5.png"
                  alt="どこで"
                  width={85}
                  height={108}
                  className="png-127"
                />
                <p className="text-665">
                  {"どこで"}
                </p>
              </div>
              <div className="box-1015">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-5\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":6},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"show\",\"target\":\"div-7\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":6,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\"}]},{\"kind\":\"hide\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-8\"}]}]}]"} className="el-2368">
                  <label id="agree-5" className="checkbox-18">
                    <input type="checkbox" name="agree-5" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-7" data-toggle-show="flex" className="el-2366">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-128"
                    />
                    <div className="box-1006">
                      <div className="box-1005">
                        <p className="text-666">
                          {"おくがい"}
                        </p>
                        <p className="text-667">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-8" data-toggle-show="flex" className="el-2367">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-129"
                    />
                    <div className="box-1008">
                      <div className="box-1007">
                        <p className="text-668">
                          {"おくがい"}
                        </p>
                        <p className="text-669">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-6\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":7},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"show\",\"target\":\"div-9\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":7,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\",\"not\":true}]},{\"kind\":\"hide\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-10\"}]}]}]"} className="el-2371">
                  <label id="agree-6" className="checkbox-19">
                    <input type="checkbox" name="agree-6" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-9" data-toggle-show="flex" className="el-2369">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-130"
                    />
                    <div className="box-1010">
                      <div className="box-1009">
                        <p className="text-670">
                          {"おくない"}
                        </p>
                        <p className="text-671">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-10" data-toggle-show="flex" className="el-2370">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-131"
                    />
                    <div className="box-1012">
                      <div className="box-1011">
                        <p className="text-672">
                          {"おくない"}
                        </p>
                        <p className="text-673">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-7\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":8},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"show\",\"target\":\"div-11\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":8,\"join\":\"or\",\"conds\":[{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"パフォーマンス\",\"not\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"ストリートパフォーマンス\",\"and\":false},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"屋内パフォーマンス\",\"and\":false}]},{\"kind\":\"hide\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-12\"}]}]}]"} className="el-2374">
                  <label id="agree-7" className="checkbox-20">
                    <input type="checkbox" name="agree-7" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-11" data-toggle-show="flex" className="el-2372">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-132"
                    />
                    <div className="box-1013">
                      <p className="text-674">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-12" data-toggle-show="flex" className="el-2373">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-133"
                    />
                    <div className="box-1014">
                      <p className="text-675">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1016">
                <Image
                  src="/assets/_-_2-1.png"
                  alt="どんなことがしたい？"
                  width={82}
                  height={104}
                  className="el-2375"
                />
                <p className="text-676">
                  {"どんなことがしたい？"}
                </p>
              </div>
              <div className="box-1033">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-8\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":9},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"show\",\"target\":\"div-13\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":9,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"たべる\"}]},{\"kind\":\"hide\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-14\"}]}]}]"} className="el-2378">
                  <label id="agree-8" className="checkbox-21">
                    <input type="checkbox" name="agree-8" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-13" data-toggle-show="flex" className="el-2376">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-134"
                    />
                    <div className="box-1017">
                      <p className="text-677">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-14" data-toggle-show="flex" data-inview className="el-2377">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-135"
                    />
                    <div className="box-1018">
                      <p className="text-678">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-9\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":10},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"show\",\"target\":\"div-15\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":10,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"あそぶ\"}]},{\"kind\":\"hide\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-16\"}]}]}]"} className="el-2381">
                  <label id="agree-9" className="checkbox-22">
                    <input type="checkbox" name="agree-9" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-15" data-toggle-show="flex" className="el-2379">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-136"
                    />
                    <div className="box-1019">
                      <p className="text-679">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-16" data-toggle-show="flex" data-inview className="el-2380">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-137"
                    />
                    <div className="box-1020">
                      <p className="text-680">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-10\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":11},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"show\",\"target\":\"div-17\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":11,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"のむ\"}]},{\"kind\":\"hide\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-18\"}]}]}]"} className="el-2384">
                  <label id="agree-10" className="checkbox-23">
                    <input type="checkbox" name="agree-10" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-17" data-toggle-show="flex" className="el-2382">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-138"
                    />
                    <div className="box-1021">
                      <p className="text-681">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-18" data-toggle-show="flex" data-inview className="el-2383">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-139"
                    />
                    <div className="box-1022">
                      <p className="text-682">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-11\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":12},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"show\",\"target\":\"div-19\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":12,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"みる\"}]},{\"kind\":\"hide\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-20\"}]}]}]"} className="el-2387">
                  <label id="agree-11" className="checkbox-24">
                    <input type="checkbox" name="agree-11" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-19" data-toggle-show="flex" className="el-2385">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-140"
                    />
                    <div className="box-1023">
                      <p className="text-683">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-20" data-toggle-show="flex" data-inview className="el-2386">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-141"
                    />
                    <div className="box-1024">
                      <p className="text-684">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-12\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":13},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"show\",\"target\":\"div-21\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":13,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"かう\"}]},{\"kind\":\"hide\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-22\"}]}]}]"} className="el-2390">
                  <label id="agree-12" className="checkbox-25">
                    <input type="checkbox" name="agree-12" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-21" data-toggle-show="flex" className="el-2388">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-142"
                    />
                    <div className="box-1025">
                      <p className="text-685">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                  <div id="div-22" data-toggle-show="flex" data-inview className="el-2389">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-143"
                    />
                    <div className="box-1026">
                      <p className="text-686">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-13\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":14},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"show\",\"target\":\"div-23\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":14,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"さわる\"}]},{\"kind\":\"hide\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-24\"}]}]}]"} className="el-2393">
                  <label id="agree-13" className="checkbox-26">
                    <input type="checkbox" name="agree-13" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-23" data-toggle-show="flex" className="el-2391">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-144"
                    />
                    <div className="box-1027">
                      <p className="text-687">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-24" data-toggle-show="flex" data-inview className="el-2392">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-145"
                    />
                    <div className="box-1028">
                      <p className="text-688">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-14\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":15},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"show\",\"target\":\"div-25\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":15,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"つくる\"}]},{\"kind\":\"hide\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-26\"}]}]}]"} className="el-2396">
                  <label id="agree-14" className="checkbox-27">
                    <input type="checkbox" name="agree-14" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-25" data-toggle-show="flex" className="el-2394">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-146"
                    />
                    <div className="box-1029">
                      <p className="text-689">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-26" data-toggle-show="flex" data-inview className="el-2395">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-147"
                    />
                    <div className="box-1030">
                      <p className="text-690">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-15\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":16},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-27\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":16,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"きく\"}]},{\"kind\":\"hide\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-28\"}]}]}]"} className="el-2399">
                  <label id="agree-15" className="checkbox-28">
                    <input type="checkbox" name="agree-15" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-27" data-toggle-show="flex" className="el-2397">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-148"
                    />
                    <div className="box-1031">
                      <p className="text-691">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                  <div id="div-28" data-toggle-show="flex" data-inview className="el-2398">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-149"
                    />
                    <div className="box-1032">
                      <p className="text-692">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\"}]}]"} className="el-2401">
                <div id="div-29" data-toggle-show="flex" className="box-1035">
                  <Image
                    src="/assets/image-4.png"
                    alt="やり直しボタン"
                    width={300}
                    height={107}
                    className="png-150"
                  />
                  <div className="box-1034">
                    <Image
                      src="/assets/_-_2-2.png"
                      alt="やり直し"
                      width={50}
                      height={58}
                      className="el-2400"
                    />
                    <p className="text-693">
                      {"やりなおす"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-1039">
                <Link href="/m-1" className="box-1038">
                  <div className="box-1037">
                    <div className="box-1036">
                      <p className="text-694">
                        {"m-1グランプリに投票する"}
                      </p>
                      <Image
                        src="/assets/image-22.png"
                        alt="m-1グランプリ投票"
                        width={44}
                        height={64}
                        className="image-22-png-4"
                      />
                    </div>
                  </div>
                  <span
                    className="crisp-svg vector-3-svg-4"
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
                </Link>
              </div>
            </div>
          </div>
          <div className="box-1055">
            <div className="box-1041">
              <p className="text-695">
                {interpolate("{_3}件の出展が見つかりました", vars)}
              </p>
            </div>
            <div className="box-1054">
              <div data-array="_1" className="el-2406">
                {toItems(lookupVar(vars, "_1")).map((item, i) => {
                  const iv0 = { ...vars, ...item };
                  return (
                    <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": (Object.prototype.hasOwnProperty.call(item, "name") ? item["name"] : undefined), "exhibitorName": (Object.prototype.hasOwnProperty.call(item, "exhibitorName") ? item["exhibitorName"] : undefined), "tags": (Object.prototype.hasOwnProperty.call(item, "tags") ? item["tags"] : undefined), "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": (Object.prototype.hasOwnProperty.call(item, "searchWords") ? item["searchWords"] : undefined), "place": (Object.prototype.hasOwnProperty.call(item, "place") ? item["place"] : undefined), "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "businessHours": (Object.prototype.hasOwnProperty.call(item, "businessHours") ? item["businessHours"] : undefined), "venue": (Object.prototype.hasOwnProperty.call(item, "venue") ? item["venue"] : undefined), "categories.大分類": lookupVar(item, "categories.大分類"), "publicId": (Object.prototype.hasOwnProperty.call(item, "publicId") ? item["publicId"] : undefined) })}>
                      <SmartLink href={safeNavigationUrl(interpolateUrl("/booth/{publicId}", iv0))} className="el-2405">
                        <div className="box-1042">
                          <p className="text-696">
                            {interpolate("{name}", iv0)}
                          </p>
                          <div data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5"},"op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},"then":[{"kind":"set-list-item","list":"_5","key":"","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}],"else":[{"kind":"set-list-item","list":"","key":"","value":""},{"kind":"remove-list-item","list":"","mode":"value","value":""},{"kind":"remove-list-item","list":"_5","mode":"value","value":""},{"kind":"transform","source":"_5","into":"_5","transform":{"kind":"field","key":""}}]}]},{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null},"left":{"inputRef":"_5"}},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]}])} className="el-2403">
                            <Image id="fav-on" data-toggle-show="block"
                              src="/assets/bkonn.svg"
                              alt="お気に入り登録済"
                              width={35}
                              height={34}
                              className="bkonn-svg-4"
                              preload
                              fetchPriority="high"
                            />
                            <Image id="fav-off" data-toggle-show="block"
                              src="/assets/bkoff2.svg"
                              alt="お気に入り未登録"
                              width={35}
                              height={34}
                              className="bkoff2-svg-4"
                            />
                          </div>
                        </div>
                        <span
                          className="crisp-svg el-2404"
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
                        <p className="text-697">
                          {interpolate("{exhibitorName}", iv0)}
                        </p>
                        <div className="box-1053">
                          <div className="box-1044">
                            <div className="box-1043">
                              <Image
                                src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                                alt=""
                                width={1024}
                                height={1024}
                                className="image-21"
                              />
                              <p className="text-698">
                                {"No Image"}
                              </p>
                            </div>
                          </div>
                          <div className="box-1052">
                            <div className="box-1045">
                              <Image
                                src="/assets/Vector-4.svg"
                                alt=""
                                width={15}
                                height={15}
                                className="vector-4-svg-3"
                              />
                              <p className="text-699">
                                {interpolate("{customAnswers.皆さまへ}", iv0)}
                              </p>
                            </div>
                            <div className="box-1046">
                              <Image
                                src="/assets/Group-244.svg"
                                alt=""
                                width={13}
                                height={20}
                                className="group-244-svg-3"
                              />
                              <p className="text-700">
                                {interpolate("{location}", iv0)}
                              </p>
                            </div>
                            <div className="box-1048">
                              <div className="box-1047">
                                <p className="text-701">
                                  {interpolate("{categories.投票カテゴリ.0}", iv0)}
                                </p>
                              </div>
                            </div>
                            <div className="box-1051">
                              <div className="box-1049">
                                <p className="text-702">
                                  {interpolate("{categories.大分類.0}", iv0)}
                                </p>
                              </div>
                              <div className="box-1050">
                                <p className="text-703">
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
                          className="frame-png-4"
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
      <section className="box-1057">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png-7"
        />
      </section>
      <section data-inview className="footer-36">
        <span
          className="crisp-svg pasted-artwork-svg-158"
          style={{ ["--crisp-svg-width"]: "1920px", ["--crisp-svg-ratio"]: "1920 / 1015" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-35.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2408">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-538"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-73">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-539"
          />
        </a>
      </section>
      <section data-inview className="el-2410">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2409">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-540"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-74">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-541"
          />
        </a>
        <span
          className="crisp-svg svg-542"
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
    </>
  );
}
