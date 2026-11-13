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
        className="el-3134"
        preload
        fetchPriority="high"
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-3135"
        preload
        fetchPriority="high"
      />
      <nav className="header-45">
        <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          src="/assets/home.png"
          alt="トップへ戻る"
          width={298}
          height={298}
          className="el-3136"
        />
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-3137">
          <Image
            src="/assets/menu.png"
            alt="メニューを開く"
            width={322}
            height={199}
            className="pasted-artwork-svg-184"
          />
        </div>
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-3148">
          <div className="box-1048">
            <div id="div-42" className="el-3139">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-3138">
                <span
                  className="crisp-svg svg-646"
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
            <div className="container-241">
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-3140">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-3141">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-797">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-798">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-799">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-800">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-3142">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-3143">
                <Link href="/search" id="言葉-p" className="button-801">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-802">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-803">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-804">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-3144">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-3145">
                <Link href="/attention" id="ご来場の-p" className="button-805">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-806">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/survey" id="アンケ〜ト-p" className="button-807">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/question" id="ご質問-p" className="button-808">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-809">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-3146">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-3147">
                <Link href="/committee" id="委員会企画-p" className="button-810">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-811">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-812">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-3185">
          <div className="container-246">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-3157">
              <div className="el-3149">
                <div className="box-1049">
                  <p className="text-786">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-787">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-788">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-3150" />
              <div id="div-34" data-toggle-show="flex" className="el-3156">
                <div id="menu1-2" data-inview className="container-242">
                  <Link href="/about" className="el-3151">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-3152">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-3153">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-3154">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-3155" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-3166">
              <div className="el-3158">
                <div className="box-1050">
                  <p className="text-789">
                    {"きかく"}
                  </p>
                  <p className="text-790">
                    {"企画"}
                  </p>
                </div>
                <p className="text-791">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-3159" />
              <div id="div-36" data-toggle-show="flex" className="el-3165">
                <div id="menu1-4" data-inview className="container-243">
                  <Link href="/search" className="el-3160">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-3161">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-3162">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-3163">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-3164" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-3176">
              <div className="el-3167">
                <p className="text-792">
                  {"ご"}
                </p>
                <div className="box-1051">
                  <p className="text-793">
                    {"あんない"}
                  </p>
                  <p className="text-794">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-3168" />
              <div id="div-39" data-toggle-show="flex" className="el-3175">
                <div id="menu1-6" data-inview className="container-244">
                  <Link href="/attention" className="el-3169">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-3170">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-3171">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-3172">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-3173">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-3174" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-3184">
              <div className="el-3177">
                <div className="box-1052">
                  <p className="text-795">
                    {"こうしきとくしゅ〜"}
                  </p>
                  <p className="text-796">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-3178" />
              <div id="div-38" data-toggle-show="flex" className="el-3183">
                <div id="menu1-8" data-inview className="container-245">
                  <Link href="/committee" className="el-3179">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-3180">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo-old" className="el-3181">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-3182" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-3186">
        <div className="box-1053">
          <p className="text-797">
            {"ことば"}
          </p>
          <h1 className="text-798">
            {"言葉"}
          </h1>
        </div>
        <h2 className="text-799">
          {"からさがす"}
        </h2>
      </section>
      <section className="box-1054">
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
      <section className="box-1062">
        <div className="el-3187">
          <div className="box-1055">
            <p className="text-800">
              {"まつがさきさい"}
            </p>
            <p className="text-801">
              {"松ヶ崎祭"}
            </p>
          </div>
          <p className="text-802">
            {"には　"}
          </p>
          <div className="box-1056">
            <p className="text-803">
              {"きかく"}
            </p>
            <p className="text-804">
              {"企画"}
            </p>
          </div>
          <p className="text-805">
            {"がいっぱい。"}
          </p>
        </div>
        <div className="el-3188">
          <div className="box-1057">
            <p className="text-806">
              {"き"}
            </p>
            <p className="text-807">
              {"気"}
            </p>
          </div>
          <p className="text-808">
            {"になる"}
          </p>
          <div className="box-1058">
            <p className="text-809">
              {"ことば"}
            </p>
            <p className="text-810">
              {"言葉"}
            </p>
          </div>
          <p className="text-811">
            {"から　"}
          </p>
          <div className="box-1059">
            <p className="text-812">
              {"きみ"}
            </p>
            <p className="text-813">
              {"君"}
            </p>
          </div>
          <p className="text-814">
            {"にぴったりの"}
          </p>
          <div className="box-1060">
            <p className="text-815">
              {"きかく"}
            </p>
            <p className="text-816">
              {"企画"}
            </p>
          </div>
          <p className="text-817">
            {"を"}
          </p>
          <div className="box-1061">
            <p className="text-818">
              {"み"}
            </p>
            <p className="text-819">
              {"見"}
            </p>
          </div>
          <p className="text-820">
            {"つけてね。"}
          </p>
        </div>
      </section>
      <section className="box-1067">
        <div className="box-1066">
          <div className="box-1063" />
          <div className="box-1065">
            <div className="box-1064">
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
      <section className="el-3243">
        <div className="box-1136">
          <div className="box-1120">
            <div className="box-1072">
              <div className="box-1071">
                <div className="box-1068" />
                <div className="box-1070">
                  <div className="box-1069">
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
            <div className="box-1075">
              <div className="el-3191">
                <div id="div-30" data-toggle-show="flex" className="el-3189">
                  <Image
                    src="/assets/image-4.png"
                    alt=""
                    width={300}
                    height={107}
                    className="png-119"
                  />
                  <div className="box-1073">
                    <p className="text-821">
                      {"ひらく"}
                    </p>
                  </div>
                </div>
                <div id="div-31" data-toggle-show="flex" data-inview className="el-3190">
                  <Image
                    src="/assets/image-124-1.png"
                    alt=""
                    width={274}
                    height={98}
                    className="png-120"
                    preload
                    fetchPriority="high"
                  />
                  <div className="box-1074">
                    <p className="text-822">
                      {"とじる"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="div-32" data-toggle-show="flex" data-inview className="el-3238">
              <div className="box-1076">
                <Image
                  src="/assets/_-_2.png"
                  alt="いつ"
                  width={129}
                  height={129}
                  className="el-3192"
                />
                <p className="text-823">
                  {"いつ"}
                </p>
              </div>
              <div className="box-1083">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-2\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"show\",\"target\":\"div-2\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-2\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":3,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/13\"}]},{\"kind\":\"hide\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div\"}]}]}]"} className="el-3195">
                  <label id="agree-2" className="checkbox-15">
                    <input type="checkbox" name="agree-2" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-2" data-toggle-show="flex" className="el-3193">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-121"
                    />
                    <div className="box-1077">
                      <p className="text-824">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                  <div id="div" data-toggle-show="flex" data-inview className="el-3194">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-122"
                    />
                    <div className="box-1078">
                      <p className="text-825">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-3\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"show\",\"target\":\"div-3\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-3\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":4,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"hide\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-4\"}]}]}]"} className="el-3198">
                  <label id="agree-3" className="checkbox-16">
                    <input type="checkbox" name="agree-3" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-3" data-toggle-show="flex" className="el-3196">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-123"
                    />
                    <div className="box-1079">
                      <p className="text-826">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-4" data-toggle-show="flex" data-inview className="el-3197">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-124"
                    />
                    <div className="box-1080">
                      <p className="text-827">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-4\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":3},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"show\",\"target\":\"div-5\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-4\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":5,\"join\":\"or\",\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/15\"}]},{\"kind\":\"hide\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-6\"}]}]}]"} className="el-3201">
                  <label id="agree-4" className="checkbox-17">
                    <input type="checkbox" name="agree-4" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-5" data-toggle-show="flex" className="el-3199">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-125"
                    />
                    <div className="box-1081">
                      <p className="text-828">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-6" data-toggle-show="flex" data-inview className="el-3200">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-126"
                    />
                    <div className="box-1082">
                      <p className="text-829">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1084">
                <Image
                  src="/assets/image-5.png"
                  alt="どこで"
                  width={85}
                  height={108}
                  className="png-127"
                />
                <p className="text-830">
                  {"どこで"}
                </p>
              </div>
              <div className="box-1095">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-5\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":6},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"show\",\"target\":\"div-7\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-5\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":6,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\"}]},{\"kind\":\"hide\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-8\"}]}]}]"} className="el-3204">
                  <label id="agree-5" className="checkbox-18">
                    <input type="checkbox" name="agree-5" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-7" data-toggle-show="flex" className="el-3202">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-128"
                    />
                    <div className="box-1086">
                      <div className="box-1085">
                        <p className="text-831">
                          {"おくがい"}
                        </p>
                        <p className="text-832">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-8" data-toggle-show="flex" className="el-3203">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-129"
                    />
                    <div className="box-1088">
                      <div className="box-1087">
                        <p className="text-833">
                          {"おくがい"}
                        </p>
                        <p className="text-834">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-6\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":7},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"show\",\"target\":\"div-9\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-6\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":7,\"join\":\"or\",\"conds\":[{\"field\":\"place\",\"op\":\"empty\",\"value\":\"\",\"not\":true}]},{\"kind\":\"hide\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-10\"}]}]}]"} className="el-3207">
                  <label id="agree-6" className="checkbox-19">
                    <input type="checkbox" name="agree-6" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-9" data-toggle-show="flex" className="el-3205">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-130"
                    />
                    <div className="box-1090">
                      <div className="box-1089">
                        <p className="text-835">
                          {"おくない"}
                        </p>
                        <p className="text-836">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-10" data-toggle-show="flex" className="el-3206">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-131"
                    />
                    <div className="box-1092">
                      <div className="box-1091">
                        <p className="text-837">
                          {"おくない"}
                        </p>
                        <p className="text-838">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-7\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":8},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"show\",\"target\":\"div-11\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-7\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":8,\"join\":\"or\",\"conds\":[{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"パフォーマンス\",\"not\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"ストリートパフォーマンス\",\"and\":false},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"屋内パフォーマンス\",\"and\":false}]},{\"kind\":\"hide\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-12\"}]}]}]"} className="el-3210">
                  <label id="agree-7" className="checkbox-20">
                    <input type="checkbox" name="agree-7" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-11" data-toggle-show="flex" className="el-3208">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-132"
                    />
                    <div className="box-1093">
                      <p className="text-839">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-12" data-toggle-show="flex" className="el-3209">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-133"
                    />
                    <div className="box-1094">
                      <p className="text-840">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1096">
                <Image
                  src="/assets/_-_2-1.png"
                  alt="どんなことがしたい？"
                  width={82}
                  height={104}
                  className="el-3211"
                />
                <p className="text-841">
                  {"どんなことがしたい？"}
                </p>
              </div>
              <div className="box-1113">
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-8\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":9},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"show\",\"target\":\"div-13\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-8\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":9,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"たべる\"}]},{\"kind\":\"hide\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-14\"}]}]}]"} className="el-3214">
                  <label id="agree-8" className="checkbox-21">
                    <input type="checkbox" name="agree-8" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-13" data-toggle-show="flex" className="el-3212">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-134"
                    />
                    <div className="box-1097">
                      <p className="text-842">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-14" data-toggle-show="flex" data-inview className="el-3213">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-135"
                    />
                    <div className="box-1098">
                      <p className="text-843">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-9\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":10},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"show\",\"target\":\"div-15\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-9\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":10,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"あそぶ\"}]},{\"kind\":\"hide\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-16\"}]}]}]"} className="el-3217">
                  <label id="agree-9" className="checkbox-22">
                    <input type="checkbox" name="agree-9" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-15" data-toggle-show="flex" className="el-3215">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-136"
                    />
                    <div className="box-1099">
                      <p className="text-844">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-16" data-toggle-show="flex" data-inview className="el-3216">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-137"
                    />
                    <div className="box-1100">
                      <p className="text-845">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-10\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":11},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"show\",\"target\":\"div-17\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-10\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":11,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"のむ\"}]},{\"kind\":\"hide\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-18\"}]}]}]"} className="el-3220">
                  <label id="agree-10" className="checkbox-23">
                    <input type="checkbox" name="agree-10" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-17" data-toggle-show="flex" className="el-3218">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-138"
                    />
                    <div className="box-1101">
                      <p className="text-846">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-18" data-toggle-show="flex" data-inview className="el-3219">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-139"
                    />
                    <div className="box-1102">
                      <p className="text-847">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-11\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":12},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"show\",\"target\":\"div-19\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-11\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":12,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"みる\"}]},{\"kind\":\"hide\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-20\"}]}]}]"} className="el-3223">
                  <label id="agree-11" className="checkbox-24">
                    <input type="checkbox" name="agree-11" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-19" data-toggle-show="flex" className="el-3221">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-140"
                    />
                    <div className="box-1103">
                      <p className="text-848">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-20" data-toggle-show="flex" data-inview className="el-3222">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-141"
                    />
                    <div className="box-1104">
                      <p className="text-849">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-12\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":13},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"show\",\"target\":\"div-21\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-12\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":13,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"かう\"}]},{\"kind\":\"hide\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-22\"}]}]}]"} className="el-3226">
                  <label id="agree-12" className="checkbox-25">
                    <input type="checkbox" name="agree-12" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-21" data-toggle-show="flex" className="el-3224">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-142"
                    />
                    <div className="box-1105">
                      <p className="text-850">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                  <div id="div-22" data-toggle-show="flex" data-inview className="el-3225">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-143"
                    />
                    <div className="box-1106">
                      <p className="text-851">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-13\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":14},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"show\",\"target\":\"div-23\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-13\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":14,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"さわる\"}]},{\"kind\":\"hide\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-24\"}]}]}]"} className="el-3229">
                  <label id="agree-13" className="checkbox-26">
                    <input type="checkbox" name="agree-13" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-23" data-toggle-show="flex" className="el-3227">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-144"
                    />
                    <div className="box-1107">
                      <p className="text-852">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-24" data-toggle-show="flex" data-inview className="el-3228">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-145"
                    />
                    <div className="box-1108">
                      <p className="text-853">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-14\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":15},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"show\",\"target\":\"div-25\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-14\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":15,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"つくる\"}]},{\"kind\":\"hide\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-26\"}]}]}]"} className="el-3232">
                  <label id="agree-14" className="checkbox-27">
                    <input type="checkbox" name="agree-14" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-25" data-toggle-show="flex" className="el-3230">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-146"
                    />
                    <div className="box-1109">
                      <p className="text-854">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-26" data-toggle-show="flex" data-inview className="el-3231">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-147"
                    />
                    <div className="box-1110">
                      <p className="text-855">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"if\",\"cond\":{\"subject\":\"checked\",\"target\":\"agree-15\"},\"then\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"false\"},{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\",\"no\":16},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-27\"}],\"else\":[{\"kind\":\"set-value\",\"target\":\"agree-15\",\"value\":\"true\"},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":16,\"join\":\"or\",\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"きく\"}]},{\"kind\":\"hide\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-28\"}]}]}]"} className="el-3235">
                  <label id="agree-15" className="checkbox-28">
                    <input type="checkbox" name="agree-15" value="true" />
                    {"同意する"}
                  </label>
                  <div id="div-27" data-toggle-show="flex" className="el-3233">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-148"
                    />
                    <div className="box-1111">
                      <p className="text-856">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                  <div id="div-28" data-toggle-show="flex" data-inview className="el-3234">
                    <Image
                      src="/assets/image-124-1.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-149"
                    />
                    <div className="box-1112">
                      <p className="text-857">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"list-display\",\"mode\":\"clear\",\"array\":\"_1\"}]}]"} className="el-3237">
                <div id="div-29" data-toggle-show="flex" className="box-1115">
                  <Image
                    src="/assets/image-4.png"
                    alt="やり直しボタン"
                    width={300}
                    height={107}
                    className="png-150"
                  />
                  <div className="box-1114">
                    <Image
                      src="/assets/_-_2-2.png"
                      alt="やり直し"
                      width={50}
                      height={58}
                      className="el-3236"
                    />
                    <p className="text-858">
                      {"やりなおす"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-1119">
                <Link href="/m-1" className="box-1118">
                  <div className="box-1117">
                    <div className="box-1116">
                      <p className="text-859">
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
          <div className="box-1135">
            <div className="box-1121">
              <p className="text-860">
                {interpolate("{_3}件の出展が見つかりました", vars)}
              </p>
            </div>
            <div className="box-1134">
              <div data-array="_1" className="el-3242">
                {toItems(lookupVar(vars, "_1")).map((item, i) => {
                  const iv0 = { ...vars, ...item };
                  return (
                    <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": (Object.prototype.hasOwnProperty.call(item, "name") ? item["name"] : undefined), "exhibitorName": (Object.prototype.hasOwnProperty.call(item, "exhibitorName") ? item["exhibitorName"] : undefined), "tags": (Object.prototype.hasOwnProperty.call(item, "tags") ? item["tags"] : undefined), "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": (Object.prototype.hasOwnProperty.call(item, "searchWords") ? item["searchWords"] : undefined), "place": (Object.prototype.hasOwnProperty.call(item, "place") ? item["place"] : undefined), "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "businessHours": (Object.prototype.hasOwnProperty.call(item, "businessHours") ? item["businessHours"] : undefined), "venue": (Object.prototype.hasOwnProperty.call(item, "venue") ? item["venue"] : undefined), "categories.大分類": lookupVar(item, "categories.大分類"), "publicId": (Object.prototype.hasOwnProperty.call(item, "publicId") ? item["publicId"] : undefined) })}>
                      <SmartLink href={safeNavigationUrl(interpolateUrl("/booth/{publicId}", iv0))} className="el-3241">
                        <div className="box-1122">
                          <p className="text-861">
                            {interpolate("{name}", iv0)}
                          </p>
                          <div data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5"},"op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},"then":[{"kind":"set-list-item","list":"_5","key":"","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}],"else":[{"kind":"set-list-item","list":"","key":"","value":""},{"kind":"remove-list-item","list":"","mode":"value","value":""},{"kind":"remove-list-item","list":"_5","mode":"value","value":""},{"kind":"transform","source":"_5","into":"_5","transform":{"kind":"field","key":""}}]}]},{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null},"left":{"inputRef":"_5"}},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]}])} className="el-3239">
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
                          className="crisp-svg el-3240"
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
                        <p className="text-862">
                          {interpolate("{exhibitorName}", iv0)}
                        </p>
                        <div className="box-1133">
                          <div className="box-1124">
                            <div className="box-1123">
                              <Image
                                src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                                alt=""
                                width={1024}
                                height={1024}
                                className="image-21"
                              />
                              <p className="text-863">
                                {"No Image"}
                              </p>
                            </div>
                          </div>
                          <div className="box-1132">
                            <div className="box-1125">
                              <Image
                                src="/assets/Vector-4.svg"
                                alt=""
                                width={15}
                                height={15}
                                className="vector-4-svg-3"
                              />
                              <p className="text-864">
                                {interpolate("{customAnswers.皆さまへ}", iv0)}
                              </p>
                            </div>
                            <div className="box-1126">
                              <Image
                                src="/assets/Group-244.svg"
                                alt=""
                                width={13}
                                height={20}
                                className="group-244-svg-3"
                              />
                              <p className="text-865">
                                {interpolate("{location}", iv0)}
                              </p>
                            </div>
                            <div className="box-1128">
                              <div className="box-1127">
                                <p className="text-866">
                                  {interpolate("{categories.投票カテゴリ.0}", iv0)}
                                </p>
                              </div>
                            </div>
                            <div className="box-1131">
                              <div className="box-1129">
                                <p className="text-867">
                                  {interpolate("{categories.大分類.0}", iv0)}
                                </p>
                              </div>
                              <div className="box-1130">
                                <p className="text-868">
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
      <section className="box-1137">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png-7"
        />
      </section>
      <section data-inview className="footer-38">
        <span
          className="crisp-svg pasted-artwork-svg-185"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-3244">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-647"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-77">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-648"
          />
        </a>
      </section>
      <section data-inview className="el-3246">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-3245">
          <Image
            src="/assets/pasted-artwork-134.svg"
            alt=""
            width={58}
            height={58}
            className="svg-649"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-78">
          <Image
            src="/assets/pasted-artwork-135.svg"
            alt=""
            width={54}
            height={49}
            className="svg-650"
          />
        </a>
        <span
          className="crisp-svg svg-651"
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
