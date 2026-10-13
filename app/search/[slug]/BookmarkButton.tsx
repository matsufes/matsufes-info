"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { bookmarksAvailable, readBookmarks, writeBookmarks } from "@/lib/bookmarks";

export default function BookmarkButton({ publicId }: { publicId: number }) {
  // サーバーではクッキーを読まないので、マウントするまでは未確定（null）
  const [saved, setSaved] = useState<boolean | null>(null);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (!bookmarksAvailable()) {
      setAvailable(false);
      return;
    }
    setSaved(readBookmarks().includes(publicId));
  }, [publicId]);

  if (!available) return null;

  const toggle = () => {
    const current = readBookmarks();
    const next = current.includes(publicId) ? current.filter((id) => id !== publicId) : [...current, publicId];
    // 保存できなかったときは表示を切り替えない
    if (writeBookmarks(next)) setSaved(next.includes(publicId));
  };

  return (
    <button
      type="button"
      className="el-960"
      onClick={toggle}
      aria-pressed={saved ?? false}
      disabled={saved === null}
      style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", color: "inherit" }}
    >
      <Image
        src="/assets/pasted-artwork-237.svg"
        alt=""
        width={209}
        height={204}
        className="svg-160"
        style={{ opacity: saved ? 1 : 0.5, transform: saved ? "scale(1.1)" : undefined, transition: "opacity .2s, transform .2s" }}
      />
      <p className="box-167">{saved ? "お気に入り済み" : "お気に入り"}</p>
    </button>
  );
}
