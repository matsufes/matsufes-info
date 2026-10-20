import type { Metadata } from "next";
import { fetchPublic, readTextLimited } from "@/lib/safe-fetch";
import { cache } from "react";
import Link from "next/link";
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
  title: "出展検索",
  description: "松ヶ崎祭の全出展を検索いただけます。",
  openGraph: {
    title: "出展検索",
    description: "松ヶ崎祭の全出展を検索いただけます。",
    images: ["/assets/ogp.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page() {
  const vars: Vars = {};
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
  vars["相互リンク-p"] = "相互リンク";
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
  vars["相互リンク-p"] = "相互リンク";
  vars["委員会企画-p"] = "委員会企画";
  vars["m-1-p"] = "m-1グランプリ";
  vars["まつぴよ-p"] = "公式メンバ〜「まつぴよ」";
  return (
    <>
      <span hidden data-page-body="page_msotieex1e" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"sort-array\",\"array\":\"_1\",\"field\":\"publicId\",\"dir\":\"asc\"}]}]"} />
      <section className="el-366">
        <div className="el-367">
          <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"show\",\"target\":\"memu-p\"}]}]"} className="el-368">
            <span
              className="crisp-svg pasted-artwork-svg-50"
            >
              <svg aria-hidden="true" width={230} height={142} viewBox="0 0 230 142" />
              <Image
                src="/assets/pasted-artwork-218.svg"
                alt=""
                width={460}
                height={284}
              />
            </span>
          </div>
          <div id="memu-p" data-toggle-show="flex" className="el-369">
            <div data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"wait\",\"seconds\":0.5},{\"kind\":\"hide\",\"target\":\"memu-p\"}]}]"} className="el-370">
              <span
                className="crisp-svg svg-209"
              >
                <svg aria-hidden="true" width={43} height={31} viewBox="0 0 43 31" />
                <Image
                  src="/assets/pasted-artwork-155.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
            </div>
            <p id="松ヶ崎祭について" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"mf-phone\"}]}]"} className="el-371">
              {"松ヶ崎祭について"}
            </p>
            <p id="企画さがし" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"kikaku-phone\"}]}]"} className="el-372">
              {"企画さがし"}
            </p>
            <p id="ご案内" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"goannai-phone\"}]}]"} className="el-373">
              {"ご案内"}
            </p>
            <p id="公式特集" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"toggle\",\"target\":\"koushiki-phone\"}]}]"} className="el-374">
              {"公式特集"}
            </p>
            <div id="mf-phone" data-toggle-show="flex" className="el-375">
              <Link href="/about" id="松ヶ崎祭とは-p" className="button-92">
                {"松ヶ崎祭とは"}
              </Link>
              <Link href="/theme" id="mf56-p" className="button-93">
                {"mf56メインテ〜マ"}
              </Link>
              <Link href="/sponsor" id="協賛-p" className="button-94">
                {"ご協賛いただいた皆さま"}
              </Link>
              <Link href="/notice" id="お知らせ-p" className="button-95">
                {"お知らせ"}
              </Link>
            </div>
            <div id="kikaku-phone" data-toggle-show="flex" className="el-376">
              <Link href="/search" id="言葉-p" className="button-96">
                {"言葉からさがす"}
              </Link>
              <Link href="/schedule/0" id="日程表-p" className="button-97">
                {"日程表からさがす"}
              </Link>
              <a href="/navigation" id="地図-p" className="button-98">
                {"地図からさがす"}
              </a>
              <Link href="/mypage" id="しおり-p" className="button-99">
                {"きみのしおり\n"}
              </Link>
            </div>
            <div id="goannai-phone" data-toggle-show="flex" className="el-377">
              <Link href="/attention" id="ご来場の-p" className="button-100">
                {"ご来場の皆さまへ"}
              </Link>
              <Link href="/access" id="行き方-p" className="button-101">
                {"行き方・会場地図"}
              </Link>
              <Link href="/comingsoon" id="アンケ〜ト-p" className="button-102">
                {"来場者アンケ〜ト"}
              </Link>
              <Link href="/comingsoon" id="ご質問-p" className="button-103">
                {"よくあるご質問"}
              </Link>
              <Link href="/links" id="相互リンク-p" className="button-104">
                {"相互リンク"}
              </Link>
            </div>
            <div id="koushiki-phone" data-toggle-show="flex" className="el-378">
              <Link href="/committee" id="委員会企画-p" className="button-105">
                {"委員会企画"}
              </Link>
              <Link href="/m-1" id="m-1-p" className="button-106">
                {"m-1グランプリ"}
              </Link>
              <Link href="/comingsoon" id="まつぴよ-p" className="button-107">
                {"公式メンバ〜「まつぴよ」"}
              </Link>
            </div>
          </div>
          <Image data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/\"}]}]"}
            src="/assets/pasted-artwork-219.svg"
            alt=""
            width={213}
            height={213}
            className="el-379"
          />
          <div className="el-380">
            <div id="matsufes" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu1\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu1\"}],\"keep\":true}]"} className="el-381" data-p="">
              <span
                className="crisp-svg svg-210"
              >
                <svg aria-hidden="true" width={244} height={55} viewBox="0 0 244 55" />
                <Image
                  src="/assets/pasted-artwork-25.svg"
                  alt=""
                  width={488}
                  height={110}
                />
              </span>
              <div id="menu1" data-toggle-show="flex" data-inview className="el-382">
                <Link href="/about" className="el-383">
                  {"松ヶ崎祭とは"}
                </Link>
                <Link href="/theme" className="mf56-7">
                  {"mf56メインテ〜マ"}
                </Link>
                <Link href="/sponsor" className="el-384">
                  {"ご協賛いただいた皆さま"}
                </Link>
                <Link href="/notice" className="el-385">
                  {"お知らせ"}
                </Link>
              </div>
            </div>
            <div id="kikaku" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu2\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu2\"}],\"keep\":true}]"} className="el-386" data-p="">
              <span
                className="crisp-svg svg-211"
              >
                <svg aria-hidden="true" width={153} height={55} viewBox="0 0 153 55" />
                <Image
                  src="/assets/pasted-artwork-26.svg"
                  alt=""
                  width={306}
                  height={110}
                />
              </span>
              <div id="menu2" data-toggle-show="flex" data-inview className="el-387">
                <Link href="/search" className="el-388">
                  {"言葉からさがす"}
                </Link>
                <Link href="/schedule/0" className="el-389">
                  {"日程表からさがす"}
                </Link>
                <a href="/navigation" className="el-390">
                  {"地図からさがす"}
                </a>
                <Link href="/mypage" className="el-391">
                  {"きみのしおり"}
                </Link>
              </div>
            </div>
            <div id="goannai" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu3\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu3\"}],\"keep\":true}]"} className="el-392" data-p="">
              <span
                className="crisp-svg svg-212"
              >
                <svg aria-hidden="true" width={93} height={61} viewBox="0 0 93 61" />
                <Image
                  src="/assets/pasted-artwork-27.svg"
                  alt=""
                  width={186}
                  height={122}
                />
              </span>
              <div id="menu3" data-toggle-show="flex" data-inview className="el-393">
                <Link href="/attention" className="el-394">
                  {"ご来場の皆さまへ"}
                </Link>
                <Link href="/access" className="el-395">
                  {"行き方・会場地図"}
                </Link>
                <Link href="/comingsoon" className="el-396">
                  {"来場者アンケ〜ト"}
                </Link>
                <Link href="/comingsoon" className="el-397">
                  {"よくあるご質問"}
                </Link>
                <Link href="/links" className="el-398">
                  {"相互リンク"}
                </Link>
              </div>
            </div>
            <div id="kousiki" data-scripts={"[{\"trigger\":\"hover-start\",\"steps\":[{\"kind\":\"show\",\"target\":\"menu4\"}]},{\"trigger\":\"hover-end\",\"steps\":[{\"kind\":\"hide\",\"target\":\"menu4\"}],\"keep\":true}]"} className="el-399" data-p="">
              <span
                className="crisp-svg svg-213"
              >
                <svg aria-hidden="true" width={127} height={58} viewBox="0 0 127 58" />
                <Image
                  src="/assets/pasted-artwork-28.svg"
                  alt=""
                  width={254}
                  height={116}
                />
              </span>
              <div id="menu4" data-toggle-show="flex" data-inview className="el-400">
                <Link href="/committee" className="el-401">
                  {"委員会企画"}
                </Link>
                <Link href="/m-1" className="m-1-10">
                  {"m-1グランプリ"}
                </Link>
                <Link href="/comingsoon" className="el-402">
                  {"公式メンバ〜「まつぴよ」"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/image-6.svg"
          alt=""
          width={1920}
          height={583}
          className="el-403"
        />
      </section>
      <p className="el-5">
        <span
          className="crisp-svg svg"
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
      <section className="el-29">
        <Image
          src="/assets/pasted-artwork-99.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-12"
        />
      </section>
      <p className="el-127">
        {"松ヶ崎祭には　企画がいっぱい。\n気になる言葉から　きみにぴったりの企画を見つけてね。"}
      </p>
      <section className="box-195">
        <input id="field" data-scripts={JSON.stringify([{"trigger":"change","steps":[{"kind":"filter-array","array":"_1","no":1,"conds":[{"field":"name","op":"contains","value":""},{"field":"exhibitorName","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })},{"field":"tags","op":"contains","value":interpolate("{field}", { ...vars, ...{"field":"{field}","\u0000keepEscapes":true} })}]}]}])} type="text" className="input-2" name="field" placeholder="ここに　言葉を　入力してみてね" />
      </section>
      <section className="box-213">
        <div className="box-212">
          <div className="el-7">
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
          <div className="el-6">
            <Image
              src="/assets/pasted-artwork-5.svg"
              alt=""
              width={137}
              height={49}
              className="el-10"
            />
            <Image
              src="/assets/pasted-artwork-6.svg"
              alt=""
              width={137}
              height={49}
              className="el-11"
            />
            <Image
              src="/assets/pasted-artwork-7.svg"
              alt=""
              width={137}
              height={49}
              className="el-12"
            />
          </div>
          <div className="el-31">
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
          <div className="el-8">
            <Image
              src="/assets/pasted-artwork-9.svg"
              alt=""
              width={137}
              height={49}
              className="el-14"
            />
            <Image
              src="/assets/pasted-artwork-8.svg"
              alt=""
              width={137}
              height={49}
              className="el-13"
            />
            <Image
              src="/assets/pasted-artwork-10.svg"
              alt=""
              width={137}
              height={49}
              className="el-15"
            />
          </div>
          <div className="el-32">
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
          <div className="el-9">
            <div className="box-6">
              <Image
                src="/assets/pasted-artwork-11.svg"
                alt=""
                width={138}
                height={49}
                className="el-16"
              />
              <Image
                src="/assets/pasted-artwork-12.svg"
                alt=""
                width={137}
                height={49}
                className="el-17"
              />
              <Image
                src="/assets/pasted-artwork-13.svg"
                alt=""
                width={137}
                height={49}
                className="el-18"
              />
              <Image
                src="/assets/pasted-artwork-14.svg"
                alt=""
                width={137}
                height={49}
                className="el-19"
              />
            </div>
            <div className="box-7">
              <Image
                src="/assets/pasted-artwork-15.svg"
                alt=""
                width={138}
                height={49}
                className="el-20"
              />
              <Image
                src="/assets/pasted-artwork-16.svg"
                alt=""
                width={138}
                height={49}
                className="el-21"
              />
              <Image
                src="/assets/pasted-artwork-17.svg"
                alt=""
                width={137}
                height={49}
                className="el-22"
              />
              <Image
                src="/assets/pasted-artwork-18.svg"
                alt=""
                width={137}
                height={49}
                className="el-23"
              />
            </div>
          </div>
          <div className="box-8">
            <Image
              src="/assets/pasted-artwork-23.svg"
              alt=""
              width={179}
              height={49}
              className="el-24"
            />
          </div>
          <div className="box-127">
            <span id="m-1" data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/m-1\"}]}]"}
              className="crisp-svg svg-133"
            >
              <svg aria-hidden="true" width={343} height={178} viewBox="0 0 343 178" />
              <Image
                src="/assets/pasted-artwork-170.svg"
                alt=""
                width={686}
                height={356}
              />
            </span>
          </div>
        </div>
        <div className="box-214">
          <div data-array="_1" className="icon-3">
            {toItems(lookupVar(vars, "_1")).map((item, i) => {
              const iv0 = { ...vars, ...item };
              return (
                <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": item["name"], "exhibitorName": item["exhibitorName"], "tags": item["tags"], "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": item["searchWords"], "businessHours": item["businessHours"], "venue": item["venue"], "place": item["place"], "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "categories.大分類": lookupVar(item, "categories.大分類"), "publicId": item["publicId"] })}>
                  <div className="icon">
                    <span
                      className="crisp-svg el-95"
                    >
                      <svg aria-hidden="true" width={429} height={280} viewBox="0 0 429 280" />
                      <Image
                        src="/assets/pasted-artwork-181.svg"
                        alt=""
                        width={858}
                        height={560}
                      />
                    </span>
                    <p className="box-140">
                      {interpolate("{exhibitorName}{", iv0)}
                    </p>
                    <p className="box-141">
                      {interpolate("{groupName}", iv0)}
                    </p>
                    <Image
                      src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                      alt=""
                      width={1024}
                      height={1024}
                      className="svg-137"
                    />
                    <Image
                      src="/assets/pasted-artwork-185.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="svg-141"
                    />
                    <Image
                      src="/assets/pasted-artwork-186.svg"
                      alt=""
                      width={13}
                      height={20}
                      className="svg-142"
                    />
                    <p className="box-143">
                      {interpolate("{customAnswers.皆さまへ}", iv0)}
                    </p>
                    <p className="box-144">
                      {interpolate("{exhibitNo}", iv0)}
                    </p>
                    <Image
                      src="/assets/pasted-artwork-189.svg"
                      alt=""
                      width={35}
                      height={34}
                      className="svg-143"
                    />
                    <Image
                      src="/assets/pasted-artwork-199.svg"
                      alt=""
                      width={533}
                      height={16}
                      className="svg-144"
                    />
                    <p className="box-147">
                      {"m-1カテゴリ"}
                    </p>
                    <p className="box-148">
                      {interpolate("{customAnswers.中分類}", iv0)}
                    </p>
                    <p className="box-149">
                      {interpolate("{type}", iv0)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section data-inview className="footer-5">
        <span
          className="crisp-svg pasted-artwork-svg-80"
        >
          <svg aria-hidden="true" width={1920} height={1015} viewBox="0 0 1920 1015" />
          <Image
            src="/assets/pasted-artwork-46.svg"
            alt=""
            width={3840}
            height={2030}
          />
        </span>
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1734">
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={58}
            height={58}
            className="svg-256"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-8">
          <Image
            src="/assets/pasted-artwork-160.svg"
            alt=""
            width={54}
            height={49}
            className="svg-257"
          />
        </a>
      </section>
      <section data-inview className="el-1818">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-1819">
          <Image
            src="/assets/pasted-artwork-159.svg"
            alt=""
            width={58}
            height={58}
            className="svg-294"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-23">
          <Image
            src="/assets/pasted-artwork-160.svg"
            alt=""
            width={54}
            height={49}
            className="svg-295"
          />
        </a>
        <Image
          src="/assets/pasted-artwork-243.svg"
          alt=""
          width={375}
          height={347}
          className="svg-296"
        />
      </section>
    </>
  );
}
