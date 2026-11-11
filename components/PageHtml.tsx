"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function PageHtml({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // ハイドレーション中だけ true（サーバーのHTMLをそのまま使う = 中のスクリプトはもう動いた）
  const hydrating = useSyncExternalStore(subscribe, () => false, () => true);
  // サーバーで動いたHTMLだけを飛ばす。同じコンポーネントで別のHTMLに変われば動かす。
  const serverHtml = useRef(hydrating ? html : null);

  useEffect(() => {
    const box = ref.current;
    if (!box || serverHtml.current === html) return;
    serverHtml.current = null;
    let cancelled = false;
    (async () => {
      for (const old of Array.from(box.querySelectorAll("script"))) {
        if (cancelled) return;
        const script = document.createElement("script");
        for (const a of Array.from(old.attributes)) script.setAttribute(a.name, a.value);
        script.text = old.text;
        // 外部のスクリプトは読み込み終わってから次へ進み、書いた順に動かす
        const loaded = script.src
          ? new Promise((done) => {
              script.onload = script.onerror = done;
            })
          : null;
        old.replaceWith(script);
        if (loaded) await loaded;
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [html]);

  return <div ref={ref} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
