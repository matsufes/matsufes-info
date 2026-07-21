import type { Metadata } from "next";
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

async function getItems0(vars: Vars): Promise<Item[]> {
  const json = await fetchJson(interpolateUrl("https://dummyjson.com/products/search?q={q}", vars));
  const items = json?.["products"];
  return Array.isArray(items) ? (items as Item[]) : [];
}

export const metadata: Metadata = {
  title: "ホーム",
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
  return (
    <>
      <header id="navbar" className="navbar">
        <h6 className="logo">
          {"Site"}
        </h6>
        <div id="nav-links" data-toggle-show="flex" className="nav-links">
          <a href="#" className="text">
            {"ホーム"}
          </a>
          <a href="#" className="text-2">
            {"ブログ"}
          </a>
          <a href="#" className="text-3">
            {"お問い合わせ"}
          </a>
        </div>
        <span data-toggle-target="nav-links" data-toggle-trigger="click"
          className="el"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\" aria-hidden=\"true\"><path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path></svg>" }}
        />
      </header>
      <Image
        src="/assets/274664851.jpeg"
        alt=""
        width={400}
        height={400}
        className="image"
      />
      <section className="hero">
        <h1 className="el-2">
          {"あなたのサイトを、\nもっと自由に。ああああ"}
        </h1>
        <p className="text-4">
          {"ビジュアルエディタで作って、Next.jsとして書き出す。ロックインのないサイトビルダー。"}
        </p>
        <a href="#" className="button">
          {"はじめる"}
        </a>
        <div className="box-2" />
      </section>
      <section className="el-3">
        <div className="card">
          <h3 className="card-2">
            {"カード 1"}
          </h3>
          <p className="text-5">
            {"説明文をここに入力します。"}
          </p>
        </div>
        <div className="card-3">
          <h3 className="card-4">
            {"カード 2"}
          </h3>
          <p className="text-6">
            {"説明文をここに入力します。"}
          </p>
        </div>
        <div className="card-5">
          <h3 className="card-6">
            {"カード 3"}
          </h3>
          <p className="text-7">
            {"説明文をここに入力します。"}
          </p>
        </div>
        <div className="box" />
        <hr className="divider" />
        <input id="field" type="text" className="input-2" name="field" placeholder="入力してください" />
        <span
          className="icon"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/></svg>" }}
        />
      </section>
      <footer className="footer">
        <p className="text-8">
          {"© 2026 Your Site"}
        </p>
      </footer>
      <input id="field" type="text" className="input-3" name="field" placeholder="入力してください" />
      <textarea id="message" className="textarea" name="message" placeholder="ご自由にお書きください" />
      <select id="choice" className="select" name="choice">
        <option>選択してください</option>
        <option>選択肢A</option>
        <option>選択肢B</option>
      </select>
      <label id="agree" className="checkbox">
        <input type="checkbox" name="agree" />
        {"同意する"}
      </label>
      <label id="option" className="radio">
        <input type="radio" name="option" />
        {"選択肢A"}
      </label>
      <label id="option" className="radio-2">
        <input type="radio" name="option" />
        {"選択肢A"}
      </label>
      <input id="file" type="file" className="file" name="file" />
      <button type="submit" className="el-22">
        {"検索"}
      </button>
      <div className="el-23">
        {items0.map((item, i) => {
          const iv0 = { ...vars, ...item };
          return (
            <div key={i} style={{ display: "contents" }}>
              <div className="el-24">
                <h3 className="el-25">
                  {"タイトル"}
                </h3>
                <p className="text-11">
                  {"説明文"}
                </p>
              </div>
            </div>
          );
        })}
      </div>





      <div
        className="code-block"
        dangerouslySetInnerHTML={{ __html: "<p>HTMLを記述してください</p>" }}
      />
    </>
  );
}
