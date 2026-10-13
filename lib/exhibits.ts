export const EXHIBITS_URL = "https://api.matsufes.info/data/web-info.json";

export type Exhibit = {
  exhibitKey: string;
  publicId: number;
  exhibitNo: string;
  name: string;
  groupName: string;
  exhibitorName: string;
  businessHours: string[];
  customAnswers: Record<string, string>;
  type: string;
  categories: Record<string, string[]>;
  description: string;
  tags: string[];
  snsX: string;
  snsInstagram: string;
  snsWeb: string;
  imageUrl: string;
  place: string;
  venue: string;
  updatedAt: string;
};

/** web-info.json の全出展を publicId 順で取得する（失敗時は空配列） */
export async function fetchExhibits(): Promise<Exhibit[]> {
  try {
    const res = await fetch(EXHIBITS_URL, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    const data: Exhibit[] = Array.isArray(json?.data) ? json.data : [];
    return data.sort((a, b) => a.publicId - b.publicId);
  } catch {
    return [];
  }
}

export async function fetchExhibit(slug: string): Promise<Exhibit | undefined> {
  const all = await fetchExhibits();
  return all.find((e) => String(e.publicId) === slug);
}

export function exhibitHref(e: Pick<Exhibit, "publicId">): string {
  return `/search/${e.publicId}`;
}

const WEEKDAY: Record<string, string> = { "11/13": "金", "11/14": "土", "11/15": "日" };

/** "11/14 10:00-20:30" → "11/14(土) 10:00〜20:30"。形式外の文字はそのまま返す */
export function formatHours(hours: string[]): string[] {
  return hours.map((h) => {
    const m = h.match(/^(\d{1,2}\/\d{1,2})\s+(.*)$/);
    if (!m) return h;
    const day = WEEKDAY[m[1]];
    return `${m[1]}${day ? `(${day})` : ""} ${m[2].replace(/-/g, "〜")}`;
  });
}

/** 営業時間に含まれる日付（"11/13" など）。"2026-11-14" 形式の記載にも対応 */
export function exhibitDays(e: Exhibit): string[] {
  const text = e.businessHours.join(" ");
  return Object.keys(WEEKDAY).filter((d) => {
    const [mo, da] = d.split("/");
    return text.includes(d) || text.includes(`2026-${mo}-${da}`);
  });
}

export function placeText(e: Exhibit): string {
  if (e.exhibitNo) return e.exhibitNo;
  return [e.venue, e.place].filter(Boolean).join(" ");
}

export type Spot = "屋内" | "屋外" | "ステージ";

/** 出展場所の区分。番号だけの venue は屋外テント */
export function exhibitSpots(e: Exhibit): Spot[] {
  const spots: Spot[] = [];
  if (e.type.includes("パフォーマンス") || e.venue === "メインステージ") spots.push("ステージ");
  if (/^\d+$/.test(e.venue) || e.venue === "メインステージ" || e.venue === "ストリートパフォーマンス" || e.venue === "門衛所") {
    spots.push("屋外");
  } else if (e.venue) {
    spots.push("屋内");
  }
  return spots;
}

/** 全角半角・大文字小文字・カタカナひらがなの違いを無視して比べるための正規化 */
export function normalize(s: string): string {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

/** 会場マップでこの企画を選んだ状態で開くURL（id = publicId） */
export function mapHref(e: Pick<Exhibit, "publicId">): string {
  return `https://map.matsufes.info/?id=${e.publicId}`;
}
