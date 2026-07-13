import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
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

async function getData0(vars: Vars): Promise<Item | null> {
  const json = await fetchJson(interpolateUrl("https://dummyjson.com/products/{slug}", vars));
  if (json == null) return null;
  const target = json;
  if (Array.isArray(target)) return (target[0] as Item) ?? null;
  return target && typeof target === "object" ? (target as Item) : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getData0({ slug });
  if (data) return { title: String(data["title"] ?? "") };
  return { title: "商品詳細" };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const vars: Vars = {};
  const { slug } = await params;
  vars.slug = slug;
  const sp = await searchParams;
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === "string") vars[k] = v;
  }
  const data0 = await getData0(vars);
  if (!data0) notFound();
  return (
    <>
      {(() => {
        const dvars0 = { ...vars, ...(data0 ?? {}) };
        return (
          <section className="el-11">
            <Image
              src={interpolate("{thumbnail}", dvars0) || "data:image/gif;base64,R0lGODlhAQABAAAAACw="}
              alt="商品画像"
              width={400}
              height={400}
              className="el-5"
            />
            <div className="el-10">
              <p className="el-7">
                {interpolate("{brand}", dvars0)}
              </p>
              <h1 className="el-6">
                {interpolate("{title}", dvars0)}
              </h1>
              <h3 className="el-9">
                {interpolate("¥{price}", dvars0)}
              </h3>
              <p className="el-8">
                {interpolate("{description}", dvars0)}
              </p>
            </div>
          </section>
        );
      })()}
    </>
  );
}
