"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SearchForm({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  // URLの検索パラメータをフォームへ復元（直接アクセス・戻る/進む対応）
  useEffect(() => {
    const form = ref.current;
    if (!form) return;
    const restore = () => {
      const params = new URLSearchParams(window.location.search);
      for (const el of Array.from(form.elements)) {
        const input = el as HTMLInputElement;
        if (!input.name) continue;
        const v = params.get(input.name);
        if (input.type === "checkbox" || input.type === "radio") {
          input.checked = v !== null && (input.value === v || v === "on");
        } else if (v !== null) {
          input.value = v;
        }
      }
    };
    restore();
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);

  return (
    <form
      ref={ref}
      id={id}
      className={className}
      method="get"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const qs = new URLSearchParams();
        for (const [k, v] of data.entries()) {
          if (typeof v === "string" && v !== "") qs.set(k, v);
        }
        // ソフトナビゲーション: サーバー再取得で一覧だけが更新される
        router.replace(
          qs.toString() ? `?${qs.toString()}` : window.location.pathname,
          { scroll: false }
        );
      }}
    >
      {children}
    </form>
  );
}
