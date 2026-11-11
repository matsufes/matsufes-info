import { NextResponse, type NextRequest } from "next/server";

// テストサイト: 検索エンジン等のクローラーを拒否する（エディタが自動生成）
const ROBOTS = "noindex, nofollow, noarchive, nosnippet, noimageindex";
const BLOCKED = new RegExp("bot|crawler|spider|slurp|facebookexternalhit|embedly|quora link preview|whatsapp|ia_archiver|mediapartners-google|adsbot|google-inspectiontool|googleother|google-extended|feedfetcher|headlesschrome", "i");

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  if (req.nextUrl.pathname !== "/robots.txt" && BLOCKED.test(ua)) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: { "X-Robots-Tag": ROBOTS, "Content-Type": "text/plain" },
    });
  }
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", ROBOTS);
  return res;
}

export const config = {
  matcher: "/:path*",
};
