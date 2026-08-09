import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム",
};

export default function Page() {
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
      <section className="hero">
        <h1 className="el-2">
          {"あなたのサイトを、\nもっと自由に。"}
        </h1>
        <p className="text-4">
          {"ビジュアルエディタで作って、Next.jsとして書き出す。ロックインのないサイトビルダー。"}
        </p>
        <a href="#" className="button">
          {"はじめる"}
        </a>
      </section>
      <section className="card-grid">
        <div className="card">
          <h3 className="card-2">
            {"カード 1"}
          </h3>
          <p className="text-5">
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
        <div className="card-3">
          <h3 className="card-4">
            {"カード 2"}
          </h3>
          <p className="text-6">
            {"説明文をここに入力します。"}
          </p>
        </div>
      </section>
      <footer className="footer">
        <p className="text-8">
          {"© 2026 Your Site"}
        </p>
      </footer>
    </>
  );
}
