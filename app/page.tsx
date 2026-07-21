import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <h1 className="el">
          {"あなたのサイトを、\nもっと自由に。"}
        </h1>
        <p className="text">
          {"ビジュアルエディタで作って、Next.jsとして書き出す。ロックインのないサイトビルダー。"}
        </p>
        <a href="#" className="button">
          {"はじめる"}
        </a>
      </section>
      <footer className="footer">
        <p className="text-5">
          {"© 2026 Your Site"}
        </p>
      </footer>
      <section className="card-grid">
        <div className="card">
          <h3 className="card-2">
            {"カード 1"}
          </h3>
          <p className="text-2">
            {"説明文をここに入力します。"}
          </p>
        </div>
        <div className="card-3">
          <h3 className="card-4">
            {"カード 2"}
          </h3>
          <p className="text-3">
            {"説明文をここに入力します。"}
          </p>
        </div>
        <div className="card-5">
          <h3 className="card-6">
            {"カード 3"}
          </h3>
          <p className="text-4">
            {"説明文をここに入力します。"}
          </p>
        </div>
      </section>
    </>
  );
}
