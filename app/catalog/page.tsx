import type { Metadata } from "next";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";

// リストのJSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "商品一覧",
  description: "dummyjson.comのデータで動くサンプルページ",
};

type Item = Record<string, unknown>;

async function getItems0(query: string): Promise<Item[]> {
  const url = "https://dummyjson.com/products/search" + (query ? "?" + query : "");
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    const items = json?.["products"];
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === "string" && v !== "") qs.set(k, v);
  }
  const query = qs.toString();
  let items0 = await getItems0(query);
  items0 = items0.slice(0, 12);
  return (
    <>
      <section className="el-14">
        <h1 className="el-7">
          {"商品カタログ"}
        </h1>
        <p className="text-11">
          {"dummyjson.com のデータで動く一覧・検索・詳細ページのサンプルです。"}
        </p>
        <SearchForm className="el-9">
          <input type="text" className="input" name="q" placeholder="商品を検索…" />
          <button type="submit" className="el-8">
            {"検索"}
          </button>
          <label className="checkbox">
            <input type="checkbox" name="agree" />
            {"同意する"}
          </label>
        </SearchForm>
        <div className="el-13">
          {items0.map((item, i) => (
            <a
              key={i}
              href={`/products/${encodeURIComponent(String(item["id"] ?? ""))}`}
              style={{ display: "contents", color: "inherit", textDecoration: "inherit" }}
            >
              <div className="el-12">
                <Image
                  src={String(item["thumbnail"] ?? "")}
                  alt="商品サムネイル"
                  width={300}
                  height={300}
                  className="el-10"
                />
                <h3 className="el-11">
                  {String(item["title"] ?? "")}
                </h3>
                <p className="text-12">
                  {String(item["price"] ?? "")}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
