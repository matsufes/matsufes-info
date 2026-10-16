import type { Metadata } from "next";
import { cache } from "react";
import Link from "next/link";
import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { interpolate, interpolateUrl, lookupVar } from "@/lib/vars";

// 60秒ごとにJSONを取得し直してページを作り直す（その間は作ったページを配信する）
export const revalidate = 60;

type Item = Record<string, unknown>;
type Vars = Record<string, unknown>;

/** 同じリクエスト内（メタデータとページ本体）では、同じURLを1回だけ取得する */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchJson = cache(async (url: string, init?: string): Promise<any> => {
  // 取得に失敗したら作り直しをやめ、前に作ったページを配信し続ける
  const res = await fetch(url, { ...(init ? JSON.parse(init) : {}), next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`${url} の取得に失敗しました（${res.status}）`);
  return await res.json();
});

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
      <span hidden data-page-body="page_mvapunbw9u" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"store-load\",\"key\":\"mf_bookmarks\",\"into\":\"_2\",\"shared\":true}]},{\"trigger\":\"load\",\"steps\":[{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"sort-array\",\"array\":\"_1\",\"field\":\"publicId\",\"dir\":\"asc\"}]}]"} />
      <Image data-inview
        src="/assets/image.png"
        alt=""
        width={477}
        height={374}
        className="el-1500"
        priority
      />
      <Image data-inview
        src="/assets/image-2.png"
        alt=""
        width={476}
        height={374}
        className="el-1501"
        priority
      />
      <nav className="header-7">
        <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
          className="crisp-svg el-1502"
        >
          <svg aria-hidden="true" width={213} height={213} viewBox="0 0 213 213" />
          <Image
            src="/assets/pasted-artwork-224.svg"
            alt="トップへ戻る"
            width={426}
            height={426}
          />
        </span>
        <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-1503">
          <span
            className="crisp-svg pasted-artwork-svg-78"
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
        <div id="memu-p" data-toggle-show="flex" data-inview className="el-1514">
          <div className="box-519">
            <div className="el-1505">
              <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-1504">
                <span
                  className="crisp-svg svg-324"
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
            <div className="container-25">
              <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-1506">
                {"松ヶ崎祭について"}
              </p>
              <div id="mf-phone" data-toggle-show="flex" data-inview className="el-1507">
                <Link href="/about" id="松ヶ崎祭とは-p" className="button-460">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" id="mf56-p" className="button-461">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" id="協賛-p" className="button-462">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" id="お知らせ-p" className="button-463">
                  {"お知らせ"}
                </Link>
              </div>
              <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-1508">
                {"企画さがし"}
              </p>
              <div id="kikaku-phone" data-toggle-show="flex" data-inview className="el-1509">
                <Link href="/search" id="言葉-p" className="button-464">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" id="日程表-p" className="button-465">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" id="地図-p" className="button-466">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" id="しおり-p" className="button-467">
                  {"きみのしおり"}
                </Link>
              </div>
              <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-1510">
                {"ご案内"}
              </p>
              <div id="goannai-phone" data-toggle-show="flex" data-inview className="el-1511">
                <Link href="/attention" id="ご来場の-p" className="button-468">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" id="行き方-p" className="button-469">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" id="アンケ〜ト-p" className="button-470">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" id="ご質問-p" className="button-471">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" id="相互リンク-p" className="button-472">
                  {"相互リンク"}
                </Link>
              </div>
              <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-1512">
                {"公式特集"}
              </p>
              <div id="koushiki-phone" data-toggle-show="flex" data-inview className="el-1513">
                <Link href="/committee" id="委員会企画-p" className="button-473">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" id="m-1-p" className="button-474">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" id="まつぴよ-p" className="button-475">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="el-1551">
          <div className="container-30">
            <div data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-33\"},{\"kind\":\"show\",\"target\":\"div-34\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-33\"},{\"kind\":\"hide\",\"target\":\"div-34\"}]}]"} className="el-1523">
              <div className="el-1515">
                <div className="box-520">
                  <p className="text-248">
                    {"まつがさきさい"}
                  </p>
                  <p className="text-249">
                    {"松ヶ崎祭"}
                  </p>
                </div>
                <p className="text-250">
                  {"について"}
                </p>
              </div>
              <div id="div-33" data-toggle-show="flex" data-inview className="el-1516" />
              <div id="div-34" data-toggle-show="flex" className="el-1522">
                <div id="menu1-2" data-inview className="container-26">
                  <Link href="/about" className="el-1517">
                    {"松ヶ崎祭とは"}
                  </Link>
                  <Link href="/theme" className="el-1518">
                    {"mf56メインテ〜マ"}
                  </Link>
                  <Link href="/sponsor" className="el-1519">
                    {"ご協賛いただいた皆さま"}
                  </Link>
                  <Link href="/notice" className="el-1520">
                    {"お知らせ"}
                  </Link>
                  <div id="menu1-3" className="el-1521" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-35\"},{\"kind\":\"hide\",\"target\":\"div-36\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-35\"},{\"kind\":\"show\",\"target\":\"div-36\"}]}]"} className="el-1532">
              <div className="el-1524">
                <div className="box-521">
                  <p className="text-251">
                    {"さがし"}
                  </p>
                  <p className="text-252">
                    {"企画"}
                  </p>
                </div>
                <p className="text-253">
                  {"さがし"}
                </p>
              </div>
              <div id="div-35" data-toggle-show="flex" data-inview className="el-1525" />
              <div id="div-36" data-toggle-show="flex" className="el-1531">
                <div id="menu1-4" data-inview className="container-27">
                  <Link href="/search" className="el-1526">
                    {"言葉からさがす"}
                  </Link>
                  <Link href="/schedule" className="el-1527">
                    {"日程表からさがす"}
                  </Link>
                  <a href="/navigation" className="el-1528">
                    {"地図からさがす"}
                  </a>
                  <Link href="/mypage" className="el-1529">
                    {"きみのしおり"}
                  </Link>
                  <div id="menu1-5" className="el-1530" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-37\"},{\"kind\":\"hide\",\"target\":\"div-39\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-37\"},{\"kind\":\"show\",\"target\":\"div-39\"}]}]"} className="el-1542">
              <div className="el-1533">
                <p className="text-254">
                  {"ご"}
                </p>
                <div className="box-522">
                  <p className="text-255">
                    {"あんない"}
                  </p>
                  <p className="text-256">
                    {"案内"}
                  </p>
                </div>
              </div>
              <div id="div-37" data-toggle-show="flex" data-inview className="el-1534" />
              <div id="div-39" data-toggle-show="flex" className="el-1541">
                <div id="menu1-6" data-inview className="container-28">
                  <Link href="/attention" className="el-1535">
                    {"ご来場の皆さまへ"}
                  </Link>
                  <Link href="/access" className="el-1536">
                    {"行き方・会場地図"}
                  </Link>
                  <Link href="/survey" className="el-1537">
                    {"来場者アンケ〜ト"}
                  </Link>
                  <Link href="/question" className="el-1538">
                    {"よくあるご質問"}
                  </Link>
                  <Link href="/links" className="el-1539">
                    {"相互リンク"}
                  </Link>
                  <div id="menu1-7" className="el-1540" />
                </div>
              </div>
            </div>
            <div data-scripts={"[{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-40\"},{\"kind\":\"hide\",\"target\":\"div-38\"}]},{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"div-40\"},{\"kind\":\"show\",\"target\":\"div-38\"}]}]"} className="el-1550">
              <div className="el-1543">
                <div className="box-523">
                  <p className="text-257">
                    {"こうしきとくしゅう"}
                  </p>
                  <p className="text-258">
                    {"公式特集"}
                  </p>
                </div>
              </div>
              <div id="div-40" data-toggle-show="flex" data-inview className="el-1544" />
              <div id="div-38" data-toggle-show="flex" className="el-1549">
                <div id="menu1-8" data-inview className="container-29">
                  <Link href="/committee" className="el-1545">
                    {"委員会企画"}
                  </Link>
                  <Link href="/m-1" className="el-1546">
                    {"m-1グランプリ"}
                  </Link>
                  <Link href="/matsupiyo" className="el-1547">
                    {"公式メンバ〜「まつぴよ」"}
                  </Link>
                  <div id="menu1-9" className="el-1548" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="el-1552">
        <div className="box-524">
          <p className="text-259">
            {"ことば"}
          </p>
          <h1 className="text-260">
            {"言葉"}
          </h1>
        </div>
        <h2 className="text-261">
          {"からさがす"}
        </h2>
      </section>
      <section className="box-525">
        <Image
          src="/assets/main-thema-soshoku.svg"
          alt=""
          width={1240}
          height={34}
          className="main-thema-soshoku-svg-5"
          priority
        />
      </section>
      <section className="box-533">
        <div className="el-1553">
          <div className="box-526">
            <p className="text-262">
              {"まつがさきさい"}
            </p>
            <p className="text-263">
              {"松ヶ崎祭"}
            </p>
          </div>
          <p className="text-264">
            {"には　"}
          </p>
          <div className="box-527">
            <p className="text-265">
              {"きかく"}
            </p>
            <p className="text-266">
              {"企画"}
            </p>
          </div>
          <p className="text-267">
            {"がいっぱい。"}
          </p>
        </div>
        <div className="el-1554">
          <div className="box-528">
            <p className="text-268">
              {"き"}
            </p>
            <p className="text-269">
              {"気"}
            </p>
          </div>
          <p className="text-270">
            {"になる"}
          </p>
          <div className="box-529">
            <p className="text-271">
              {"ことば"}
            </p>
            <p className="text-272">
              {"言葉"}
            </p>
          </div>
          <p className="text-273">
            {"から　"}
          </p>
          <div className="box-530">
            <p className="text-274">
              {"きみ"}
            </p>
            <p className="text-275">
              {"君"}
            </p>
          </div>
          <p className="text-276">
            {"にぴったりの"}
          </p>
          <div className="box-531">
            <p className="text-277">
              {"きかく"}
            </p>
            <p className="text-278">
              {"企画"}
            </p>
          </div>
          <p className="text-279">
            {"を"}
          </p>
          <div className="box-532">
            <p className="text-280">
              {"み"}
            </p>
            <p className="text-281">
              {"見"}
            </p>
          </div>
          <p className="text-282">
            {"つけてね。"}
          </p>
        </div>
      </section>
      <section className="box-538">
        <div className="box-537">
          <div className="box-534" />
          <div className="box-536">
            <div className="box-535">
              <Image
                src="/assets/image-3.png"
                alt="検索"
                width={102}
                height={111}
                className="png-79"
              />
            </div>
            <input id="field" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"filter-array","array":"_1","no":1,"conds":[{"field":"name","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"exhibitorName","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"customAnswers.中分類","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"searchWords","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })}]},{"kind":"count","array":"_1","into":"_3"}]}])} type="text" className="input-7" name="field" placeholder="ここに　言葉を　入力してみてね" />
          </div>
        </div>
      </section>
      <section className="el-1610">
        <div className="box-605">
          <div className="box-590">
            <div className="box-543">
              <div className="box-542">
                <div className="box-539" />
                <div className="box-541">
                  <div className="box-540">
                    <Image
                      src="/assets/image-3.png"
                      alt=""
                      width={102}
                      height={111}
                      className="png-80"
                    />
                  </div>
                  <input id="field-2" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"filter-array","array":"_1","no":15,"conds":[{"field":"name","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })},{"field":"exhibitorName","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })},{"field":"customAnswers.中分類","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })},{"field":"searchWords","op":"contains","value":interpolate("{field-2}", { ...vars, ...{"field-2":"{field-2}","\u0000keepEscapes":true} })}]},{"kind":"count","array":"_1","into":"_3"}]}])} type="text" className="input-8" name="field-2" placeholder="ここに　言葉を　入力してみてね" />
                </div>
              </div>
            </div>
            <div className="box-546">
              <div className="el-1557">
                <div id="div-30" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-30\"},{\"kind\":\"show\",\"target\":\"div-32\"},{\"kind\":\"show\",\"target\":\"div-31\"}]}]"} data-toggle-show="flex" className="el-1555">
                  <Image
                    src="/assets/image-4.png"
                    alt=""
                    width={300}
                    height={107}
                    className="png-81"
                  />
                  <div className="box-544">
                    <p className="text-283">
                      {"ひらく"}
                    </p>
                  </div>
                </div>
                <div id="div-31" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"hide\",\"target\":\"div-31\"},{\"kind\":\"show\",\"target\":\"div-30\"},{\"kind\":\"hide\",\"target\":\"div-32\"}]}]"} data-toggle-show="flex" data-inview className="el-1556">
                  <Image
                    src="/assets/image-124-1-.png"
                    alt=""
                    width={274}
                    height={98}
                    className="png-82"
                    priority
                  />
                  <div className="box-545">
                    <p className="text-284">
                      {"とじる"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="div-32" data-toggle-show="flex" data-inview className="el-1605">
              <div className="box-547">
                <Image
                  src="/assets/_-_2.png"
                  alt="いつ"
                  width={129}
                  height={129}
                  className="el-1558"
                />
                <p className="text-285">
                  {"いつ"}
                </p>
              </div>
              <div className="box-554">
                <div className="el-1561">
                  <div id="div-2" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":16,\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/13\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div\"}]}]"} data-toggle-show="flex" className="el-1559">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-83"
                    />
                    <div className="box-548">
                      <p className="text-286">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                  <div id="div" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":16},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"show\",\"target\":\"div-2\"}]}]"} data-toggle-show="flex" data-inview className="el-1560">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-84"
                    />
                    <div className="box-549">
                      <p className="text-287">
                        {"11.13(きん)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1564">
                  <div id="div-3" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":2,\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-4\"}]}]"} data-toggle-show="flex" className="el-1562">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-85"
                    />
                    <div className="box-550">
                      <p className="text-288">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-4" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":2},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"show\",\"target\":\"div-3\"}]}]"} data-toggle-show="flex" data-inview className="el-1563">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-86"
                    />
                    <div className="box-551">
                      <p className="text-289">
                        {"11.14(ど)"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1567">
                  <div id="div-5" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":3,\"conds\":[{\"field\":\"businessHours\",\"op\":\"contains\",\"value\":\"11/14\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-6\"}]}]"} data-toggle-show="flex" className="el-1565">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-87"
                    />
                    <div className="box-552">
                      <p className="text-290">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                  <div id="div-6" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":3},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"show\",\"target\":\"div-5\"}]}]"} data-toggle-show="flex" data-inview className="el-1566">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-88"
                    />
                    <div className="box-553">
                      <p className="text-291">
                        {"11.15(にち)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-555">
                <Image
                  src="/assets/image-5.png"
                  alt="どこで"
                  width={85}
                  height={108}
                  className="png-89"
                />
                <p className="text-292">
                  {"どこで"}
                </p>
              </div>
              <div className="box-566">
                <div className="el-1570">
                  <div id="div-7" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":4,\"conds\":[{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"1\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"2\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"3\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"4\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"5\"},{\"field\":\"venue\",\"op\":\"eq\",\"value\":\"6\"},{\"field\":\"place\",\"op\":\"eq\",\"value\":\"\"},{\"field\":\"place\",\"op\":\"contains\",\"value\":\"構内全体\"},{\"field\":\"place\",\"op\":\"ends-with\",\"value\":\"前\"},{\"field\":\"place\",\"op\":\"ends-with\",\"value\":\"横\"},{\"field\":\"place\",\"op\":\"contains\",\"value\":\"武道場\"},{\"field\":\"place\",\"op\":\"contains\",\"value\":\"和楽庵\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-8\"}]}]"} data-toggle-show="flex" className="el-1568">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-90"
                    />
                    <div className="box-557">
                      <div className="box-556">
                        <p className="text-293">
                          {"おくがい"}
                        </p>
                        <p className="text-294">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-8" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":4},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"show\",\"target\":\"div-7\"}]}]"} data-toggle-show="flex" className="el-1569">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-91"
                    />
                    <div className="box-559">
                      <div className="box-558">
                        <p className="text-295">
                          {"おくがい"}
                        </p>
                        <p className="text-296">
                          {"屋外"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-1573">
                  <div id="div-9" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":5,\"conds\":[{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"1\"},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"2\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"3\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"4\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"5\",\"and\":true},{\"field\":\"venue\",\"op\":\"neq\",\"value\":\"6\",\"and\":true},{\"field\":\"place\",\"op\":\"not-empty\",\"value\":\"\",\"and\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"not-contains\",\"value\":\"パフォーマンス\",\"and\":true},{\"field\":\"categories.出展カテゴリ\",\"op\":\"not-contains\",\"value\":\"ストリートパフォーマンス\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"構内全体\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"前\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"横\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"武道場\",\"and\":true},{\"field\":\"place\",\"op\":\"not-contains\",\"value\":\"和楽庵\",\"and\":true}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-10\"}]}]"} data-toggle-show="flex" className="el-1571">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-92"
                    />
                    <div className="box-561">
                      <div className="box-560">
                        <p className="text-297">
                          {"おくない"}
                        </p>
                        <p className="text-298">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="div-10" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":5},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"show\",\"target\":\"div-9\"}]}]"} data-toggle-show="flex" className="el-1572">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-93"
                    />
                    <div className="box-563">
                      <div className="box-562">
                        <p className="text-299">
                          {"おくない"}
                        </p>
                        <p className="text-300">
                          {"屋内"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="el-1576">
                  <div id="div-11" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":6,\"conds\":[{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"パフォーマンス\"},{\"field\":\"categories.出展カテゴリ\",\"op\":\"contains\",\"value\":\"ストリートパフォーマンス\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-12\"}]}]"} data-toggle-show="flex" className="el-1574">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-94"
                    />
                    <div className="box-564">
                      <p className="text-301">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-12" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":6},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"show\",\"target\":\"div-11\"}]}]"} data-toggle-show="flex" className="el-1575">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-95"
                    />
                    <div className="box-565">
                      <p className="text-302">
                        {"ステージ"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-567">
                <Image
                  src="/assets/_-_2-1-.png"
                  alt="どんなことがしたい？"
                  width={82}
                  height={104}
                  className="el-1577"
                />
                <p className="text-303">
                  {"どんなことがしたい？"}
                </p>
              </div>
              <div className="box-584">
                <div className="el-1580">
                  <div id="div-13" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":7,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"たべる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-14\"}]}]"} data-toggle-show="flex" className="el-1578">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-96"
                    />
                    <div className="box-568">
                      <p className="text-304">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-14" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":7},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"show\",\"target\":\"div-13\"}]}]"} data-toggle-show="flex" className="el-1579">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-97"
                    />
                    <div className="box-569">
                      <p className="text-305">
                        {"たべる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1583">
                  <div id="div-15" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":8,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"あそぶ\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-16\"}]}]"} data-toggle-show="flex" className="el-1581">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-98"
                    />
                    <div className="box-570">
                      <p className="text-306">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-16" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":8},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"show\",\"target\":\"div-15\"}]}]"} data-toggle-show="flex" className="el-1582">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-99"
                    />
                    <div className="box-571">
                      <p className="text-307">
                        {"あそぶ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1586">
                  <div id="div-17" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":9,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"のむ\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-18\"}]}]"} data-toggle-show="flex" className="el-1584">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-100"
                    />
                    <div className="box-572">
                      <p className="text-308">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                  <div id="div-18" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":9},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"show\",\"target\":\"div-17\"}]}]"} data-toggle-show="flex" data-inview className="el-1585">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-101"
                    />
                    <div className="box-573">
                      <p className="text-309">
                        {"のむ"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1589">
                  <div id="div-19" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":10,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"みる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-20\"}]}]"} data-toggle-show="flex" className="el-1587">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-102"
                    />
                    <div className="box-574">
                      <p className="text-310">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-20" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":10},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"show\",\"target\":\"div-19\"}]}]"} data-toggle-show="flex" data-inview className="el-1588">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-103"
                    />
                    <div className="box-575">
                      <p className="text-311">
                        {"みる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1592">
                  <div id="div-21" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":11,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"かう\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-22\"}]}]"} data-toggle-show="flex" className="el-1590">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-104"
                    />
                    <div className="box-576">
                      <p className="text-312">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                  <div id="div-22" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":11},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"show\",\"target\":\"div-21\"}]}]"} data-toggle-show="flex" data-inview className="el-1591">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-105"
                    />
                    <div className="box-577">
                      <p className="text-313">
                        {"かう"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1595">
                  <div id="div-23" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":12,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"さわる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-24\"}]}]"} data-toggle-show="flex" className="el-1593">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-106"
                    />
                    <div className="box-578">
                      <p className="text-314">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-24" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":12},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"show\",\"target\":\"div-23\"}]}]"} data-toggle-show="flex" data-inview className="el-1594">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-107"
                    />
                    <div className="box-579">
                      <p className="text-315">
                        {"さわる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1598">
                  <div id="div-25" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":13,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"つくる\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-26\"}]}]"} data-toggle-show="flex" className="el-1596">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-108"
                    />
                    <div className="box-580">
                      <p className="text-316">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                  <div id="div-26" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":13},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"show\",\"target\":\"div-25\"}]}]"} data-toggle-show="flex" data-inview className="el-1597">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt=""
                      width={274}
                      height={98}
                      className="png-109"
                    />
                    <div className="box-581">
                      <p className="text-317">
                        {"つくる"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-1601">
                  <div id="div-27" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"filter-array\",\"array\":\"_1\",\"no\":14,\"conds\":[{\"field\":\"categories.大分類\",\"op\":\"contains\",\"value\":\"きく\"}]},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-28\"}]}]"} data-toggle-show="flex" className="el-1599">
                    <Image
                      src="/assets/image-4.png"
                      alt=""
                      width={300}
                      height={107}
                      className="png-110"
                    />
                    <div className="box-582">
                      <p className="text-318">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                  <div id="div-28" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\",\"no\":14},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-27\"}]}]"} data-toggle-show="flex" data-inview className="el-1600">
                    <Image
                      src="/assets/image-124-1-.png"
                      alt="絞り込みボタン"
                      width={274}
                      height={98}
                      className="png-111"
                    />
                    <div className="box-583">
                      <p className="text-319">
                        {"きく"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="el-1604">
                <div id="div-29" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"unfilter-array\",\"array\":\"_1\"},{\"kind\":\"count\",\"array\":\"_1\",\"into\":\"_3\"},{\"kind\":\"hide\",\"target\":\"div\"},{\"kind\":\"hide\",\"target\":\"div-4\"},{\"kind\":\"hide\",\"target\":\"div-6\"},{\"kind\":\"hide\",\"target\":\"div-8\"},{\"kind\":\"hide\",\"target\":\"div-10\"},{\"kind\":\"hide\",\"target\":\"div-12\"},{\"kind\":\"hide\",\"target\":\"div-14\"},{\"kind\":\"hide\",\"target\":\"div-16\"},{\"kind\":\"hide\",\"target\":\"div-18\"},{\"kind\":\"hide\",\"target\":\"div-20\"},{\"kind\":\"hide\",\"target\":\"div-22\"},{\"kind\":\"hide\",\"target\":\"div-24\"},{\"kind\":\"hide\",\"target\":\"div-26\"},{\"kind\":\"hide\",\"target\":\"div-28\"},{\"kind\":\"show\",\"target\":\"div-2\"},{\"kind\":\"show\",\"target\":\"div-3\"},{\"kind\":\"show\",\"target\":\"div-5\"},{\"kind\":\"show\",\"target\":\"div-7\"},{\"kind\":\"show\",\"target\":\"div-9\"},{\"kind\":\"show\",\"target\":\"div-11\"},{\"kind\":\"show\",\"target\":\"div-13\"},{\"kind\":\"show\",\"target\":\"div-15\"},{\"kind\":\"show\",\"target\":\"div-17\"},{\"kind\":\"show\",\"target\":\"div-19\"},{\"kind\":\"show\",\"target\":\"div-21\"},{\"kind\":\"show\",\"target\":\"div-23\"},{\"kind\":\"show\",\"target\":\"div-25\"},{\"kind\":\"show\",\"target\":\"div-27\"},{\"kind\":\"show\",\"target\":\"div-29\"},{\"kind\":\"set-value\",\"target\":\"field\",\"value\":\"\"},{\"kind\":\"set-value\",\"target\":\"field-2\",\"value\":\"\"}]}]"} data-toggle-show="flex" className="el-1603">
                  <Image
                    src="/assets/image-4.png"
                    alt="やり直しボタン"
                    width={300}
                    height={107}
                    className="png-112"
                  />
                  <div className="box-585">
                    <Image
                      src="/assets/_-_2-2-.png"
                      alt="やり直し"
                      width={50}
                      height={58}
                      className="el-1602"
                    />
                    <p className="text-320">
                      {"やりなおす"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-589">
                <Link href="/m-1" className="box-588">
                  <div className="box-587">
                    <div className="box-586">
                      <p className="text-321">
                        {"m-1グランプリに投票する"}
                      </p>
                      <Image
                        src="/assets/image-22.png"
                        alt="m-1グランプリ投票"
                        width={44}
                        height={64}
                        className="image-22-png-3"
                      />
                    </div>
                  </div>
                  <Image
                    src="/assets/Vector-3-.svg"
                    alt="m-1グランプリに投票する"
                    width={343}
                    height={178}
                    className="vector-3-svg-3"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="box-604">
            <div className="box-591">
              <p className="text-322" data-live={interpolate("{_3}件の出展が見つかりました", { ...vars, ...{"_3":"{_3}","\u0000keepEscapes":true} })}>
                {interpolate("{_3}件の出展が見つかりました", vars)}
              </p>
            </div>
            <div className="box-603">
              <div data-array="_1" className="el-1609">
                {toItems(lookupVar(vars, "_1")).map((item, i) => {
                  const iv0 = { ...vars, ...item };
                  return (
                    <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": item["name"], "exhibitorName": item["exhibitorName"], "tags": item["tags"], "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": item["searchWords"], "businessHours": item["businessHours"], "venue": item["venue"], "place": item["place"], "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "categories.大分類": lookupVar(item, "categories.大分類"), "publicId": item["publicId"] })}>
                      <SmartLink href={interpolateUrl("/booth/{publicId}", iv0)} className="el-1608">
                        <div className="el-1606">
                          <p className="text-323">
                            {interpolate("{name}", iv0)}
                          </p>
                          <Image id="fav-on" data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"list-edit","into":"_2","op":"remove","value":interpolate("{publicId}", { ...iv0, ...{"\u0000keepEscapes":true} }),"sep":"."},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...iv0, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-on"},{"kind":"show","target":"fav-off"}]}])} data-toggle-show="block"
                            src="/assets/bkonn.svg"
                            alt="お気に入り登録済"
                            width={35}
                            height={34}
                            className="bkonn-svg-3"
                            priority
                          />
                          <Image id="fav-off" data-scripts={JSON.stringify([{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":interpolate("{_2}", { ...iv0, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"op":"contains","value":interpolate("{publicId}", { ...iv0, ...{"\u0000keepEscapes":true} })},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]},{"trigger":"click","steps":[{"kind":"list-edit","into":"_2","op":"add","value":interpolate("{publicId}", { ...iv0, ...{"\u0000keepEscapes":true} }),"sep":"."},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_2}", { ...iv0, ...{"_2":"{_2}","\u0000keepEscapes":true} }),"shared":true},{"kind":"hide","target":"fav-off"},{"kind":"show","target":"fav-on"}]}])} data-toggle-show="block"
                            src="/assets/bkoff2.svg"
                            alt="お気に入り未登録"
                            width={35}
                            height={34}
                            className="bkoff2-svg-3"
                          />
                        </div>
                        <span
                          className="crisp-svg el-1607"
                        >
                          <svg aria-hidden="true" width={307} height={17} viewBox="0 0 307 17" />
                          <Image
                            src="/assets/1-.svg"
                            alt=""
                            width={614}
                            height={34}
                          />
                        </span>
                        <p className="text-324">
                          {interpolate("{exhibitorName}", iv0)}
                        </p>
                        <div className="box-602">
                          <div className="box-593">
                            <div className="box-592">
                              <Image
                                src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                                alt=""
                                width={1024}
                                height={1024}
                                className="image-28"
                              />
                              <p className="text-325">
                                {"No Image"}
                              </p>
                            </div>
                          </div>
                          <div className="box-601">
                            <div className="box-594">
                              <Image
                                src="/assets/Vector-4-.svg"
                                alt=""
                                width={15}
                                height={15}
                                className="vector-4-svg-3"
                              />
                              <p className="text-326">
                                {interpolate("{customAnswers.皆さまへ}", iv0)}
                              </p>
                            </div>
                            <div className="box-595">
                              <Image
                                src="/assets/Group-244.svg"
                                alt=""
                                width={13}
                                height={20}
                                className="group-244-svg-3"
                              />
                              <p className="text-327">
                                {interpolate("{location}", iv0)}
                              </p>
                            </div>
                            <div className="box-597">
                              <div className="box-596">
                                <p className="text-328">
                                  {interpolate("{categories.投票カテゴリ.0}", iv0)}
                                </p>
                              </div>
                            </div>
                            <div className="box-600">
                              <div className="box-598">
                                <p className="text-329">
                                  {interpolate("{categories.大分類.0}", iv0)}
                                </p>
                              </div>
                              <div className="box-599">
                                <p className="text-330">
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
                          className="frame-png-3"
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
      <section className="box-606">
        <Image
          src="/assets/Group-264.png"
          alt=""
          width={1440}
          height={652}
          className="group-264-png-5"
        />
      </section>
    </>
  );
}
