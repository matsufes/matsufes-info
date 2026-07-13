import type { Metadata } from "next";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { interpolate, interpolateUrl } from "@/lib/vars";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

type Item = Record<string, unknown>;
type Vars = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchJson(url: string): Promise<any> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

async function getItems0(vars: Vars): Promise<Item[]> {
  const json = await fetchJson(interpolateUrl("https://dummyjson.com/products/search?q={q}", vars));
  const items = json?.["products"];
  return Array.isArray(items) ? (items as Item[]) : [];
}

export const metadata: Metadata = {
  title: "商品一覧",
  description: "dummyjson.comのデータで動くサンプルページ",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const vars: Vars = {};
  const sp = await searchParams;
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === "string") vars[k] = v;
  }
  let items0 = await getItems0(vars);
  items0 = items0.slice(0, 12);
  return (
    <>
      <section className="el-20">
        <h1 className="el-12">
          {"商品カタログ"}
        </h1>
        <p className="text-10">
          {"dummyjson.com のデータで動く一覧・検索・詳細ページのサンプルです。"}
        </p>
        <SearchForm className="el-14">
          <input id="q" type="text" className="input" name="q" placeholder="商品を検索…" />
          <button type="submit" className="el-13">
            {"検索"}
          </button>
        </SearchForm>
        <div className="el-19">
          {items0.map((item, i) => {
            const iv0 = { ...vars, ...item };
            return (
              <div key={i} style={{ display: "contents" }}>
                <a href={interpolateUrl("/products/{id}", iv0)} className="el-18">
                  <Image
                    src={interpolate("{thumbnail}", iv0) || "data:image/gif;base64,R0lGODlhAQABAAAAACw="}
                    alt="商品サムネイル"
                    width={400}
                    height={400}
                    className="el-15"
                  />
                  <h3 className="el-16">
                    {interpolate("{title}", iv0)}
                  </h3>
                  <p className="el-17">
                    {interpolate("¥{price}", iv0)}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
