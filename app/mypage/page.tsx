import type { Metadata } from "next";
import { fetchPublic, readTextLimited } from "@/lib/safe-fetch";
import { cache } from "react";
import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { safeNavigationUrl, interpolate, interpolateUrl, lookupVar } from "@/lib/vars";
import Header from "@/components/Header";

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
  if (!v || typeof v !== "object") return [];
  return Object.values(v).map((x): Item =>
    x && typeof x === "object" && !Array.isArray(x) ? x as Item : { ["値"]: x }
  );
}

export const metadata: Metadata = {
  title: "マイページ",
  description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
  openGraph: {
    siteName: "第56回松ヶ崎祭",
    title: "マイページ",
    description: "松ヶ崎祭HPにてブックマークした出展などを確認できます。",
    images: ["/assets/ogp-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default async function Page() {
  const vars: Vars = Object.create(null);
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
      <span hidden data-page-body="page_mvhxphej2d8ldu" data-scripts={"[{\"trigger\":\"load\",\"steps\":[{\"kind\":\"store-load\",\"key\":\"mf_bookmarks\",\"into\":\"_4\",\"shared\":true},{\"kind\":\"transform\",\"source\":\"_4\",\"into\":\"_5\",\"transform\":{\"kind\":\"split\",\"separator\":\".\"}},{\"kind\":\"list-display\",\"mode\":\"filter\",\"array\":\"_1\",\"no\":1,\"conds\":[{\"field\":\"publicId\",\"op\":\"in\",\"value\":{\"inputRef\":\"_4\"}}]}]}]"} />
      <Header />
      <Image data-inview
        src="/assets/clouds.webp"
        alt=""
        width={1600}
        height={543}
        className="el-2617"
      />
      <p className="box-673">
        <span
          className="crisp-svg svg-299"
          style={{ ["--crisp-svg-width"]: "644px", ["--crisp-svg-ratio"]: "644 / 96" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={644} height={96} viewBox="0 0 644 96" />
          <Image
            src="/assets/pasted-artwork-37.svg"
            alt=""
            width={1288}
            height={192}
          />
        </span>
      </p>
      <section className="box-674">
        <Image
          src="/assets/pasted-artwork-78.svg"
          alt=""
          width={1246}
          height={34}
          className="pasted-artwork-svg-89"
        />
        <Image
          src="/assets/pasted-artwork-219.svg"
          alt=""
          width={941}
          height={78}
          className="el-1781"
        />
      </section>
      <p className="box-675">
        {"きみ専用の　ページだよ。\nお気に入りの企画を見たり　m-1グランプリに投票したりできるよ。"}
      </p>
      <section className="box-678">
        <div className="box-676">
          <span
            className="crisp-svg svg-300"
            style={{ ["--crisp-svg-width"]: "306px", ["--crisp-svg-ratio"]: "306 / 236" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={306} height={236} viewBox="0 0 306 236" />
            <Image
              src="/assets/pasted-artwork-41.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
          <span
            className="crisp-svg svg-302"
            style={{ ["--crisp-svg-width"]: "306px", ["--crisp-svg-ratio"]: "306 / 236" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={306} height={236} viewBox="0 0 306 236" />
            <Image
              src="/assets/pasted-artwork-220.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
        </div>
        <div className="box-677">
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-page\",\"href\":\"/mypage/m-1\"}]}]"}
            className="crisp-svg m-1-10"
            style={{ ["--crisp-svg-width"]: "306px", ["--crisp-svg-ratio"]: "306 / 236" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={306} height={236} viewBox="0 0 306 236" />
            <Image
              src="/assets/pasted-artwork-42.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
          <span data-scripts={"[{\"trigger\":\"click\",\"steps\":[{\"kind\":\"open-url\",\"url\":\"https://vote.matsufes.info/\"}]}]"}
            className="crisp-svg el-1782"
            style={{ ["--crisp-svg-width"]: "306px", ["--crisp-svg-ratio"]: "306 / 236" } as import("react").CSSProperties}
          >
            <svg aria-hidden="true" width={306} height={236} viewBox="0 0 306 236" />
            <Image
              src="/assets/pasted-artwork-221.svg"
              alt=""
              width={612}
              height={472}
            />
          </span>
        </div>
      </section>
      <section className="box-679">
        <span
          className="crisp-svg svg-301"
          style={{ ["--crisp-svg-width"]: "1420px", ["--crisp-svg-ratio"]: "1420 / 70" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1420} height={70} viewBox="0 0 1420 70" />
          <Image
            src="/assets/pasted-artwork-38.svg"
            alt=""
            width={2840}
            height={140}
          />
        </span>
        <span
          className="crisp-svg svg-303"
          style={{ ["--crisp-svg-width"]: "1420px", ["--crisp-svg-ratio"]: "1420 / 70" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={1420} height={70} viewBox="0 0 1420 70" />
          <Image
            src="/assets/pasted-artwork-222.svg"
            alt=""
            width={2840}
            height={140}
          />
        </span>
      </section>
      <Image data-inview
        src="/assets/image-3.svg"
        alt=""
        width={1920}
        height={713}
        className="image-18"
      />
      <section className="box-1172">
        <a href="https://map.matsufes.info/?bookmarks=1" className="box-1173">
          <div className="box-1174">
            <div className="box-1175">
              <p className="text-799">
                {"地図で確認する"}
              </p>
            </div>
          </div>
          <Image
            src="/assets/pasted-artwork-215.svg"
            alt=""
            width={411}
            height={110}
            className="svg-713"
          />
        </a>
      </section>
      <section className="box-1176">
        <div data-array="_1" className="el-2611">
          {toItems(lookupVar(vars, "_1")).map((item, i) => {
            const iv0 = { ...vars, ...item };
            return (
              <div key={i} style={{ display: "contents" }} data-row data-item={JSON.stringify({ "name": (Object.prototype.hasOwnProperty.call(item, "name") ? item["name"] : undefined), "exhibitorName": (Object.prototype.hasOwnProperty.call(item, "exhibitorName") ? item["exhibitorName"] : undefined), "tags": (Object.prototype.hasOwnProperty.call(item, "tags") ? item["tags"] : undefined), "customAnswers.中分類": lookupVar(item, "customAnswers.中分類"), "searchWords": (Object.prototype.hasOwnProperty.call(item, "searchWords") ? item["searchWords"] : undefined), "place": (Object.prototype.hasOwnProperty.call(item, "place") ? item["place"] : undefined), "categories.出展カテゴリ": lookupVar(item, "categories.出展カテゴリ"), "businessHours": (Object.prototype.hasOwnProperty.call(item, "businessHours") ? item["businessHours"] : undefined), "venue": (Object.prototype.hasOwnProperty.call(item, "venue") ? item["venue"] : undefined), "categories.大分類": lookupVar(item, "categories.大分類"), "exhibitNo": (Object.prototype.hasOwnProperty.call(item, "exhibitNo") ? item["exhibitNo"] : undefined), "publicId": (Object.prototype.hasOwnProperty.call(item, "publicId") ? item["publicId"] : undefined) })}>
                <SmartLink href={safeNavigationUrl(interpolateUrl("/booth/{publicId}", iv0))} className="el-2612">
                  <div className="box-1160">
                    <p className="text-791">
                      {interpolate("{name}", iv0)}
                    </p>
                    <div data-scripts={JSON.stringify([{"trigger":"click","steps":[{"kind":"if","cond":{"subject":"var","target":"","left":{"inputRef":"_5"},"op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},"then":[{"kind":"remove-list-item","list":"_5","mode":"value","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}],"else":[{"kind":"set-list-item","list":"_5","key":"","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null}},{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}]},{"kind":"transform","source":"_5","into":"_4","transform":{"kind":"join","separator":"."}},{"kind":"store-save","key":"mf_bookmarks","value":interpolate("{_4}", { ...iv0, ...{"_4":"{_4}","\u0000keepEscapes":true} }),"shared":true}]},{"trigger":"load","steps":[{"kind":"if","cond":{"subject":"var","target":"","op":"contains","value":{"inputRef":"publicId","raw":lookupVar(iv0, "publicId") ?? null},"left":{"inputRef":"_5"}},"then":[{"kind":"show","target":"fav-on"},{"kind":"hide","target":"fav-off"}],"else":[{"kind":"show","target":"fav-off"},{"kind":"hide","target":"fav-on"}]}]}])} className="el-2613">
                      <Image id="fav-on" data-toggle-show="block"
                        src="/assets/pasted-artwork-459.svg"
                        alt="お気に入り登録済"
                        width={140}
                        height={136}
                        className="bkonn-svg-5"
                        preload
                        fetchPriority="high"
                      />
                      <Image id="fav-off" data-toggle-show="block"
                        src="/assets/pasted-artwork-460.svg"
                        alt="お気に入り未登録"
                        width={140}
                        height={136}
                        className="bkoff2-svg-5"
                      />
                    </div>
                  </div>
                  <span
                    className="crisp-svg el-2614"
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
                  <p className="text-792">
                    {interpolate("{exhibitorName}", iv0)}
                  </p>
                  <div className="box-1161">
                    <div className="box-1162">
                      <div className="box-1163">
                        <Image
                          src={interpolate("{imageUrl}", iv0) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                          alt=""
                          width={1024}
                          height={1024}
                          className="image-23"
                        />
                        <p className="text-793">
                          {"No Image"}
                        </p>
                      </div>
                    </div>
                    <div className="box-1164">
                      <div className="box-1165">
                        <Image
                          src="/assets/pasted-artwork-378.svg"
                          alt=""
                          width={60}
                          height={60}
                          className="el-2615"
                        />
                        <p className="text-794">
                          {interpolate("{customAnswers.皆さまへ}", iv0)}
                        </p>
                      </div>
                      <div className="box-1166">
                        <Image
                          src="/assets/pasted-artwork-379.svg"
                          alt=""
                          width={49}
                          height={79}
                          className="el-2616"
                        />
                        <p className="text-795">
                          {interpolate("{location}", iv0)}
                        </p>
                      </div>
                      <div className="box-1167">
                        <div className="box-1168">
                          <p className="text-796">
                            {interpolate("{categories.投票カテゴリ.0}", iv0)}
                          </p>
                        </div>
                      </div>
                      <div className="box-1169">
                        <div className="box-1170">
                          <p className="text-797">
                            {interpolate("{categories.大分類.0}", iv0)}
                          </p>
                        </div>
                        <div className="box-1171">
                          <p className="text-798">
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
                    className="frame-png-6"
                  />
                </SmartLink>
              </div>
            );
          })}
        </div>
      </section>
      <section data-inview className="el-2025">
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2026">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="pasted-artwork-svg-124"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-65">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="pasted-artwork-svg-125"
          />
        </a>
        <span
          className="crisp-svg svg-420"
          style={{ ["--crisp-svg-width"]: "375px", ["--crisp-svg-ratio"]: "375 / 350" } as import("react").CSSProperties}
        >
          <svg aria-hidden="true" width={375} height={350} viewBox="0 0 375 350" />
          <Image
            src="/assets/pasted-artwork-277.svg"
            alt=""
            width={750}
            height={700}
          />
        </span>
      </section>
      <section data-inview className="footer-32">
        <span
          className="crisp-svg svg-421"
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
        <a href="https://www.instagram.com/kit_matsufes/" className="el-2027">
          <Image
            src="/assets/pasted-artwork-275.svg"
            alt=""
            width={58}
            height={58}
            className="svg-422"
          />
        </a>
        <a href="https://x.com/matsufes_info" className="x-66">
          <Image
            src="/assets/pasted-artwork-276.svg"
            alt=""
            width={54}
            height={49}
            className="svg-423"
          />
        </a>
      </section>
    </>
  );
}
