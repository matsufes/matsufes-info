import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/** Next.js のページではないURL（リダイレクト・外部サイトの中継・HTMLページ） */
const HARD_NAV: RegExp[] = [new RegExp("^/navigation/?(?:[?#].*)?$"), new RegExp("^/booth/?(?:[?#].*)?$"), new RegExp("^/search/[^/]+/?(?:[?#].*)?$")];

/**
 * サイト内のページ（/〜）は Link でページ遷移を速くし、外部URLや Next.js のページではないURLは
 * 通常のリンクにする（Link の先読みが別ドメインへ転送されると失敗するため）
 */
export default function SmartLink({ href, ...rest }: Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string }) {
  const internal = /^\/(?!\/)/.test(href) && !HARD_NAV.some((re) => re.test(href));
  return internal ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
}
