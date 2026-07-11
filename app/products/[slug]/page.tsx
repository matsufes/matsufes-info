import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

// JSONを毎リクエスト取得し、常に最新の内容を配信する
export const dynamic = "force-dynamic";

type Item = Record<string, unknown>;

async function getItems(): Promise<Item[]> {
  const res = await fetch("https://dummyjson.com/products/search", { cache: "no-store" });
  if (!res.ok) throw new Error("データの取得に失敗しました");
  const json = await res.json();
  const items = json?.["products"];
  return Array.isArray(items) ? items : [];
}

async function getItem(slug: string): Promise<Item | null> {
  const items = await getItems();
  return (
    items.find(
      (item) => encodeURIComponent(String(item["id"] ?? "")) === slug
    ) ?? null
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getItem(slug);
  if (!item) return { title: "商品詳細" };
  return { title: String(item["title"] ?? "") };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getItem(slug);
  if (!item) notFound();
  return (
    <>
      <section className="el-6">
        <Image
          src={String(item["thumbnail"] ?? "")}
          alt="商品画像"
          width={300}
          height={300}
          className="el-2"
        />
        <div className="el-5">
          <p className="text-9">
            {String(item["brand"] ?? "")}
          </p>
          <h1 className="el-3">
            {String(item["title"] ?? "")}
          </h1>
          <h3 className="el-4">
            {String(item["price"] ?? "")}
          </h3>
          <p className="text-10">
            {String(item["description"] ?? "")}
          </p>
        </div>
      </section>
    </>
  );
}
