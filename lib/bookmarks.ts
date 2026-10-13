// 会場マップ（map.matsufes.info）と共有するお気に入りのクッキー。
// 他のサイトもこのクッキーを読むため、値の形式（公開IDを "." でつないだもの）は変えないこと
const COOKIE = "mf_bookmarks";
const MAX_AGE = 31536000;
const SHARED_DOMAIN = "matsufes.info";

export function readBookmarks(): number[] {
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1);
  if (!raw) return [];
  return decodeURIComponent(raw)
    .split(".")
    .map(Number)
    .filter((n) => Number.isInteger(n) && n > 0);
}

/** 書き込んだ直後に読み直し、保存できたかを返す */
export function writeBookmarks(ids: number[]): boolean {
  const value = [...new Set(ids)].join(".");
  const host = location.hostname;
  const attrs = [
    "Path=/",
    `Max-Age=${MAX_AGE}`,
    "SameSite=Lax",
    host === SHARED_DOMAIN || host.endsWith(`.${SHARED_DOMAIN}`) ? `Domain=${SHARED_DOMAIN}` : "",
    location.protocol === "https:" ? "Secure" : "",
  ].filter(Boolean);
  try {
    document.cookie = `${COOKIE}=${value}; ${attrs.join("; ")}`;
  } catch {
    return false;
  }
  return readBookmarks().join(".") === value;
}

export function bookmarksAvailable(): boolean {
  return typeof navigator !== "undefined" && navigator.cookieEnabled;
}
